import { useState, useEffect, useRef } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Trash2, Copy, ImageIcon } from "lucide-react";

type SiteImage = {
  id: string;
  name: string;
  file_path: string;
  url: string;
  category: string;
  alt_text: string | null;
  created_at: string;
};

const CATEGORIES = ["geral", "equipamentos", "banners", "clientes", "servicos", "seo"];

const AdminImages = () => {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [filterCat, setFilterCat] = useState("todos");
  const [uploadDialog, setUploadDialog] = useState(false);
  const [uploadForm, setUploadForm] = useState({ category: "geral", alt_text: "" });
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchImages = async () => {
    setLoading(true);
    let q = supabase.from("site_images").select("*").order("created_at", { ascending: false });
    if (filterCat !== "todos") q = q.eq("category", filterCat);
    const { data } = await q;
    setImages((data as SiteImage[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchImages(); }, [filterCat]);

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file) { toast.error("Selecione um arquivo"); return; }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const filePath = `${uploadForm.category}/${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage.from("media").upload(filePath, file);
    if (uploadError) { toast.error(uploadError.message); setUploading(false); return; }

    const { data: urlData } = supabase.storage.from("media").getPublicUrl(filePath);

    const { error: dbError } = await supabase.from("site_images").insert({
      name: file.name,
      file_path: filePath,
      url: urlData.publicUrl,
      category: uploadForm.category,
      alt_text: uploadForm.alt_text || null,
    });

    setUploading(false);
    if (dbError) { toast.error(dbError.message); return; }

    toast.success("Imagem enviada!");
    setUploadDialog(false);
    setUploadForm({ category: "geral", alt_text: "" });
    if (fileRef.current) fileRef.current.value = "";
    fetchImages();
  };

  const handleDelete = async (img: SiteImage) => {
    if (!confirm(`Excluir "${img.name}"?`)) return;
    await supabase.storage.from("media").remove([img.file_path]);
    await supabase.from("site_images").delete().eq("id", img.id);
    toast.success("Imagem removida");
    fetchImages();
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copiada!");
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Imagens</h1>
          <p className="text-muted-foreground">Upload e gerenciamento de imagens do site</p>
        </div>
        <div className="flex gap-3">
          <Select value={filterCat} onValueChange={setFilterCat}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas</SelectItem>
              {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button onClick={() => setUploadDialog(true)}>
            <Upload className="w-4 h-4 mr-2" /> Upload
          </Button>
        </div>
      </div>

      <Dialog open={uploadDialog} onOpenChange={setUploadDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle>Upload de Imagem</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Arquivo</Label>
              <Input ref={fileRef} type="file" accept="image/*" />
            </div>
            <div className="space-y-2">
              <Label>Categoria</Label>
              <Select value={uploadForm.category} onValueChange={v => setUploadForm(f => ({ ...f, category: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Texto alternativo (SEO)</Label>
              <Input placeholder="Descrição da imagem..." value={uploadForm.alt_text} onChange={e => setUploadForm(f => ({ ...f, alt_text: e.target.value }))} />
            </div>
            <Button className="w-full" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Enviando..." : "Enviar Imagem"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {loading ? (
        <div className="text-center text-muted-foreground py-12">Carregando...</div>
      ) : images.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12 text-muted-foreground">
            <ImageIcon className="w-12 h-12 mb-3" />
            <p>Nenhuma imagem encontrada</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map(img => (
            <Card key={img.id} className="overflow-hidden group">
              <div className="aspect-square bg-muted relative">
                <img src={img.url} alt={img.alt_text ?? img.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="icon" variant="secondary" onClick={() => copyUrl(img.url)}>
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => handleDelete(img)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-2">
                <p className="text-xs font-medium truncate">{img.name}</p>
                <p className="text-xs text-muted-foreground">{img.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminImages;

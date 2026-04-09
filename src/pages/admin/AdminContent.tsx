import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

type ContentItem = {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: string | null;
  content_type: string;
  updated_at: string;
};

const AdminContent = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ContentItem | null>(null);
  const [form, setForm] = useState({ page: "", section: "", content_key: "", content_value: "", content_type: "text" });

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from("site_content").select("*").order("page").order("section");
    setItems((data as ContentItem[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async () => {
    if (!form.page || !form.section || !form.content_key) {
      toast.error("Preencha página, seção e chave");
      return;
    }

    if (editing) {
      const { error } = await supabase.from("site_content").update({
        page: form.page,
        section: form.section,
        content_key: form.content_key,
        content_value: form.content_value,
        content_type: form.content_type,
      }).eq("id", editing.id);
      if (error) { toast.error(error.message); return; }
      toast.success("Conteúdo atualizado!");
    } else {
      const { error } = await supabase.from("site_content").insert({
        page: form.page,
        section: form.section,
        content_key: form.content_key,
        content_value: form.content_value,
        content_type: form.content_type,
      });
      if (error) { toast.error(error.message); return; }
      toast.success("Conteúdo adicionado!");
    }

    setDialogOpen(false);
    setEditing(null);
    setForm({ page: "", section: "", content_key: "", content_value: "", content_type: "text" });
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir?")) return;
    await supabase.from("site_content").delete().eq("id", id);
    toast.success("Conteúdo removido");
    fetchItems();
  };

  const openEdit = (item: ContentItem) => {
    setEditing(item);
    setForm({
      page: item.page,
      section: item.section,
      content_key: item.content_key,
      content_value: item.content_value ?? "",
      content_type: item.content_type,
    });
    setDialogOpen(true);
  };

  const openNew = () => {
    setEditing(null);
    setForm({ page: "", section: "", content_key: "", content_value: "", content_type: "text" });
    setDialogOpen(true);
  };

  const filtered = items.filter(i =>
    `${i.page} ${i.section} ${i.content_key} ${i.content_value}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Conteúdo do Site</h1>
          <p className="text-muted-foreground">Gerencie textos e conteúdos das páginas</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}><Plus className="w-4 h-4 mr-2" /> Novo Conteúdo</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? "Editar Conteúdo" : "Novo Conteúdo"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Página</Label>
                  <Input placeholder="Ex: home, sobre" value={form.page} onChange={e => setForm(f => ({ ...f, page: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Seção</Label>
                  <Input placeholder="Ex: hero, servicos" value={form.section} onChange={e => setForm(f => ({ ...f, section: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Chave</Label>
                  <Input placeholder="Ex: titulo, descricao" value={form.content_key} onChange={e => setForm(f => ({ ...f, content_key: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Tipo</Label>
                  <Select value={form.content_type} onValueChange={v => setForm(f => ({ ...f, content_type: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Texto</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="number">Número</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Valor</Label>
                <Textarea rows={5} placeholder="Conteúdo..." value={form.content_value} onChange={e => setForm(f => ({ ...f, content_value: e.target.value }))} />
              </div>
              <Button className="w-full" onClick={handleSave}>Salvar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Buscar conteúdo..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Carregando...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">Nenhum conteúdo encontrado. Clique em "Novo Conteúdo" para começar.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Página</TableHead>
                  <TableHead>Seção</TableHead>
                  <TableHead>Chave</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="w-20">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(item => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.page}</TableCell>
                    <TableCell>{item.section}</TableCell>
                    <TableCell>{item.content_key}</TableCell>
                    <TableCell className="max-w-xs truncate">{item.content_value}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(item)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminContent;

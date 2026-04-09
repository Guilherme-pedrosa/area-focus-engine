import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Search, Globe, FileText } from "lucide-react";

type SeoPage = {
  id: string;
  slug: string;
  title: string;
  meta_description: string | null;
  keyword: string | null;
  status: string;
  volume: string | null;
  dificuldade: string | null;
  prioridade: string | null;
  intencao: string | null;
  categoria: string | null;
  content: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
};

const emptyForm = {
  slug: "", title: "", meta_description: "", keyword: "", status: "rascunho",
  volume: "", dificuldade: "", prioridade: "", intencao: "", categoria: "",
  content: "{}"
};

const AdminSeoPages = () => {
  const [pages, setPages] = useState<SeoPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<SeoPage | null>(null);
  const [form, setForm] = useState(emptyForm);

  const fetchPages = async () => {
    setLoading(true);
    const { data } = await supabase.from("seo_pages").select("*").order("created_at", { ascending: false });
    setPages((data as SeoPage[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPages(); }, []);

  const handleSave = async () => {
    if (!form.slug || !form.title) { toast.error("Slug e título são obrigatórios"); return; }

    let contentJson = null;
    try { if (form.content.trim()) contentJson = JSON.parse(form.content); } catch { toast.error("JSON inválido no conteúdo"); return; }

    const payload = {
      slug: form.slug,
      title: form.title,
      meta_description: form.meta_description || null,
      keyword: form.keyword || null,
      status: form.status,
      volume: form.volume || null,
      dificuldade: form.dificuldade || null,
      prioridade: form.prioridade || null,
      intencao: form.intencao || null,
      categoria: form.categoria || null,
      content: contentJson,
    };

    if (editing) {
      const { error } = await supabase.from("seo_pages").update(payload).eq("id", editing.id);
      if (error) { toast.error(error.message); return; }
      toast.success("Página atualizada!");
    } else {
      const { error } = await supabase.from("seo_pages").insert(payload);
      if (error) { toast.error(error.message); return; }
      toast.success("Página criada!");
    }

    setDialogOpen(false);
    setEditing(null);
    setForm(emptyForm);
    fetchPages();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir esta página SEO?")) return;
    await supabase.from("seo_pages").delete().eq("id", id);
    toast.success("Página removida");
    fetchPages();
  };

  const openEdit = (page: SeoPage) => {
    setEditing(page);
    setForm({
      slug: page.slug,
      title: page.title,
      meta_description: page.meta_description ?? "",
      keyword: page.keyword ?? "",
      status: page.status,
      volume: page.volume ?? "",
      dificuldade: page.dificuldade ?? "",
      prioridade: page.prioridade ?? "",
      intencao: page.intencao ?? "",
      categoria: page.categoria ?? "",
      content: page.content ? JSON.stringify(page.content, null, 2) : "{}",
    });
    setDialogOpen(true);
  };

  const statusBadge = (s: string) => {
    const map: Record<string, string> = { publicada: "bg-green-100 text-green-800", rascunho: "bg-yellow-100 text-yellow-800", arquivada: "bg-gray-100 text-gray-800" };
    return <Badge className={map[s] ?? ""}>{s}</Badge>;
  };

  const filtered = pages.filter(p =>
    `${p.slug} ${p.title} ${p.keyword}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Páginas SEO</h1>
          <p className="text-muted-foreground">Crie e gerencie landing pages otimizadas</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); setForm(emptyForm); }}><Plus className="w-4 h-4 mr-2" /> Nova Página</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle>{editing ? "Editar Página SEO" : "Nova Página SEO"}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input placeholder="ex: manutencao-rational-goiania" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={form.status} onValueChange={v => setForm(f => ({ ...f, status: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rascunho">Rascunho</SelectItem>
                      <SelectItem value="publicada">Publicada</SelectItem>
                      <SelectItem value="arquivada">Arquivada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Título (SEO)</Label>
                <Input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Textarea rows={2} value={form.meta_description} onChange={e => setForm(f => ({ ...f, meta_description: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Palavra-chave</Label>
                  <Input value={form.keyword} onChange={e => setForm(f => ({ ...f, keyword: e.target.value }))} />
                </div>
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Select value={form.categoria} onValueChange={v => setForm(f => ({ ...f, categoria: v }))}>
                    <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Marca">Marca</SelectItem>
                      <SelectItem value="Servico">Serviço</SelectItem>
                      <SelectItem value="Sintoma">Sintoma</SelectItem>
                      <SelectItem value="Marca+GEO">Marca+GEO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Volume</Label>
                  <Select value={form.volume} onValueChange={v => setForm(f => ({ ...f, volume: v }))}>
                    <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alto">Alto</SelectItem>
                      <SelectItem value="Medio">Médio</SelectItem>
                      <SelectItem value="Baixo">Baixo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Dificuldade</Label>
                  <Select value={form.dificuldade} onValueChange={v => setForm(f => ({ ...f, dificuldade: v }))}>
                    <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alta">Alta</SelectItem>
                      <SelectItem value="Media">Média</SelectItem>
                      <SelectItem value="Baixa">Baixa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Prioridade</Label>
                  <Select value={form.prioridade} onValueChange={v => setForm(f => ({ ...f, prioridade: v }))}>
                    <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alta">Alta</SelectItem>
                      <SelectItem value="Media">Média</SelectItem>
                      <SelectItem value="Baixa">Baixa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Conteúdo (JSON)</Label>
                <Textarea rows={8} className="font-mono text-xs" value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} />
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
            <Input className="pl-10" placeholder="Buscar páginas..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Carregando...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground flex flex-col items-center">
              <FileText className="w-12 h-12 mb-3" />
              <p>Nenhuma página SEO encontrada</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Slug</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Palavra-chave</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Prioridade</TableHead>
                  <TableHead className="w-20">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(page => (
                  <TableRow key={page.id}>
                    <TableCell className="font-mono text-xs">/{page.slug}</TableCell>
                    <TableCell className="max-w-xs truncate">{page.title}</TableCell>
                    <TableCell>{page.keyword}</TableCell>
                    <TableCell>{statusBadge(page.status)}</TableCell>
                    <TableCell>{page.prioridade ?? "—"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(page)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(page.id)}>
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

export default AdminSeoPages;

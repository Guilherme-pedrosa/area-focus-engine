import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Pencil, Save, Plus, Trash2, Image as ImageIcon, FileText, Type, ExternalLink } from "lucide-react";

type ContentItem = {
  id: string;
  page: string;
  section: string;
  content_key: string;
  content_value: string | null;
  content_type: string;
  updated_at: string;
};

// Map page slugs to friendly names
const PAGE_NAMES: Record<string, string> = {
  home: "🏠 Página Inicial",
  footer: "📋 Rodapé",
  sobre: "ℹ️ Sobre",
  global: "🌐 Global (todo o site)",
  rational: "🔧 Assistência Rational",
  hobart: "🔧 Assistência Hobart",
  vulcan: "🔧 Assistência Vulcan",
  irinox: "🔧 Assistência Irinox",
  pratica: "🔧 Assistência Prática",
  "robot-coupe": "🔧 Assistência Robot Coupe",
  tramontina: "🔧 Assistência Tramontina",
  "camaras-frias": "❄️ Câmaras Frias",
  "contratos-pcm": "📝 Contratos PCM",
  "higienizacao-coifas": "🧹 Higienização de Coifas",
};

const SECTION_NAMES: Record<string, string> = {
  hero: "Hero (Banner Principal)",
  servicos: "Serviços",
  numeros: "Números/Estatísticas",
  problemas: "Problemas que Resolvemos",
  diferenciais: "Diferenciais",
  badges: "Badges de Autoridade",
  cta: "CTA (Call to Action)",
  marcas: "Marcas Atendidas",
  clientes: "Clientes",
  imagens: "📸 Imagens",
  geral: "Informações Gerais",
  garantia: "Garantia",
};

const isImageKey = (key: string, value: string | null) => {
  if (!value) return false;
  return key.includes("imagem") || key.includes("logo") || key.includes("hero_background") ||
    key.includes("tecnico") || value.includes(".jpg") || value.includes(".jpeg") ||
    value.includes(".png") || value.includes(".webp") || value.includes(".svg");
};

const AdminContent = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<ContentItem | null>(null);
  const [editValue, setEditValue] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newDialog, setNewDialog] = useState(false);
  const [newForm, setNewForm] = useState({ page: "", section: "", content_key: "", content_value: "", content_type: "text" });

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from("site_content").select("*").order("page").order("section").order("content_key");
    setItems((data as ContentItem[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  // Group items by page, then by section
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.page]) acc[item.page] = {};
    if (!acc[item.page][item.section]) acc[item.page][item.section] = [];
    acc[item.page][item.section].push(item);
    return acc;
  }, {} as Record<string, Record<string, ContentItem[]>>);

  const pages = Object.keys(grouped).sort((a, b) => {
    const order = ["home", "global", "footer", "sobre", "rational", "hobart", "vulcan", "irinox", "pratica", "robot-coupe", "tramontina", "camaras-frias", "contratos-pcm", "higienizacao-coifas"];
    return (order.indexOf(a) === -1 ? 99 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 99 : order.indexOf(b));
  });

  const handleEdit = (item: ContentItem) => {
    setEditItem(item);
    setEditValue(item.content_value ?? "");
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!editItem) return;
    const { error } = await supabase.from("site_content").update({ content_value: editValue }).eq("id", editItem.id);
    if (error) { toast.error(error.message); return; }
    toast.success("Conteúdo salvo!");
    setDialogOpen(false);
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Excluir este conteúdo?")) return;
    await supabase.from("site_content").delete().eq("id", id);
    toast.success("Removido");
    fetchItems();
  };

  const handleNewSave = async () => {
    if (!newForm.page || !newForm.section || !newForm.content_key) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    const { error } = await supabase.from("site_content").insert(newForm);
    if (error) { toast.error(error.message); return; }
    toast.success("Conteúdo adicionado!");
    setNewDialog(false);
    setNewForm({ page: "", section: "", content_key: "", content_value: "", content_type: "text" });
    fetchItems();
  };

  const renderValue = (item: ContentItem) => {
    const val = item.content_value ?? "";
    
    if (isImageKey(item.content_key, val)) {
      // Try to show image preview
      const imgSrc = val.startsWith("src/") ? `/${val}` : val;
      return (
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0 border">
            <img src={imgSrc} alt={item.content_key} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px]">{val}</span>
        </div>
      );
    }

    if (val.length > 100) {
      return <p className="text-sm text-foreground line-clamp-2">{val}</p>;
    }

    return <p className="text-sm text-foreground">{val}</p>;
  };

  const formatKey = (key: string) => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(/(\d+)/g, " $1 ")
      .trim();
  };

  if (loading) {
    return <AdminLayout><div className="text-center py-12 text-muted-foreground">Carregando conteúdo...</div></AdminLayout>;
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold">Conteúdo do Site</h1>
          <p className="text-muted-foreground">Edite textos, imagens e conteúdos organizados por página</p>
        </div>
        <Button onClick={() => setNewDialog(true)}>
          <Plus className="w-4 h-4 mr-2" /> Novo Conteúdo
        </Button>
      </div>

      <Tabs defaultValue={pages[0]} className="w-full">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1 mb-6">
          {pages.map(page => (
            <TabsTrigger key={page} value={page} className="text-xs sm:text-sm whitespace-nowrap">
              {PAGE_NAMES[page] ?? page}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map(page => (
          <TabsContent key={page} value={page}>
            <Accordion type="multiple" defaultValue={Object.keys(grouped[page])} className="space-y-3">
              {Object.entries(grouped[page]).map(([section, sectionItems]) => (
                <AccordionItem key={section} value={section} className="border rounded-xl overflow-hidden bg-card">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      {section === "imagens" ? <ImageIcon className="w-4 h-4 text-primary" /> : <FileText className="w-4 h-4 text-primary" />}
                      <span className="font-semibold">{SECTION_NAMES[section] ?? section}</span>
                      <Badge variant="secondary" className="text-xs">{sectionItems.length} itens</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-0">
                    <div className="divide-y">
                      {sectionItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors group">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Type className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                {formatKey(item.content_key)}
                              </span>
                            </div>
                            {renderValue(item)}
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(item)} title="Editar">
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} title="Excluir">
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      {/* Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar: {editItem ? formatKey(editItem.content_key) : ""}</DialogTitle>
          </DialogHeader>
          {editItem && (
            <div className="space-y-4">
              <div className="flex gap-2 text-xs text-muted-foreground">
                <Badge variant="outline">{editItem.page}</Badge>
                <Badge variant="outline">{editItem.section}</Badge>
                <Badge variant="outline">{editItem.content_key}</Badge>
              </div>
              
              {isImageKey(editItem.content_key, editItem.content_value) && editItem.content_value && (
                <div className="rounded-lg overflow-hidden bg-muted border">
                  <img 
                    src={editItem.content_value.startsWith("src/") ? `/${editItem.content_value}` : editItem.content_value} 
                    alt="Preview" 
                    className="max-h-48 mx-auto object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label>Valor</Label>
                {(editValue.length > 80 || editValue.includes("\n")) ? (
                  <Textarea rows={6} value={editValue} onChange={e => setEditValue(e.target.value)} />
                ) : (
                  <Input value={editValue} onChange={e => setEditValue(e.target.value)} />
                )}
              </div>
              <Button className="w-full" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" /> Salvar
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* New Content Dialog */}
      <Dialog open={newDialog} onOpenChange={setNewDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle>Novo Conteúdo</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Página</Label>
                <Input placeholder="Ex: home, sobre" value={newForm.page} onChange={e => setNewForm(f => ({ ...f, page: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Seção</Label>
                <Input placeholder="Ex: hero, servicos" value={newForm.section} onChange={e => setNewForm(f => ({ ...f, section: e.target.value }))} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Chave</Label>
              <Input placeholder="Ex: titulo, descricao" value={newForm.content_key} onChange={e => setNewForm(f => ({ ...f, content_key: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Valor</Label>
              <Textarea rows={4} value={newForm.content_value} onChange={e => setNewForm(f => ({ ...f, content_value: e.target.value }))} />
            </div>
            <Button className="w-full" onClick={handleNewSave}>Adicionar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminContent;

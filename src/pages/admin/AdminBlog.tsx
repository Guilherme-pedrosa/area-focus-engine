import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAllPosts, useSaveBlogPost, useDeleteBlogPost, BlogPost } from "@/hooks/useBlog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Eye, Save, X, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const emptyPost = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  cover_image_url: "",
  category: "geral",
  status: "rascunho",
  author: "WeDo Cozinhas Profissionais",
};

export default function AdminBlog() {
  const { data: posts, isLoading } = useAllPosts();
  const saveMutation = useSaveBlogPost();
  const deleteMutation = useDeleteBlogPost();
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleNew = () => {
    setEditing({ ...emptyPost });
    setShowEditor(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditing({ ...post });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Artigo excluído");
    } catch {
      toast.error("Erro ao excluir");
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSave = async () => {
    if (!editing?.title || !editing?.slug) {
      toast.error("Título e slug são obrigatórios");
      return;
    }
    try {
      const toSave = { ...editing };
      if (toSave.status === "publicado" && !toSave.published_at) {
        toSave.published_at = new Date().toISOString();
      }
      await saveMutation.mutateAsync(toSave as any);
      toast.success(editing.id ? "Artigo atualizado" : "Artigo criado");
      setShowEditor(false);
      setEditing(null);
    } catch (e: any) {
      toast.error("Erro ao salvar: " + e.message);
    }
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie os artigos do blog
          </p>
        </div>
        <Button onClick={handleNew} className="gap-2">
          <Plus className="w-4 h-4" /> Novo Artigo
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      ) : !posts?.length ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Nenhum artigo criado ainda. Clique em "Novo Artigo" para começar.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground truncate">
                      {post.title}
                    </h3>
                    <Badge
                      variant={post.status === "publicado" ? "default" : "secondary"}
                      className="shrink-0"
                    >
                      {post.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    /{post.slug} • {post.category} •{" "}
                    {new Date(post.updated_at).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex items-center gap-1 ml-4">
                  {post.status === "publicado" && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`/blog/${post.slug}`} target="_blank">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(post)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(post.id)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Editor Dialog */}
      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editing?.id ? "Editar Artigo" : "Novo Artigo"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Título *</label>
                  <Input
                    value={editing.title || ""}
                    onChange={(e) => {
                      const title = e.target.value;
                      setEditing((p) => ({
                        ...p,
                        title,
                        slug: p?.id ? p.slug : generateSlug(title),
                      }));
                    }}
                    placeholder="Título do artigo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug *</label>
                  <Input
                    value={editing.slug || ""}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, slug: e.target.value }))
                    }
                    placeholder="url-do-artigo"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Categoria</label>
                  <Input
                    value={editing.category || ""}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, category: e.target.value }))
                    }
                    placeholder="Ex: Manutenção"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select
                    value={editing.status || "rascunho"}
                    onValueChange={(v) =>
                      setEditing((p) => ({ ...p, status: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rascunho">Rascunho</SelectItem>
                      <SelectItem value="publicado">Publicado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Autor</label>
                  <Input
                    value={editing.author || ""}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, author: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">URL da imagem de capa</label>
                <Input
                  value={editing.cover_image_url || ""}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, cover_image_url: e.target.value }))
                  }
                  placeholder="https://..."
                />
                {editing.cover_image_url && (
                  <img
                    src={editing.cover_image_url}
                    alt="Preview"
                    className="h-32 object-cover rounded-lg mt-2"
                  />
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Resumo (excerpt)</label>
                <Textarea
                  value={editing.excerpt || ""}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, excerpt: e.target.value }))
                  }
                  placeholder="Breve descrição do artigo para listagem e SEO"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Conteúdo (HTML)
                </label>
                <Textarea
                  value={editing.content || ""}
                  onChange={(e) =>
                    setEditing((p) => ({ ...p, content: e.target.value }))
                  }
                  placeholder="<h2>Subtítulo</h2><p>Texto do artigo...</p>"
                  rows={15}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowEditor(false);
                    setEditing(null);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={saveMutation.isPending}
                  className="gap-2"
                >
                  <Save className="w-4 h-4" />
                  {saveMutation.isPending ? "Salvando..." : "Salvar"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

import { useState } from "react";
import { Eye, Pencil, Check, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { SeoUrl } from "@/types/seoAdmin";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SeoUrlTableProps {
  urls: SeoUrl[];
  selectedIds: string[];
  onSelectionChange: (ids: string[]) => void;
  onPreview: (url: SeoUrl) => void;
  onEdit: (url: SeoUrl) => void;
  onGenerate: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function SeoUrlTable({
  urls,
  selectedIds,
  onSelectionChange,
  onPreview,
  onEdit,
  onGenerate,
  onDelete
}: SeoUrlTableProps) {
  const allSelected = urls.length > 0 && selectedIds.length === urls.length;
  const someSelected = selectedIds.length > 0 && selectedIds.length < urls.length;

  const toggleAll = () => {
    if (allSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(urls.map(u => u.id));
    }
  };

  const toggleOne = (id: string) => {
    if (selectedIds.includes(id)) {
      onSelectionChange(selectedIds.filter(i => i !== id));
    } else {
      onSelectionChange([...selectedIds, id]);
    }
  };

  const renderPrioridade = (prioridade: string) => {
    switch (prioridade) {
      case 'Alta':
        return <span className="text-red-500 font-bold">🔥🔥🔥</span>;
      case 'Media':
        return <span className="text-orange-500 font-semibold">🔥🔥</span>;
      case 'Baixa':
        return <span className="text-yellow-500">🔥</span>;
      default:
        return prioridade;
    }
  };

  const renderVolume = (volume: string) => {
    switch (volume) {
      case 'Alto':
        return <Badge className="bg-green-600 text-white hover:bg-green-700">Alto</Badge>;
      case 'Medio':
        return <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">Médio</Badge>;
      case 'Baixo':
        return <Badge className="bg-gray-500 text-white hover:bg-gray-600">Baixo</Badge>;
      default:
        return volume;
    }
  };

  const renderDificuldade = (dificuldade: string) => {
    switch (dificuldade) {
      case 'Alta':
        return <Badge variant="destructive">Alta</Badge>;
      case 'Media':
        return <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">Média</Badge>;
      case 'Baixa':
        return <Badge className="bg-green-500 text-white hover:bg-green-600">Baixa</Badge>;
      default:
        return dificuldade;
    }
  };

  const renderCategoria = (categoria: string) => {
    switch (categoria) {
      case 'Marca':
        return <Badge className="bg-blue-500 text-white hover:bg-blue-600">Marca</Badge>;
      case 'Servico':
        return <Badge className="bg-purple-500 text-white hover:bg-purple-600">Serviço</Badge>;
      case 'Sintoma':
        return <Badge className="bg-teal-500 text-white hover:bg-teal-600">Sintoma</Badge>;
      case 'Marca+GEO':
        return <Badge className="bg-indigo-600 text-white hover:bg-indigo-700">Marca+GEO</Badge>;
      default:
        return categoria;
    }
  };

  const renderStatus = (status: string) => {
    switch (status) {
      case 'publicada':
        return <Badge className="bg-green-500 text-white">🟢 Publicada</Badge>;
      case 'rascunho':
        return <Badge className="bg-yellow-500 text-black">🟡 Rascunho</Badge>;
      case 'nao-gerada':
        return <Badge variant="outline" className="text-muted-foreground">⚪ Não Gerada</Badge>;
      default:
        return status;
    }
  };

  if (urls.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">Nenhuma URL encontrada</p>
        <p className="text-sm">Importe um CSV para começar</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-12">
              <Checkbox
                checked={allSelected}
                onCheckedChange={toggleAll}
                aria-label="Selecionar todos"
              />
            </TableHead>
            <TableHead className="min-w-[250px]">URL</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Prioridade</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Dificuldade</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls.map((url) => (
            <TableRow key={url.id} className={selectedIds.includes(url.id) ? 'bg-accent/20' : ''}>
              <TableCell>
                <Checkbox
                  checked={selectedIds.includes(url.id)}
                  onCheckedChange={() => toggleOne(url.id)}
                  aria-label={`Selecionar ${url.url}`}
                />
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="font-mono text-sm text-foreground">{url.url}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[250px]">
                    {url.palavraChave}
                  </div>
                </div>
              </TableCell>
              <TableCell>{renderStatus(url.status)}</TableCell>
              <TableCell>{renderPrioridade(url.prioridade)}</TableCell>
              <TableCell>{renderVolume(url.volume)}</TableCell>
              <TableCell>{renderDificuldade(url.dificuldade)}</TableCell>
              <TableCell>{renderCategoria(url.categoria)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPreview(url)}
                    title="Preview"
                    className="h-8 w-8"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {url.status !== 'nao-gerada' && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(url)}
                      title="Editar"
                      className="h-8 w-8"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  )}
                  {url.status === 'nao-gerada' && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onGenerate(url.id)}
                      title="Gerar Página"
                      className="h-8 w-8 text-green-600 hover:text-green-700"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        title="Deletar"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Deletar URL?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja deletar <strong>{url.url}</strong>? Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(url.id)} className="bg-destructive text-destructive-foreground">
                          Deletar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

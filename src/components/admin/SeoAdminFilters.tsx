import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SeoAdminFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  prioridade: string;
  onPrioridadeChange: (value: string) => void;
  volume: string;
  onVolumeChange: (value: string) => void;
  categoria: string;
  onCategoriaChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  onClear: () => void;
}

export default function SeoAdminFilters({
  search,
  onSearchChange,
  prioridade,
  onPrioridadeChange,
  volume,
  onVolumeChange,
  categoria,
  onCategoriaChange,
  status,
  onStatusChange,
  onClear
}: SeoAdminFiltersProps) {
  const hasFilters = search || prioridade !== 'todas' || volume !== 'todos' || categoria !== 'todas' || status !== 'todos';

  return (
    <div className="flex flex-wrap gap-3 items-center p-4 bg-muted/30 rounded-lg">
      {/* Search */}
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por URL ou palavra-chave..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Prioridade */}
      <Select value={prioridade} onValueChange={onPrioridadeChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Prioridade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas</SelectItem>
          <SelectItem value="Alta">🔥🔥🔥 Alta</SelectItem>
          <SelectItem value="Media">🔥🔥 Média</SelectItem>
          <SelectItem value="Baixa">🔥 Baixa</SelectItem>
        </SelectContent>
      </Select>

      {/* Volume */}
      <Select value={volume} onValueChange={onVolumeChange}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="Volume" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="Alto">Alto</SelectItem>
          <SelectItem value="Medio">Médio</SelectItem>
          <SelectItem value="Baixo">Baixo</SelectItem>
        </SelectContent>
      </Select>

      {/* Categoria */}
      <Select value={categoria} onValueChange={onCategoriaChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas</SelectItem>
          <SelectItem value="Marca">Marca</SelectItem>
          <SelectItem value="Servico">Serviço</SelectItem>
          <SelectItem value="Sintoma">Sintoma</SelectItem>
          <SelectItem value="Marca+GEO">Marca+GEO</SelectItem>
        </SelectContent>
      </Select>

      {/* Status */}
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="publicada">🟢 Publicada</SelectItem>
          <SelectItem value="rascunho">🟡 Rascunho</SelectItem>
          <SelectItem value="nao-gerada">⚪ Não Gerada</SelectItem>
        </SelectContent>
      </Select>

      {/* Clear */}
      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground">
          <X className="w-4 h-4 mr-1" />
          Limpar
        </Button>
      )}
    </div>
  );
}

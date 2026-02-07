import { Card, CardContent } from "@/components/ui/card";

interface Stats {
  total: number;
  publicadas: number;
  rascunhos: number;
  pendentes: number;
  porPrioridade: { alta: number; media: number; baixa: number };
  porCategoria: { marca: number; servico: number; sintoma: number; marcaGeo: number };
}

interface SeoAdminDashboardProps {
  stats: Stats;
}

export default function SeoAdminDashboard({ stats }: SeoAdminDashboardProps) {
  const percentPublicadas = stats.total > 0 ? Math.round((stats.publicadas / stats.total) * 100) : 0;
  const percentPendentes = stats.total > 0 ? Math.round((stats.pendentes / stats.total) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-background border-border">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Total de URLs</p>
              <p className="text-4xl font-bold text-foreground mt-2">{stats.total}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-green-600 uppercase tracking-wide">Páginas Publicadas</p>
              <p className="text-4xl font-bold text-green-600 mt-2">
                {stats.publicadas} <span className="text-lg">({percentPublicadas}%)</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-500/10 border-amber-500/30">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-amber-600 uppercase tracking-wide">Páginas Pendentes</p>
              <p className="text-4xl font-bold text-amber-600 mt-2">
                {stats.pendentes} <span className="text-lg">({percentPendentes}%)</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Priority Stats */}
      <Card className="bg-muted/30">
        <CardContent className="py-4">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="text-sm font-medium text-muted-foreground">POR PRIORIDADE:</span>
            <span className="flex items-center gap-1">
              <span className="text-red-500">🔥🔥🔥</span>
              <span className="font-semibold">Alta: {stats.porPrioridade.alta}</span>
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="flex items-center gap-1">
              <span className="text-orange-500">🔥🔥</span>
              <span className="font-semibold">Média: {stats.porPrioridade.media}</span>
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">🔥</span>
              <span className="font-semibold">Baixa: {stats.porPrioridade.baixa}</span>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Category Stats */}
      <Card className="bg-muted/30">
        <CardContent className="py-4">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="text-sm font-medium text-muted-foreground">POR CATEGORIA:</span>
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-600 text-sm font-medium">
              Marca: {stats.porCategoria.marca}
            </span>
            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-600 text-sm font-medium">
              Serviço: {stats.porCategoria.servico}
            </span>
            <span className="px-2 py-1 rounded bg-teal-500/20 text-teal-600 text-sm font-medium">
              Sintoma: {stats.porCategoria.sintoma}
            </span>
            <span className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-600 text-sm font-medium">
              Marca+GEO: {stats.porCategoria.marcaGeo}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

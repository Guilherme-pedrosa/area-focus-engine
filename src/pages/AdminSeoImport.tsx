import { useState, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Upload, Download, Trash2, Check, FileDown, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSeoAdmin } from "@/hooks/useSeoAdmin";
import SeoAdminDashboard from "@/components/admin/SeoAdminDashboard";
import SeoAdminFilters from "@/components/admin/SeoAdminFilters";
import SeoUrlTable from "@/components/admin/SeoUrlTable";
import SeoPreviewModal from "@/components/admin/SeoPreviewModal";
import SeoEditModal from "@/components/admin/SeoEditModal";
import SeoActivityLog from "@/components/admin/SeoActivityLog";
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

export default function AdminSeoImport() {
  const {
    urls,
    activityLog,
    stats,
    saving,
    importCsv,
    deleteUrl,
    deleteMultiple,
    generatePage,
    publishPage,
    updateContent,
    exportBackup,
    importBackup,
    resetAll,
    exportSelectedCsv
  } = useSeoAdmin();

  // File inputs
  const csvInputRef = useRef<HTMLInputElement>(null);
  const backupInputRef = useRef<HTMLInputElement>(null);

  // Filters
  const [search, setSearch] = useState('');
  const [prioridade, setPrioridade] = useState('todas');
  const [volume, setVolume] = useState('todos');
  const [categoria, setCategoria] = useState('todas');
  const [status, setStatus] = useState('todos');

  // Selection
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Modals
  const [previewUrl, setPreviewUrl] = useState<SeoUrl | null>(null);
  const [editUrl, setEditUrl] = useState<SeoUrl | null>(null);

  // Bulk action loading
  const [bulkLoading, setBulkLoading] = useState(false);

  // Filter URLs
  const filteredUrls = useMemo(() => {
    return urls.filter(url => {
      if (search && !url.url.toLowerCase().includes(search.toLowerCase()) && 
          !url.palavraChave.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (prioridade !== 'todas' && url.prioridade !== prioridade) return false;
      if (volume !== 'todos' && url.volume !== volume) return false;
      if (categoria !== 'todas' && url.categoria !== categoria) return false;
      if (status !== 'todos' && url.status !== status) return false;
      return true;
    });
  }, [urls, search, prioridade, volume, categoria, status]);

  const clearFilters = () => {
    setSearch('');
    setPrioridade('todas');
    setVolume('todos');
    setCategoria('todas');
    setStatus('todos');
  };

  // File handlers
  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      importCsv(content);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleBackupUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      importBackup(content);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Bulk actions
  const handleGenerateTop10 = () => {
    setBulkLoading(true);
    const top10 = urls
      .filter(u => u.prioridade === 'Alta' && u.status === 'nao-gerada')
      .slice(0, 10);
    
    top10.forEach((u, i) => {
      setTimeout(() => generatePage(u.id), i * 100);
    });
    
    setTimeout(() => setBulkLoading(false), top10.length * 100 + 500);
  };

  const handleGenerateSelected = () => {
    setBulkLoading(true);
    const toGenerate = urls.filter(u => selectedIds.includes(u.id) && u.status === 'nao-gerada');
    
    toGenerate.forEach((u, i) => {
      setTimeout(() => generatePage(u.id), i * 100);
    });
    
    setTimeout(() => {
      setBulkLoading(false);
      setSelectedIds([]);
    }, toGenerate.length * 100 + 500);
  };

  const handleDeleteSelected = () => {
    deleteMultiple(selectedIds);
    setSelectedIds([]);
  };

  const handleExportSelected = () => {
    exportSelectedCsv(selectedIds);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin SEO Import | WeDo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestão de URLs SEO</h1>
            <p className="text-muted-foreground">Importe, gerencie e gere páginas SEO</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {/* Import CSV */}
            <input
              ref={csvInputRef}
              type="file"
              accept=".csv"
              onChange={handleCsvUpload}
              className="hidden"
            />
            <Button onClick={() => csvInputRef.current?.click()}>
              <Upload className="w-4 h-4 mr-2" />
              Importar CSV
            </Button>

            {/* Export Backup */}
            <Button variant="outline" onClick={exportBackup}>
              <Download className="w-4 h-4 mr-2" />
              Exportar Backup
            </Button>

            {/* Import Backup */}
            <input
              ref={backupInputRef}
              type="file"
              accept=".json"
              onChange={handleBackupUpload}
              className="hidden"
            />
            <Button variant="outline" onClick={() => backupInputRef.current?.click()}>
              <Upload className="w-4 h-4 mr-2" />
              Importar Backup
            </Button>

            {/* Reset */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Resetar
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Resetar TODOS os dados?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação irá apagar TODAS as URLs e páginas geradas. 
                    Faça um backup antes de continuar. Esta ação NÃO pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={resetAll} className="bg-destructive">
                    Sim, Resetar Tudo
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mb-8">
          <SeoAdminDashboard stats={stats} />
        </div>

        {/* Filters */}
        <div className="mb-4">
          <SeoAdminFilters
            search={search}
            onSearchChange={setSearch}
            prioridade={prioridade}
            onPrioridadeChange={setPrioridade}
            volume={volume}
            onVolumeChange={setVolume}
            categoria={categoria}
            onCategoriaChange={setCategoria}
            status={status}
            onStatusChange={setStatus}
            onClear={clearFilters}
          />
        </div>

        {/* Bulk Actions */}
        {(selectedIds.length > 0 || urls.some(u => u.prioridade === 'Alta' && u.status === 'nao-gerada')) && (
          <div className="flex flex-wrap gap-2 mb-4 p-4 bg-accent/10 rounded-lg">
            <Button 
              onClick={handleGenerateTop10}
              disabled={bulkLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {bulkLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Check className="w-4 h-4 mr-2" />}
              Gerar Top 10 Alta Prioridade
            </Button>
            
            {selectedIds.length > 0 && (
              <>
                <Button 
                  onClick={handleGenerateSelected}
                  disabled={bulkLoading}
                  variant="outline"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Gerar Selecionadas ({selectedIds.length})
                </Button>
                <Button variant="outline" onClick={handleExportSelected}>
                  <FileDown className="w-4 h-4 mr-2" />
                  Exportar Selecionadas
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Deletar Selecionadas
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Deletar {selectedIds.length} URLs?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta ação não pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteSelected} className="bg-destructive">
                        Deletar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>
        )}

        {/* Table */}
        <div className="mb-8">
          <SeoUrlTable
            urls={filteredUrls}
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
            onPreview={setPreviewUrl}
            onEdit={setEditUrl}
            onGenerate={generatePage}
            onDelete={deleteUrl}
          />
          
          {filteredUrls.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Mostrando {filteredUrls.length} de {urls.length} URLs
            </div>
          )}
        </div>

        {/* Activity Log */}
        <SeoActivityLog logs={activityLog} />

        {/* Modals */}
        <SeoPreviewModal
          url={previewUrl}
          open={!!previewUrl}
          onClose={() => setPreviewUrl(null)}
          onEdit={(url) => {
            setPreviewUrl(null);
            setEditUrl(url);
          }}
          onPublish={publishPage}
        />

        <SeoEditModal
          url={editUrl}
          open={!!editUrl}
          onClose={() => setEditUrl(null)}
          onSave={updateContent}
        />
      </div>
    </div>
  );
}

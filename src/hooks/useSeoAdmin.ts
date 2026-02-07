import { useState, useEffect, useCallback } from 'react';
import { SeoUrl, SeoAdminState, ActivityLog, Volume, Dificuldade, Prioridade, Intencao, Categoria, SeoConteudo } from '@/types/seoAdmin';
import { toast } from 'sonner';

const STORAGE_KEY = 'wedo-seo-admin';

const generateId = () => Math.random().toString(36).substring(2, 15);

const getInitialState = (): SeoAdminState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading from localStorage:', e);
  }
  return { urls: [], activityLog: [] };
};

export function useSeoAdmin() {
  const [state, setState] = useState<SeoAdminState>(getInitialState);
  const [saving, setSaving] = useState(false);

  // Auto-save to localStorage
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.error('Error saving to localStorage:', e);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [state]);

  const addLog = useCallback((action: string, details: string) => {
    const log: ActivityLog = {
      id: generateId(),
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      action,
      details
    };
    setState(prev => ({
      ...prev,
      activityLog: [log, ...prev.activityLog].slice(0, 50)
    }));
  }, []);

  const validateCsvRow = (row: string[]): { valid: boolean; error?: string } => {
    if (row.length !== 7) {
      return { valid: false, error: `Linha deve ter 7 colunas, encontrado ${row.length}` };
    }

    const [, , volume, dificuldade, prioridade, intencao, categoria] = row;

    const validVolumes: Volume[] = ['Alto', 'Medio', 'Baixo'];
    const validDificuldades: Dificuldade[] = ['Alta', 'Media', 'Baixa'];
    const validPrioridades: Prioridade[] = ['Alta', 'Media', 'Baixa'];
    const validIntencoes: Intencao[] = ['Transacional', 'Informacional'];
    const validCategorias: Categoria[] = ['Marca', 'Servico', 'Sintoma', 'Marca+GEO'];

    if (!validVolumes.includes(volume as Volume)) {
      return { valid: false, error: `Volume inválido: "${volume}". Use: Alto, Medio, Baixo` };
    }
    if (!validDificuldades.includes(dificuldade as Dificuldade)) {
      return { valid: false, error: `Dificuldade inválida: "${dificuldade}". Use: Alta, Media, Baixa` };
    }
    if (!validPrioridades.includes(prioridade as Prioridade)) {
      return { valid: false, error: `Prioridade inválida: "${prioridade}". Use: Alta, Media, Baixa` };
    }
    if (!validIntencoes.includes(intencao as Intencao)) {
      return { valid: false, error: `Intenção inválida: "${intencao}". Use: Transacional, Informacional` };
    }
    if (!validCategorias.includes(categoria as Categoria)) {
      return { valid: false, error: `Categoria inválida: "${categoria}". Use: Marca, Servico, Sintoma, Marca+GEO` };
    }

    return { valid: true };
  };

  const importCsv = useCallback((content: string) => {
    const lines = content.trim().split('\n');
    const errors: string[] = [];
    const newUrls: SeoUrl[] = [];

    // Skip header
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const row = line.split(',').map(col => col.trim());
      const validation = validateCsvRow(row);

      if (!validation.valid) {
        errors.push(`Linha ${i + 1}: ${validation.error}`);
        continue;
      }

      const [url, palavraChave, volume, dificuldade, prioridade, intencao, categoria] = row;

      // Check for duplicates
      const exists = state.urls.some(u => u.url === url) || newUrls.some(u => u.url === url);
      if (exists) {
        errors.push(`Linha ${i + 1}: URL duplicada: ${url}`);
        continue;
      }

      newUrls.push({
        id: generateId(),
        url,
        palavraChave,
        volume: volume as Volume,
        dificuldade: dificuldade as Dificuldade,
        prioridade: prioridade as Prioridade,
        intencao: intencao as Intencao,
        categoria: categoria as Categoria,
        status: 'nao-gerada',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    if (errors.length > 0) {
      toast.error(`Erros na importação: ${errors.length}`, {
        description: errors.slice(0, 3).join('\n')
      });
    }

    if (newUrls.length > 0) {
      setState(prev => ({
        ...prev,
        urls: [...prev.urls, ...newUrls]
      }));
      addLog('CSV importado', `${newUrls.length} URLs`);
      toast.success(`${newUrls.length} URLs importadas com sucesso!`);
    }

    return { imported: newUrls.length, errors: errors.length };
  }, [state.urls, addLog]);

  const deleteUrl = useCallback((id: string) => {
    const url = state.urls.find(u => u.id === id);
    setState(prev => ({
      ...prev,
      urls: prev.urls.filter(u => u.id !== id)
    }));
    if (url) {
      addLog('URL deletada', url.url);
    }
    toast.success('URL removida');
  }, [state.urls, addLog]);

  const deleteMultiple = useCallback((ids: string[]) => {
    setState(prev => ({
      ...prev,
      urls: prev.urls.filter(u => !ids.includes(u.id))
    }));
    addLog('URLs deletadas', `${ids.length} URLs`);
    toast.success(`${ids.length} URLs removidas`);
  }, [addLog]);

  const generatePage = useCallback((id: string) => {
    setSaving(true);
    setState(prev => ({
      ...prev,
      urls: prev.urls.map(u => {
        if (u.id === id) {
          const updated: SeoUrl = {
            ...u,
            status: 'rascunho',
            conteudo: {
              problema: '[CLIQUE AQUI PARA EDITAR - Descreva o problema em 100-150 palavras]',
              causas: ['[Causa 1]', '[Causa 2]', '[Causa 3]', '[Causa 4]'],
              solucao: '[CLIQUE AQUI PARA EDITAR - Descreva a solução em 150-200 palavras]',
              investimento: 'R$ XXX a R$ XXX',
              prazo: 'X-X horas'
            },
            updatedAt: new Date().toISOString()
          };
          return updated;
        }
        return u;
      })
    }));
    
    const url = state.urls.find(u => u.id === id);
    if (url) {
      addLog('Página gerada', url.url);
    }
    
    setTimeout(() => {
      setSaving(false);
      toast.success('Página gerada com sucesso!');
    }, 500);
  }, [state.urls, addLog]);

  const publishPage = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      urls: prev.urls.map(u => {
        if (u.id === id) {
          return { ...u, status: 'publicada' as const, updatedAt: new Date().toISOString() };
        }
        return u;
      })
    }));
    
    const url = state.urls.find(u => u.id === id);
    if (url) {
      addLog('Página publicada', url.url);
    }
    toast.success('Página publicada!');
  }, [state.urls, addLog]);

  const updateContent = useCallback((id: string, conteudo: Partial<SeoConteudo>) => {
    setState(prev => ({
      ...prev,
      urls: prev.urls.map(u => {
        if (u.id === id && u.conteudo) {
          return {
            ...u,
            conteudo: { ...u.conteudo, ...conteudo },
            updatedAt: new Date().toISOString()
          };
        }
        return u;
      })
    }));
  }, []);

  const exportBackup = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addLog('Backup exportado', 'JSON');
    toast.success('Backup exportado!');
  }, [state, addLog]);

  const importBackup = useCallback((content: string) => {
    try {
      const data = JSON.parse(content) as SeoAdminState;
      setState(data);
      addLog('Backup importado', `${data.urls.length} URLs`);
      toast.success('Backup restaurado!');
    } catch (e) {
      toast.error('Erro ao importar backup');
    }
  }, [addLog]);

  const resetAll = useCallback(() => {
    setState({ urls: [], activityLog: [] });
    localStorage.removeItem(STORAGE_KEY);
    toast.success('Dados resetados');
  }, []);

  const exportSelectedCsv = useCallback((ids: string[]) => {
    const selected = state.urls.filter(u => ids.includes(u.id));
    const header = 'URL,Palavra-Chave,Volume,Dificuldade,Prioridade,Intencao,Categoria';
    const rows = selected.map(u => 
      `${u.url},${u.palavraChave},${u.volume},${u.dificuldade},${u.prioridade},${u.intencao},${u.categoria}`
    );
    const csv = [header, ...rows].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`${selected.length} URLs exportadas`);
  }, [state.urls]);

  // Statistics
  const stats = {
    total: state.urls.length,
    publicadas: state.urls.filter(u => u.status === 'publicada').length,
    rascunhos: state.urls.filter(u => u.status === 'rascunho').length,
    pendentes: state.urls.filter(u => u.status === 'nao-gerada').length,
    porPrioridade: {
      alta: state.urls.filter(u => u.prioridade === 'Alta').length,
      media: state.urls.filter(u => u.prioridade === 'Media').length,
      baixa: state.urls.filter(u => u.prioridade === 'Baixa').length
    },
    porCategoria: {
      marca: state.urls.filter(u => u.categoria === 'Marca').length,
      servico: state.urls.filter(u => u.categoria === 'Servico').length,
      sintoma: state.urls.filter(u => u.categoria === 'Sintoma').length,
      marcaGeo: state.urls.filter(u => u.categoria === 'Marca+GEO').length
    }
  };

  return {
    urls: state.urls,
    activityLog: state.activityLog,
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
  };
}

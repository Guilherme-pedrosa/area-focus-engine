export type Volume = 'Alto' | 'Medio' | 'Baixo';
export type Dificuldade = 'Alta' | 'Media' | 'Baixa';
export type Prioridade = 'Alta' | 'Media' | 'Baixa';
export type Intencao = 'Transacional' | 'Informacional';
export type Categoria = 'Marca' | 'Servico' | 'Sintoma' | 'Marca+GEO';
export type Status = 'publicada' | 'rascunho' | 'nao-gerada';

export interface SeoUrl {
  id: string;
  url: string;
  palavraChave: string;
  volume: Volume;
  dificuldade: Dificuldade;
  prioridade: Prioridade;
  intencao: Intencao;
  categoria: Categoria;
  status: Status;
  conteudo?: SeoConteudo;
  createdAt: string;
  updatedAt: string;
}

export interface SeoConteudo {
  problema: string;
  causas: string[];
  solucao: string;
  investimento: string;
  prazo: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
}

export interface SeoAdminState {
  urls: SeoUrl[];
  activityLog: ActivityLog[];
}

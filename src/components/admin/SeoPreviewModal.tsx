import { X, Pencil, Check, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SeoUrl } from "@/types/seoAdmin";

interface SeoPreviewModalProps {
  url: SeoUrl | null;
  open: boolean;
  onClose: () => void;
  onEdit: (url: SeoUrl) => void;
  onPublish: (id: string) => void;
}

export default function SeoPreviewModal({ url, open, onClose, onEdit, onPublish }: SeoPreviewModalProps) {
  if (!url) return null;

  const conteudo = url.conteudo || {
    problema: '[Descreva o problema]',
    causas: ['[Causa 1]', '[Causa 2]', '[Causa 3]', '[Causa 4]'],
    solucao: '[Descreva a solução]',
    investimento: 'R$ XXX a R$ XXX',
    prazo: 'X-X horas'
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <ExternalLink className="w-5 h-5" />
            Preview: wedocozinhas.com.br{url.url}
          </DialogTitle>
        </DialogHeader>

        {/* Preview Content */}
        <div className="mt-4 p-6 bg-white rounded-lg border border-border">
          <article className="space-y-6">
            {/* Header */}
            <header className="text-center border-b pb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-primary capitalize">
                {url.palavraChave}
              </h1>
              <p className="text-muted-foreground mt-2">
                Assistência Técnica Especializada em Goiânia e Região
              </p>
            </header>

            {/* Problema */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                🔴 O Problema
              </h2>
              <div className="p-4 bg-red-50 rounded-lg text-gray-700">
                {conteudo.problema}
              </div>
            </section>

            {/* Causas */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-600 flex items-center gap-2">
                🔍 Causas Principais
              </h2>
              <ul className="list-disc list-inside space-y-2 p-4 bg-amber-50 rounded-lg">
                {conteudo.causas.map((causa, i) => (
                  <li key={i} className="text-gray-700">{causa}</li>
                ))}
              </ul>
            </section>

            {/* Solução */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
                ✅ Solução WeDo
              </h2>
              <div className="p-4 bg-green-50 rounded-lg text-gray-700">
                {conteudo.solucao}
              </div>
            </section>

            {/* Info Box */}
            <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              <div className="text-center">
                <strong className="text-sm text-muted-foreground">💰 Investimento</strong>
                <p className="font-semibold text-foreground">{conteudo.investimento}</p>
              </div>
              <div className="text-center">
                <strong className="text-sm text-muted-foreground">⏱️ Prazo</strong>
                <p className="font-semibold text-foreground">{conteudo.prazo}</p>
              </div>
              <div className="text-center">
                <strong className="text-sm text-muted-foreground">📞 Atendimento</strong>
                <a href="https://contatoswedo.lovable.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Canais de Contato</a>
              </div>
            </div>

            {/* CTA */}
            <footer className="text-center space-y-4 pt-6 border-t">
              <h3 className="text-lg font-semibold">Precisa de Atendimento Agora?</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://contatoswedo.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90"
                >
                  <ExternalLink className="w-5 h-5" />
                  ACESSAR CANAIS DE CONTATO
                </a>
              </div>
            </footer>
          </article>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-2" />
            Fechar
          </Button>
          {url.status !== 'nao-gerada' && (
            <Button variant="outline" onClick={() => onEdit(url)}>
              <Pencil className="w-4 h-4 mr-2" />
              Editar Conteúdo
            </Button>
          )}
          {url.status === 'rascunho' && (
            <Button onClick={() => onPublish(url.id)} className="bg-green-600 hover:bg-green-700">
              <Check className="w-4 h-4 mr-2" />
              Publicar Agora
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

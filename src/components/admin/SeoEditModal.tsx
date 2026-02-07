import { useState, useEffect } from "react";
import { X, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SeoUrl, SeoConteudo } from "@/types/seoAdmin";

interface SeoEditModalProps {
  url: SeoUrl | null;
  open: boolean;
  onClose: () => void;
  onSave: (id: string, conteudo: Partial<SeoConteudo>) => void;
}

export default function SeoEditModal({ url, open, onClose, onSave }: SeoEditModalProps) {
  const [saving, setSaving] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [formData, setFormData] = useState<SeoConteudo>({
    problema: '',
    causas: ['', '', '', ''],
    solucao: '',
    investimento: '',
    prazo: ''
  });

  useEffect(() => {
    if (url?.conteudo) {
      setFormData(url.conteudo);
    } else {
      setFormData({
        problema: '[Descreva o problema em 100-150 palavras]',
        causas: ['[Causa 1]', '[Causa 2]', '[Causa 3]', '[Causa 4]'],
        solucao: '[Descreva a solução em 150-200 palavras]',
        investimento: 'R$ XXX a R$ XXX',
        prazo: 'X-X horas'
      });
    }
  }, [url]);

  // Auto-save
  useEffect(() => {
    if (!url) return;
    
    const timeout = setTimeout(() => {
      setAutoSaveStatus('saving');
      onSave(url.id, formData);
      setTimeout(() => {
        setAutoSaveStatus('saved');
        setTimeout(() => setAutoSaveStatus('idle'), 2000);
      }, 500);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [formData, url, onSave]);

  if (!url) return null;

  const handleCausaChange = (index: number, value: string) => {
    const newCausas = [...formData.causas];
    newCausas[index] = value;
    setFormData({ ...formData, causas: newCausas });
  };

  const handleManualSave = () => {
    setSaving(true);
    onSave(url.id, formData);
    setTimeout(() => {
      setSaving(false);
      onClose();
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Editar: {url.palavraChave}</span>
            <span className="text-sm font-normal text-muted-foreground">
              {autoSaveStatus === 'saving' && (
                <span className="flex items-center gap-1">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  💾 Salvando...
                </span>
              )}
              {autoSaveStatus === 'saved' && '✅ Salvo'}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Problema */}
          <div className="space-y-2">
            <Label className="text-red-600 font-semibold">🔴 O Problema</Label>
            <Textarea
              value={formData.problema}
              onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
              placeholder="Descreva o problema em 100-150 palavras..."
              rows={4}
            />
          </div>

          {/* Causas */}
          <div className="space-y-2">
            <Label className="text-amber-600 font-semibold">🔍 Causas Principais</Label>
            {formData.causas.map((causa, i) => (
              <Input
                key={i}
                value={causa}
                onChange={(e) => handleCausaChange(i, e.target.value)}
                placeholder={`Causa ${i + 1}`}
              />
            ))}
          </div>

          {/* Solução */}
          <div className="space-y-2">
            <Label className="text-green-600 font-semibold">✅ Solução WeDo</Label>
            <Textarea
              value={formData.solucao}
              onChange={(e) => setFormData({ ...formData, solucao: e.target.value })}
              placeholder="Descreva a solução em 150-200 palavras..."
              rows={5}
            />
          </div>

          {/* Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>💰 Investimento</Label>
              <Input
                value={formData.investimento}
                onChange={(e) => setFormData({ ...formData, investimento: e.target.value })}
                placeholder="R$ XXX a R$ XXX"
              />
            </div>
            <div className="space-y-2">
              <Label>⏱️ Prazo</Label>
              <Input
                value={formData.prazo}
                onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                placeholder="X-X horas"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-2" />
            Fechar
          </Button>
          <Button onClick={handleManualSave} disabled={saving}>
            {saving ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Salvar e Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

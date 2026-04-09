import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Save } from "lucide-react";

const DEFAULT_SETTINGS = [
  { key: "telefone", label: "Telefone", group: "contato" },
  { key: "whatsapp", label: "WhatsApp", group: "contato" },
  { key: "email_contato", label: "Email de Contato", group: "contato" },
  { key: "endereco", label: "Endereço", group: "contato" },
  { key: "cidade", label: "Cidade", group: "contato" },
  { key: "horario_funcionamento", label: "Horário de Funcionamento", group: "contato" },
  { key: "google_maps_url", label: "URL Google Maps", group: "contato" },
  { key: "instagram", label: "Instagram", group: "redes_sociais" },
  { key: "facebook", label: "Facebook", group: "redes_sociais" },
  { key: "linkedin", label: "LinkedIn", group: "redes_sociais" },
  { key: "meta_title_home", label: "Meta Title (Home)", group: "seo" },
  { key: "meta_description_home", label: "Meta Description (Home)", group: "seo" },
  { key: "linktree_url", label: "URL do Linktree (CTA principal)", group: "links" },
  { key: "cta_texto_principal", label: "Texto do Botão CTA Principal", group: "links" },
  { key: "cta_texto_secundario", label: "Texto do CTA Secundário", group: "links" },
];

const AdminSettings = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("site_settings").select("*");
      const map: Record<string, string> = {};
      (data ?? []).forEach((row: { setting_key: string; setting_value: string | null }) => {
        map[row.setting_key] = row.setting_value ?? "";
      });
      setValues(map);
      setLoading(false);
    };
    fetch();
  }, []);

  const handleSave = async () => {
    setSaving(true);

    for (const setting of DEFAULT_SETTINGS) {
      const val = values[setting.key] ?? "";
      const { data: existing } = await supabase
        .from("site_settings")
        .select("id")
        .eq("setting_key", setting.key)
        .maybeSingle();

      if (existing) {
        await supabase.from("site_settings").update({
          setting_value: val,
          setting_group: setting.group,
        }).eq("id", existing.id);
      } else {
        await supabase.from("site_settings").insert({
          setting_key: setting.key,
          setting_value: val,
          setting_group: setting.group,
        });
      }
    }

    setSaving(false);
    toast.success("Configurações salvas!");
  };

  const groups = [
    { key: "links", title: "Links de Contato / CTAs" },
    { key: "contato", title: "Informações de Contato" },
    { key: "redes_sociais", title: "Redes Sociais" },
    { key: "seo", title: "SEO Global" },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="text-center py-12 text-muted-foreground">Carregando...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">Informações gerais do site</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-2" /> {saving ? "Salvando..." : "Salvar Tudo"}
        </Button>
      </div>

      <div className="space-y-6">
        {groups.map(group => (
          <Card key={group.key}>
            <CardHeader>
              <CardTitle className="text-lg">{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {DEFAULT_SETTINGS.filter(s => s.group === group.key).map(setting => (
                <div key={setting.key} className="space-y-1">
                  <Label>{setting.label}</Label>
                  <Input
                    value={values[setting.key] ?? ""}
                    onChange={e => setValues(v => ({ ...v, [setting.key]: e.target.value }))}
                    placeholder={`Digite ${setting.label.toLowerCase()}...`}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;

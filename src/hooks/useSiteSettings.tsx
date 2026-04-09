import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SiteSettingsContextType {
  settings: Record<string, string>;
  loading: boolean;
  get: (key: string, fallback?: string) => string;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: {},
  loading: true,
  get: (_, fallback = "") => fallback,
});

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_settings")
      .select("setting_key, setting_value")
      .then(({ data }) => {
        const map: Record<string, string> = {};
        (data ?? []).forEach((row) => {
          map[row.setting_key] = row.setting_value ?? "";
        });
        setSettings(map);
        setLoading(false);
      });
  }, []);

  const get = (key: string, fallback = "") => settings[key] || fallback;

  return (
    <SiteSettingsContext.Provider value={{ settings, loading, get }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}

/** Convenience hook that returns the CTA URL and text from CMS settings */
export function useCTASettings() {
  const { get } = useSiteSettings();
  return {
    ctaUrl: get("linktree_url", "https://linktr.ee/wedocorp"),
    ctaText: get("cta_texto_principal", "Acessar Atendimento"),
    ctaTextSecondary: get("cta_texto_secundario", "Canais Oficiais WeDo"),
  };
}

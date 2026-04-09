import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

let cachedSettings: Record<string, string> | null = null;
let fetchPromise: Promise<Record<string, string>> | null = null;

async function fetchSettings(): Promise<Record<string, string>> {
  if (cachedSettings) return cachedSettings;
  if (fetchPromise) return fetchPromise;

  fetchPromise = supabase
    .from("site_settings")
    .select("setting_key, setting_value")
    .then(({ data }) => {
      const map: Record<string, string> = {};
      (data ?? []).forEach((row) => {
        map[row.setting_key] = row.setting_value ?? "";
      });
      cachedSettings = map;
      fetchPromise = null;
      return map;
    });

  return fetchPromise;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<Record<string, string>>(cachedSettings ?? {});
  const [loading, setLoading] = useState(!cachedSettings);

  useEffect(() => {
    if (cachedSettings) {
      setSettings(cachedSettings);
      setLoading(false);
      return;
    }
    fetchSettings().then((s) => {
      setSettings(s);
      setLoading(false);
    });
  }, []);

  const get = (key: string, fallback = "") => settings[key] || fallback;

  return { settings, loading, get };
}

// For non-hook contexts
export function getSiteSettings() {
  return cachedSettings ?? {};
}

export function invalidateSiteSettingsCache() {
  cachedSettings = null;
  fetchPromise = null;
}

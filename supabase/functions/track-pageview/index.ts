import { createClient } from "https://esm.sh/@supabase/supabase-js@2.103.0";
import { corsHeaders } from "@supabase/supabase-js/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Get client IP from headers
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
      || req.headers.get("x-real-ip") 
      || "unknown";

    // Geolocation lookup via free API
    let geo = { city: null as string | null, region: null as string | null, country: null as string | null, lat: null as number | null, lon: null as number | null };
    
    if (ip && ip !== "unknown" && ip !== "127.0.0.1") {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,lat,lon`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          geo = {
            city: geoData.city || null,
            region: geoData.regionName || null,
            country: geoData.country || null,
            lat: geoData.lat || null,
            lon: geoData.lon || null,
          };
        }
      } catch {
        // Geo lookup failed, continue without it
      }
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("page_views").insert({
      page_url: body.page_url,
      page_title: body.page_title || null,
      referrer: body.referrer || null,
      user_agent: body.user_agent || null,
      device_type: body.device_type || null,
      browser: body.browser || null,
      os: body.os || null,
      screen_width: body.screen_width || null,
      screen_height: body.screen_height || null,
      session_id: body.session_id || null,
      ip_address: ip,
      city: geo.city,
      region: geo.region,
      country: geo.country,
      latitude: geo.lat,
      longitude: geo.lon,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

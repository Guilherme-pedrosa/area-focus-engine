import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const getDeviceType = (): "desktop" | "mobile" | "tablet" => {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
};

const getBrowser = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Outro";
};

const getOS = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  return "Outro";
};

const getSessionId = (): string => {
  let sid = sessionStorage.getItem("wedo_sid");
  if (!sid) {
    sid = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    sessionStorage.setItem("wedo_sid", sid);
  }
  return sid;
};

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) return;

    const track = async () => {
      await supabase.functions.invoke("track-pageview", {
        body: {
          page_url: location.pathname,
          page_title: document.title,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          device_type: getDeviceType(),
          browser: getBrowser(),
          os: getOS(),
          screen_width: window.innerWidth,
          screen_height: window.innerHeight,
          session_id: getSessionId(),
        },
      });
    };

    const timeout = setTimeout(track, 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return null;
};

export default PageTracker;

import { ArrowRight } from "lucide-react";
import { useCTASettings } from "@/hooks/useSiteSettings";

export default function FloatingCTA() {
  const { ctaUrl, ctaText } = useCTASettings();
  return (
    <a
      href={ctaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-float"
      aria-label={ctaText}
    >
      <span className="hidden sm:inline">{ctaText}</span>
      <ArrowRight className="w-5 h-5" />
    </a>
  );
}

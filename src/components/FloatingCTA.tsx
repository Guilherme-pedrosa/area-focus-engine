import { ExternalLink } from "lucide-react";

const LINKTREE_URL = "https://linktr.ee/wedocorp";

export default function FloatingCTA() {
  return (
    <a
      href={LINKTREE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-float"
      aria-label="Acessar Atendimento via Linktree"
    >
      <span className="hidden sm:inline">Acessar Atendimento</span>
      <ExternalLink className="w-5 h-5" />
    </a>
  );
}

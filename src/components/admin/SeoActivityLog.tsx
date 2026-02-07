import { ActivityLog } from "@/types/seoAdmin";

interface SeoActivityLogProps {
  logs: ActivityLog[];
}

export default function SeoActivityLog({ logs }: SeoActivityLogProps) {
  if (logs.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">📋 ÚLTIMAS ATIVIDADES:</h3>
      <div className="space-y-1 max-h-32 overflow-y-auto">
        {logs.slice(0, 10).map((log) => (
          <div key={log.id} className="text-sm text-muted-foreground">
            <span className="font-mono text-xs">{log.timestamp}</span>
            <span className="mx-2">-</span>
            <span>{log.action}:</span>
            <span className="ml-1 text-foreground">{log.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  /** Assente sull'ultimo elemento: la pagina corrente non si linka da sé. */
  to?: string;
}

/**
 * Breadcrumb visibili. Il markup BreadcrumbList è già nel JSON-LD di ogni
 * pagina, ma Google mostra il percorso nei risultati solo quando lo trova anche
 * nella pagina — e per l'utente è il modo più rapido per capire dove si trova
 * dentro un sito con sessanta pagine.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Percorso" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground font-ui">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/80" aria-current="page">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight size={14} className="opacity-50" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { settori } from "@/data/settori";
import { services } from "@/data/services";

/**
 * Rimanda dall'articolo alle pagine hub (settore o servizio) a cui appartiene,
 * in base ai suoi `tags`.
 *
 * È la metà "articolo → hub" del topic cluster: dà a Google il segnale di quale
 * pagina l'articolo sostiene, e all'utente che ha appena letto una guida la via
 * più breve verso l'offerta.
 */
export default function HubDiRiferimento({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;

  const voci = tags
    .map((tag) => {
      const settore = settori.find((s) => s.slug === tag);
      if (settore) return { to: `/${settore.slug}`, label: settore.label, desc: settore.mainKeyword };
      const servizio = services.find((s) => s.slug === tag);
      if (servizio) return { to: `/servizi/${servizio.slug}`, label: servizio.title, desc: servizio.title };
      return null;
    })
    .filter((v): v is { to: string; label: string; desc: string } => v !== null);

  if (voci.length === 0) return null;

  return (
    <section className="my-16 border border-border rounded-2xl p-6 sm:p-8 bg-card">
      <h2 className="font-display text-2xl font-bold mb-2">Come lo facciamo noi</h2>
      <p className="text-muted-foreground mb-6">
        Le pagine che spiegano il servizio di cui parla questa guida.
      </p>
      <div className="flex flex-col gap-3">
        {voci.map((v) => (
          <Link
            key={v.to}
            to={v.to}
            className="group flex items-center justify-between gap-4 border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
          >
            <span className="font-ui font-semibold group-hover:text-primary transition-colors">
              {v.label}
            </span>
            <ArrowUpRight size={18} className="text-primary shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}

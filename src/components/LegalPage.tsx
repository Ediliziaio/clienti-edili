/**
 * Impaginazione condivisa delle pagine legali (privacy e cookie policy):
 * colonna stretta, tipografia leggibile, nessuna animazione d'ingresso — sono
 * pagine che si leggono, non che si devono far notare.
 */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] mb-3">{title}</h1>
        <p className="text-muted-foreground text-sm font-ui mb-12">
          Ultimo aggiornamento: {updated}
        </p>
        <div
          className="prose prose-invert max-w-none
            prose-headings:font-display prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground prose-li:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
        >
          {children}
        </div>
      </div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

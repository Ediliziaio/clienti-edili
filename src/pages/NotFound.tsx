import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";

const NotFound = () => {
  return (
    <Layout>
      <SeoHead
        title="Pagina Non Trovata — ClientiEdili"
        description="La pagina che cerchi non esiste. Torna alla homepage di ClientiEdili per scoprire i nostri servizi di marketing digitale per imprese edili."
        canonical="https://clientiedili.com/404"
        noindex
      />
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-8xl font-display font-bold text-primary mb-6">404</p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Pagina non trovata
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            La pagina che stai cercando non esiste o è stata spostata. Ecco alcune pagine utili di ClientiEdili:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-carino">
              Torna alla Homepage
            </Link>
            <Link to="/servizi" className="btn-carino-outline">
              Scopri i Servizi
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <Link to="/progetti" className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <p className="font-semibold mb-1">Progetti</p>
              <p className="text-muted-foreground">I nostri lavori per imprese edili</p>
            </Link>
            <Link to="/blog" className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <p className="font-semibold mb-1">Blog</p>
              <p className="text-muted-foreground">Guide e strategie di marketing</p>
            </Link>
            <Link to="/contatti" className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <p className="font-semibold mb-1">Contatti</p>
              <p className="text-muted-foreground">Parla con il nostro team</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

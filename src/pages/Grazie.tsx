import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Phone, MessageCircle, Clock, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";

const PHONE = "+393501782744";
const PHONE_DISPLAY = "+39 350 178 2744";

export default function Grazie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Grazie — Richiesta Ricevuta | ClientiEdili"
        description="Grazie, abbiamo ricevuto la tua richiesta. Verrai chiamato nelle prossime ore da un nostro consulente."
        canonical="https://clientiedili.com/grazie"
        noindex
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Check animato */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="mx-auto mb-8 w-24 h-24 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 18 }}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background"
            >
              <Check size={36} strokeWidth={3} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Grazie! Abbiamo ricevuto la tua richiesta
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-4">
              Verrai <span className="text-primary font-semibold">chiamato nelle prossime ore</span> da un nostro Consulente.
            </p>

            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm bg-card border border-border rounded-full px-4 py-2 mb-10">
              <Clock size={15} className="text-primary" />
              Tieni il telefono a portata di mano
            </div>

            {/* Azioni rapide */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-background font-ui font-semibold rounded-full px-7 py-3.5 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} /> Scrivici su WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-border rounded-full px-7 py-3.5 font-ui font-semibold hover:border-primary/40 transition-colors"
              >
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-ui text-sm"
              >
                <ArrowLeft size={16} /> Torna alla home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

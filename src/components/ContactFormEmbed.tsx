import { EicLeadForm } from "@/components/EicLeadForm";

interface ContactFormEmbedProps {
  className?: string;
  height?: number;
  /**
   * Carica il form subito invece che in lazy. Da usare dove il form è l'elemento
   * principale della pagina (es. /contatti): lì il caricamento differito lo fa
   * comparire con un ritardo visibile proprio sull'elemento che deve convertire.
   */
  eager?: boolean;
}

/**
 * Form di richiesta contatto (embed EdiliziaInCloud Form Builder).
 * I lead inviati dal form arrivano direttamente nel CRM di EdiliziaInCloud,
 * con la campagna di provenienza (UTM, gclid, fbclid).
 */
export default function ContactFormEmbed({
  className = "",
  height = 640,
  eager = false,
}: ContactFormEmbedProps) {
  return <EicLeadForm slug="clienti-edili" height={height} eager={eager} className={className} />;
}

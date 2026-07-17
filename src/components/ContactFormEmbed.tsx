interface ContactFormEmbedProps {
  className?: string;
  height?: number;
}

/**
 * Form di richiesta contatto (embed EdiliziaInCloud Form Builder).
 * I lead inviati dal form arrivano direttamente nel CRM di EdiliziaInCloud.
 */
export default function ContactFormEmbed({
  className = "",
  height = 640,
}: ContactFormEmbedProps) {
  return (
    <iframe
      src="https://app.ediliziaincloud.com/f?slug=clienti-edili&company_id=00000000-0000-0000-0000-000000000001"
      width="100%"
      height={height}
      style={{ border: 0, maxWidth: 640, margin: "0 auto", display: "block" }}
      loading="lazy"
      title="Richiedi informazioni"
      className={className}
    />
  );
}

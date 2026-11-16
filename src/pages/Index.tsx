import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Globe, Search, MapPin, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import SeoHead from "@/components/SeoHead";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import { blogPosts } from "@/data/blogPosts";

const services = [
  { slug: "sito-web-edile", icon: Globe, title: "Un sito che spiega il tuo lavoro", text: "Servizi, zone servite e lavori realizzati organizzati per aiutare chi cerca un’impresa a capire cosa puoi fare." },
  { slug: "seo-locale", icon: Search, title: "Le ricerche nella tua zona", text: "Pagine e contenuti costruiti intorno ai servizi dell’impresa e alle ricerche pertinenti sul territorio." },
  { slug: "google-my-business", icon: MapPin, title: "La tua presenza su Google Maps", text: "Informazioni dell’attività, servizi, fotografie e collegamenti coerenti tra il profilo Google e il sito." },
  { slug: "social-media", icon: Share2, title: "I cantieri raccontati sui social", text: "Una presenza coordinata per presentare attività, aggiornamenti e lavori attraverso Facebook e Instagram." },
];
const faq = [
  ["Da dove iniziamo se non ho un sito?", "Partiamo dai servizi che offri, dalle zone in cui lavori e dai materiali disponibili. Queste informazioni servono a definire pagine, contenuti e percorso di contatto."],
  ["Potete migliorare un sito già esistente?", "La prima valutazione riguarda contenuti, navigazione, presenza sui motori di ricerca e modalità di contatto. Da qui si definiscono gli interventi pertinenti al progetto."],
  ["Cosa devo preparare per il primo confronto?", "Una descrizione dei servizi, le zone servite, i recapiti e una selezione di lavori che puoi documentare. Se hai già un sito o un profilo Google, indica anche quei collegamenti."],
  ["Il sito garantisce nuovi clienti?", "Il sito è una parte del percorso commerciale. Richieste e risultati dipendono anche da domanda, concorrenza, offerta e gestione dei contatti. Obiettivi e misurazione vanno definiti insieme."],
];

export default function Index() {
  return <Layout>
    <SeoHead title="Siti web e marketing per imprese edili | ClientiEdili" description="Siti web, SEO locale e Google Maps per imprese edili. Presenta servizi e lavori con chiarezza e costruisci un percorso di contatto per la tua impresa." canonical="https://clientiedili.com/" jsonLd={{ "@type": "Organization", name: "ClientiEdili", url: "https://clientiedili.com/", logo: "https://clientiedili.com/og-image.jpg" }} />
    <div className="ce-home">
      <section className="ce-hero ce-wrap" aria-labelledby="hero-title">
        <div className="ce-hero-copy">
          <p className="ce-eyebrow">Clienti Edili · Presenza online</p>
          <h1 id="hero-title">Siti web e marketing<br />per imprese edili.</h1>
          <p className="ce-lead">Aiutiamo le imprese edili a presentare servizi e cantieri online, farsi conoscere nella propria zona e rendere più semplice il primo contatto.</p>
          <div className="ce-actions"><Link className="btn-carino" to="/contatti">Parliamo della tua impresa <ArrowUpRight size={20} /></Link><a className="ce-text-link" href="#servizi">Vedi i servizi <ArrowRight size={18} /></a></div>
          <p className="ce-note">Imprese di costruzione · Ristrutturazioni · Professionisti dell’edilizia</p>
        </div>
        <aside className="ce-journey" aria-label="Il percorso dal sito al contatto"><div className="ce-journey-bar"><span>Clienti Edili</span><Globe size={18}/></div><p className="ce-eyebrow">Dal servizio alla richiesta</p><h2>Chi ti cerca deve capire cosa fai.</h2><ol>{[
["01", "Una presenza riconoscibile", "Servizi e zone in cui opera l’impresa.", "/servizi/sito-web-edile"],
["02", "Informazioni pertinenti", "Contenuti collegati alle ricerche locali.", "/servizi/seo-locale"],
["03", "Lavori documentati", "Fotografie e descrizioni degli interventi.", "/blog/scheda-lavoro-realizzato-sito-impresa-edile"],
["04", "Un contatto semplice", "Una richiesta che arriva al referente dell’impresa.", "/contatti"],
].map(([n,t,d,u])=><li key={n}><Link to={u}><span className="ce-journey-number">{n}</span><span><strong>{t}</strong><small>{d}</small></span><ArrowUpRight size={18}/></Link></li>)}</ol></aside>
      </section>
      <nav className="ce-wrap ce-service-rail" aria-label="Servizi per la tua impresa">{services.map(s=><Link key={s.slug} to={`/servizi/${s.slug}`}><s.icon size={20}/><span>{s.slug === "sito-web-edile" ? "Siti web" : s.slug === "seo-locale" ? "SEO locale" : s.slug === "google-my-business" ? "Google Maps" : "Social media"}</span><ArrowUpRight size={16}/></Link>)}</nav>
      <section id="servizi" className="ce-wrap ce-section" aria-labelledby="services-title">
        <div className="ce-section-heading"><div><p className="ce-eyebrow">Cosa possiamo fare</p><h2 id="services-title">Dall’impresa al primo contatto.</h2></div><p>Ogni canale ha un compito. Li colleghiamo a un percorso comprensibile per chi cerca i tuoi servizi.</p></div>
        <div className="ce-service-grid">{services.map(s=><article key={s.slug} className="ce-service-card"><Link to={`/servizi/${s.slug}`}><div className="ce-service-icon"><s.icon size={30} strokeWidth={1.5}/></div><h3>{s.title}</h3><p>{s.text}</p><span className="ce-card-action">Vedi il servizio <ArrowUpRight size={18}/></span></Link></article>)}</div>
      </section>
      <section className="ce-process-band"><div className="ce-wrap ce-section"><p className="ce-eyebrow">Il percorso di lavoro</p><h2>Prima i contenuti. Poi il progetto.</h2><ol className="ce-process">{[
        ["Conosciamo l’impresa", "Servizi, territorio, clienti a cui ti rivolgi e obiettivi del sito."],
        ["Organizziamo i materiali", "Fotografie utilizzabili, descrizioni dei lavori e informazioni da completare."],
        ["Definiamo il percorso", "Pagine, canali e modalità con cui una richiesta arriva alla tua impresa."],
      ].map(([t,d],i)=><li key={t}><span className="ce-step">0{i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><Link className="ce-text-link" to="/blog/brief-sito-web-impresa-edile">Prepara il brief del sito <ArrowRight size={18}/></Link></div></section>
      <section className="ce-wrap ce-section" aria-labelledby="guides-title"><div className="ce-section-heading"><div><p className="ce-eyebrow">Risorse per l’impresa</p><h2 id="guides-title">Decidi con le informazioni giuste.</h2></div><Link className="ce-text-link" to="/blog">Leggi tutte le guide <ArrowRight size={18}/></Link></div><div className="ce-guide-grid">{["local-pack-google-imprese-edili","whatsapp-business-impresa-edile","scheda-lavoro-realizzato-sito-impresa-edile"].flatMap(slug => blogPosts.filter(post => post.slug === slug)).map(p=><article key={p.slug}><p className="ce-eyebrow">{p.category}</p><h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3><p>{p.excerpt}</p><Link className="ce-text-link" to={`/blog/${p.slug}`}>Leggi la guida <ArrowUpRight size={16}/></Link></article>)}</div></section>
      <section id="faq" className="ce-wrap ce-section ce-faq" aria-labelledby="faq-title"><div><p className="ce-eyebrow">Prima di iniziare</p><h2 id="faq-title">Le domande sul progetto.</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section id="contatti" className="ce-wrap ce-section ce-contact" aria-labelledby="contact-title"><div><p className="ce-eyebrow">Il prossimo passo</p><h2 id="contact-title">Raccontaci la tua impresa.</h2><p>Indica che cosa fai, dove lavori e che cosa vorresti migliorare nella tua presenza online.</p><Link className="ce-text-link" to="/contatti">Vai alla pagina contatti <ArrowUpRight size={18}/></Link></div><ContactFormEmbed className="ce-contact-form" /></section>
    </div>
  </Layout>;
}

import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import { getButtonClassName } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";

const languageFlags: { code: string; flagPath: string; name: string }[] = [
  { code: "NL", flagPath: "/flags/nl.svg", name: "Nederlands" },
  { code: "PL", flagPath: "/flags/pl.svg", name: "Pools" },
  { code: "EN", flagPath: "/flags/gb.svg", name: "Engels" },
  { code: "SE", flagPath: "/flags/se.svg", name: "Zweeds" },
  { code: "NO", flagPath: "/flags/no.svg", name: "Noors" },
  { code: "DK", flagPath: "/flags/dk.svg", name: "Deens" },
  { code: "FR", flagPath: "/flags/fr.svg", name: "Frans" },
  { code: "IT", flagPath: "/flags/it.svg", name: "Italiaans" },
];

export default function Home() {
  return (
    <>
      <SeoHead
        title="Beëdigde vertaling en tolkdiensten in Nederland | Vertaalbureau Magda"
        description="Professionele vertaler en tolk voor beëdigde vertaling, zakelijke teksten en taaltraining in Nederland. Talen: Zweeds, Noors, Deens, Pools, Engels, Frans en Italiaans."
        keywords="beëdigde vertaling, tolk, vertaler, taaltraining, Zweeds, Noors, Deens, Pools, Engels, Frans, Italiaans"
      />
      <div className="page-container page-section">
        <section className="hero-shell hero-with-photo space-y-6 md:space-y-7">
          <div className="hero-copy space-y-6 md:space-y-7">
            <p className="hero-label">Premium taalpartner in Nederland</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Vertalingen en tolkdiensten met precisie, vertrouwen en stijl
            </h1>
            <p className="text-base leading-relaxed text-slate-100 sm:text-lg">
              Vertaalbureau Magda ondersteunt particulieren, bedrijven en instellingen met nauwkeurige schriftelijke
              vertalingen, beëdigde vertalingen en tolkwerk. Elke opdracht wordt uitgevoerd met oog voor context,
              terminologie en het doel van de tekst.
            </p>
            <div className="gold-divider" />
            <a href="https://wa.me/31622438574" className={getButtonClassName("primary", "lg")}>
              Start uw WhatsApp-aanvraag
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="section-subtitle">Diensten in het kort</h2>
            <ul className="mt-4 space-y-2 leading-relaxed text-gray-700">
              <li>Schriftelijke vertalingen voor juridische, technische en zakelijke documenten.</li>
              <li>Beëdigde vertaling voor officiële stukken en procedures.</li>
              <li>Tolkdiensten bij gesprekken, vergaderingen en formele afspraken.</li>
              <li>Taaltrainingen op maat voor professionals en particulieren.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="section-subtitle">Talen</h2>
            <ul className="mt-4 grid grid-cols-4 gap-3" role="list">
              {languageFlags.map((lang) => (
                <li key={lang.code} role="listitem" className="list-none">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={lang.flagPath}
                      alt={`${lang.name} vlag`}
                      className="!h-8 !w-12 shrink-0 rounded border border-black/10 object-cover shadow-sm"
                    />
                    <span className="text-xs font-semibold text-[#3E6C62]">{lang.code}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="section-subtitle">Snelle aanvraag</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Stuur uw document of vraag via WhatsApp en ontvang snel een heldere offerte met planning.
            </p>
            <Link href="/contact" className={`mt-4 ${getButtonClassName("secondary")}`}>
              Naar contact
            </Link>
          </Card>
        </section>

        <Section>
          <h2 className="section-subtitle">Waarom Vertaalbureau Magda</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
            <li>Ruim 30 jaar praktijkervaring in vertalen, tolken en taaltraining.</li>
            <li>Academische basis in Scandinavische talen en Engels.</li>
            <li>Heldere communicatie, vertrouwelijkheid en betrouwbare levertijden.</li>
            <li>Menselijke vakkennis met aandacht voor stijl, nuance en cultuur.</li>
          </ul>
        </Section>
      </div>
    </>
  );
}

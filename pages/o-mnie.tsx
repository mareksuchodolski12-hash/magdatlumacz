import SeoHead from "@/components/SeoHead";
import Section from "@/components/ui/Section";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <SeoHead
        title="Over mij | Magda Czapp - vertaler, tolk en taaltrainer"
        description="Maak kennis met Magda Czapp: vertaler, tolk en specialist in beëdigde vertaling, juridische vertaling en taaltraining in Nederland."
        keywords="vertaler, tolk, beëdigde vertaling, taaltraining, Engels, Zweeds, Noors, Deens, Pools"
      />
      <div className="page-container page-section">
        <Section className="space-y-8">
          <h1 className="section-title">Magda Czapp - vertaler, tolk en taaltrainer</h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[440px_1fr]">
            <aside className="portrait-shell space-y-6">
              <div className="about-photo-frame">
                <button
                  type="button"
                  className="about-photo-link"
                  aria-label="Toon de foto van Magda Czapp in groot formaat"
                  aria-haspopup="dialog"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  <img
                    src="/about-magda.png"
                    alt="Magda Czapp"
                    className="about-photo"
                  />
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3D6D61]">Vertaalbureau Magda</p>
                <p className="text-xl font-semibold text-[#213B34]">Betrouwbare taalexpertise sinds 1991</p>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
                <li>Vertaler, tolk en taaltrainer</li>
                <li>Specialisatie in juridische en zakelijke context</li>
                <li>Discreet, nauwkeurig en deadlinegericht</li>
              </ul>
            </aside>

            <div className="space-y-6">
              <h2 className="section-subtitle">Wie ik ben</h2>
              <p className="readable-copy">
                Ik leid Vertaalbureau Magda in Nederland. Het bureau, opgericht in 2002, bouwt voort op de praktijk
                die sinds 1991 in Gdynia is opgebouwd. Ik werk voor particuliere en zakelijke klanten die kwaliteit,
                nauwkeurigheid en discretie verwachten.
              </p>

              <h2 className="section-subtitle">Ervaring, opleiding en specialisaties</h2>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-gray-700">
                <li>Drs. Scandinavistiek en Engels, Universiteit van Gdansk.</li>
                <li>Ruime ervaring als vertaler en tolk in het Nederlands, Engels, Zweeds, Noors, Deens en Pools.</li>
                <li>Aanvullende praktijk in Frans en Italiaans binnen internationale opdrachten.</li>
                <li>NT2 Programma II met staatsdiploma; inzetbaar voor vertalingen van en naar het Nederlands.</li>
                <li>Specialisaties: juridische, technische en zakelijke teksten, inclusief beedigde vertaling.</li>
              </ul>

              <h2 className="section-subtitle">Mijn kwaliteitsaanpak</h2>
              <p className="readable-copy">
                Een goede vertaling is meer dan woord-voor-woord overzetten. Ik bewaak betekenis, register en stijl,
                rekening houdend met cultuur, context en doelgroep. Zo sluit de eindtekst aan op het beoogde gebruik.
              </p>

              <h3 className="text-lg font-semibold tracking-tight text-[#213B34]">Samenwerkingsstandaard</h3>
              <p className="readable-copy">
                U kunt rekenen op vertrouwelijkheid, duidelijke afspraken en tijdige oplevering. Ik werk transparant:
                vooraf heldere prijsinformatie, daarna een zorgvuldige uitvoering.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {isPreviewOpen ? (
        <div
          className="about-photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Grote foto van Magda Czapp"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="about-photo-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="about-photo-lightbox-close"
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Sluit fotovoorvertoning"
            >
              Sluiten
            </button>
            <div className="about-photo-preview-frame">
              <img
                src="/about-magda.png"
                alt="Magda Czapp"
                className="about-photo-preview"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

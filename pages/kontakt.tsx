import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import { getButtonClasses } from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Kontakt | Szybka wycena tłumaczenia w Holandii"
        description="Skontaktuj się i otrzymaj szybką wycenę tłumaczenia. WhatsApp, telefon, e-mail. Poufna obsługa dokumentów i profesjonalne wsparcie na każdym etapie."
        keywords="kontakt tłumacz Holandia, wycena tłumaczenia online, tłumacz WhatsApp"
      />
      <div className="page-container page-section">
        <Section className="space-y-4">
          <h1 className="section-title">Skontaktuj się i zamów tłumaczenie</h1>
          <p className="readable-copy">
            W wiadomości podaj język, rodzaj dokumentu i oczekiwany termin, aby szybko otrzymać precyzyjną ofertę.
          </p>
        </Section>

        <Card as="section">
          <h2 className="section-subtitle">Dane kontaktowe</h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-slate-700">
            <li>
              WhatsApp:{" "}
              <a className={getButtonClasses("primary")} href="https://wa.me/31622438574">
                +31 622438574
              </a>
            </li>
            <li>Telefon: +31 622438574</li>
            <li>E-mail: info@vertaalbureaumagda.nl</li>
          </ul>
        </Card>

        <Section>
          <h3 className="section-subtitle">Poufność i bezpieczeństwo danych</h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            Wszystkie materiały traktowane są jako poufne i używane wyłącznie do realizacji usługi. To fundament
            zaufania i standardu współpracy Vertaalbureau Magda.
          </p>
        </Section>
      </div>
    </>
  );
}

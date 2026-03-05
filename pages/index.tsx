import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import { getButtonClassName } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";

const languages = ["NL", "PL", "EN", "SE", "NO", "DK", "FR", "IT"];

export default function Home() {
  return (
    <>
      <SeoHead
        title="Tłumacz przysięgły w Holandii | Vertaalbureau Magda"
        description="Profesjonalne tłumaczenia pisemne, ustne i przysięgłe w Holandii. 30+ lat doświadczenia, wsparcie dla firm i klientów indywidualnych, szybka i bezpłatna wycena."
        keywords="tłumacz przysięgły Holandia, biuro tłumaczeń Holandia, tłumaczenia niderlandzki polski"
      />
      <div className="page-container page-section">
        <section className="hero-shell space-y-6 md:space-y-7">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Profesjonalne tłumaczenia i szkolenia językowe w Holandii
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Vertaalbureau Magda oferuje tłumaczenia pisemne, ustne i przysięgłe dla klientów indywidualnych, firm
            oraz instytucji. Każdy projekt realizowany jest z uwzględnieniem kontekstu kulturowego i celu dokumentu.
          </p>
          <a
            href="https://wa.me/31622438574"
            className={getButtonClassName("primary", "lg")}
          >
            Napisz na WhatsApp
          </a>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="section-subtitle">Skrót usług</h2>
            <ul className="mt-4 space-y-2 leading-relaxed text-slate-700">
              <li>Tłumaczenia pisemne: urzędowe, prawne, techniczne i biznesowe.</li>
              <li>Tłumaczenia ustne podczas spotkań, konsultacji i rozmów formalnych.</li>
              <li>Tłumaczenia przysięgłe zgodne z wymaganiami instytucji.</li>
              <li>Szkolenia językowe indywidualne i firmowe.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="section-subtitle">Obsługiwane języki</h2>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {languages.map((language) => (
                <li key={language} role="listitem" className="language-pill list-none">
                  {language}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="section-subtitle">Szybki kontakt</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Napisz na WhatsApp, aby otrzymać bezpłatną wycenę i proponowany termin realizacji tłumaczenia.
            </p>
            <Link href="/kontakt" className={`mt-4 ${getButtonClassName("secondary")}`}>
              Przejdź do kontaktu
            </Link>
          </Card>
        </section>

        <Section>
          <h2 className="section-subtitle">Dlaczego warto wybrać Vertaalbureau Magda</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
            <li>Ponad 30 lat doświadczenia w tłumaczeniach i edukacji językowej.</li>
            <li>Ekspertyza filologiczna: skandynawistyka i anglistyka.</li>
            <li>Poufność danych, terminowość i transparentny proces współpracy.</li>
            <li>Jakość oparta na wiedzy eksperckiej zamiast automatycznych przekładów.</li>
          </ul>
        </Section>
      </div>
    </>
  );
}

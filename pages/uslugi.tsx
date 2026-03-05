import SeoHead from "@/components/SeoHead";

const services = [
  {
    title: "Tłumaczenia pisemne",
    description: "Dokumenty urzędowe, prawne, techniczne i biznesowe przygotowane z dbałością o terminologię.",
  },
  {
    title: "Tłumaczenia ustne",
    description: "Wsparcie językowe podczas spotkań urzędowych, konsultacji i rozmów biznesowych.",
  },
  {
    title: "Tłumaczenia przysięgłe",
    description: "Tłumaczenia poświadczone zgodnie z wymogami instytucji w Holandii i za granicą.",
  },
  {
    title: "Tłumaczenia prawnicze",
    description: "Umowy, pełnomocnictwa i pisma formalne z zachowaniem poprawności prawnej.",
  },
  {
    title: "Tłumaczenia techniczne",
    description: "Dokumentacja techniczna, instrukcje oraz materiały branżowe dla firm.",
  },
  {
    title: "Tłumaczenia biznesowe",
    description: "Oferty, raporty, korespondencja i materiały wspierające współpracę międzynarodową.",
  },
  {
    title: "Szkolenia językowe",
    description: "Kursy indywidualne i firmowe, w tym Business English, dopasowane do celów uczestników.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Usługi tłumaczeniowe w Holandii | Tłumaczenia pisemne, ustne i przysięgłe"
        description="Kompleksowe usługi tłumaczeniowe: tłumaczenia dokumentów, tłumaczenia przysięgłe, interpretacja oraz szkolenia językowe dla firm i osób prywatnych."
        keywords="usługi tłumaczeniowe Holandia, tłumaczenia dokumentów, tłumaczenia ustne"
      />
      <section className="page-container page-section">
        <h1 className="text-3xl font-bold text-slate-900">Usługi tłumaczeniowe dopasowane do realnych potrzeb</h1>
        <p className="readable-copy">
          Każda usługa jest realizowana z naciskiem na jakość językową, zgodność formalną i bezpieczeństwo danych.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900">Proces współpracy</h3>
        <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-slate-700">
          <li>Przesyłasz zapytanie lub dokument do analizy.</li>
          <li>Otrzymujesz wycenę, termin i formę realizacji.</li>
          <li>Po akceptacji realizuję usługę i przekazuję gotowe materiały.</li>
        </ol>
      </section>
    </>
  );
}

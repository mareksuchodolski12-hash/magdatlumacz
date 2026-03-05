import SeoHead from "@/components/SeoHead";

const languages = ["NL", "PL", "EN", "SE", "NO", "DK", "FR", "IT"];

export default function Home() {
  return (
    <>
      <SeoHead
        title="Tłumacz przysięgły w Holandii | Vertaalbureau Magda"
        description="Profesjonalne tłumaczenia pisemne, ustne i przysięgłe w Holandii. 30+ lat doświadczenia, wsparcie dla firm i klientów indywidualnych, szybka i bezpłatna wycena."
        keywords="tłumacz przysięgły Holandia, biuro tłumaczeń Holandia, tłumaczenia niderlandzki polski"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Profesjonalne tłumaczenia i szkolenia językowe w Holandii
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Vertaalbureau Magda oferuje tłumaczenia pisemne, ustne i przysięgłe dla klientów indywidualnych, firm
            oraz instytucji. Każdy projekt realizowany jest z uwzględnieniem kontekstu kulturowego i celu dokumentu.
          </p>
          <a
            href="https://wa.me/31622438574"
            className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"
          >
            Napisz na WhatsApp
          </a>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Skrót usług</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Tłumaczenia pisemne: urzędowe, prawne, techniczne i biznesowe.</li>
              <li>Tłumaczenia ustne podczas spotkań, konsultacji i rozmów formalnych.</li>
              <li>Tłumaczenia przysięgłe zgodne z wymaganiami instytucji.</li>
              <li>Szkolenia językowe indywidualne i firmowe.</li>
            </ul>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Obsługiwane języki</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {languages.map((language) => (
                <span key={language} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                  {language}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Dlaczego warto wybrać Vertaalbureau Magda</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Ponad 30 lat doświadczenia w tłumaczeniach i edukacji językowej.</li>
            <li>Ekspertyza filologiczna: skandynawistyka i anglistyka.</li>
            <li>Poufność danych, terminowość i transparentny proces współpracy.</li>
            <li>Jakość oparta na wiedzy eksperckiej zamiast automatycznych przekładów.</li>
          </ul>
        </section>
      </div>
    </>
  );
}

import SeoHead from "@/components/SeoHead";

const allLanguages = ["Niderlandzki (NL)", "Polski (PL)", "Angielski (EN)", "Szwedzki (SE)", "Norweski (NO)", "Duński (DK)", "Francuski (FR)", "Włoski (IT)"];

export default function LanguagesPage() {
  return (
    <>
      <SeoHead
        title="Obsługiwane języki tłumaczeń | Niderlandzki, polski, angielski i skandynawskie"
        description="Sprawdź języki dostępne w ofercie tłumaczeń pisemnych, ustnych i szkoleń. Profesjonalna obsługa klientów prywatnych i biznesowych."
        keywords="tłumaczenia niderlandzki polski, tłumacz angielski holenderski, tłumaczenia języki skandynawskie"
      />
      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Języki i pary językowe dostępne w ofercie</h1>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Tłumaczenia pisemne i ustne</h2>
        <ul role="list" className="mt-4 grid gap-3 sm:grid-cols-2 text-slate-700">
          {allLanguages.map((language) => (
            <li key={language} className="rounded-lg bg-white p-4 shadow-sm">
              {language}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Dobór rozwiązania do celu</h2>
        <div className="mt-4 space-y-4 text-slate-700">
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Sprawy urzędowe i prawne</h3>
            <p>Tłumaczenia formalne z uwzględnieniem terminologii prawnej i wymogów instytucji.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Komunikacja biznesowa</h3>
            <p>Tłumaczenia wspierające negocjacje, współpracę międzynarodową i rozwój firmy.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Treści specjalistyczne</h3>
            <p>Obsługa dokumentacji technicznej i materiałów branżowych z naciskiem na spójność terminologiczną.</p>
          </article>
        </div>
      </section>
    </>
  );
}

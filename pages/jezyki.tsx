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
      <section className="page-container page-section">
        <h1 className="text-3xl font-bold text-slate-900">Języki i pary językowe dostępne w ofercie</h1>

        <h2 className="text-2xl font-semibold text-slate-900">Tłumaczenia pisemne i ustne</h2>
        <ul role="list" className="grid grid-cols-1 gap-3 text-slate-700 md:grid-cols-2 lg:grid-cols-3">
          {allLanguages.map((language) => (
            <li key={language} role="listitem" className="rounded-lg bg-white p-4 shadow-sm">
              {language}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Dobór rozwiązania do celu</h2>
        <div className="space-y-4 text-slate-700">
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Sprawy urzędowe i prawne</h3>
            <p className="leading-relaxed">Tłumaczenia formalne z uwzględnieniem terminologii prawnej i wymogów instytucji.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Komunikacja biznesowa</h3>
            <p className="leading-relaxed">Tłumaczenia wspierające negocjacje, współpracę międzynarodową i rozwój firmy.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Treści specjalistyczne</h3>
            <p className="leading-relaxed">Obsługa dokumentacji technicznej i materiałów branżowych z naciskiem na spójność terminologiczną.</p>
          </article>
        </div>
      </section>
    </>
  );
}

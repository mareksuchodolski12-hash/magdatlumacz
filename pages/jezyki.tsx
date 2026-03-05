import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const allLanguages = ["Niderlandzki (NL)", "Polski (PL)", "Angielski (EN)", "Szwedzki (SE)", "Norweski (NO)", "Duński (DK)", "Francuski (FR)", "Włoski (IT)"];

export default function LanguagesPage() {
  return (
    <>
      <SeoHead
        title="Obsługiwane języki tłumaczeń | Niderlandzki, polski, angielski i skandynawskie"
        description="Sprawdź języki dostępne w ofercie tłumaczeń pisemnych, ustnych i szkoleń. Profesjonalna obsługa klientów prywatnych i biznesowych."
        keywords="tłumaczenia niderlandzki polski, tłumacz angielski holenderski, tłumaczenia języki skandynawskie"
      />
      <div className="page-container page-section">
        <Section className="space-y-6">
          <h1 className="section-title">Języki i pary językowe dostępne w ofercie</h1>

          <h2 className="section-subtitle">Tłumaczenia pisemne i ustne</h2>
          <ul role="list" className="grid grid-cols-1 gap-3 text-slate-700 md:grid-cols-2 lg:grid-cols-3">
            {allLanguages.map((language) => (
              <li
                key={language}
                role="listitem"
                className="rounded-xl border border-slate-200/80 bg-white p-4 font-medium shadow-[0_8px_28px_-20px_rgba(15,23,42,0.55)]"
              >
                {language}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="section-subtitle">Dobór rozwiązania do celu</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 text-slate-700 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">Sprawy urzędowe i prawne</h3>
              <p className="mt-2 leading-relaxed">
                Tłumaczenia formalne z uwzględnieniem terminologii prawnej i wymogów instytucji.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">Komunikacja biznesowa</h3>
              <p className="mt-2 leading-relaxed">
                Tłumaczenia wspierające negocjacje, współpracę międzynarodową i rozwój firmy.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">Treści specjalistyczne</h3>
              <p className="mt-2 leading-relaxed">
                Obsługa dokumentacji technicznej i materiałów branżowych z naciskiem na spójność terminologiczną.
              </p>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
}

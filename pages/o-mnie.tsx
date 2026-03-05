import SeoHead from "@/components/SeoHead";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="O mnie | Magda Czapp – tłumacz przysięgły i trener językowy"
        description="Poznaj kwalifikacje i doświadczenie Magdy Czapp. Tłumaczenia przysięgłe i specjalistyczne, praktyka międzynarodowa oraz podejście oparte na jakości i odpowiedzialności."
        keywords="Magda Czapp tłumacz, tłumacz przysięgły niderlandzki, doświadczony tłumacz Holandia"
      />
      <section className="page-container page-section">
        <h1 className="text-3xl font-bold text-slate-900">Magda Czapp — tłumacz, interpreter i trener językowy</h1>

        <h2 className="text-2xl font-semibold text-slate-900">Kim jestem</h2>
        <p className="readable-copy">
          Prowadzę Vertaalbureau Magda w Holandii, kontynuując wieloletnią praktykę biura tłumaczeń rozwijaną wcześniej
          w Polsce. Specjalizuję się w tłumaczeniach wymagających precyzji i odpowiedzialności formalnej.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Kwalifikacje i specjalizacje</h2>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
          <li>Magister filologii skandynawskiej i anglistyki (Uniwersytet Gdański).</li>
          <li>Praktyka w tłumaczeniach pisemnych, ustnych i przysięgłych.</li>
          <li>Doświadczenie w obsłudze dokumentów prawnych, urzędowych i biznesowych.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Podejście do jakości tłumaczenia</h2>
        <p className="readable-copy">
          Dobre tłumaczenie przekazuje sens, ton i intencję, a nie tylko słowa. Każdy tekst opracowuję z uwzględnieniem
          kontekstu kulturowego, norm językowych i celu komunikacyjnego.
        </p>

        <h3 className="text-xl font-semibold text-slate-900">Standard współpracy</h3>
        <p className="readable-copy">
          Współpraca opiera się na poufności, terminowości i przejrzystym kontakcie na każdym etapie realizacji
          zlecenia.
        </p>
      </section>
    </>
  );
}

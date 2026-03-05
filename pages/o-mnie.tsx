import SeoHead from "@/components/SeoHead";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="O mnie | Magda Czapp – tłumacz przysięgły i trener językowy"
        description="Poznaj kwalifikacje i doświadczenie Magdy Czapp. Tłumaczenia przysięgłe i specjalistyczne, praktyka międzynarodowa oraz podejście oparte na jakości i odpowiedzialności."
        keywords="Magda Czapp tłumacz, tłumacz przysięgły niderlandzki, doświadczony tłumacz Holandia"
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Magda Czapp — tłumacz, interpreter i trener językowy</h1>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Kim jestem</h2>
        <p className="mt-3 text-slate-700">
          Prowadzę Vertaalbureau Magda w Holandii, kontynuując wieloletnią praktykę biura tłumaczeń rozwijaną wcześniej
          w Polsce. Specjalizuję się w tłumaczeniach wymagających precyzji i odpowiedzialności formalnej.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Kwalifikacje i specjalizacje</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Magister filologii skandynawskiej i anglistyki (Uniwersytet Gdański).</li>
          <li>Praktyka w tłumaczeniach pisemnych, ustnych i przysięgłych.</li>
          <li>Doświadczenie w obsłudze dokumentów prawnych, urzędowych i biznesowych.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Podejście do jakości tłumaczenia</h2>
        <p className="mt-3 text-slate-700">
          Dobre tłumaczenie przekazuje sens, ton i intencję, a nie tylko słowa. Każdy tekst opracowuję z uwzględnieniem
          kontekstu kulturowego, norm językowych i celu komunikacyjnego.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-slate-900">Standard współpracy</h3>
        <p className="mt-3 text-slate-700">
          Współpraca opiera się na poufności, terminowości i przejrzystym kontakcie na każdym etapie realizacji
          zlecenia.
        </p>
      </section>
    </>
  );
}

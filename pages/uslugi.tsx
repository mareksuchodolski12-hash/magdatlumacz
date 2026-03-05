import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const services = [
  {
    title: "Schriftelijke vertalingen",
    description: "Officiële, juridische, technische en zakelijke documenten met consistente terminologie.",
  },
  {
    title: "Tolkdiensten",
    description: "Professionele tolkondersteuning bij afspraken, consulten en zakelijke gesprekken.",
  },
  {
    title: "Beëdigde vertalingen",
    description: "Beëdigde vertaling conform de eisen van overheden, rechtbanken en officiële instanties.",
  },
  {
    title: "Juridische vertalingen",
    description: "Contracten, volmachten en formele documenten met juridisch correcte formuleringen.",
  },
  {
    title: "Technische vertalingen",
    description: "Handleidingen, productspecificaties en vakinhoudelijke documentatie voor bedrijven.",
  },
  {
    title: "Zakelijke vertalingen",
    description: "Offertes, rapporten en correspondentie die internationale samenwerking ondersteunen.",
  },
  {
    title: "Taaltrainingen",
    description: "Trainingen in Engels, Zweeds, Deens, Noors en Pools voor teams en individuele cursisten.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Diensten | Vertalingen, beëdigde vertaling, tolk en taaltraining"
        description="Ontdek de diensten van Vertaalbureau Magda: schriftelijke vertalingen, beëdigde vertaling, tolkdiensten en taaltrainingen in meerdere talen."
        keywords="beëdigde vertaling, tolk, vertaler, taaltraining, juridisch, technisch, zakelijk"
      />
      <div className="page-container page-section">
        <Section className="space-y-6">
          <h1 className="section-title">Diensten afgestemd op uw praktijk</h1>
          <p className="readable-copy">
            Elke opdracht wordt uitgevoerd met focus op inhoudelijke precisie, formele correctheid en vertrouwelijke
            verwerking van documenten.
          </p>
          <div className="gold-divider" />
        </Section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h2 className="text-xl font-semibold tracking-tight text-[#213B34]">{service.title}</h2>
              <p className="mt-2 leading-relaxed text-gray-700">{service.description}</p>
            </Card>
          ))}
        </section>

        <Section>
          <h3 className="section-subtitle">Werkwijze</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-gray-700">
            <li>U stuurt uw vraag of document voor analyse.</li>
            <li>U ontvangt een duidelijke offerte, planning en levervorm.</li>
            <li>Na akkoord lever ik de vertaling of tolkdienst volgens afspraak.</li>
          </ol>
        </Section>
      </div>
    </>
  );
}

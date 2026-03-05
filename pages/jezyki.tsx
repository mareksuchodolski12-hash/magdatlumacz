import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const allLanguages = [
  {
    name: "Nederlands",
    code: "NL",
    flagPath: "/flags/nl.svg",
    accent: "#2F6B5B",
  },
  {
    name: "Engels",
    code: "EN",
    flagPath: "/flags/gb.svg",
    accent: "#345C9C",
  },
  {
    name: "Pools",
    code: "PL",
    flagPath: "/flags/pl.svg",
    accent: "#B73959",
  },
  {
    name: "Zweeds",
    code: "SE",
    flagPath: "/flags/se.svg",
    accent: "#2E5FA3",
  },
  {
    name: "Noors",
    code: "NO",
    flagPath: "/flags/no.svg",
    accent: "#A5333E",
  },
  {
    name: "Deens",
    code: "DK",
    flagPath: "/flags/dk.svg",
    accent: "#9C2F3D",
  },
  {
    name: "Frans",
    code: "FR",
    flagPath: "/flags/fr.svg",
    accent: "#3957A4",
  },
  {
    name: "Italiaans",
    code: "IT",
    flagPath: "/flags/it.svg",
    accent: "#2B7A57",
  },
];

export default function LanguagesPage() {
  const languageCount = allLanguages.length;

  return (
    <>
      <SeoHead
        title="Talen | NL <-> EN, PL, SE, NO, DK, FR, IT"
        description="Beschikbare taalkoppelingen voor vertaler en tolk: Nederlands met Engels, Pools, Zweeds, Noors, Deens, Frans en Italiaans."
        keywords="vertaler, tolk, beëdigde vertaling, Nederlands, Engels, Pools, Zweeds, Noors, Deens, Frans, Italiaans"
      />
      <div className="page-container page-section">
        <Section className="space-y-6">
          <div className="space-y-3">
            <h1 className="section-title">Talen en taalkoppelingen</h1>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#6F9E8F]/35 bg-[#F3F8F4] px-4 py-2 text-sm font-semibold text-[#2F5E53]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2F5E53] text-xs text-white">
                {languageCount}
              </span>
              Beschikbare talen
            </p>
          </div>

          <h2 className="section-subtitle">Vertalen en tolken</h2>
          <ul role="list" className="grid grid-cols-1 gap-4 text-gray-700 md:grid-cols-2 lg:grid-cols-3">
            {allLanguages.map((language) => (
              <li
                key={language.code}
                role="listitem"
                className="group rounded-2xl border bg-white/95 p-5 shadow-[0_10px_24px_-20px_rgba(33,59,52,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-20px_rgba(33,59,52,0.6)]"
                style={{ borderColor: `${language.accent}52` }}
              >
                <div className="mb-4 h-1 w-full rounded-full" style={{ backgroundColor: language.accent }} />
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-3xl leading-none">{language.code}</p>
                    <p className="text-xl font-semibold tracking-tight text-[#213B34]">{language.name}</p>
                  </div>
                  <span
                    className="language-flag language-flag-wave"
                    style={{ backgroundImage: `url(${language.flagPath})` }}
                    aria-hidden="true"
                  />
                  <span className="sr-only">
                    Vlag van {language.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="section-subtitle">Toepassing per context</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 text-gray-700 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-[#213B34]">Officieel en juridisch</h3>
              <p className="mt-2 leading-relaxed">
                Voor dossiers en procedures waarbij formele juistheid en juridische terminologie essentieel zijn.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-[#213B34]">Zakelijk</h3>
              <p className="mt-2 leading-relaxed">
                Voor internationale communicatie, onderhandelingen en professioneel klantcontact.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold tracking-tight text-[#213B34]">Technisch en specialistisch</h3>
              <p className="mt-2 leading-relaxed">
                Voor vakinhoudelijke documentatie waarbij consistentie en terminologische precisie doorslaggevend zijn.
              </p>
            </Card>
          </div>

          <h3 className="mt-8 text-lg font-semibold tracking-tight text-[#213B34]">Taaltrainingen</h3>
          <p className="mt-2 leading-relaxed text-gray-700">
            Trainingen worden aangeboden in Engels, Zweeds, Deens, Noors en Pools, afgestemd op uw leerdoel en
            werksituatie.
          </p>
        </Section>
      </div>
    </>
  );
}

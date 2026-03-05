import SeoHead from "@/components/SeoHead";

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title="Kontakt | Szybka wycena tłumaczenia w Holandii"
        description="Skontaktuj się i otrzymaj szybką wycenę tłumaczenia. WhatsApp, telefon, e-mail. Poufna obsługa dokumentów i profesjonalne wsparcie na każdym etapie."
        keywords="kontakt tłumacz Holandia, wycena tłumaczenia online, tłumacz WhatsApp"
      />
      <section className="page-container page-section">
        <h1 className="text-3xl font-bold text-slate-900">Skontaktuj się i zamów tłumaczenie</h1>
        <p className="readable-copy">
          W wiadomości podaj język, rodzaj dokumentu i oczekiwany termin, aby szybko otrzymać precyzyjną ofertę.
        </p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Dane kontaktowe</h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-slate-700">
            <li>
              WhatsApp:{" "}
              <a
                className="inline-flex min-h-11 items-center font-semibold text-emerald-700 hover:text-emerald-800"
                href="https://wa.me/31622438574"
              >
                +31 622438574
              </a>
            </li>
            <li>Telefon: +31 622438574</li>
            <li>E-mail: info@vertaalbureaumagda.nl</li>
          </ul>
        </div>

        <article className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Poufność i bezpieczeństwo danych</h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            Wszystkie materiały traktowane są jako poufne i używane wyłącznie do realizacji usługi. To fundament
            zaufania i standardu współpracy Vertaalbureau Magda.
          </p>
        </article>
      </section>
    </>
  );
}

import SeoHead from "@/components/SeoHead";
import Card from "@/components/ui/Card";
import { getButtonClassName } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ serviceType: "vertaling", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabels: { [key: string]: string } = {
      vertaling: "Vertaling",
      tolken: "Tolken",
      taaltraining: "Taaltraining",
      overig: "Overig",
    };
    const whatsappMessage = `Hallo, ik wil graag een vraag stellen over ${serviceLabels[formData.serviceType]}.\n\n${formData.message}`;
    const whatsappUrl = `https://wa.me/31622438574?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ serviceType: "vertaling", message: "" });
  };

  return (
    <>
      <SeoHead
        title="Contact | Snelle offerte voor vertaling en tolkdiensten"
        description="Neem contact op met Vertaalbureau Magda voor een snelle offerte. Beschikbaar via WhatsApp, telefoon en e-mail voor vertaling, tolkwerk en taaltraining."
        keywords="contact, vertaler, tolk, beëdigde vertaling, taaltraining, WhatsApp"
      />
      <div className="page-container page-section">
        <Section className="space-y-4">
          <h1 className="section-title">Contact opnemen</h1>
          <p className="readable-copy">
            Stuur uw vraag met taalcombinatie, documenttype en gewenste termijn. U ontvangt snel een duidelijke,
            professionele offerte.
          </p>
          <div className="gold-divider" />
        </Section>

        <Card as="section">
          <h2 className="section-subtitle">Stuur uw vraag via WhatsApp</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="serviceType" className="block text-sm font-semibold text-[#213B34]">
                  Waar gaat het om?
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#6F9E8F]/25 bg-white px-4 py-3 text-sm text-[#213B34] transition focus:border-[#6F9E8F] focus:outline-none"
                >
                  <option value="vertaling">Vertaling</option>
                  <option value="tolken">Tolken</option>
                  <option value="taaltraining">Taaltraining</option>
                  <option value="overig">Overig</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#213B34]">
                  Korte beschrijving
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Bv: Nederlands naar Engels, juridisch contract, dinsdag nodig..."
                  rows={3}
                  className="w-full rounded-xl border border-[#6F9E8F]/25 bg-white px-4 py-3 text-sm text-[#213B34] placeholder-[#6F9E8F]/40 transition focus:border-[#6F9E8F] focus:outline-none"
                />
              </div>

              <button type="submit" className={`mt-6 w-full ${getButtonClassName("primary")}`}>
                Öffnen in WhatsApp →
              </button>
            </form>
        </Card>

        <Card as="section">
          <h2 className="section-subtitle">Contactgegevens</h2>
          <ul className="mt-4 space-y-3 leading-relaxed text-gray-700">
            <li className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="font-medium text-[#3D6D61]">WhatsApp:</span>
              <a className={getButtonClassName("primary")} href="https://wa.me/31622438574">
                Vraag direct via +31 622438574
              </a>
            </li>
            <li>Telefoon: +31 622438574</li>
            <li>Adres: Achter de Hoven 5, 8131 CP Wijhe, Nederland</li>
          </ul>
        </Card>

        <Section>
          <h3 className="section-subtitle">Vertrouwelijkheid</h3>
          <p className="mt-3 leading-relaxed text-gray-700">
            Alle documenten worden strikt vertrouwelijk behandeld en uitsluitend gebruikt voor de uitvoering van uw
            opdracht. Discretie is een vast onderdeel van onze werkwijze.
          </p>
        </Section>
      </div>
    </>
  );
}

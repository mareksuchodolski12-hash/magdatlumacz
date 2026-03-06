import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Button, { getButtonClassName } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/diensten", label: "Diensten" },
  { href: "/talen", label: "Talen" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#213B34]">
      <header className="sticky top-0 z-40 border-b border-[#6F9E8F]/20 bg-white/90 backdrop-blur-md">
        <div className="page-container flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-[#213B34] md:text-xl">
            Vertaalbureau Magda
          </Link>

          <Button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Navigatiemenu openen of sluiten"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            variant="secondary"
            className="xl:hidden"
          >
            Menu
          </Button>

          <nav aria-label="Hoofdnavigatie" className="hidden xl:block">
            <ul className="flex flex-wrap gap-2 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-[#3D6D61] hover:bg-[#F3F8F4] hover:text-[#213B34]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobiele navigatie"
            className="border-t border-[#6F9E8F]/20 bg-white/95 xl:hidden"
          >
            <ul className="page-container flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${getButtonClassName("secondary")} w-full justify-start text-base`}
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="text-base leading-relaxed md:text-lg">{children}</main>

      <footer className="border-t border-[#6F9E8F]/20 bg-white/85 py-10 backdrop-blur-sm">
        <div className="page-container flex flex-col gap-3 text-sm text-[#3D6D61]">
          <p>© {new Date().getFullYear()} Vertaalbureau Magda</p>
          <p>Professionele vertalingen, tolkdiensten en taaltrainingen in Nederland.</p>
          <p>
            Website ontwikkeld door{" "}
            <a
              href="https://www.websitepilot.nl/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#2F6B5B] underline decoration-[#6F9E8F]/60 underline-offset-4 transition hover:text-[#213B34]"
            >
              WebsitePilot.nl
            </a>
          </p>
          <p className="w-fit rounded-full border border-[#6F9E8F]/35 bg-[#F3F8F4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#2B5E52] shadow-[0_8px_20px_-16px_rgba(33,59,52,0.75)]">
            Gecertificeerde taalexpertise voor bedrijven en particulieren
          </p>
        </div>
      </footer>
    </div>
  );
}

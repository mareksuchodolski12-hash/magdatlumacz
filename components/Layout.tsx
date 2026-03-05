import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Button, { getButtonClassName } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/jezyki", label: "Języki" },
  { href: "/kontakt", label: "Kontakt" },
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
    <div className="min-h-screen bg-transparent text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
        <div className="page-container flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900 md:text-xl">
            Vertaalbureau Magda
          </Link>

          <Button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            variant="secondary"
            className="xl:hidden"
          >
            Menu
          </Button>

          <nav aria-label="Główna nawigacja" className="hidden xl:block">
            <ul className="flex flex-wrap gap-2 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
            aria-label="Nawigacja mobilna"
            className="border-t border-slate-200/90 bg-white/95 xl:hidden"
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

      <footer className="border-t border-slate-200/90 bg-white/80 py-8 backdrop-blur-sm">
        <div className="page-container flex flex-col gap-2 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Vertaalbureau Magda</p>
          <p>Profesjonalne tłumaczenia i szkolenia językowe w Holandii.</p>
        </div>
      </footer>
    </div>
  );
}

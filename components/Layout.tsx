import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-900">
            Vertaalbureau Magda
          </Link>

          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            Menu
          </button>

          <nav aria-label="Główna nawigacja" className="hidden xl:block">
            <ul className="flex flex-wrap gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center px-2 text-slate-700 hover:text-slate-900">
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
            className="border-t border-slate-200 bg-white xl:hidden"
          >
            <ul className="mx-auto flex w-full max-w-screen-lg flex-col px-4 py-3 md:px-6 lg:px-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-12 w-full items-center rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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

      <main className="text-base leading-relaxed md:text-lg lg:text-xl">{children}</main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-2 px-4 text-sm text-slate-600 md:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Vertaalbureau Magda</p>
          <p>Profesjonalne tłumaczenia i szkolenia językowe w Holandii.</p>
        </div>
      </footer>
    </div>
  );
}

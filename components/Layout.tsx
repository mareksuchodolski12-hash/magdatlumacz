import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/jezyki", label: "Języki" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold text-slate-900">
            Vertaalbureau Magda
          </Link>
          <nav aria-label="Główna nawigacja">
            <ul className="flex flex-wrap gap-3 text-sm font-medium sm:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-700 hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Vertaalbureau Magda</p>
          <p>Profesjonalne tłumaczenia i szkolenia językowe w Holandii.</p>
        </div>
      </footer>
    </div>
  );
}

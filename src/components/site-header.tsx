import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/articulos", label: "Articulos" },
  { href: "/contactar", label: "Contactar" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-cyan-900">
          NextSat
        </Link>

        <nav aria-label="Principal" className="flex flex-wrap items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
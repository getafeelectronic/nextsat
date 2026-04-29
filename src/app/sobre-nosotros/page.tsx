import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia, valores y metodologia de NextSat para proyectos de electronica satelital.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-900">Sobre Nosotros</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Somos un equipo tecnico especializado en infraestructura y electronica
          satelital con enfoque en continuidad operativa.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">Mision</h2>
          <p className="mt-3 text-slate-700">
            Garantizar conectividad y estabilidad tecnica con soluciones
            satelitales confiables, claras y sostenibles.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">Vision</h2>
          <p className="mt-3 text-slate-700">
            Ser referentes regionales en despliegues satelitales de alta
            disponibilidad para hogares y empresas.
          </p>
        </article>
      </div>
    </section>
  );
}
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Bienvenido a NextSat: soluciones en electrónica satelital, soporte técnico especializado y cobertura profesional.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="rounded-3xl bg-gradient-to-r from-sky-900 via-cyan-800 to-emerald-700 p-10 text-white shadow-xl sm:p-14">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-100">
          Soluciones en electronica satelital
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Cobertura y soporte tecnico para tu red satelital en un solo lugar.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-cyan-50">
          Diseno, instalacion, mantenimiento y monitoreo con enfoque preventivo
          para hogares, comercios y operaciones remotas.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-white px-6 py-3 font-semibold text-cyan-900 transition hover:bg-cyan-100"
            href="/servicios"
          >
            Ver servicios
          </Link>
          <Link
            className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            href="/contactar"
          >
            Contactar ahora
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Diagnostico profesional</h2>
          <p className="mt-3 text-slate-600">
            Analisis de senal, cableado y equipos para detectar incidencias antes
            de que afecten el servicio.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Implementacion escalable</h2>
          <p className="mt-3 text-slate-600">
            Configuramos soluciones modulares que crecen con tus necesidades
            operativas y de conectividad.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Soporte continuo</h2>
          <p className="mt-3 text-slate-600">
            Atencion tecnica planificada y correctiva para mantener estabilidad y
            rendimiento en campo.
          </p>
        </article>
      </div>
    </section>
  );
}

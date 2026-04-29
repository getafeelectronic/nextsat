import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de instalacion, mantenimiento y optimizacion de sistemas satelitales para distintos escenarios.",
  alternates: {
    canonical: "/servicios",
  },
};

const services = [
  {
    title: "Instalacion de sistemas satelitales",
    text: "Implementacion inicial de equipos, antenas y configuraciones operativas.",
  },
  {
    title: "Mantenimiento preventivo",
    text: "Revisiones tecnicas periodicas para reducir riesgos de caidas y degradacion de senal.",
  },
  {
    title: "Recuperacion de servicio",
    text: "Atencion ante incidencias con diagnostico rapido y correccion de fallas.",
  },
  {
    title: "Optimizacion de red",
    text: "Ajustes de rendimiento para mejorar estabilidad, latencia y calidad de enlace.",
  },
];

export default function ServiciosPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-900">Servicios</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Cobertura tecnica integral para todo el ciclo de vida de tus soluciones
          de conectividad satelital.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-cyan-900">{service.title}</h2>
            <p className="mt-2 text-slate-700">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
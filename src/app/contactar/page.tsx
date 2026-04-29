import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactar",
  description:
    "Contacta con NextSat para solicitar instalacion, mantenimiento o asesoria en electronica satelital.",
  alternates: {
    canonical: "/contactar",
  },
};

export default function ContactarPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-900">Contactar</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Estamos listos para ayudarte con tu proyecto. Comparte tus necesidades
          y te responderemos con una propuesta tecnica.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <ul className="space-y-3 text-slate-700">
          <li>
            <strong>Correo:</strong> contacto@nextsat.com
          </li>
          <li>
            <strong>Telefono:</strong> +34 600 000 000
          </li>
          <li>
            <strong>Horario:</strong> Lunes a Viernes de 09:00 a 18:00
          </li>
          <li>
            <strong>Ubicacion:</strong> Servicio remoto y cobertura en campo
          </li>
        </ul>
      </div>
    </section>
  );
}
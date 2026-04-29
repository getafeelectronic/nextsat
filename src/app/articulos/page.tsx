import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articulos",
  description:
    "Articulos y guias practicas sobre conectividad, mantenimiento y buenas practicas en electronica satelital.",
  alternates: {
    canonical: "/articulos",
  },
};

const posts = [
  {
    slug: "mantenimiento-preventivo-satelital",
    title: "Por que el mantenimiento preventivo evita cortes criticos",
    excerpt:
      "Claves para planificar revisiones tecnicas y reducir incidencias en enlaces satelitales.",
  },
  {
    slug: "senal-estable-en-zonas-remotas",
    title: "Como lograr una senal estable en zonas remotas",
    excerpt:
      "Factores de instalacion y configuracion que influyen en la calidad de conexion.",
  },
  {
    slug: "errores-comunes-en-instalacion",
    title: "Errores frecuentes en instalacion de equipos satelitales",
    excerpt:
      "Checklist tecnico para evitar problemas de orientacion, cableado y energia.",
  },
];

export default function ArticulosPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-4xl font-extrabold text-slate-900">Articulos</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          Recursos utiles para tomar mejores decisiones tecnicas en tus proyectos
          de conectividad.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-cyan-900">{post.title}</h2>
            <p className="mt-2 text-slate-700">{post.excerpt}</p>
            <Link
              className="mt-3 inline-block font-semibold text-cyan-700 hover:text-cyan-900"
              href="/contactar"
            >
              Solicitar asesoria tecnica
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
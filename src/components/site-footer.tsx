export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-800">NextSat</p>
        <p>
          Soluciones de electronica satelital para conectividad estable y soporte
          tecnico continuo.
        </p>
        <p>© {new Date().getFullYear()} NextSat. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
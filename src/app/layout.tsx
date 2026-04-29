import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getafeelectronic.github.io/nextsat"),
  title: {
    default: "NextSat | Soluciones en Electrónica Satelital",
    template: "%s | NextSat",
  },
  description:
    "NextSat ofrece instalación, mantenimiento y asesoría en soluciones de electrónica satelital para hogares y negocios.",
  openGraph: {
    title: "NextSat",
    description:
      "Instalación y soporte técnico de sistemas satelitales con cobertura profesional.",
    url: "/",
    siteName: "NextSat",
    type: "website",
    locale: "es_ES",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

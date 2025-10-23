import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Felipe Jara | Desarrollador Full Stack & Músico",
    template: "%s | Felipe Jara Portfolio",
  },
  description:
    "Portafolio de Felipe Jara - Desarrollador Full Stack especializado en React, Next.js, TypeScript y productor musical. Creando experiencias digitales innovadoras y composiciones musicales únicas.",
  keywords: [
    "Felipe Jara",
    "desarrollador",
    "full stack",
    "programador",
    "músico",
    "productor musical",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "portfolio",
    "portafolio",
    "Santiago",
    "Chile",
    "desarrollo web",
    "aplicaciones web",
    "composición musical",
    "Ableton Live",
    "música electrónica",
  ],
  authors: [{ name: "Felipe Jara" }],
  creator: "Felipe Jara",
  metadataBase: new URL("https://felipejara.dev"), // Cambia por tu dominio real
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Portafolio",
    title: "Portafolio | Desarrollador & Músico",
    description: "Portafolio personal de desarrollador full stack y músico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | Desarrollador & Músico",
    description: "Portafolio personal de desarrollador full stack y músico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

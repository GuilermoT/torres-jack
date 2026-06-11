import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const DESCRIPTION =
  'Correduría de seguros en A Coruña. Protegemos tu hogar, vehículo, vida y empresa con un servicio cercano y personalizado.'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://torresjack.com'
  ),
  title: {
    default: 'Torres Jack — Correduría de Seguros',
    template: '%s · Torres Jack',
  },
  description: DESCRIPTION,
  openGraph: {
    title: 'Torres Jack — Correduría de Seguros',
    description: DESCRIPTION,
    url: '/',
    siteName: 'Torres Jack',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Torres Jack — Correduría de Seguros en A Coruña',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torres Jack — Correduría de Seguros',
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
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
    <html
      lang="es"
      className={`${hankenGrotesk.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-paper text-brand-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

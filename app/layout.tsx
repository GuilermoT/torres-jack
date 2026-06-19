import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
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
      className={`${hankenGrotesk.variable} ${newsreader.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-paper text-brand-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'InsuranceAgency'],
              name: 'Torres Jack Correduría de Seguros',
              url: 'https://www.torresjack.com',
              telephone: '+34981121408',
              email: 'direccion@torresjack.com',
              description: 'Correduría de seguros independiente en A Coruña con más de 40 años de experiencia',
              areaServed: 'España',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Federico Tapia 13 1ºD',
                postalCode: '15005',
                addressLocality: 'A Coruña',
                addressCountry: 'ES',
              },
            }),
          }}
        />
        <Navbar />
        <main className="grow-0 pt-[90px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

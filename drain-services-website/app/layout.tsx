import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DrainMaster Express - Servicii Desfundare & Vidanjare Târgu-Jiu, Gorj | 24/7",
  description:
    "Servicii profesionale de desfundare canalizări, vidanjare fose septice și întreținere în Târgu-Jiu și județul Gorj. Disponibili 24/7 pentru urgențe. Autorizați și asigurați.",
  keywords:
    "desfundare canalizări Târgu-Jiu, vidanjare fose septice Gorj, canalizări blocate, servicii urgență Târgu-Jiu, desfundare țevi, curățare canalizări, vidanjare Gorj",
  authors: [{ name: "DrainMaster Express" }],
  creator: "DrainMaster Express",
  publisher: "DrainMaster Express",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://drainmaster-express.ro",
    title: "DrainMaster Express - Servicii Desfundare & Vidanjare Târgu-Jiu, Gorj",
    description:
      "Servicii profesionale de desfundare canalizări și vidanjare fose septice în Târgu-Jiu și județul Gorj. Disponibili 24/7.",
    siteName: "DrainMaster Express",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DrainMaster Express - Servicii Profesionale Târgu-Jiu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DrainMaster Express - Servicii Desfundare & Vidanjare Târgu-Jiu",
    description:
      "Servicii profesionale de desfundare canalizări și vidanjare fose septice în Târgu-Jiu și județul Gorj.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drainmaster-express.ro",
  },
  other: {
    "geo.region": "RO-GJ",
    "geo.placename": "Târgu-Jiu, Gorj",
    "geo.position": "45.0333;23.2833",
    ICBM: "45.0333, 23.2833",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="canonical" href="https://drainmaster-express.ro" />
        <meta name="geo.region" content="RO-GJ" />
        <meta name="geo.placename" content="Târgu-Jiu, Gorj" />
        <meta name="geo.position" content="45.0333;23.2833" />
        <meta name="ICBM" content="45.0333, 23.2833" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DrainMaster Express",
              description:
                "Servicii profesionale de desfundare canalizări, vidanjare fose septice și întreținere în Târgu-Jiu și județul Gorj",
              url: "https://drainmaster-express.ro",
              telephone: "+40 123 456 789",
              email: "info@drainmaster.ro",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Exemplu 123",
                addressLocality: "Târgu-Jiu",
                addressRegion: "Gorj",
                postalCode: "210000",
                addressCountry: "RO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.0333",
                longitude: "23.2833",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Târgu-Jiu",
                },
                {
                  "@type": "State",
                  name: "Gorj",
                },
              ],
              serviceType: [
                "Desfundare canalizări",
                "Vidanjare fose septice",
                "Întreținere canalizări",
                "Servicii urgență 24/7",
              ],
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

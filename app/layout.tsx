import type { Metadata, Viewport } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-roboto" })

export const viewport: Viewport = {
  themeColor: '#1B2D6B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Oludare Investment Ltd (OIL) | Shacman & HOWO Sino Trucks Dealer Lagos Nigeria',
  description: 'Oludare Investment Ltd (OIL) - RC 1042746. Leading Shacman and HOWO Sino Trucks dealer in Lagos. We supply dump trucks, cement mixers, excavators, and heavy machinery across Nigeria. Visit our yard at Ojodu Berger.',
  keywords: [
    'Shacman trucks Lagos',
    'Shacman dump truck Nigeria',
    'Shacman F3000 Lagos',
    'Shacman dealer Nigeria',
    'HOWO Sino Trucks Lagos',
    'HOWO Sino Trucks Nigeria',
    'HOWO Sino Trucks dealer Lagos',
    'HOWO Sino Trucks for sale Nigeria',
    'trucks in Lagos',
    'truck dealers Nigeria',
    'heavy machinery Lagos',
    'dump trucks for sale Nigeria',
    'cement mixer trucks Lagos',
    'crane trucks Nigeria',
    'truck parts Lagos',
    'construction equipment Nigeria',
    'Oludare Investment',
    'Oludare Investment Ltd',
    'OIL trucks Lagos',
    'trucks Ojodu Berger',
    'flatbed trucks Nigeria',
    'tanker trucks Lagos',
    'heavy duty trucks Nigeria',
    'equipment dealers Lagos',
    'truck suppliers Nigeria',
    'machinery dealers Lagos Nigeria',
    'Sinotruk Nigeria',
    'HOWO trucks Lagos',
    'HOWO 371 Lagos',
    'HOWO 420 Nigeria',
    'XCMG excavator Nigeria',
    'Shantui bulldozer Lagos',
    'truck engine spare parts Lagos',
    'HOWO gearbox Nigeria',
    'low bed trailer Lagos',
    'wheel loader for sale Nigeria',
    'road roller Lagos',
    'motor grader Nigeria',
    'buy trucks Lagos Nigeria',
    'truck dealer Ojodu Berger Lagos',
    'heavy equipment supplier Nigeria',
    'where to buy trucks in Lagos',
    'truck dealer near me Lagos',
    'HOWO Sino Trucks Ojodu Berger',
    'dealers and suppliers of all kinds of trucks Lagos',
    'truck spare parts Ojodu Berger',
    'buy HOWO truck Nigeria',
    'CNG trucks Lagos Nigeria',
    'CNG trucks for sale Nigeria',
    'compressed natural gas trucks Lagos',
    'HOWO CNG truck dealer Nigeria',
    'cement mixer truck for sale Lagos',
    'concrete mixer truck Nigeria',
    'truck engine for sale Lagos',
    'HOWO gearbox for sale Nigeria',
    'truck transmission spare parts Lagos',
    'heavy truck dealer Ojodu Berger',
  ],
  icons: {
    icon: '/images/logo/oil-logo-icon.jpg',
    apple: '/images/logo/oil-logo-icon.jpg',
  },
  authors: [{ name: 'Oludare Investment Ltd' }],
  creator: 'Oludare Investment Ltd',
  openGraph: {
    title: 'Oludare Investment Ltd | Shacman & HOWO Sino Trucks Dealers Lagos',
    description: 'RC 1042746. Dealers and Suppliers of All Kinds of Trucks, Heavy Machinery and Construction Equipment in Lagos, Nigeria. Shacman, HOWO Sino Trucks, XCMG, Shantui.',
    url: 'https://oludareinvestment.com',
    siteName: 'Oludare Investment Ltd',
    locale: 'en_NG',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'NG-LA',
    'geo.placename': 'Ojodu Berger, Lagos',
    'geo.position': '6.6318;3.3515',
    'ICBM': '6.6318, 3.3515',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oludare Investment Ltd",
    "alternateName": ["OIL", "Oludare Investment"],
    "description": "Dealers and Suppliers of All Kinds of Trucks, Heavy Machinery and Construction Equipment. Shacman, HOWO Sino Trucks, XCMG, Shantui, CAT.",
    "url": "https://oludareinvestment.com",
    "telephone": ["+2348020890065", "+2348105955892"],
    "email": "Oludareinvestmentltd@gmail.com",
    "taxID": "RC 1042746",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station",
      "addressLocality": "Ojodu Berger",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.6318",
      "longitude": "3.3515"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trucks and Heavy Machinery",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Shacman Dump Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "HOWO Sino Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cement Mixer Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Crane Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Flatbed Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Tanker Trucks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Excavators" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Wheel Loaders" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bulldozers & Graders" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Truck Parts & Engines" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "CNG Trucks" } }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const viewport: Viewport = {
  themeColor: '#1B2D6B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Oludare Investment Ltd (OIL) | Shacman & HOWO Sino Trucks Dealer Lagos Nigeria',
  description: 'Oludare Investment Ltd (OIL) - RC 1042746. Leading Shacman, HOWO Sino Trucks, XCMG, and SDLG dealer in Lagos. We supply dump trucks, cement mixers, excavators, and heavy machinery across Nigeria. Visit our yard at Ojodu Berger.',
  keywords: [
    'Shacman trucks Lagos', 'Shacman dump truck Nigeria', 'HOWO Sino Trucks Lagos', 'HOWO Sino Trucks Nigeria',
    'XCMG excavator Nigeria', 'SDLG wheel loader Lagos', 'Shantui bulldozer Nigeria', 'Caterpillar equipment Lagos',
    'trucks in Lagos', 'truck dealers Nigeria', 'heavy machinery Lagos', 'Oludare Investment', 'OIL trucks Lagos',
    'trucks Ojodu Berger', 'CNG trucks Lagos Nigeria', 'HOWO 371 Lagos', 'truck spare parts Lagos', 'HOWO engine Nigeria'
  ],
  icons: {
    icon: '/images/logo/oil-logo-icon.jpg',
    apple: '/images/logo/oil-logo-icon.jpg',
  },
  authors: [{ name: 'Oludare Investment Ltd' }],
  creator: 'Oludare Investment Ltd',
  openGraph: {
    title: 'Oludare Investment Ltd | Shacman & HOWO Sino Trucks Dealers Lagos',
    description: 'RC 1042746. Dealers and Suppliers of All Kinds of Trucks, Heavy Machinery and Construction Equipment in Lagos, Nigeria.',
    url: 'https://oludareinvestment.com',
    siteName: 'Oludare Investment Ltd',
    locale: 'en_NG',
    type: 'website',
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
    "alternateName": "OIL",
    "description": "Official dealer of Shacman, HOWO Sino Trucks, XCMG, and SDLG in Nigeria. RC 1042746.",
    "url": "https://oludareinvestment.com",
    "telephone": ["+2348020890065", "+2348105955892"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station",
      "addressLocality": "Ojodu Berger",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "identifier": "RC 1042746",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Heavy Duty Equipment",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Shacman F3000 Dump Truck" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "HOWO Sino Truck 371" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "XCMG Excavators" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "SDLG Wheel Loaders" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Shantui Bulldozers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "CNG Trucks" } }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
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
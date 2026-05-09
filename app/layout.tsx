import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const viewport: Viewport = {
  themeColor: '#1B2D6B',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Oludare Investment Ltd (OIL) | Shacman & HOWO Sino Trucks Dealer Lagos Nigeria',
  description: 'Oludare Investment Ltd (OIL) - RC 1042746. Leading Shacman, HOWO Sino Trucks, XCMG, and SDLG dealer in Lagos. We supply dump trucks, cement mixers, excavators, and heavy machinery across Nigeria.',
  keywords: [
    'Shacman trucks Lagos', 'Shacman dump truck Nigeria', 'HOWO Sino Trucks Lagos', 'HOWO Sino Trucks Nigeria',
    'XCMG excavator Nigeria', 'SDLG wheel loader Lagos', 'Shantui bulldozer Nigeria', 'Caterpillar equipment Lagos',
    'trucks in Lagos', 'truck dealers Nigeria', 'heavy machinery Lagos', 'Oludare Investment', 'OIL trucks Lagos',
    'trucks Ojodu Berger', 'CNG trucks Lagos Nigeria', 'HOWO 371 Lagos', 'truck spare parts Lagos', 'HOWO engine Nigeria'
  ],
  icons: {
    icon: '/images/logo/oil-logo-full.jpg',
    apple: '/images/logo/oil-logo-full.jpg',
  },
  authors: [{ name: 'Oludare Investment Ltd' }],
  creator: 'Oludare Investment Ltd',
  openGraph: {
    title: metadata.title,
    description: metadata.description,
    url: 'https://oludareinvestment.com',
    siteName: 'Oludare Investment Ltd',
    locale: metadata.locale,
    images: [{ url: '/images/logo/oil-logo-full.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadata.title,
    description: metadata.description,
    images: [{ url: '/images/logo/oil-logo-full.jpg' }],
    site: '@OludareInvestment',
  },
  authors: [{ name: 'Oludare Investment Ltd' }],
  creator: 'Oludare Investment Ltd',
}

const ogImage = '/images/logo/oil-logo-full.jpg';
const ogDescription = 'Oludare Investment Ltd (OIL) - RC 1042746. Leading Shacman, HOWO Sino Trucks, XCMG, and SDLG dealer in Lagos. We supply dump trucks, cement mixers, excavators, and heavy machinery across Nigeria.';

return (
  <html lang="en" suppressHydrationWarning>
    <head>
      {/* Additional SEO meta tags */}
      <meta name="keywords" content={metadata.keywords.join(', ')} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content="https://oludareinvestment.com" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={metadata.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@OludareInvestment" />
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Oludare Investment Ltd',
          url: 'https://oludareinvestment.com',
          telephone: ['+2348020890065', '+2348105955892'],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station',
            addressLocality: 'Ojodu Berger',
            addressRegion: 'Lagos State',
            addressCountry: 'NG'
          },
          image: 'https://oludareinvestment.com/images/logo/oil-logo-full.jpg',
          logo: 'https://oludareinvestment.com/images/logo/oil-logo-full.jpg',
          priceRange: 'NGN 1000000-5000000',
          sameAs: [
            'https://www.facebook.com/share/1GUnFNG49Z/',
            'https://instagram.com/oludareinvestmentltd'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Heavy Duty Equipment',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Shacman F3000 Dump Truck' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'HOWO Sino Truck 371' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'XCMG Excavator' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'SDLG Wheel Loader' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'CNG Truck' } }
            ]
          }
        }) }}
      />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Where is Oludare Investment Ltd located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We are at 209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station, Ojodu Berger, Lagos State.'
              }
            },
            {
              '@type': 'Question',
              name: 'What truck brands do you sell?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We specialize in HOWO Sino Trucks, Shacman, XCMG, Caterpillar, Shantui, LiuGong, SDLG, and SANY.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you sell brand new or used trucks?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We sell both new and certified pre‑owned trucks with full inspection reports.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I get spare parts for my truck?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we stock genuine engines, gearboxes, cabins, brakes, filters and other spare parts for all brands.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you deliver trucks outside Lagos?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We deliver nationwide to all 36 states of Nigeria with door‑to‑door service.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is financing available for purchases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Flexible payment plans are offered for corporate buyers; contact our sales team for details.'
              }
            }
          ]
        }) }}
      />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
      <Analytics />
    </body>
  </html>
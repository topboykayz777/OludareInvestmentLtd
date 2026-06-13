import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// SEO constants
const SITE_TITLE = 'Oludare Investment Ltd (OIL) | Shacman & HOWO Sino Trucks Dealer Lagos Nigeria'
const SITE_DESCRIPTION =
  'Oludare Investment Ltd (OIL) - RC 1042746. Leading Shacman, HOWO Sino Trucks, XCMG, and SDLG dealer in Lagos. We supply dump trucks, cement mixers, excavators, and heavy machinery across Nigeria.'
const SITE_URL = 'https://oludareinvestment.com'
const SITE_IMAGE = '/images/logo/oil-logo-full.jpg'
const TWITTER_SITE = '@OludareInvestment'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'Shacman trucks Lagos',
    'Shacman dump truck Nigeria',
    'HOWO Sino Trucks Lagos',
    'HOWO Sino Trucks Nigeria',
    'XCMG excavator Nigeria',
    'SDLG wheel loader Lagos',
    'Shantui bulldozer Nigeria',
    'Caterpillar equipment Lagos',
    'trucks in Lagos',
    'truck dealers Nigeria',
    'heavy machinery Lagos',
    'Oludare Investment',
    'OIL trucks Lagos',
    'trucks Ojodu Berger',
    'CNG trucks Lagos Nigeria',
    'HOWO 371 Lagos',
    'truck spare parts Lagos',
    'HOWO engine Nigeria',
  ],
  icons: {
    icon: SITE_IMAGE,
    apple: SITE_IMAGE,
  },
  authors: [{ name: 'Oludare Investment Ltd' }],
  creator: 'Oludare Investment Ltd',
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Oludare Investment Ltd',
    images: [{ url: SITE_IMAGE, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE],
    site: TWITTER_SITE,
  },
}

export const viewport: Viewport = {
  themeColor: '#1B2D6B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Oludare Investment Ltd',
              url: SITE_URL,
              telephone: ['+2348020890065', '+2348105955892'],
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  '209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station',
                addressLocality: 'Ojodu Berger',
                addressRegion: 'Lagos State',
                addressCountry: 'NG',
              },
              image: `${SITE_URL}${SITE_IMAGE}`,
              logo: `${SITE_URL}${SITE_IMAGE}`,
              priceRange: 'NGN 1000000-5000000',
              sameAs: [
                'https://www.facebook.com/share/1GUnFNG49Z/',
                'https://instagram.com/oludareinvestmentltd',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Heavy Duty Equipment',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'Shacman F3000 Dump Truck',
                      offers: {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'NGN',
                        lowPrice: '38000000',
                        highPrice: '65000000',
                        offerCount: '5',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'HOWO Sino Truck 371',
                      offers: {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'NGN',
                        lowPrice: '38000000',
                        highPrice: '65000000',
                        offerCount: '8',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'XCMG Excavator',
                      offers: {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'NGN',
                        lowPrice: '25000000',
                        highPrice: '80000000',
                        offerCount: '3',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'SDLG Wheel Loader',
                      offers: {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'NGN',
                        lowPrice: '20000000',
                        highPrice: '45000000',
                        offerCount: '4',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'CNG Truck',
                      offers: {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'NGN',
                        lowPrice: '40000000',
                        highPrice: '75000000',
                        offerCount: '6',
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Where is Oludare Investment Ltd located?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We are at 209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station, Ojodu Berger, Lagos State.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What truck brands do you sell?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We specialize in HOWO Sino Trucks, Shacman, XCMG, Caterpillar, Shantui, LiuGong, SDLG, and SANY.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you sell brand new or used trucks?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We sell both new and certified pre-owned trucks with full inspection reports.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I get spare parts for my truck?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we stock genuine engines, gearboxes, cabins, brakes, filters and other spare parts for all brands.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you deliver trucks outside Lagos?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We deliver nationwide to all 36 states of Nigeria with door-to-door service.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is financing available for purchases?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Flexible payment plans are offered for corporate buyers; contact our sales team for details.',
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
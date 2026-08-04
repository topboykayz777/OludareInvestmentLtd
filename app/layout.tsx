import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// SEO constants
const SITE_TITLE = 'Oludare Investment Ltd (OIL) | Best Truck Dealer & Sourcing Agent Lagos 2026'
const SITE_DESCRIPTION =
  'Oludare Investment Ltd (RC 1042746) is Nigeria\'s leading truck dealer and independent sourcing agency at Ojodu Berger, Lagos. Where to buy the best HOWO 371, Shacman F3000/X3000, tipper trucks, lowbed trailers, and spare parts in Lagos State.'
const SITE_URL = 'https://www.oludareinvestmentltd.com.ng'
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

// Expanded multi-intent search keyphrases for Lagos & Nigeria
const SEO_KEYWORDS = [
  'best truck to buy in lagos',
  'best howo truck',
  'best shacman truck',
  'where can i buy trucks in lagos',
  'truck dealers in lagos state',
  'howo 371 price in lagos 2026',
  'shacman f3000 price lagos',
  'shacman x3000 price nigeria',
  'ojodu berger truck market lagos',
  'best tipper truck in nigeria',
  'buy tipper truck in lagos',
  'direct port used trucks lagos',
  'cheap dump trucks ojodu berger',
  'howo 371 vs shacman f3000 lagos',
  'best truck for sand delivery lagos',
  'best truck for quarry mining nigeria',
  'heavy duty truck sourcing agent lagos',
  'independent truck inspector ojodu berger',
  'verify truck customs papers nigeria',
  'how to buy trucks in lagos without scam',
  'truck financing in lagos state',
  'used howo 371 tipper price berger',
  'weichai engine price lagos',
  'sinotruk howo spare parts lagos',
  'truck cabin howo 371 lagos',
  'lowbed trailer for sale in lagos',
  'amphibious excavator lagos dredging',
  'xcmg excavator price lagos',
  'shantui bulldozer price lagos',
  'liugong wheel loader lagos',
  'truck dealers ikeja lagos',
  'truck dealers lekki epe lagos',
  'truck dealers ikorodu lagos',
  'truck dealers apapa lagos',
  'truck dealers badagry lagos',
  'oil truck sales ojodu berger'
]

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  keywords: SEO_KEYWORDS,
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

        {/* Comprehensive JSON-LD Local Business & AutoDealer Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: 'Oludare Investment Ltd (OIL Trucks)',
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
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 6.637,
                longitude: 3.347,
              },
              image: `${SITE_URL}${SITE_IMAGE}`,
              logo: `${SITE_URL}${SITE_IMAGE}`,
              priceRange: 'NGN 20,000,000-95,000,000',
              description: 'Nigeria\'s #1 verified truck dealer and independent heavy-duty truck sourcing & inspection agency based in Ojodu Berger, Lagos State. Specialists in HOWO 371, Shacman F3000/X3000, Tippers, Tractor Heads, Trailers & Genuine Parts.',
              sameAs: [
                'https://www.facebook.com/share/1GUnFNG49Z/',
                'https://instagram.com/oludareinvestmentltd',
              ],
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Lagos State (Ikeja, Berger, Lekki, Epe, Ikorodu, Apapa, Badagry)' },
                { '@type': 'AdministrativeArea', name: 'Abuja FCT' },
                { '@type': 'AdministrativeArea', name: 'Port Harcourt (Rivers State)' },
                { '@type': 'AdministrativeArea', name: 'Kano State' },
                { '@type': 'AdministrativeArea', name: 'Oyo State (Ibadan)' },
                { '@type': 'AdministrativeArea', name: 'Ogun State (Abeokuta, Sagamu, Mowe)' },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
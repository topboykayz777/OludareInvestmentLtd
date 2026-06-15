import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// SEO constants
const SITE_TITLE = 'Oludare Investment Ltd (OIL) | Trusted Shacman & HOWO Truck Sourcing Agent Lagos'
const SITE_DESCRIPTION =
  'Oludare Investment Ltd (RC 1042746) is Nigeria\'s premier independent truck sourcing and inspection agent at Ojodu Berger, Lagos. We source, inspect, and verify genuine HOWO, Shacman, and heavy machinery for buyers nationwide.'
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

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'truck sourcing agent Lagos',
    'trusted truck broker Ojodu Berger',
    'buy HOWO truck safely Nigeria',
    'Shacman truck finder Lagos',
    'Lagos truck yard inspection service',
    'HOWO 371 price Nigeria 2025',
    'Shacman F3000 Lagos',
    'heavy duty truck finder Nigeria',
    'Oludare Investment Ltd',
    'OIL trucks Lagos',
    'trucks Ojodu Berger',
    'buy used tipper safely Lagos',
    'independent truck inspector Nigeria',
    'verify truck customs papers nigeria',
    'how to avoid truck scams in lagos',
    'best truck sourcing agency in lagos',
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

        {/* JSON-LD Structured Data - Optimized for Local Business & Brokerage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
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
              priceRange: 'NGN 15000000-80000000',
              description: 'Nigeria\'s leading independent heavy-duty truck sourcing, verification, and inspection agency based in Ojodu Berger, Lagos.',
              sameAs: [
                'https://www.facebook.com/share/1GUnFNG49Z/',
                'https://instagram.com/oludareinvestmentltd',
              ],
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Lagos' },
                { '@type': 'AdministrativeArea', name: 'Abuja' },
                { '@type': 'AdministrativeArea', name: 'Port Harcourt' },
                { '@type': 'AdministrativeArea', name: 'Kano' },
                { '@type': 'AdministrativeArea', name: 'Ibadan' },
              ],
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
                  name: 'How does Oludare Investment Ltd help me buy a truck?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We act as your trusted independent sourcing and inspection agent in Ojodu Berger, Lagos. We find the best trucks across multiple yards, run a rigorous 50-point inspection, verify the customs papers, and negotiate the best price on your behalf.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I buy a truck from outside Lagos safely?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We specialize in remote buying for clients in Abuja, Port Harcourt, Kano, and other states. We conduct live video inspections, verify documents, and handle secure delivery to your location.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What brands can you source for me?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We source genuine HOWO Sino Trucks, Shacman, XCMG, Caterpillar, Shantui, LiuGong, SDLG, and SANY from verified yards.',
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
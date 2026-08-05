import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// SEO constants
const SITE_TITLE = 'Oludare Investment Ltd (OIL) | #1 Truck Dealer & Sourcing Agent Lagos 2026'
const SITE_DESCRIPTION =
  'Oludare Investment Ltd (RC 1042746) is Nigeria\'s premier truck dealer and independent heavy equipment sourcing agency in Ojodu Berger, Lagos. Buy brand new & direct port used HOWO 371, Shacman F3000/X3000, dump trucks, lowbed trailers, excavators, and genuine spare parts across Lagos State.'
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

// Full 100 High-Intent SEO Keyword Variants for Lagos & Nigeria Heavy Duty Search Dominance
const SEO_KEYWORDS = [
  // 🏆 1. Brand & Model Specific Search Intent
  "best howo truck to buy in lagos 2026",
  "howo 371 tipper price in ojodu berger lagos",
  "sinotruk howo 371hp 10 wheeler dump truck lagos",
  "brand new howo 420hp tractor head price nigeria",
  "howo cng truck price in lagos state",
  "shacman f3000 dump truck price lagos",
  "shacman x3000 420hp tractor head for sale nigeria",
  "shacman vs howo tipper truck comparison lagos",
  "weichai engine wp10 380hp price in lagos",
  "fast gear 12 speed transmission for shacman lagos",
  "xcmg xe335g 33 ton excavator price nigeria",
  "cat 320 amphibious excavator for dredging lagos",
  "shantui sd22 bulldozer for sale in ojodu berger",
  "liugong lg953 wheel loader price lagos",
  "sdlg wheel loader dealers in lagos state",
  "xcmg 80 ton mobile crane price nigeria",
  "howo 371 engine assembly wd615 price lagos",
  "howo truck cabin red white wrapped ojodu berger",
  "4 axle 80 ton lowbed trailer price lagos",
  "3 axle sidewall cargo trailer for sale lagos",

  // 📍 2. Local Hyper-Targeted Location Keywords (Lagos LGAs & Landmarks)
  "truck dealers in ojodu berger lagos",
  "heavy duty truck yard lagos ibadan expressway",
  "tipper trucks for sale in ikeja lagos",
  "buy dump truck in lekki epe expressway lagos",
  "heavy equipment dealers in ikorodu lagos",
  "direct port used trucks in apapa wharf lagos",
  "truck dealers in tin can island lagos",
  "heavy duty machinery dealers in badagry lagos",
  "dump trucks for sand winning in ajah lagos",
  "truck dealers in agege and alimosho lagos",
  "heavy equipment sales oregun industrial estate lagos",
  "truck dealers in victoria island and ikoyi lagos",
  "tipper truck market near total filling station berger",
  "buy howo trucks in surulere and festac lagos",
  "heavy truck dealers in mowe ibafo ogun state",
  "quarry tipper trucks for sale abeokuta ogun state",
  "heavy truck sourcing agent abuja fct",
  "howo dump truck dealers port harcourt rivers state",
  "heavy equipment suppliers in kano state nigeria",
  "shacman truck dealers ibadan oyo state",

  // 💰 3. Price & Commercial Intent Keyphrases
  "how much is brand new howo 371 in nigeria 2026",
  "current price of used howo tipper in lagos",
  "price of 10 wheeler dump truck in ojodu berger",
  "cheap trucks for sale in lagos state",
  "cheap shacman dump truck price in nigeria",
  "lowbed trailer price in lagos nigeria",
  "howo truck financing and installment payment lagos",
  "buy tipper truck on credit lease lagos",
  "corporate truck lease to own agreements nigeria",
  "direct port used belgium HOWO trucks lagos price",
  "china used tipper truck price in lagos",
  "second hand shacman f3000 price ojodu berger",
  "authentic weichai engine price in ladipo lagos",
  "cost of 30 ton dump truck in lagos 2026",
  "40 ton quarry tipper truck price in nigeria",
  "cement mixer truck price in lagos state",
  "water tanker truck 20000 liters price lagos",
  "howo light box cargo truck price nigeria",
  "howo refrigerated truck price in lagos",
  "heavy equipment rental and sales price lagos",

  // 🛡️ 4. Trust, Verification & Scam Prevention Keywords
  "where can i buy trucks in lagos safely",
  "verified heavy truck dealers in ojodu berger lagos",
  "independent truck inspector in lagos state",
  "how to verify truck customs clearance papers nigeria",
  "avoid truck buying scams in lagos ojodu berger",
  "trusted truck sourcing agent in lagos state",
  "oludare investment ltd truck yard ojodu berger",
  "rc registered truck dealers in lagos nigeria",
  "50 point truck mechanical inspection service lagos",
  "live video truck inspection for buyers outside lagos",
  "genuine howo spare parts dealers in ojodu berger",
  "certified pre owned HOWO dump trucks lagos",
  "authentic shacman truck distributor in nigeria",
  "how to test engine blow by on used HOWO 371",
  "chassis crack inspection heavy tippers lagos",
  "verified truck sellers with authentic C numbers lagos",
  "heavy equipment procurement consultants lagos",
  "remote truck buying service for abuja clients",
  "safe bank transfer escrow truck buying lagos",
  "oludare investment rc 1042746 lagos truck market",

  // 🚛 5. Industry & Operational Application Keywords
  "best tipper truck for sand winning business lagos",
  "best dump truck for granite quarrying in abeokuta",
  "how to start profitable haulage business in nigeria",
  "daily income of howo 371 tipper owner in lagos",
  "heavy duty truck for container haulage apapa",
  "best tractor head for interstate transport lagos to kano",
  "tropicalized HOWO trucks for Nigerian high temperature",
  "non electronic mechanical pump HOWO trucks lagos",
  "double reduction axle trucks for muddy lagos terrain",
  "heavy duty trailers for moving excavators nationwide",
  "dredging machinery and swamp buggy for sale lagos",
  "canal clearing amphibious excavator supplier lagos",
  "road construction heavy equipment dealers lagos",
  "single drum road roller price in lagos nigeria",
  "caterpillar 140h motor grader price lagos",
  "motor grader for road construction projects nigeria",
  "pneumatic tire roller price in ojodu berger",
  "crawler drilling rig for quarry blasting lagos",
  "howo 371 fuel consumption per kilometer nigeria",
  "fleet management and truck supply company lagos"
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

        {/* Comprehensive JSON-LD Local Business, AutoDealer & Product Catalog Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: 'Oludare Investment Ltd (OIL Trucks)',
              url: SITE_URL,
              telephone: ['+2348020890065', '+2348105955892'],
              email: 'Oludareinvestmentltd@gmail.com',
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
              priceRange: 'NGN 20,000,000 - 95,000,000',
              description:
                'Nigeria\'s #1 verified heavy-duty truck dealer and independent procurement & inspection agency located in Ojodu Berger, Lagos State. Direct suppliers of HOWO 371, Shacman F3000, Shacman X3000, Tippers, Tractor Heads, Lowbed Trailers, Excavators, and Genuine Weichai/Sinotruk Engine Parts.',
              sameAs: [
                'https://www.facebook.com/share/1GUnFNG49Z/',
                'https://instagram.com/oludareinvestmentltd',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Heavy Duty Trucks & Machinery Catalog Lagos 2026',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'Sinotruk HOWO 371 6x4 Dump Truck Tipper',
                      brand: 'HOWO Sinotruk',
                      description: '10-wheeler 30-ton to 35-ton heavy dump truck with WD615.47 371HP engine.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'Shacman F3000 380HP Dump Truck Tipper',
                      brand: 'Shacman',
                      description: 'Heavy duty mining tipper with Weichai WP10 engine and Fast Gear 12-speed gearbox.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'Shacman X3000 420HP Tractor Head',
                      brand: 'Shacman',
                      description: 'Long-haul interstate heavy tractor head with Weichai WP12 engine.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: '4-Axle 80-Ton Heavy Lowbed Equipment Trailer',
                      brand: 'Generic Heavy Trailer',
                      description: 'Heavy machinery transport trailer for excavators, bulldozers, and drilling rigs.'
                    }
                  }
                ]
              },
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Lagos State (Ojodu Berger, Ikeja, Lekki, Epe, Ikorodu, Apapa, Badagry, Agege, Alimosho, Victoria Island, Ikoyi)' },
                { '@type': 'AdministrativeArea', name: 'Ogun State (Abeokuta, Sagamu, Mowe, Ibafo)' },
                { '@type': 'AdministrativeArea', name: 'Abuja FCT' },
                { '@type': 'AdministrativeArea', name: 'Port Harcourt (Rivers State)' },
                { '@type': 'AdministrativeArea', name: 'Kano State' },
                { '@type': 'AdministrativeArea', name: 'Oyo State (Ibadan)' },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
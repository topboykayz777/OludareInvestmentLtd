import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shacman F3000 vs HOWO 371: Which is the Best Dump Truck in Nigeria?",
  description: "A detailed comparison of Shacman and HOWO trucks for the Nigerian market. We analyze engine power, fuel efficiency, parts availability, and resale value.",
  keywords: [
    "Shacman F3000 Nigeria", "HOWO 371 vs Shacman", "best dump truck Nigeria", 
    "Sinotruk HOWO 371 price", "Shacman X3000 Lagos", "tipper truck comparison", 
    "Weichai engine vs WD615", "truck resale value Nigeria", "heavy duty trucks Lagos", 
    "Shacman dealer Nigeria", "HOWO truck parts Lagos", "construction equipment Nigeria", 
    "mining trucks Lagos", "6x4 tipper comparison", "Shacman F3000 specifications", 
    "HOWO 371 fuel consumption", "truck maintenance cost Nigeria", "Ojodu Berger truck market", 
    "Oludare Investment trucks", "heavy duty logistics Nigeria"
  ],
}

export default function ShacmanVsHowoBlog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Shacman F3000 vs. HOWO 371: The Ultimate King of Nigerian Roads?",
    "description": "An in-depth, technical comparison of Shacman F3000 and Sinotruk HOWO 371 dump trucks, specifically analyzed for Nigerian road conditions, maintenance costs, and resale value.",
    "image": "https://www.oludareinvestmentltd.com.ng/images/trucks/shacman-fleet-green.jpg",
    "author": {
      "@type": "Person",
      "name": "Engr. Oludare",
      "jobTitle": "Senior Fleet Consultant"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Oludare Investment Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.oludareinvestmentltd.com.ng/images/logo/oil-logo-full.jpg"
      }
    },
    "datePublished": "2025-05-20",
    "dateModified": "2025-05-20"
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "Shacman vs HOWO" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            Shacman F3000 vs. HOWO 371: The Ultimate King of Nigerian Roads?
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Engr. Oludare</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> May 20, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/trucks/shacman-fleet-green.jpg"
              alt="Shacman and HOWO trucks comparison in Lagos Nigeria"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              If you walk into any truck yard in Ojodu Berger, the two names you will hear most are **Shacman** and **HOWO**. But which one should you put your money on for your next project?
            </p>

            <h2 className="text-2xl font-bold text-foreground">1. Engine Performance: Weichai vs. Sinotruk</h2>
            <p>
              The **Shacman F3000** typically uses the Weichai WP10 or WP12 engine. These are known for massive torque and durability. The **HOWO 371**, on the other hand, uses the WD615.47 engine. While the HOWO engine is simpler to repair, the Shacman Weichai engine often lasts longer under extreme stress.
            </p>

            <h2 className="text-2xl font-bold text-foreground">2. Parts Availability in Lagos</h2>
            <p>
              HOWO wins this round. Because there are more HOWO trucks in Nigeria, you can find a HOWO 371 fuel filter or injector in almost any spare parts market from Ladipo to Mgbuka. Shacman parts are also available but can be slightly more expensive.
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-12">
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary text-xl mb-4">HOWO 371 Pros</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" /> Cheapest parts in Nigeria</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" /> Every mechanic knows the engine</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" /> High resale value</li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-accent/5 border border-accent/10">
                <h4 className="font-bold text-accent text-xl mb-4">Shacman F3000 Pros</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0" /> Superior MAN axle technology</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0" /> Better fuel economy on long hauls</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0" /> Stronger chassis for mining</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">3. The Price Factor (2025 Update)</h2>
            <p>
              Currently, a brand new Shacman X3000 or F3000 commands a premium over the HOWO 371. However, the gap is closing as more operators realize the long-term fuel savings of the Shacman.
            </p>

            <div className="rounded-2xl bg-primary p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Get Today's Market Price</h3>
              <p className="mb-6 opacity-80">Prices for both brands change weekly based on the CBN exchange rate and port clearing costs. Don't guess—get a real-time quote now.</p>
              <Link href="https://wa.me/2348105955892?text=I%20want%20to%20compare%20prices%20for%20Shacman%20and%20HOWO%20trucks.">
                <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d06a18] transition-all w-full sm:w-auto">
                  Chat with Sales Office
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
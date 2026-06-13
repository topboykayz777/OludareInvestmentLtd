import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, AlertCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Things to Inspect Before Buying a Used Tipper in Lagos | OIL Guide",
  description: "Avoid being cheated! Our expert guide shows you exactly what to check when buying a used HOWO or Shacman truck at Ojodu Berger or any Lagos yard.",
  keywords: [
    "used trucks Ojodu Berger", "buy used tipper Nigeria", "truck inspection checklist", 
    "HOWO 371 used price", "Shacman F3000 second hand", "truck engine blow-by test", 
    "chassis inspection tipper", "used truck dealers Lagos", "Berger truck yard", 
    "buying trucks in Nigeria tips", "heavy duty truck maintenance", "used tipper for sale Lagos", 
    "truck transmission check", "hydraulic system inspection", "truck tyre wear guide", 
    "Nigerian truck market guide", "Oludare Investment used trucks", "verified truck dealers Lagos", 
    "truck documentation Nigeria", "Lagos truck yard inspection"
  ],
}

export default function UsedTruckInspectionBlog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Don't Get Cheated: 5 Things to Inspect Before Buying a Used Tipper",
    "description": "An expert guide detailing the exact physical and mechanical inspection steps required before purchasing a pre-owned heavy-duty truck in Lagos, Nigeria.",
    "image": "https://www.oludareinvestmentltd.com.ng/images/trucks/howo-dump-white-close.jpg",
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
    "datePublished": "2025-05-15",
    "dateModified": "2025-05-15"
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
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "Inspection Guide" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            Don't Get Cheated: 5 Things to Inspect Before Buying a Used Tipper
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Engr. Oludare</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> May 15, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl border border-border">
            <Image
              src="/images/trucks/howo-dump-white-close.jpg"
              alt="Inspecting a used HOWO 371 tipper truck in Lagos"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              Buying a used truck in Lagos can be a goldmine or a nightmare. At Oludare Investment, we believe in transparency. Here is the exact checklist our engineers use.
            </p>

            <h2 className="text-2xl font-bold text-foreground">1. The "Blow-By" Engine Test</h2>
            <p>
              Start the engine and let it idle. Open the oil filler cap. If you see heavy smoke pulsing out (blow-by), the piston rings are worn. A healthy HOWO 371 engine should have minimal to no smoke from the oil cap.
            </p>

            <h2 className="text-2xl font-bold text-foreground">2. Chassis Cracks and Welds</h2>
            <p>
              Nigerian roads are rough. Inspect the main frame (chassis) especially around the suspension mounts. Look for fresh paint that might be hiding a weld or a crack. A "re-welded" chassis is a ticking time bomb for a 30-ton load.
            </p>

            <h2 className="text-2xl font-bold text-foreground">3. Hydraulic Tipping System</h2>
            <p>
              Raise the bucket to its full height. It should move smoothly without jerking. Check the hydraulic ram for oil leaks. If the ram is "sweating" oil, you'll be spending money on seals very soon.
            </p>

            <div className="rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 p-6 flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-800 dark:text-yellow-500 mb-1">Pro Tip: Check the Gearbox</h4>
                <p className="text-sm leading-relaxed text-yellow-700 dark:text-yellow-600/80">
                  Always test drive the truck and shift through all 10 or 12 gears. If it "grinds" when entering high-range gears, the synchronizer is failing.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-primary p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-accent" /> Buy with Confidence
              </h3>
              <p className="mb-6 opacity-80">Every used truck at Oludare Investment Ltd undergoes this 50-point inspection before we list it. We do the hard work so you don't have to.</p>
              <Link href="/used-trucks">
                <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d06a18] transition-all w-full sm:w-auto">
                  View Our Inspected Stock
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
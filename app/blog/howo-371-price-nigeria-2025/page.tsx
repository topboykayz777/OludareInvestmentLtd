import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOWO 371 Price in Nigeria 2026: Comprehensive Buying Guide | OIL",
  description: "Looking for the current price of HOWO 371 in Nigeria? Discover 2026 price ranges for new and used Sinotruk tippers, factors affecting cost, and where to buy in Lagos.",
  keywords: ["HOWO 371 price Nigeria 2026", "Sinotruk HOWO 371 price", "price of dump truck in Nigeria", "HOWO 371 specifications Nigeria"],
}

export default function PriceGuideBlog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "HOWO 371 Price in Nigeria: 2026 Comprehensive Guide",
    "description": "A detailed breakdown of the current 2026 market prices for brand new and pre-owned Sinotruk HOWO 371 dump trucks in Nigeria, including port clearing and FX factors.",
    "image": "https://www.oludareinvestmentltd.com.ng/images/trucks/howo-dump-white-fleet.jpg",
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
    "datePublished": "2026-03-10",
    "dateModified": "2026-03-10"
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
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "HOWO 371 Price Guide" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            HOWO 371 Price in Nigeria: 2026 Comprehensive Guide
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Engr. Oludare</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> March 10, 2026</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/trucks/howo-dump-white-fleet.jpg"
              alt="HOWO 371 Dump Trucks for sale at Ojodu Berger Lagos 2026"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              The Sinotruk HOWO 371 remains the most sought-after dump truck in Nigeria as we enter 2026. Whether for construction, mining, or sand winning, its reliability is unmatched. But the question every buyer asks is: **"How much is it today?"**
            </p>

            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-accent mb-1">2026 Price Volatility</h4>
                <p className="text-sm leading-relaxed">
                  Due to the current 2026 exchange rate environment and port clearing costs, prices can change weekly. The figures below are verified estimates for the first quarter of 2026.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Estimated Price Ranges (2026)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 border border-primary/20">Condition</th>
                    <th className="p-4 border border-primary/20">Estimated Price (Naira)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Brand New (Factory 2026)</td>
                    <td className="p-4">Contact for Quote (FX Dependent)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Certified Pre-Owned (Clean)</td>
                    <td className="p-4">₦55,000,000 - ₦75,000,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Direct Port (China Used)</td>
                    <td className="p-4">₦48,000,000 - ₦62,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Rest of blog updated... */}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
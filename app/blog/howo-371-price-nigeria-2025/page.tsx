import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, ArrowRight, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOWO 371 Price in Nigeria 2025: Comprehensive Buying Guide | OIL",
  description: "Looking for the current price of HOWO 371 in Nigeria? Discover price ranges for new and used Sinotruk tippers, factors affecting cost, and where to buy in Lagos.",
  keywords: ["HOWO 371 price Nigeria", "Sinotruk HOWO 371 price 2025", "price of dump truck in Nigeria", "HOWO 371 specifications Nigeria"],
}

export default function PriceGuideBlog() {
  return (
    <main>
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "HOWO 371 Price Guide" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            HOWO 371 Price in Nigeria: 2025 Comprehensive Guide
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Engr. Oludare</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> March 10, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 10 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/trucks/howo-dump-white-fleet.jpg"
              alt="HOWO 371 Dump Trucks for sale at Ojodu Berger Lagos"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              The Sinotruk HOWO 371 is arguably the most sought-after dump truck in Nigeria. Whether for construction, mining, or sand winning, its reliability is unmatched. But the question every buyer asks is: **"How much is it today?"**
            </p>

            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-accent mb-1">Note on Price Volatility</h4>
                <p className="text-sm leading-relaxed">
                  Due to fluctuations in the Naira-to-Dollar exchange rate and changes in clearing costs at the Lagos ports, prices can change weekly. The figures below are estimated ranges for 2025.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Estimated Price Ranges (2025)</h2>
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
                    <td className="p-4 font-bold">Brand New (Factory)</td>
                    <td className="p-4">Contact for Quote (FX Dependent)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Certified Pre-Owned (Clean)</td>
                    <td className="p-4">₦45,000,000 - ₦65,000,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Direct Port (Used)</td>
                    <td className="p-4">₦38,000,000 - ₦52,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground">Factors Affecting the Price</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Exchange Rate:</strong> Since these trucks are imported, the USD/NGN rate is the biggest factor.</li>
              <li><strong>Bucket Capacity:</strong> Standard 20m³ buckets are cheaper than reinforced 25m³ or 30m³ mining buckets.</li>
              <li><strong>Tyre Condition:</strong> A set of 10 new 12.00R20 tyres adds significant value to a used unit.</li>
              <li><strong>Engine Model:</strong> The WD615.47 (371HP) is the standard, but 420HP models command a premium.</li>
            </ul>

            <div className="rounded-2xl bg-primary p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Get Today's Exact Price</h3>
              <p className="mb-6 opacity-80">Don't rely on outdated online prices. Chat with our sales office at Ojodu Berger for a real-time quote based on today's exchange rate.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/2348105955892?text=I%20need%20the%20current%20price%20for%20a%20HOWO%20371%20tipper.">
                  <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d06a18] transition-all w-full sm:w-auto">
                    Chat on WhatsApp
                  </button>
                </Link>
                <Link href="tel:+2348020890065">
                  <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
                    Call Sales Office
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
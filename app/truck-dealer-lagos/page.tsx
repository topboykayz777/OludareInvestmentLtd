import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SourcingProcess } from "@/components/sourcing-process"
import { TruckBuyingFaq } from "@/components/truck-buying-faq"
import { MapPin, Phone, MessageCircle, ShieldCheck, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Dealer in Lagos | HOWO, Shacman & Heavy Equipment in Ojodu Berger",
  description: "Visit Oludare Investment Ltd, a Lagos truck dealer at Ojodu Berger. Ask about available HOWO, Shacman, dump trucks, tractor heads, trailers, and heavy equipment.",
  keywords: [
    "truck dealer Lagos", "heavy duty truck dealer Lagos", "HOWO dealer Lagos", "Shacman dealer Lagos", "tipper dealer Ojodu Berger", "truck yard Lagos", "heavy equipment dealer Nigeria"
  ],
}

const whatsappUrl = "https://wa.me/2348105955892?text=Hello%2C%20I%20want%20to%20visit%20or%20buy%20a%20truck%20from%20your%20Lagos%20yard.%20Please%20share%20current%20availability."

export default function TruckDealerLagosPage() {
  return (
    <main>
      <Header />
      <section className="bg-primary py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Truck Dealer Lagos" }]} />
          <div className="mt-10 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Ojodu Berger, Lagos State</p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Truck Dealer in Lagos for HOWO, Shacman & Heavy Equipment</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Visit Oludare Investment Ltd at our Lagos yard to inspect available heavy-duty trucks, tippers, tractor heads, trailers, and construction equipment. Contact our sales team first to confirm the unit you want to see.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-white hover:bg-[#d06a18]"><MessageCircle className="h-5 w-5" /> WhatsApp Sales</a>
              <a href="tel:+2348020890065" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-bold hover:bg-white hover:text-primary"><Phone className="h-5 w-5" /> Call the Yard</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-7"><MapPin className="mb-4 h-8 w-8 text-accent" /><h2 className="mb-3 text-xl font-bold text-foreground">Visit Our Lagos Yard</h2><p className="text-sm leading-relaxed text-muted-foreground">209, Lagos/Ibadan Express Way, beside Total KFC Filling Station, Ojodu Berger, Lagos State.</p></div>
            <div className="rounded-2xl border border-border bg-card p-7"><Truck className="mb-4 h-8 w-8 text-accent" /><h2 className="mb-3 text-xl font-bold text-foreground">What We Supply</h2><p className="text-sm leading-relaxed text-muted-foreground">HOWO, Shacman, dump trucks, tractor heads, lowbed trailers, used trucks, excavators, and selected heavy machinery.</p></div>
            <div className="rounded-2xl border border-border bg-card p-7"><ShieldCheck className="mb-4 h-8 w-8 text-accent" /><h2 className="mb-3 text-xl font-bold text-foreground">Direct Buyer Contact</h2><p className="text-sm leading-relaxed text-muted-foreground">Ask the owner directly about current availability, model condition, specifications, inspection, delivery, and price.</p></div>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-3xl font-black text-foreground lg:text-4xl">A Lagos Truck Yard for Serious Buyers</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed"><p>Oludare Investment Ltd serves construction companies, quarry operators, haulage businesses, contractors, and individual fleet owners looking for heavy-duty equipment in Lagos and across Nigeria.</p><p>Our team can help you identify a suitable HOWO or Shacman configuration, arrange an inspection, and discuss delivery options for your location. Availability changes, so contact the sales office before travelling to the yard.</p></div>
          </div>
        </div>
      </section>
      <SourcingProcess compact />
      <TruckBuyingFaq />
      <ContactSection />
      <Footer />
    </main>
  )
}

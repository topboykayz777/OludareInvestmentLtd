import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FileCheck, MessageCircle, Video, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Sourcing in Nigeria for International Buyers | Lagos Dealer",
  description: "Need a HOWO, Shacman, tipper, tractor head, or heavy machine in Nigeria? Contact Oludare Investment Ltd in Lagos to discuss availability, inspection, documents, and delivery options.",
  keywords: [
    "truck sourcing agent Nigeria", "buy truck in Nigeria from abroad", "heavy equipment sourcing Lagos", "HOWO truck Nigeria international buyer", "Shacman truck Nigeria international buyer", "truck procurement Nigeria"
  ],
}

const whatsappUrl = "https://wa.me/2348105955892?text=Hello%2C%20I%20am%20outside%20Lagos%20or%20Nigeria%20and%20need%20help%20finding%20a%20truck.%20Please%20advise%20on%20available%20units%20and%20the%20buying process."

export default function InternationalTruckSourcingPage() {
  return (
    <main>
      <Header />
      <section className="bg-primary py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-4 lg:px-8"><Breadcrumbs items={[{ label: "International Truck Sourcing" }]} /><div className="mt-10 max-w-3xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Remote Buying Support from Lagos</p><h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Source Trucks in Nigeria Without Travelling to Lagos First</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">For buyers outside Lagos or outside Nigeria, our team can discuss available HOWO, Shacman, used trucks, trailers, and construction equipment directly with you.</p><div className="mt-8"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold hover:bg-[#d06a18]"><MessageCircle className="h-5 w-5" /> Speak with Sales on WhatsApp</a></div></div></div></section>
      <section className="bg-background py-16 lg:py-24"><div className="mx-auto max-w-7xl px-4 lg:px-8"><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"><div className="rounded-2xl border border-border bg-card p-7"><MessageCircle className="mb-4 h-8 w-8 text-accent" /><h2 className="text-lg font-bold text-foreground">Send Requirements</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Tell us the brand, model, intended use, condition, quantity, and buyer location.</p></div><div className="rounded-2xl border border-border bg-card p-7"><Truck className="mb-4 h-8 w-8 text-accent" /><h2 className="text-lg font-bold text-foreground">Confirm Availability</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Our sales team confirms what is currently available and shares relevant specifications.</p></div><div className="rounded-2xl border border-border bg-card p-7"><Video className="mb-4 h-8 w-8 text-accent" /><h2 className="text-lg font-bold text-foreground">Review Remotely</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Ask about photographs, video walkthroughs, inspection details, and yard visits.</p></div><div className="rounded-2xl border border-border bg-card p-7"><FileCheck className="mb-4 h-8 w-8 text-accent" /><h2 className="text-lg font-bold text-foreground">Discuss Delivery</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Documentation, transport, and delivery arrangements are discussed for each transaction.</p></div></div><div className="mx-auto mt-16 max-w-4xl"><h2 className="text-3xl font-black text-foreground lg:text-4xl">For Buyers Outside Lagos and Nigeria</h2><div className="mt-6 space-y-5 text-muted-foreground leading-relaxed"><p>Buying a heavy-duty truck remotely requires clear communication. Contact us with your requirements and we will explain what can be confirmed from our Lagos yard.</p><p>Final availability, specifications, documentation, payment arrangements, and delivery options depend on the exact unit and buyer location. The sales team will discuss those details directly with you.</p></div></div></div></section>
      <ContactSection /><Footer />
    </main>
  )
}

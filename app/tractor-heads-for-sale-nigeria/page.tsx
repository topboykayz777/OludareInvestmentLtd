import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tractor Heads for Sale in Nigeria | HOWO & Shacman Lagos",
  description: "Find HOWO and Shacman tractor heads for haulage in Nigeria. Oludare Investment Ltd helps buyers in Lagos confirm available 6x4 tractor heads, specifications, inspection, and delivery.",
  keywords: [
    "tractor heads for sale Nigeria", "HOWO tractor head Nigeria", "Shacman tractor head Lagos", "6x4 tractor head Nigeria", "truck head for container haulage Lagos", "tractor head dealer Lagos"
  ],
}

const whatsappUrl = "https://wa.me/2348105955892?text=Hello%2C%20I%20need%20a%20tractor%20head%20for%20haulage%20in%20Nigeria.%20Please%20share%20available%20HOWO%20and%20Shacman%20units."

export default function TractorHeadsPage() {
  return (
    <main>
      <Header />
      <section className="bg-primary py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl px-4 lg:px-8"><Breadcrumbs items={[{ label: "Tractor Heads" }]} /><div className="mt-10 max-w-3xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Haulage & Logistics Equipment</p><h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">HOWO & Shacman Tractor Heads for Sale in Nigeria</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Speak directly with Oludare Investment Ltd about available tractor heads for container haulage, interstate logistics, construction materials, and heavy trailer operations.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold hover:bg-[#d06a18]"><MessageCircle className="h-5 w-5" /> Ask About Availability</a><a href="tel:+2348020890065" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-bold hover:bg-white hover:text-primary"><Phone className="h-5 w-5" /> Call Sales</a></div></div></div></section>
      <section className="bg-background py-16 lg:py-24"><div className="mx-auto max-w-7xl px-4 lg:px-8"><div className="grid gap-8 md:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-8"><h2 className="text-2xl font-black text-foreground">HOWO Tractor Heads</h2><p className="mt-4 text-muted-foreground leading-relaxed">Ask about available HOWO tractor-head configurations, including 371HP and higher-power options where available. The right unit depends on trailer type, route, load, condition, and intended use.</p><ul className="mt-6 space-y-3 text-sm text-muted-foreground"><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> Suitable options for haulage and construction logistics</li><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> Ask about new and used availability</li><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> Confirm current specifications directly with sales</li></ul></div><div className="rounded-2xl border border-border bg-card p-8"><h2 className="text-2xl font-black text-foreground">Shacman Tractor Heads</h2><p className="mt-4 text-muted-foreground leading-relaxed">Shacman F3000 and X3000 tractor heads are considered for demanding haulage and long-distance operations. Contact the yard to confirm the model, engine, gearbox, condition, and inspection details.</p><ul className="mt-6 space-y-3 text-sm text-muted-foreground"><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> F3000 options for rugged heavy-duty work</li><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> X3000 options for haulage and driver comfort</li><li className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /> Inspection and delivery can be discussed</li></ul></div></div><div className="mx-auto mt-16 max-w-4xl"><h2 className="text-3xl font-black text-foreground lg:text-4xl">Choose a Tractor Head for the Work It Must Do</h2><p className="mt-6 text-muted-foreground leading-relaxed">Before contacting us, share the trailer type, expected load, route, preferred brand, new or used preference, and your location. This helps our team recommend suitable available units instead of sending generic information.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:text-accent">Send Your Requirement <ArrowRight className="h-4 w-4" /></a></div></div></section>
      <ContactSection /><Footer />
    </main>
  )
}

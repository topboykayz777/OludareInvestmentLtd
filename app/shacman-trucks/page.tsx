import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shacman F3000 & X3000 Trucks in Nigeria | Dealer Lagos 2026",
  description: "Explore Shacman F3000 dump trucks and X3000 tractor heads in Lagos. Ask Oludare Investment Ltd about current availability, specifications, inspection, delivery, and direct sales contact.",
  keywords: [
    "shacman f3000 for sale nigeria", "shacman f3000 dump truck lagos", "shacman x3000 tractor head nigeria",
    "shacman x3000 for sale lagos", "shacman truck dealer ojodu berger", "shacman dump truck lagos",
    "shacman 380hp truck nigeria", "shacman 420hp tractor head nigeria", "weichai shacman truck nigeria",
    "hande axle shacman nigeria", "shacman quarry truck nigeria", "shacman haulage truck nigeria",
    "shacman vs howo truck nigeria", "premium heavy duty trucks lagos"
  ],
}

export default function ShacmanTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Shacman F3000 & X3000 Availability & Buyer Guide 2026"
        subtitle="Premium Industrial Engineering"
        description="Experience the power of MAN technology and Weichai engines. We supply the most durable Shacman F3000 dump trucks and X3000 tractor heads to major construction firms across Nigeria."
        ctaText="Check Shacman Availability"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Shacman Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="brand"
        filterValue="Shacman"
        title="Premium Shacman Inventory"
        description="Explore our range of heavy-duty Shacman tippers and long-haul tractor heads available for inspection in Lagos."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl leading-tight">The Shacman Advantage: Built for Performance</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground text-pretty">
            <p className="text-lg">
              Shacman trucks represent the premium tier of Chinese heavy machinery in Nigeria. By combining **MAN (Germany) chassis technology** with the legendary **Weichai WP12 engine**, Shacman provides a truck that is more fuel-efficient and structurally stronger than its competitors.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="premium-card p-6">
                <h3 className="text-lg font-bold text-accent mb-2 uppercase tracking-wide">Weichai WP12 Engine</h3>
                <p className="text-sm">High-torque engine designed for heavy long-distance hauls. Known for superior fuel economy on the Lagos-Kano-Maiduguri route.</p>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-lg font-bold text-accent mb-2 uppercase tracking-wide">Hande Axle Technology</h3>
                <p className="text-sm">Utilizes world-class Hande/MAN 16-ton double reduction axles, giving Shacman trucks unmatched pulling power in muddy or hilly terrains.</p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-secondary p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Shacman Model Comparison</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] font-bold text-white">F</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">F3000 Series</p>
                    <p className="text-sm">A rugged option for dump trucks, quarrying, mining, and difficult construction sites. Common configurations use Weichai power, FAST transmissions, and heavy-duty HANDE/MAN axle systems.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] font-bold text-white">X</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">X3000 Series</p>
                    <p className="text-sm">A premium-cabin option for tractor-head and long-haul operations, with configuration-dependent engine power, FAST gearbox, and driver-focused features.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">F3000 Buyer Checklist</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Confirm 6x4 or 8x4 configuration</li>
                  <li>• Confirm engine model and horsepower</li>
                  <li>• Inspect chassis, tipping body, axles, and hydraulics</li>
                  <li>• Ask about new, foreign-used, or refurbished condition</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">X3000 Buyer Checklist</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Confirm tractor-head or dump-truck configuration</li>
                  <li>• Confirm engine, gearbox, axle, and cab specification</li>
                  <li>• Check suitability for route and trailer type</li>
                  <li>• Request current availability directly from sales</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold">Need a Specific Shacman Configuration?</h3>
              <p className="mt-3 max-w-2xl text-white/75">Send the model, intended use, preferred condition, quantity, and location. Our team will confirm the available unit and its exact specifications directly.</p>
              <a href="https://wa.me/2348105955892?text=Hello%2C%20I%20need%20a%20Shacman%20truck.%20Please%20share%20available%20F3000%20or%20X3000%20units%2C%20specifications%2C%20condition%2C%20and%20location." target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-accent px-6 py-3 font-bold text-white hover:bg-[#d06a18]">Contact Shacman Sales</a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
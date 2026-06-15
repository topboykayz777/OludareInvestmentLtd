import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shacman F3000 & X3000 Price in Nigeria | Premium Shacman Dealer Lagos",
  description: "Buy high-performance Shacman F3000 and X3000 trucks in Lagos. Premium heavy-duty solutions powered by Weichai engines. Visit our Shacman yard at Ojodu Berger today.",
  keywords: [
    "shacman f3000 price in nigeria", "shacman x3000 tractor head price", 
    "shacman truck dealer ojodu berger", "shacman dump truck lagos", 
    "weichai engine price nigeria", "shacman vs howo truck nigeria", 
    "premium heavy duty trucks lagos"
  ],
}

export default function ShacmanTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Shacman F3000 & X3000 Price Guide 2025"
        subtitle="Premium Industrial Engineering"
        description="Experience the power of MAN technology and Weichai engines. We supply the most durable Shacman F3000 dump trucks and X3000 tractor heads to major construction firms across Nigeria."
        ctaText="Request Shacman Quote"
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
                    <p className="text-sm">The most popular series in Nigeria. Best for dump trucks and tippers operating in mining sites.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] font-bold text-white">X</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">X3000 Series</p>
                    <p className="text-sm">Next-generation premium cabin. Ideal for logistics companies requiring high driver comfort and aerodynamic efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
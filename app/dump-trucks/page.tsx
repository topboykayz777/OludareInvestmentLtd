import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dump Trucks for Sale in Lagos Nigeria | 6x4 & 8x4 Tippers",
  description: "Buy heavy-duty dump trucks in Nigeria. We stock HOWO 371 and Shacman F3000 tippers for construction and mining. Best prices at Ojodu Berger Lagos.",
  keywords: ["dump trucks Lagos", "tipper trucks Nigeria", "HOWO 371 tipper price", "Shacman dump truck Lagos", "sand trucks Nigeria"],
}

export default function DumpTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Heavy-Duty Dump Trucks & Tippers"
        subtitle="Construction & Mining Specialists"
        description="The most rugged tippers for the Nigerian terrain. From 20m³ to 30m³ capacities, our HOWO and Shacman dump trucks are built to move mountains."
        ctaText="Request Tipper Quote"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Dump Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="category"
        filterValue="Trucks"
        title="Available Tipper Inventory"
        description="Browse our current stock of 10-tyre and 12-tyre dump trucks ready for immediate deployment to your site."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">Engineered for the Toughest Sites</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              At Oludare Investment Ltd, we understand that a dump truck is only as good as its uptime. That's why our tippers feature **reinforced sub-frames** and **high-strength steel buckets** designed to handle the impact of heavy rocks and wet sand common in Nigerian quarries.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Hydraulic Reliability</h3>
                <p className="text-sm">Equipped with world-class front-lifting hydraulic systems for smooth and safe tipping operations even on uneven ground.</p>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Fuel Efficiency</h3>
                <p className="text-sm">Optimized gear ratios and Weichai engine technology ensure you get the most tons moved per liter of diesel.</p>
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
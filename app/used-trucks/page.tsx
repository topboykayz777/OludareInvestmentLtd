import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Used Trucks for Sale in Lagos | Certified Pre-Owned HOWO & Shacman",
  description: "Affordable used trucks in Nigeria. Buy inspected and serviced pre-owned HOWO and Shacman tippers at our Ojodu Berger yard. Quality you can trust.",
  keywords: ["used trucks Lagos", "second hand trucks Nigeria", "used HOWO 371 price", "cheap trucks Lagos", "pre-owned Shacman Nigeria"],
}

export default function UsedTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Certified Pre-Owned Trucks"
        subtitle="Quality at an Affordable Price"
        description="Get the power of a premium truck at a fraction of the cost. All our used units undergo a 50-point inspection before being listed for sale."
        ctaText="View Used Stock"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Used Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="used"
        filterValue="true"
        title="Current Pre-Owned Inventory"
        description="Clean, serviced, and ready-to-work used trucks available for immediate inspection in Lagos."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">The OIL Used Truck Standard</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Buying a used truck in Nigeria can be risky. At Oludare Investment Ltd, we remove the guesswork. Every pre-owned unit we sell has been **vetted by our senior engineers** to ensure the engine, transmission, and chassis are in sound condition.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Full Service History</h3>
                <p className="text-sm">We provide transparency on the truck's history and any major repairs conducted during our refurbishment process.</p>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Immediate Deployment</h3>
                <p className="text-sm">Unlike 'direct-from-port' units that may need work, our used trucks are site-ready from day one.</p>
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
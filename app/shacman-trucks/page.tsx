import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shacman Trucks Nigeria | F3000 & X3000 Dump Trucks for Sale Lagos",
  description: "Premium Shacman truck dealer in Lagos. Get the best prices on Shacman F3000 and X3000 dump trucks and tractor heads. Heavy-duty performance for Nigerian roads.",
  keywords: ["Shacman trucks Lagos", "Shacman F3000 price Nigeria", "Shacman X3000 Nigeria", "Shacman dealer Lagos", "heavy duty trucks Nigeria"],
}

export default function ShacmanTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="High-Performance Shacman Trucks"
        subtitle="Premium Heavy-Duty Solutions"
        description="Engineered for power and durability. We supply the latest Shacman F3000 and X3000 series, optimized for mining, construction, and heavy haulage across Nigeria."
        ctaText="Get Shacman Quote"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Shacman Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="brand"
        filterValue="Shacman"
        title="Shacman Fleet Inventory"
        description="View our current stock of Shacman tippers and tractor heads. All units are factory-new or certified pre-owned."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">The Shacman Advantage in Nigeria</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Shacman trucks are renowned for their **Military-Grade Durability** and advanced technology. Powered by world-class Weichai engines and Cummins technology, Shacman provides a premium alternative for operators who demand maximum uptime.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Weichai Power</h3>
                <p className="text-sm">Equipped with high-torque Weichai engines that deliver exceptional fuel economy and pulling power for heavy Nigerian loads.</p>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">MAN Technology</h3>
                <p className="text-sm">Shacman utilizes MAN axle technology and cabin designs, offering superior driver comfort and structural integrity.</p>
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
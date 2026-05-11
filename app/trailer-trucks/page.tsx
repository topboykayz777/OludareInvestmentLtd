import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trailer Trucks & Low-Beds for Sale in Nigeria | Logistics Equipment",
  description: "Premium trailer trucks, flatbeds, and low-bed trailers in Lagos. We supply 3-axle and 4-axle trailers for heavy equipment transport and long-haul logistics.",
  keywords: ["trailer trucks Lagos", "lowbed trailer Nigeria", "flatbed trailer price", "tractor head Lagos", "logistics trucks Nigeria"],
}

export default function TrailerTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Trailers & Long-Haul Logistics"
        subtitle="Nationwide Transport Solutions"
        description="Move heavy equipment and containers with ease. We provide high-capacity tractor heads and specialized trailers engineered for Nigerian roads."
        ctaText="Get Trailer Quote"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Trailer Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="category"
        filterValue="Trailers"
        title="Trailer & Low-Bed Inventory"
        description="Explore our range of 3-axle and 4-axle trailers, including low-beds, flatbeds, and sidewall units."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">Maximum Load, Minimum Stress</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Our trailers are built using **high-tensile Q345B steel**, ensuring they can carry the heaviest excavators and bulldozers without structural fatigue. Whether you are hauling from Apapa Port or moving equipment to a remote site, our trailers deliver stability and safety.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Heavy-Duty Axles</h3>
                <p className="text-sm">Featuring 13-ton to 16-ton FUWA or BPW axles for superior load distribution and braking performance.</p>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Custom Configurations</h3>
                <p className="text-sm">We can customize trailer lengths and ramp types (manual or hydraulic) to fit your specific logistical needs.</p>
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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOWO Sino Trucks for Sale in Lagos Nigeria | Genuine 371 & 420 Models",
  description: "Official dealer of HOWO Sino Trucks in Nigeria. We supply 371HP and 420HP dump trucks, tractor heads, and cement mixers. Visit our Ojodu Berger yard today.",
  keywords: ["HOWO trucks Lagos", "Sinotruk Nigeria", "HOWO 371 price Nigeria", "HOWO dump truck Lagos", "HOWO spare parts Nigeria"],
}

export default function HowoTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Genuine HOWO Sino Trucks in Nigeria"
        subtitle="Official Dealer - RC 1042746"
        description="The backbone of Nigerian logistics. We provide factory-direct HOWO 371 and 420 models with full spare parts support and nationwide delivery."
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "HOWO Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="brand"
        filterValue="HOWO"
        title="Current HOWO Inventory"
        description="Explore our range of Sinotruk HOWO units available for immediate inspection at our Lagos yard."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">Why Choose HOWO Trucks for Your Fleet?</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Sinotruk HOWO has become the most popular heavy-duty truck brand in Nigeria for a reason: **Reliability and Ease of Maintenance**. Whether you are operating in a quarry in Ogun State or doing long-haul logistics to Kano, HOWO trucks are built to withstand the toughest conditions.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Tropicalized Engineering</h3>
                <p className="text-sm">Our HOWO units feature enhanced cooling systems and reinforced chassis specifically designed for the Nigerian climate and road conditions.</p>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-primary mb-2">Parts Availability</h3>
                <p className="text-sm">Never worry about downtime. HOWO spare parts are the most widely available truck parts in Nigeria, and we stock them right here in Lagos.</p>
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
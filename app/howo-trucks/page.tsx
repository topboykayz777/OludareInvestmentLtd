import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HOWO 371 Price in Nigeria 2025 | Brand New Sinotruk HOWO Tippers Lagos",
  description: "Get the latest HOWO 371 price in Nigeria for 2025. Official Sinotruk HOWO dealer in Lagos supplying 371HP and 420HP dump trucks, tractor heads, and CNG models at Ojodu Berger.",
  keywords: [
    "HOWO 371 price in nigeria 2025", "howo 371 tipper price in lagos", 
    "buy brand new sinotruk howo nigeria", "howo 371 specifications", 
    "sinotruk howo dealer lagos", "howo 371 engine price nigeria", 
    "howo 10 wheeler price nigeria", "howo cng truck price lagos"
  ],
}

export default function HowoTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="HOWO 371 Price in Nigeria: 2025 Market Guide"
        subtitle="Official Sinotruk Agent - RC 1042746"
        description="The backbone of Nigerian construction. We provide direct factory pricing for the HOWO 371 (WD615.47) and HOWO 420HP models, with guaranteed genuine spare parts support at our Ojodu Berger yard."
        ctaText="Get Today's HOWO Price"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "HOWO Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="brand"
        filterValue="HOWO"
        title="Verified HOWO 371 & 420 Inventory"
        description="All units are current 2024/2025 models, tropicalized for the Nigerian terrain and ready for immediate deployment."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl leading-tight">Why the HOWO 371 is the King of Nigerian Roads</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground text-pretty">
            <p className="text-lg">
              The Sinotruk HOWO 371 has dominated the Nigerian market for over a decade because it offers the perfect balance of power, durability, and ease of maintenance. Whether you are hauling sand in Ikorodu or operating in a quarry in Abeokuta, the HOWO 371 (10-tyre tipper) is engineered to last.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="premium-card p-6">
                <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">WD615.47 Engine Power</h3>
                <p className="text-sm">The 371HP Euro II engine is specifically chosen for Nigeria because it handles our local diesel quality better than high-electronic Euro IV or V engines.</p>
              </div>
              <div className="premium-card p-6">
                <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">Parts Dominance</h3>
                <p className="text-sm">HOWO 371 parts are the most widely available truck parts in Nigeria. From Lagos to Kano, you can find filters, injectors, and cabins in almost any market.</p>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4">Key Specification</th>
                    <th className="p-4">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Engine Model</td>
                    <td className="p-4">WD615.47 (371HP)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Transmission</td>
                    <td className="p-4">HW19710 (10 Speed)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Rear Axle</td>
                    <td className="p-4">HC16 / AC16 Heavy Duty</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Tyre Size</td>
                    <td className="p-4">12.00R20 (10+1 Tyres)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
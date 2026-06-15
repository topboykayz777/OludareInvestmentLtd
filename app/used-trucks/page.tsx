import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { CategoryInventory } from "@/components/category-inventory"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Used Trucks for Sale in Lagos | Direct Port Used HOWO & Shacman Tippers",
  description: "Buy verified and inspected used trucks in Lagos. We stock direct port used HOWO 371 tippers and Shacman F3000 trucks at Ojodu Berger. Quality you can trust at affordable prices.",
  keywords: [
    "used trucks for sale in lagos", "used howo tipper price in ojodu berger", 
    "direct port used trucks lagos", "second hand 10 wheeler tipper lagos", 
    "cheap used dump trucks nigeria", "used shacman f3000 price nigeria", 
    "pre owned heavy duty trucks lagos"
  ],
}

export default function UsedTrucksPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Direct Port Used Trucks in Lagos"
        subtitle="Certified Pre-Owned Inventory"
        description="Don't take risks with unverified used trucks. At Oludare Investment, we specialize in sourcing clean, direct port used (Belgium/China used) HOWO and Shacman tippers that have been rigorously inspected by our team."
        ctaText="Browse Used Inventory"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Used Trucks" }]} />
        </div>
      </div>

      <CategoryInventory 
        filterType="used"
        filterValue="true"
        title="Inspected Used Truck Stock"
        description="View our current inventory of pre-owned tippers, tractor heads, and machinery ready for work at our Berger yard."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">The Oludare Standard for Used Trucks</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground text-pretty">
            <p className="text-lg">
              Buying a used truck at a Lagos yard can be a nightmare if you don't know what to look for. We remove the uncertainty by providing a **Full Mechanical Disclosure** for every unit we sell. We aren't just selling you a truck; we are selling you a business asset that must perform.
            </p>
            
            <div className="grid gap-8 mt-12 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent font-black text-2xl">01</div>
                <h4 className="font-bold text-foreground mb-2">Engine Integrity</h4>
                <p className="text-xs">We conduct a mandatory "blow-by" test on all WD615 and Weichai engines before purchase.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent font-black text-2xl">02</div>
                <h4 className="font-bold text-foreground mb-2">Chassis Check</h4>
                <p className="text-xs">Zero tolerance for welded or cracked frames. We only sell units with original structural integrity.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent font-black text-2xl">03</div>
                <h4 className="font-bold text-foreground mb-2">Customs Verfied</h4>
                <p className="text-sm">Every used unit comes with 100% verified customs clearing papers and C-Numbers.</p>
              </div>
            </div>

            <div className="mt-12 rounded-3xl bg-primary p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">Have a specific budget?</h3>
              <p className="mb-6 opacity-70">If we don't have it in stock, our sourcing agents will find it for you in Ojodu Berger today.</p>
              <a href="https://wa.me/2348105955892?text=I%20have%20a%20budget%20of%20...%20and%20I%20need%20a%20used%20truck." className="inline-block bg-accent px-10 py-4 rounded-xl font-bold hover:bg-[#d06a18] transition-all">
                Talk to a Sourcing Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
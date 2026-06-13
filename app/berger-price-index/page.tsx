import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PriceCalculator } from "@/components/price-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ojodu Berger Daily Truck Price Index | Real-Time HOWO & Shacman Calculator",
  description: "Calculate the exact cost of HOWO 371 and Shacman F3000 trucks in Lagos today. Adjust live parallel market and customs FX rates to see real-time yard prices.",
  keywords: [
    "HOWO 371 price Lagos today",
    "Shacman F3000 price Nigeria",
    "truck clearing cost Lagos port",
    "Ojodu Berger truck price index",
    "buy truck on installment Lagos",
    "Sinotruk price calculator Nigeria"
  ],
}

export default function PriceIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-primary py-16 lg:py-24 text-white relative overflow-hidden clip-diagonal">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <span className="rounded-full bg-accent/10 border border-accent/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            Live Market Intelligence
          </span>
          <h1 className="mt-4 mb-6 text-4xl font-black sm:text-5xl lg:text-6xl leading-tight text-balance">
            Ojodu Berger Daily Price Index
          </h1>
          <p className="max-w-2xl text-lg text-white/80 leading-relaxed text-pretty">
            {"Don't get cheated by outdated online prices. Use our interactive calculator to estimate current yard prices based on today's parallel market and customs clearing exchange rates."}
          </p>
        </div>
      </div>

      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Berger Price Index" }]} />
        </div>
      </div>

      <PriceCalculator />

      <section className="bg-background py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-3xl font-black text-foreground lg:text-4xl">How Our Price Index Works</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Heavy-duty truck prices in Ojodu Berger are highly volatile because they are tied directly to two fluctuating rates: the **Parallel Market USD/NGN rate** (used to purchase the truck from China/Europe) and the **Nigeria Customs Service (NCS) exchange rate** (used to clear the truck at the Lagos ports).
            </p>
            <p>
              By using our interactive calculator, you can adjust these rates to match today's actual market conditions. This gives you a highly accurate estimate of what dealers paid to bring the trucks to the yard, helping you negotiate with confidence.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-xl border border-border p-6 bg-card">
                <h3 className="text-lg font-bold text-primary mb-2">FOB & Shipping Costs</h3>
                <p className="text-sm">The base cost of the truck at the overseas port (FOB) and the ocean freight to Lagos are paid in USD. This is highly stable but heavily affected by the parallel market rate.</p>
              </div>
              <div className="rounded-xl border border-border p-6 bg-card">
                <h3 className="text-lg font-bold text-primary mb-2">Port Clearing & Duty</h3>
                <p className="text-sm">Customs duty is calculated using the official NCS rate. When the CBN adjusts this rate, the clearing cost at Apapa or Tincan ports changes instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, TrendingUp, DollarSign } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Start a Profitable Haulage Business in Nigeria (2025 Guide)",
  description: "Learn how to start and scale a tipper or trailer haulage business in Nigeria. Profit analysis, truck selection, and driver management tips.",
  keywords: [
    "haulage business Nigeria", "start transport company Lagos", "tipper business profit Nigeria", 
    "how much do truck owners make", "sand winning business Lagos", "construction logistics Nigeria", 
    "truck fleet management", "starting haulage with one truck", "HOWO 371 for business", 
    "Shacman truck investment", "haulage contracts Nigeria", "truck driver management Lagos", 
    "diesel cost vs profit Nigeria", "interstate haulage Nigeria", "logistics business plan Nigeria", 
    "truck financing for startups", "Oludare Investment haulage", "profitable business ideas Nigeria 2025", 
    "heavy duty truck ROI", "trucking industry Nigeria"
  ],
}

export default function HaulageBusinessBlog() {
  return (
    <main>
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "Haulage Guide" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            Haulage Business in Nigeria: How to Make ₦1M+ Monthly Profit
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Sales Team</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> May 25, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/trucks/howo-dump-yellow-fleet.jpg"
              alt="Fleet of yellow HOWO dump trucks for haulage business in Nigeria"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              The demand for heavy-duty haulage in Nigeria is at an all-time high. With massive infrastructure projects and the growth of the mining sector, owning a truck is one of the most stable investments you can make in 2025.
            </p>

            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-accent" /> Why Haulage?
            </h2>
            <p>
              Unlike other businesses, haulage is "essential." Cement must be moved, sand must be delivered to sites, and containers must leave the ports. A single HOWO 371 tipper doing sand delivery in Lagos can generate significant daily cash flow.
            </p>

            <h2 className="text-2xl font-bold text-foreground">The Profit Math (Estimated)</h2>
            <div className="bg-secondary rounded-2xl p-8 border border-border">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground mb-1">Average Trip Revenue</p>
                  <p className="text-2xl font-black text-primary">₦120,000 - ₦180,000</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground mb-1">Trips Per Month</p>
                  <p className="text-2xl font-black text-primary">20 - 25 Trips</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm italic text-muted-foreground">
                  *After diesel, driver commission, and "on-the-road" expenses, many owners take home ₦800k to ₦1.2M per truck monthly.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground">3 Keys to Success</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Choose the Right Truck:</strong> For sand/quarry, go for a HOWO 371. For long-distance containers, a Shacman X3000 is better.</li>
              <li><strong>Driver Management:</strong> Your driver is your partner. Pay them well and use a GPS tracker to monitor fuel and location.</li>
              <li><strong>Preventive Maintenance:</strong> Don't wait for the truck to stop. Change oil and filters religiously to avoid ₦2M engine overhauls.</li>
            </ul>

            <div className="rounded-2xl bg-primary p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="h-8 w-8 text-accent" /> Start Your Empire Today
              </h3>
              <p className="mb-6 opacity-80">We don't just sell trucks; we help you build a business. Ask about our "Startup Fleet" packages and flexible financing options.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/truck-financing">
                  <button className="bg-accent text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d06a18] transition-all w-full sm:w-auto">
                    Explore Financing
                  </button>
                </Link>
                <Link href="https://wa.me/2348105955892?text=I%20want%20to%20start%20a%20haulage%20business.%20Please%20advise%20on%20trucks.">
                  <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
                    Get Business Advice
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
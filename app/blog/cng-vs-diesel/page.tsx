import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CNG vs Diesel Trucks in Nigeria: Cost & Performance | OIL Blog",
  description: "Compare CNG and Diesel trucks for your Nigerian fleet. Analysis of fuel costs, maintenance, and infrastructure for Shacman and HOWO trucks.",
  keywords: ["CNG trucks Nigeria", "diesel vs cng trucks", "fuel cost Nigeria trucks", "CNO HOWO trucks Lagos"],
}

export default function CngBlog() {
  return (
    <main>
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Knowledge Base", href: "/#blog" }, { label: "CNG vs Diesel" }]} />
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            CNG vs Diesel: Which is Better for Your Fleet?
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Sales Team</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan 28, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/trucks/howo-cng-trucks-fleet.jpg"
              alt="Comparison of CNG and Diesel Trucks in Nigeria"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              With the rising cost of diesel in Nigeria, many fleet operators are looking at Compressed Natural Gas (CNG) as a viable alternative. But is it right for your specific operation?
            </p>

            <h2 className="text-2xl font-bold text-foreground">The Cost Advantage of CNG</h2>
            <p>
              CNG can reduce fuel costs by up to 40-50% compared to diesel. For a fleet of 10 trucks doing long-haul trips from Lagos to Kano, the savings can run into millions of Naira monthly.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Infrastructure Considerations</h2>
            <p>
              The main challenge for CNG in Nigeria is the availability of refueling stations. Currently, CNG is most viable for fleets operating in the South-West and South-South regions where gas infrastructure is more developed.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Maintenance and Performance</h2>
            <p>
              CNG engines run cleaner, which can lead to longer intervals between oil changes. However, they generally have slightly less torque than diesel engines, which might be a factor if you are hauling extremely heavy loads in hilly areas.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-12">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-primary mb-2">Choose Diesel If:</h4>
                <ul className="text-sm space-y-2">
                  <li>• You operate in remote areas without gas stations</li>
                  <li>• You need maximum torque for heavy mining</li>
                  <li>• You want higher resale value in the current market</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                <h4 className="font-bold text-accent mb-2">Choose CNG If:</h4>
                <ul className="text-sm space-y-2">
                  <li>• You operate on fixed routes with gas access</li>
                  <li>• Fuel cost reduction is your top priority</li>
                  <li>• You want to reduce your carbon footprint</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
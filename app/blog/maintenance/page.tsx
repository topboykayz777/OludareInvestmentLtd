import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MaintenanceBlog() {
  return (
    <main>
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link href="/#blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
          </Link>
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            How to Maintain Your HOWO 371 Engine in Nigeria
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Engr. Oludare</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Feb 15, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 5 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/spare-parts/howo-diesel-engine-with-filters.jpg"
              alt="HOWO 371 Engine Maintenance"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              The HOWO 371HP engine (WD615.47) is the backbone of the Nigerian construction industry. However, our tropical climate and dusty terrains require a specific maintenance regimen to ensure longevity.
            </p>

            <h2 className="text-2xl font-bold text-foreground">1. Oil and Filter Changes</h2>
            <p>
              In Nigeria, we recommend changing the engine oil every 10,000km to 15,000km depending on the site conditions. Always use high-quality 15W-40 diesel engine oil. Never skip the oil filter change; a clogged filter can lead to catastrophic engine failure.
            </p>

            <h2 className="text-2xl font-bold text-foreground">2. Air Intake System</h2>
            <p>
              Dust is the silent killer of turbochargers. Clean your primary air filter daily if working in a quarry or construction site. Replace both primary and secondary filters every 3 months. A clean air system improves fuel efficiency by up to 15%.
            </p>

            <h2 className="text-2xl font-bold text-foreground">3. Cooling System Management</h2>
            <p>
              The Nigerian heat is intense. Ensure your radiator is free of debris. Use a proper coolant mix rather than just plain water to prevent internal corrosion and scale buildup in the engine block.
            </p>

            <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 mt-12">
              <h3 className="text-xl font-bold text-accent mb-4">Need Genuine Parts?</h3>
              <p className="mb-6">We stock original HOWO filters, injectors, and complete engine assemblies at our Ojodu Berger yard.</p>
              <Link href="https://wa.me/2348105955892">
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d06a18] transition-all">
                  Order Spare Parts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
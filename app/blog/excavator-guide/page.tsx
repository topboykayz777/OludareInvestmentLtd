import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, User, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExcavatorBlog() {
  return (
    <main>
      <Header />
      <article className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link href="/#blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
          </Link>
          
          <h1 className="mb-6 text-4xl font-black text-foreground lg:text-6xl leading-tight">
            Choosing the Right Excavator for Dredging Projects
          </h1>
          
          <div className="mb-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4" /> Project Specialist</span>
            <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan 10, 2025</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 6 min read</span>
          </div>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/excavators/cat-320-amphibious-excavator.jpg"
              alt="Amphibious Excavator for Dredging"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              Dredging and sand winning in Lagos requires specialized equipment. Standard excavators often struggle in swampy terrains, which is where amphibious models come in.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Why Amphibious?</h2>
            <p>
              Amphibious excavators feature large pontoons instead of standard tracks, allowing them to float and operate in shallow water and deep mud. This is essential for canal clearing and sand winning operations in areas like Ikorodu and Lekki.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Key Specs to Look For</h2>
            <p>
              When selecting an excavator for dredging, pay attention to the reach. Long-reach booms are often necessary to scoop sand from the riverbed effectively. Also, ensure the hydraulic system is tropicalized to handle the continuous high-load operation in Nigerian heat.
            </p>

            <h2 className="text-2xl font-bold text-foreground">Brand Reliability</h2>
            <p>
              XCMG and CAT are the leaders in this space. XCMG offers excellent value for money with robust performance, while CAT provides unmatched global parts availability. At Oludare Investment, we help you weigh these factors based on your project budget.
            </p>

            <div className="rounded-2xl bg-primary p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Consult Our Project Team</h3>
              <p className="mb-6 opacity-80">Not sure which machine fits your site? We provide free technical consultations for all our clients.</p>
              <Link href="https://wa.me/2348105955892">
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d06a18] transition-all">
                  Get Expert Advice
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
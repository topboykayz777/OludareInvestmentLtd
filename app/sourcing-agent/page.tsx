import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ShieldCheck, Search, FileCheck, Truck, Video, UserCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trusted Truck Sourcing Agent Lagos | Independent Inspection Service Ojodu Berger",
  description: "Don't get scammed buying trucks in Lagos. Oludare Investment Ltd is your independent sourcing agent at Ojodu Berger. We verify customs papers and conduct 50-point mechanical inspections for buyers nationwide.",
  keywords: [
    "truck sourcing agent lagos", "independent truck inspector ojodu berger", 
    "truck buying agent lagos", "verify truck customs papers nigeria", 
    "how to avoid truck scams in lagos", "ojodu berger truck market", 
    "buy truck safely from outside lagos", "truck inspection checklist nigeria"
  ],
}

export default function SourcingAgentPage() {
  const steps = [
    {
      icon: Search,
      title: "Market-Wide Sourcing",
      desc: "We don't just sell our own stock. We search every verified yard in Ojodu Berger, Mowe, and Apapa to find the exact truck you need."
    },
    {
      icon: ShieldCheck,
      title: "50-Point Inspection",
      desc: "Our senior engineers conduct a rigorous physical and mechanical check, including the engine blow-by test and chassis integrity verification."
    },
    {
      icon: FileCheck,
      title: "Document Verification",
      desc: "We verify customs clearing papers, chassis numbers, and ownership history to ensure your investment is 100% legal and safe."
    },
    {
      icon: Video,
      title: "Live Video Reports",
      desc: "Operating from Abuja or Kano? We provide live video walkthroughs and detailed photo reports so you can see exactly what you're buying."
    }
  ]

  return (
    <main>
      <Header />
      <LandingHero 
        title="Your Trusted Independent Truck Agent in Lagos"
        subtitle="Sourcing | Inspection | Verification"
        description="Buying a heavy-duty truck is a massive investment. Don't risk it with unknown dealers. We act as your eyes and ears on the ground at Ojodu Berger."
        ctaText="Hire a Sourcing Agent"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Sourcing & Inspection" }]} />
        </div>
      </div>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">How We Protect You</p>
            <h2 className="mb-4 text-3xl font-black text-foreground lg:text-5xl">Our Sourcing & Verification Process</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              We operate independently. Our goal is to ensure you get the best value truck with zero risk, regardless of which yard it is sitting in.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="premium-card p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-accent">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-primary p-8 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-accent/10 blur-[100px]" />
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h3 className="mb-6 text-2xl font-black lg:text-4xl">Remote Buying Made Simple</h3>
                <p className="mb-8 text-white/70 leading-relaxed">
                  Over 60% of our clients are outside Lagos. We have perfected the remote buying process for fleet owners in Abuja, Port Harcourt, Enugu, and the North. You don't need to travel down; we handle everything from finding the truck to secure nationwide delivery.
                </p>
                <ul className="space-y-4">
                  {[
                    "Live video engine start and hydraulic tests",
                    "Detailed digital inspection reports via PDF",
                    "Assistance with secure bank transfers and escrow",
                    "Registered logistics and delivery to your doorstep"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <UserCheck className="h-5 w-5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h4 className="mb-4 text-xl font-bold">Standard Sourcing Fee</h4>
                <p className="mb-6 text-sm text-white/60">Our agent fees are transparent and fixed. No hidden commissions from sellers.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-sm">Single Truck Inspection</span>
                    <span className="font-bold text-accent">Contact us</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-sm">Full Sourcing & Verification</span>
                    <span className="font-bold text-accent">Negotiable</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/2348105955892?text=I%20need%20a%20sourcing%20agent%20to%20help%20me%20find%20and%20inspect%20a%20truck%20in%20Lagos." 
                  className="mt-8 block"
                >
                  <button className="w-full bg-accent text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#d06a18] transition-all">
                    Speak with an Agent
                  </button>
                </a>
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
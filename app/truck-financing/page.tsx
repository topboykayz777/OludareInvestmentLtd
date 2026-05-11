import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LandingHero } from "@/components/landing-hero"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CreditCard, Building2, CheckCircle2, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Financing & Installment Payment in Nigeria | OIL",
  description: "Flexible payment plans for heavy-duty trucks in Lagos. We offer financing options for corporate clients and construction firms. Get your fleet moving today.",
  keywords: ["truck financing Nigeria", "buy truck on installment Lagos", "truck loan Nigeria", "corporate truck lease Lagos", "HOWO financing"],
}

export default function FinancingPage() {
  return (
    <main>
      <Header />
      <LandingHero 
        title="Flexible Truck Financing Solutions"
        subtitle="Grow Your Fleet Faster"
        description="Don't let capital constraints slow down your project. We offer tailored payment arrangements for verified corporate clients across Nigeria."
        ctaText="Discuss Financing"
      />
      
      <div className="bg-secondary pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Truck Financing" }]} />
        </div>
      </div>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-black text-foreground lg:text-5xl leading-tight">
                We Help You <span className="text-accent">Get Moving</span> Without the Full Upfront Cost
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Oludare Investment Ltd partners with leading financial institutions and offers internal credit facilities to help construction and logistics firms scale their operations efficiently.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    title: "Corporate Lease-to-Own",
                    desc: "Ideal for established firms with ongoing contracts. Pay a deposit and spread the balance over 6-12 months."
                  },
                  {
                    icon: CreditCard,
                    title: "Bank Partnership Support",
                    desc: "We provide all necessary documentation (Proforma, RC papers) to support your asset finance application with your bank."
                  },
                  {
                    icon: Clock,
                    title: "Fast Approval Process",
                    desc: "Our internal verification process for corporate clients takes less than 7 working days."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-secondary p-8 lg:p-12 border border-border">
              <h3 className="mb-6 text-2xl font-bold text-foreground">Eligibility Requirements</h3>
              <ul className="space-y-4">
                {[
                  "Registered Business (CAC Documents)",
                  "6 Months Bank Statements",
                  "Proof of Ongoing Contracts/Projects",
                  "Valid Means of Identification of Directors",
                  "Minimum 30-50% Initial Deposit",
                  "Post-Dated Cheques for Balance"
                ].map((req) => (
                  <li key={req} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 rounded-2xl bg-accent/10 border border-accent/20">
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Note</p>
                <p className="text-sm text-muted-foreground">
                  Financing terms are subject to credit verification and equipment availability. Visit our office for a personalized consultation.
                </p>
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
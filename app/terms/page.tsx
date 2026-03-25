import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="mb-8 text-4xl font-black text-foreground lg:text-5xl">Terms of Service</h1>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: March 2025</p>
            <p>
              Welcome to Oludare Investment Ltd. By accessing our website or purchasing our equipment, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-10">1. Business Operations</h2>
            <p>
              Oludare Investment Ltd (RC 1042746) is a registered dealer of heavy-duty trucks and machinery in Nigeria. All transactions are subject to Nigerian commercial laws.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. Quotes and Pricing</h2>
            <p>
              All quotes provided via our website or WhatsApp are valid for 7 days unless otherwise stated. Prices are subject to change based on market conditions and exchange rate fluctuations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. Payment Terms</h2>
            <p>
              We offer flexible payment arrangements for verified corporate clients. Standard terms require a deposit to secure equipment, with the balance due before delivery.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Delivery and Inspection</h2>
            <p>
              We arrange nationwide delivery to all 36 states. Customers are encouraged to inspect equipment at our Ojodu Berger yard before final payment. Once equipment leaves our yard, the risk of loss passes to the buyer.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. Warranty</h2>
            <p>
              New Shacman and HOWO trucks come with manufacturer-backed warranties on major components (Engine, Gearbox, Axle). Pre-owned equipment is sold "as-is" unless a specific limited warranty is agreed upon in writing.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">6. Limitation of Liability</h2>
            <p>
              Oludare Investment Ltd shall not be liable for any indirect, incidental, or consequential damages arising from the use of equipment purchased from us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
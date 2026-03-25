import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <div className="bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="mb-8 text-4xl font-black text-foreground lg:text-5xl">Privacy Policy</h1>
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: March 2025</p>
            <p>
              At Oludare Investment Ltd (OIL), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-10">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a quote request form, contact us via WhatsApp, or call our sales office. This may include your name, company name, email address, phone number, and details about your equipment requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide formal proforma invoices and quotes.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Process your orders and arrange for nationwide delivery.</li>
              <li>Send you updates about our inventory and services (only if you opt-in).</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Third-Party Services</h2>
            <p>
              Our website uses third-party services like WhatsApp for communication and Google Maps for location services. These third parties have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at Oludareinvestmentltd@gmail.com or visit our yard at Ojodu Berger, Lagos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
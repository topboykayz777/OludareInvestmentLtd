import { ClipboardList, FileCheck2, MessageCircle, Truck } from "lucide-react"

const steps = [
  { icon: ClipboardList, title: "Tell us what you need", text: "Send the truck type, model, budget, condition, quantity, and delivery location on WhatsApp." },
  { icon: FileCheck2, title: "We source the right option", text: "We check suitable supply options and send current photos, specifications, condition, and pricing." },
  { icon: Truck, title: "Review and arrange delivery", text: "Once you approve the option, we coordinate inspection, paperwork, and delivery details with you." },
]

export function SourcingProcess({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">Direct truck sourcing</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground lg:text-4xl">Can’t see the exact truck you want? Ask us to source it.</h2>
          <p className="mt-4 text-muted-foreground">Oludare Investment Ltd helps buyers compare suitable trucks and equipment directly. Availability and pricing change, so WhatsApp us for the current option rather than relying on an old listing.</p>
        </div>
        <div className={`mt-10 grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-3"}`}>
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><Icon className="h-5 w-5" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary p-6 text-center text-white sm:flex-row sm:text-left lg:px-8">
          <div><h3 className="font-bold">Ready to start your truck search?</h3><p className="mt-1 text-sm text-white/70">Send your requirements directly to sales and receive the current options.</p></div>
          <a href="https://wa.me/2348105955892?text=Hello%20OIL%2C%20I%20want%20you%20to%20source%20a%20truck%20for%20me.%20My%20requirements%20are%3A" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-3 font-bold text-white transition-colors hover:bg-[#d06a18]"><MessageCircle className="h-5 w-5" /> Start on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

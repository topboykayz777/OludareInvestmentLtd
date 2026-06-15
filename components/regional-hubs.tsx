"use client"

import { MapPin, Truck, ShieldCheck } from "lucide-react"

const hubs = [
  {
    city: "Abuja FCT & North",
    desc: "Primary sourcing hub for construction firms in Gwarinpa, Asokoro, and projects across Nasarawa/Kaduna.",
    service: "Registered Delivery in 48hrs"
  },
  {
    city: "Port Harcourt & South",
    desc: "Dedicated inspection services for oil & gas logistics and dredging projects in Rivers and Bayelsa.",
    service: "Live Video Inspection Ready"
  },
  {
    city: "Kano & North West",
    desc: "Supplying heavy-duty haulage trucks for agricultural logistics and cross-border trade routes.",
    service: "Engine & Gearbox Support"
  }
]

export function RegionalHubs() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Nationwide Presence</p>
          <h2 className="text-3xl font-black text-foreground lg:text-4xl">Service Hubs Across Nigeria</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            While our main yard is in Lagos, we provide end-to-end sourcing and inspection for fleet owners in every major economic zone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {hubs.map((hub) => (
            <div key={hub.city} className="premium-card p-8 bg-card">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{hub.city}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{hub.desc}</p>
              <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-accent">
                <Truck className="h-3 w-3" />
                {hub.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
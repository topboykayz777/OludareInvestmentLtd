"use client"

import { Building2, CreditCard, Truck, Settings, PackageCheck, Globe } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Truck & Equipment Sales",
    description: "New and pre-owned HOWO Sino Trucks, Shacman and more. We source directly so you get the best price in Lagos.",
    highlight: "15+ truck types",
  },
  {
    icon: Settings,
    title: "Heavy Machinery Supply",
    description: "Excavators, loaders, bulldozers, graders, rollers and drilling rigs for construction and mining projects.",
    highlight: "8 major brands",
  },
  {
    icon: PackageCheck,
    title: "Spare Parts & Engines",
    description: "Genuine HOWO Sino Trucks engines, gearboxes, truck cabins and all spare parts. We stock what mechanics look for.",
    highlight: "Full stock",
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    description: "We work with you on payment. Flexible terms and financing options to help you get moving without delay.",
    highlight: "Flexible terms",
  },
  {
    icon: Building2,
    title: "Company Ventures",
    description: "Partnership opportunities for construction firms, logistics companies and fleet operators across Nigeria.",
    highlight: "Open to partners",
  },
  {
    icon: Globe,
    title: "Nationwide Delivery",
    description: "Lagos to Abuja, Port Harcourt to Kano -- we deliver trucks and equipment to every state in Nigeria.",
    highlight: "36 states",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-primary py-16 lg:py-24 overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">What We Do</p>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
            More Than Just Selling Trucks
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/60 leading-relaxed text-pretty">
            {"We handle everything from sourcing to delivery, parts to financing. Your one-stop shop for anything truck and machinery related."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 lg:p-7 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/[0.08] hover:border-accent/40 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute -top-2 -right-1 text-[64px] font-black text-primary-foreground/[0.03] leading-none select-none">
                {`0${i + 1}`}
              </span>

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/20">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-primary-foreground/10 px-3 py-1 text-[10px] font-semibold text-accent uppercase tracking-wider">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-primary-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/50">{service.description}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}

import Image from "next/image"
import { Shield, Truck, Wrench, Handshake } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Wide Selection",
    description: "HOWO Sino Trucks, Shacman dump trucks, CNG trucks, mixers and more -- all in one place.",
  },
  {
    icon: Shield,
    title: "Quality You Can Trust",
    description: "Every truck and machine we sell is inspected before delivery. We stand behind what we sell.",
  },
  {
    icon: Wrench,
    title: "Parts & Engines",
    description: "Genuine engines, gearboxes, cabins and spares. If your truck needs it, we probably have it.",
  },
  {
    icon: Handshake,
    title: "Flexible Payment",
    description: "We understand business. Talk to us about payment plans that work for your situation.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative h-44 overflow-hidden rounded-lg sm:h-52">
                  <Image
                    src="/images/trucks/howo-sinotruk-tractor-head-white.jpg"
                    alt="HOWO Sinotruk tractor head truck"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-32 overflow-hidden rounded-lg sm:h-40">
                  <Image
                    src="/images/spare-parts/howo-diesel-engine-with-filters.jpg"
                    alt="HOWO diesel engine with filters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="relative h-32 overflow-hidden rounded-lg sm:h-40">
                  <Image
                    src="/images/loaders/shacman-wheel-loaders-fleet-yard.jpg"
                    alt="Shacman wheel loaders at OIL yard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-lg sm:h-52">
                  <Image
                    src="/images/road-construction/shantui-motor-grader-yellow.jpg"
                    alt="Shantui motor grader"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-primary px-6 py-4 text-center shadow-xl">
              <p className="text-2xl font-bold text-accent">7+ Years</p>
              <p className="text-xs text-primary-foreground/70">Serving Nigeria</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
              A Truck Dealer You Can Actually Rely On
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
              {"Oludare Investment Ltd (RC 1042746) has been operating from our yard at 209, Lagos-Ibadan Expressway, Ojodu Berger for over 7 years. We're a single-owner business built on trust, repeat customers, and honest dealing. When you buy from OIL, you're buying directly from someone who knows these machines inside and out."}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground text-pretty">
              {"We deal in HOWO Sino Trucks, Shacman trucks, XCMG and CAT excavators, Shantui bulldozers and graders, plus all the spare parts to keep them running. Whether you need one truck or a fleet, we'll sort you out."}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-lg border border-border p-4 transition-all hover:border-accent/30 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-card-foreground">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Shield, Truck, Wrench, Handshake, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Premium Shacman & HOWO",
    description: "Direct access to the latest Shacman F3000, X3000 and HOWO Sino Trucks 371/420 models.",
  },
  {
    icon: Shield,
    title: "Verified Quality",
    description: "Every truck and machine undergoes a rigorous 50-point inspection at our Ojodu Berger yard.",
  },
  {
    icon: Wrench,
    title: "Genuine Spare Parts",
    description: "We stock original engines, gearboxes, and cabins to ensure your fleet never stops moving.",
  },
  {
    icon: Handshake,
    title: "Flexible Financing",
    description: "Tailored payment plans for construction firms and logistics operators across Nigeria.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image collage with decorative elements */}
          <div className="relative pb-12 lg:pb-0">
            <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl shadow-2xl group">
                  <Image
                    src="/images/trucks/howo-sinotruk-tractor-head-white.jpg"
                    alt="HOWO Sinotruk tractor head for sale in Lagos Nigeria"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl group">
                  <Image
                    src="/images/spare-parts/howo-diesel-engine-with-filters.jpg"
                    alt="Genuine HOWO diesel engine spare parts Lagos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl group">
                  <Image
                    src="/images/loaders/shacman-wheel-loaders-fleet-yard.jpg"
                    alt="Shacman wheel loaders inventory at OIL Lagos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-56 overflow-hidden rounded-2xl shadow-2xl group">
                  <Image
                    src="/images/road-construction/shantui-motor-grader-yellow.jpg"
                    alt="Shantui motor grader for road construction Nigeria"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating stat badge - Adjusted positioning to prevent overlap */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-2xl bg-primary p-1 shadow-2xl animate-pulse-glow">
              <div className="rounded-xl border border-white/10 bg-primary px-8 py-5 text-center">
                <p className="text-3xl font-black text-accent">7+ YEARS</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Serving Nigeria's Industry</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
              Established & Trusted
            </div>
            <h2 className="mb-6 text-4xl font-black text-foreground lg:text-5xl leading-tight text-balance">
              The Premier Destination for <span className="text-primary">Heavy-Duty Trucks</span> in Lagos
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              {"Oludare Investment Ltd (RC 1042746) is a leading dealer of Shacman and HOWO Sino Trucks, operating from our strategic yard at 209, Lagos-Ibadan Expressway, Ojodu Berger. For over 7 years, we have been the trusted partner for construction firms, logistics operators, and fleet owners across Nigeria."}
            </p>
            
            <div className="mb-10 space-y-3">
              {[
                "Direct factory sourcing for competitive pricing",
                "Nationwide delivery to all 36 states in Nigeria",
                "Comprehensive after-sales support and genuine parts",
                "Expert technical advice for fleet optimization"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent transition-all group-hover:bg-accent group-hover:text-white">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">{f.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
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
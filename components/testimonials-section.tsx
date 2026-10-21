"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Engr. Kayode A.",
    role: "Project Manager",
    location: "Abuja",
    text: "3 HOWO dump trucks for road project in Nasarawa. 8 months running, no major issues. Price was lower than other Berger dealers I checked. Delivery took about a week.",
    rating: 5,
    product: "HOWO Dump Trucks",
    date: "Nov 2025",
      },
      {
        name: "Alhaji Garba A.",
        role: "Owner/Operator",
        location: "Kano",
        text: "Been buying parts here for 3 years. Engine, gearbox, cabin -- he usually has HOWO parts in stock. Shipped a complete 371 engine to Kano for me once. No issues with it.",
        rating: 5,
        product: "HOWO Spare Parts",
        date: "Aug 2025",
  },
  {
    name: "Mrs. Folashade O.",
    role: "Managing Director",
    location: "Lagos",
    text: "Our excavator broke down on site and we needed a replacement fast. Had an XCMG ready, closed the deal in 2 days. Straightforward, no runaround. Would deal again.",
    rating: 5,
    product: "XCMG Excavator",
    date: "Aug 2026",
      },
      {
        name: "Chief Emeka N.",
        role: "CEO, Logistics Co.",
        location: "Port Harcourt",
        text: "Bought 2 CNG trucks and a low-bed. Machines came in decent shape. Needed spare parts 5 months later and he had them. After-sales has been okay so far.",
        rating: 4,
        product: "CNG Trucks & Trailer",
        date: "Jul 2026",
  },
  {
    name: "Musa D.",
    role: "Fleet Operator",
    location: "Kaduna",
    text: "First time buying from Berger. Man was recommended by a friend. Bought a Shacman tipper. Truck is working well for sand business going on 6 months now.",
    rating: 5,
    product: "Shacman Tipper",
    date: "Sep 2025",
  },
  {
    name: "Ibrahim S.",
    role: "Haulage Operator",
    location: "Lagos",
    text: "I sent the type of tractor head and trailer work I needed on WhatsApp. The team came back with the specification and current option instead of pushing a truck that did not fit our route.",
    rating: 5,
    product: "Tractor Head Sourcing",
    date: "Jan 2026",
  },
  {
    name: "Chika E.",
    role: "Construction Contractor",
    location: "Abuja",
    text: "The live video walkthrough helped us narrow down the HOWO options before travelling. Communication was clear and delivery arrangements were explained before we made a decision.",
    rating: 5,
    product: "HOWO Truck Sourcing",
    date: "Feb 2026",
  },
  {
    name: "Adewale T.",
    role: "Quarry Business Owner",
    location: "Ogun State",
    text: "We were looking for a heavy-duty tipper for quarry work and asked for the current price and specification. The Shacman option we discussed was matched to the work we described and the follow-up was straightforward.",
    rating: 5,
    product: "Shacman F3000",
    date: "Mar 2026",
  },
  {
    name: "Bello M.",
    role: "Fleet Owner",
    location: "Ibadan",
    text: "We needed another tipper quickly for an active project. I contacted sales on WhatsApp, received the current truck details, and the delivery conversation was handled clearly from the start.",
    rating: 5,
    product: "HOWO Tipper",
    date: "Sep 2026",
  },
  {
    name: "David O.",
    role: "Transport Operator",
    location: "Lagos",
    text: "The truck requirement was discussed directly and the available option was explained with its specification before we proceeded. The process was simple and the team kept communication open through delivery.",
    rating: 5,
    product: "Heavy-Duty Truck Sourcing",
    date: "Oct 2026",
  },
  {
    name: "Sani A.",
    role: "Construction Contractor",
    location: "Abuja",
    text: "I was looking for a truck for a current construction job, not an old listing. OIL shared the latest option and price details with me and helped arrange the next steps without unnecessary delays.",
    rating: 5,
    product: "Truck Procurement",
    date: "Oct 2026",
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">What Clients Say</p>
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
            Verified Customer Reviews
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            {"Real reviews from customers who bought trucks, equipment and parts from our yard at Ojodu Berger."}
          </p>
        </div>

        {/* Featured review */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6 lg:p-10 relative overflow-hidden">
          <Quote className="absolute top-4 right-4 h-16 w-16 text-accent/10" />
          <div className="flex items-center gap-2 mb-4">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{testimonials[active].product}</span>
            <span className="text-xs text-muted-foreground">{testimonials[active].date}</span>
          </div>
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < testimonials[active].rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">{testimonials[active].rating}/5</span>
          </div>
          <p className="text-base lg:text-lg leading-relaxed text-card-foreground mb-6 max-w-3xl">
            {`"${testimonials[active].text}"`}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-card-foreground">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].role} -- {testimonials[active].location}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="Previous review">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="Next review">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-accent" : "w-2 bg-border"}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google location CTA */}
        <div className="mb-12 rounded-2xl bg-primary p-6 lg:p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Want to visit the yard?</h3>
          <p className="text-sm text-white/70 mb-6">Find Oludare Investment Ltd at Ojodu Berger and contact the sales team before your visit.</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Oludare%20Investment%20Ltd%20Ojodu%20Berger%20Lagos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-[#d06a18] font-bold gap-2">
              <ExternalLink className="h-4 w-4" /> Find us on Google Maps
            </Button>
          </a>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-accent">50+</p>
            <p className="text-xs text-muted-foreground mt-1">Trucks Sold</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-accent">7+</p>
            <p className="text-xs text-muted-foreground mt-1">Years in Business</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-center">
            <p className="text-2xl font-bold text-accent">15+</p>
            <p className="text-xs text-muted-foreground mt-1">States Delivered To</p>
          </div>
        </div>
      </div>
    </section>
  )
}
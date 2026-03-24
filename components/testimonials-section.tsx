"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Engr. Kayode A.",
    role: "Project Manager",
    location: "Abuja",
    text: "3 HOWO dump trucks for road project in Nasarawa. 8 months running, no major issues. Price was lower than other Berger dealers I checked. Delivery took about a week.",
    rating: 5,
    product: "HOWO Dump Trucks",
    date: "Nov 2024",
  },
  {
    name: "Alhaji Garba A.",
    role: "Owner/Operator",
    location: "Kano",
    text: "Been buying parts here for 3 years. Engine, gearbox, cabin -- he usually has HOWO parts in stock. Shipped a complete 371 engine to Kano for me once. No issues with it.",
    rating: 5,
    product: "HOWO Spare Parts",
    date: "Aug 2024",
  },
  {
    name: "Mrs. Folashade O.",
    role: "Managing Director",
    location: "Lagos",
    text: "Our excavator broke down on site and we needed a replacement fast. Had an XCMG ready, closed the deal in 2 days. Straightforward, no runaround. Would deal again.",
    rating: 5,
    product: "XCMG Excavator",
    date: "Jan 2025",
  },
  {
    name: "Chief Emeka N.",
    role: "CEO, Logistics Co.",
    location: "Port Harcourt",
    text: "Bought 2 CNG trucks and a low-bed. Machines came in decent shape. Needed spare parts 5 months later and he had them. After-sales has been okay so far.",
    rating: 4,
    product: "CNG Trucks & Trailer",
    date: "Mar 2025",
  },
  {
    name: "Musa D.",
    role: "Fleet Operator",
    location: "Kaduna",
    text: "First time buying from Berger. Man was recommended by a friend. Bought a Shacman tipper. Truck is working well for sand business going on 6 months now.",
    rating: 5,
    product: "Shacman Tipper",
    date: "Sep 2024",
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

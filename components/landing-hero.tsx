"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface LandingHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  whatsappUrl?: string
  phoneUrl?: string
}

export function LandingHero({
  title,
  subtitle,
  description,
  ctaText = "Request Pricing Now",
  whatsappUrl = "https://wa.me/2348105955892",
  phoneUrl = "tel:+2348020890065"
}: LandingHeroProps) {
  return (
    <section className="relative bg-primary py-20 lg:py-32 overflow-hidden clip-diagonal">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            {subtitle}
          </div>
          <h1 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-7xl leading-tight text-balance">
            {title}
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-white/80 sm:text-xl text-pretty">
            {description}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-[#d06a18] text-lg font-bold px-10 py-7 w-full sm:w-auto gap-3 shadow-lg animate-pulse-glow">
                {ctaText}
              </Button>
            </a>
            <a href={phoneUrl}>
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/5 hover:bg-white hover:text-primary text-lg px-10 py-7 w-full sm:w-auto gap-3">
                <Phone className="h-5 w-5" />
                Call Sales Office
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
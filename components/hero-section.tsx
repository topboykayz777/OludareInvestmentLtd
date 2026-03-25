"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Phone, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/2348105955892?text=Hello%2C%20I%27m%20interested%20in%20your%20trucks%20and%20machinery.%20Please%20share%20more%20details."

const slides = [
  {
    src: "/images/trucks/shacman-fleet-green.jpg",
    alt: "Premium Shacman F3000 dump trucks for sale in Lagos Nigeria - Oludare Investment Ltd",
    headline: "Nigeria's #1 Shacman Truck Dealer",
    sub: "Direct suppliers of high-performance Shacman F3000 and X3000 dump trucks. Built for the toughest Nigerian terrains."
  },
  {
    src: "/images/trucks/howo-trucks-fleet-4-white-yard.jpg",
    alt: "HOWO Sino Trucks 371 and 420 models at Ojodu Berger yard Lagos - OIL",
    headline: "Genuine HOWO Sino Trucks in Lagos",
    sub: "From 6x4 tippers to 8x4 dump trucks, we provide the most reliable HOWO trucks with full spare parts support."
  },
  {
    src: "/images/excavators/liugong-excavators-loaders-yard.jpg",
    alt: "Heavy construction equipment including XCMG and CAT excavators for sale in Nigeria",
    headline: "Heavy Machinery & Earthmovers",
    sub: "XCMG excavators, Shantui bulldozers, and SDLG wheel loaders. The heavy-duty power your project demands."
  },
  {
    src: "/images/trucks/sinotruk-cement-mixer-white.jpg",
    alt: "Sinotruk HOWO cement mixer trucks for construction projects in Nigeria",
    headline: "Specialized Construction Trucks",
    sub: "Cement mixers, CNG trucks, and tanker trucks. Custom solutions for logistics and construction firms nationwide."
  },
  {
    src: "/images/trailers/blue-lowbed-with-dump-trailer-yard.jpg",
    alt: "Heavy duty low-bed and flatbed trailers for equipment transport in Nigeria",
    headline: "Trailers & Logistics Equipment",
    sub: "3-axle and 4-axle low-beds, flatbeds, and side-wall trailers. Engineered for maximum load capacity and safety."
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="relative overflow-hidden clip-diagonal bg-primary" style={{ minHeight: "90vh" }}>
      {/* Slide images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover scale-105 transition-transform duration-[6000ms] ease-linear"
            style={{ transform: i === current ? 'scale(1)' : 'scale(1.1)' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay -- sophisticated gradient for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d1a3a]/90 via-[#0d1a3a]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center px-4 lg:px-8" style={{ minHeight: "90vh" }}>
        <div className="max-w-3xl pb-20 pt-12 lg:pb-28 lg:pt-20">
          {/* Live badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-bold text-accent backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            OFFICIAL TRUCK DEALER - RC 1042746
          </div>

          {/* Headline */}
          <h1
            key={`h-${current}`}
            className="mb-6 text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-7xl animate-slide-in drop-shadow-2xl text-balance"
          >
            {slides[current].headline}
          </h1>

          <p
            key={`p-${current}`}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl animate-fade-in drop-shadow-md text-pretty"
          >
            {slides[current].sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-[#d06a18] text-lg font-bold px-10 py-7 w-full sm:w-auto gap-3 shadow-[0_0_20px_rgba(232,119,30,0.4)] animate-pulse-glow transition-all hover:scale-105">
                <WhatsAppIcon />
                Request Pricing Now
              </Button>
            </a>
            <a href="tel:+2348020890065">
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-primary text-lg px-10 py-7 w-full sm:w-auto gap-3 transition-all backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                Call Sales Office
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8 sm:gap-12 border-t border-white/10 pt-8">
            {[
              { num: "150+", label: "Trucks Delivered" },
              { num: "7+ Yrs", label: "Market Experience" },
              { num: "100%", label: "Genuine Parts" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-accent">{stat.num}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-24 right-4 z-30 flex items-center gap-4 lg:bottom-32 lg:right-8">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-accent shadow-[0_0_10px_rgba(232,119,30,0.8)]" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-accent hover:text-white hover:border-accent"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
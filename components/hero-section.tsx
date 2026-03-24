"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/2348105955892?text=Hello%2C%20I%27m%20interested%20in%20your%20trucks%20and%20machinery.%20Please%20share%20more%20details."

const slides = [
  {
    src: "/images/trucks/howo-trucks-fleet-4-white-yard.jpg",
    alt: "Fleet of HOWO trucks at Oludare Investment Ltd yard in Lagos",
    headline: "Your Trusted Truck Dealer in Lagos",
    sub: "HOWO Sino Trucks, Shacman -- we supply quality trucks that keep your business moving."
  },
  {
    src: "/images/excavators/liugong-excavators-loaders-yard.jpg",
    alt: "Excavators and wheel loaders fleet at OIL dealership yard",
    headline: "Heavy Equipment for Every Project",
    sub: "Excavators, loaders, and bulldozers from top brands. Built to handle Nigeria's toughest sites."
  },
  {
    src: "/images/trucks/sinotruk-cement-mixer-white.jpg",
    alt: "Sinotruk HOWO cement mixer truck for sale in Lagos",
    headline: "Cement Mixers & Specialized Trucks",
    sub: "From ready-mix operators to logistics companies, we have the right truck for your operation."
  },
  {
    src: "/images/trailers/blue-lowbed-with-dump-trailer-yard.jpg",
    alt: "Low-bed trailers and dump trailers at Oludare Investment yard",
    headline: "Trailers Built for Heavy Loads",
    sub: "Low-beds, flatbeds, side-wall trailers -- all available and ready for delivery across Nigeria."
  },
  {
    src: "/images/trucks/howo-dump-trucks-fleet-white.jpg",
    alt: "HOWO dump trucks lined up in warehouse for sale in Lagos",
    headline: "Dump Trucks for Construction & Mining",
    sub: "Brand new and pre-owned tippers in stock. Various capacities to suit your project scale."
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
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="relative overflow-hidden clip-diagonal" style={{ minHeight: "85vh" }}>
      {/* Slide images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay -- dark navy tint for readability */}
      <div className="absolute inset-0 z-10 bg-[#0d1a3a]/75" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center px-4 lg:px-8" style={{ minHeight: "85vh" }}>
        <div className="max-w-3xl pb-20 pt-12 lg:pb-28 lg:pt-20">
          {/* Live badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Dealers & Suppliers of All Kinds of Trucks
          </div>

          {/* Headline -- changes per slide */}
          <h1
            key={`h-${current}`}
            className="mb-5 text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-6xl animate-slide-in text-balance"
          >
            {slides[current].headline}
          </h1>

          <p
            key={`p-${current}`}
            className="mb-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg animate-fade-in text-pretty"
          >
            {slides[current].sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-[#d06a18] text-base font-semibold px-8 py-6 w-full sm:w-auto gap-2 shadow-lg">
                <WhatsAppIcon />
                Get a Quote on WhatsApp
              </Button>
            </a>
            <a href="tel:+2348020890065">
              <Button size="lg" variant="outline" className="border-primary-foreground/80 text-primary-foreground bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground hover:border-accent text-base px-8 py-6 w-full sm:w-auto gap-2 transition-all">
                <Phone className="h-5 w-5" />
                Call 08020890065
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
            {[
              { num: "150+", label: "Trucks & Equipment Sold" },
              { num: "7+", label: "Years in Business" },
              { num: "36", label: "States Delivery" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.num}</p>
                <p className="text-xs text-primary-foreground/60 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-24 right-4 z-30 flex items-center gap-3 lg:bottom-32 lg:right-8">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 backdrop-blur-sm transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70 backdrop-blur-sm transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

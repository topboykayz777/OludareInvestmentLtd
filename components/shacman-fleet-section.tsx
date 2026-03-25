"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const shacmanSlides = [
  {
    src: "/images/trucks/shacman-fleet-green.jpg",
    alt: "Green Shacman fleet at Oludare Investment yard",
    label: "Shacman F3000 Green Fleet"
  },
  {
    src: "/images/trucks/shacman-fleet-orange.jpg",
    alt: "Orange Shacman fleet at Oludare Investment yard",
    label: "Shacman F3000 Orange Fleet"
  }
]

export function ShacmanFleetSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % shacmanSlides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + shacmanSlides.length) % shacmanSlides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Inventory Spotlight</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Our Shacman Fleet
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            {"Explore our latest arrivals of Shacman dump trucks. High performance, durability, and ready for immediate deployment."}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative aspect-video w-full">
            {shacmanSlides.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1000px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-bold">{slide.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-accent"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-accent"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {shacmanSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-white/50"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
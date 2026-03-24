"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const gallery = [
  { src: "/images/trucks/howo-trucks-fleet-4-white-yard.jpg", alt: "HOWO trucks fleet in yard", label: "HOWO Fleet" },
  { src: "/images/excavators/cat-320-amphibious-excavator.jpg", alt: "CAT 320 amphibious excavator", label: "CAT Excavator" },
  { src: "/images/loaders/liugong-wheel-loader.jpg", alt: "LiuGong wheel loader", label: "LiuGong Loader" },
  { src: "/images/spare-parts/howo-engines-factory-production-line.jpg", alt: "HOWO engines on production line", label: "Engine Line" },
  { src: "/images/drilling-rigs/crawler-drilling-rigs-warehouse.jpg", alt: "Crawler drilling rigs in warehouse", label: "Drilling Rigs" },
  { src: "/images/bulldozers/shantui-sd22-bulldozer.jpg", alt: "Shantui SD22 bulldozer", label: "Shantui Dozer" },
  { src: "/images/road-construction/saao-single-drum-road-roller.jpg", alt: "SAAO road roller", label: "Road Roller" },
  { src: "/images/spare-parts/howo-371-cabins-wrapped-red-white.jpg", alt: "HOWO 371 truck cabins", label: "Truck Cabins" },
  { src: "/images/trailers/sidewall-cargo-trailer-grey-3axle.jpg", alt: "Side-wall cargo trailer", label: "Cargo Trailer" },
  { src: "/images/excavators/cat-320cl-amphibious-excavator.jpg", alt: "CAT 320CL amphibious excavator", label: "CAT 320CL" },
  { src: "/images/spare-parts/howo-gearbox-on-chain-hoist.jpg", alt: "HOWO gearbox on chain hoist", label: "Gearbox" },
  { src: "/images/road-construction/xcmg-xp203-pneumatic-tire-roller.jpg", alt: "XCMG pneumatic tire roller", label: "Tire Roller" },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const nextImg = () => setLightbox((prev) => prev !== null ? (prev + 1) % gallery.length : null)
  const prevImg = () => setLightbox((prev) => prev !== null ? (prev - 1 + gallery.length) % gallery.length : null)

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Inventory</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            See What We Have in Stock
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            {"Real photos from our yard and warehouse. What you see is what we sell."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-3">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/50" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-primary/80 px-3 py-2 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d1a3a]/95 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground z-10" aria-label="Close lightbox">
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImg() }}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-accent"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative h-[70vh] w-[90vw] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImg() }}
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-accent"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <p className="absolute bottom-6 text-sm text-primary-foreground/60">
            {gallery[lightbox].label} ({lightbox + 1}/{gallery.length})
          </p>
        </div>
      )}
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Dump Trucks & Tippers",
    description: "HOWO Sino Trucks and Shacman dump trucks for construction, mining and earth-moving. Various tonnages available.",
    images: [
      { src: "/images/trucks/shacman-f3000-dump-truck-orange.jpg", alt: "Shacman F3000 dump truck for sale Lagos Nigeria" },
      { src: "/images/trucks/howo-sinotruck-dump-white.jpg", alt: "HOWO Sino Truck dump truck for sale Lagos Nigeria" },
    ],
    count: "8+ in stock",
  },
  {
    title: "CNG Trucks",
    description: "HOWO Sino Trucks CNG chassis cabs and complete units. Fuel-efficient compressed natural gas trucks for modern fleets.",
    images: [{ src: "/images/trucks/howo-cng-trucks-fleet.jpg", alt: "HOWO CNG trucks for sale Lagos Nigeria" }],
    count: "Available",
  },
  {
    title: "Cement Mixers",
    description: "Transit mixer trucks for concrete delivery. Ideal for construction companies and ready-mix operators.",
    images: [
      { src: "/images/trucks/sinotruk-cement-mixer-white.jpg", alt: "Sinotruk HOWO cement mixer truck for sale Lagos" },
      { src: "/images/trucks/howo-cement-mixer-green.jpg", alt: "HOWO concrete mixer truck for sale Nigeria" },
    ],
    count: "6+ in stock",
  },
  {
    title: "Excavators",
    description: "CAT, XCMG, LiuGong excavators including amphibious models. For dredging, construction and land clearing.",
    images: [{ src: "/images/excavators/xcmg-xe335g-excavators-fleet.jpg", alt: "XCMG excavators for sale in Lagos Nigeria" }],
    count: "Multiple units",
  },
  {
    title: "Wheel Loaders",
    description: "Shacman, LiuGong, SDLG, XCMG loaders for loading, clearing and material handling on site.",
    images: [{ src: "/images/loaders/sdlg-lg953-wheel-loaders-fleet.jpg", alt: "Wheel loaders for sale in Lagos Nigeria" }],
    count: "5+ in stock",
  },
  {
    title: "Trailers & Low-Beds",
    description: "Flatbed trailers, low-bed trailers, side-wall cargo trailers. For heavy equipment and container transport.",
    images: [{ src: "/images/trailers/blue-lowbed-trailer-4-views.jpg", alt: "Low-bed trailers for sale Lagos Nigeria" }],
    count: "Various types",
  },
  {
    title: "Road Construction",
    description: "Rollers, motor graders, bulldozers for road building. Shantui, CAT, SAAO, XCMG brands available.",
    images: [{ src: "/images/road-construction/caterpillar-140h-motor-grader.jpg", alt: "Road construction equipment for sale Lagos Nigeria" }],
    count: "In stock",
  },
  {
    title: "Cranes & Drilling Rigs",
    description: "XCMG mobile cranes and crawler drilling rigs for construction, piling and mining operations.",
    images: [{ src: "/images/cranes/xcmg-crane-on-lowbed.jpg", alt: "XCMG crane and drilling rigs for sale Lagos Nigeria" }],
    count: "Available",
  },
  {
    title: "Engines, Parts & Spares",
    description: "HOWO engines, gearboxes, truck cabins, and all spare parts. Genuine and aftermarket options.",
    images: [
      { src: "/images/spare-parts/howo-diesel-engine-new-pallet.jpg", alt: "HOWO diesel engine for sale Lagos Nigeria" },
      { src: "/images/spare-parts/howo-gearbox-black-chains.jpg", alt: "HOWO truck gearbox transmission for sale Lagos" },
    ],
    count: "Full range",
  },
]

function ProductCardImage({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative h-48 overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a3a]/60 via-transparent to-transparent" />
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-4 bg-accent" : "w-1.5 bg-primary-foreground/50"}`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Products</p>
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground lg:text-4xl text-balance">
            Trucks, Equipment & Parts -- All Under One Roof
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
            {"We stock what you need. From brand new HOWO Sino Trucks straight from the factory to reliable pre-owned machines, every piece of equipment goes through our hands before it gets to yours."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <ProductCardImage images={product.images} />
              <div className="relative">
                <span className="absolute -top-7 left-3 rounded-md bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground backdrop-blur-sm">
                  {product.count}
                </span>
              </div>
              <div className="p-5 pt-3">
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{product.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <a
                  href={`https://wa.me/2348105955892?text=Hello%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(product.title)}.%20Please%20share%20pricing%20and%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-[#152356] font-medium gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Enquire on WhatsApp
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

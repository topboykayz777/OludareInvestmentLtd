"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { Search, Filter } from "lucide-react"

const products = [
  {
    id: "dump-1",
    brand: "Shacman",
    category: "Trucks",
    title: "Shacman F3000 Dump Truck",
    description: "Heavy-duty tipper for construction and mining. 6x4 and 8x4 configurations available.",
    images: [{ src: "/images/trucks/shacman-f3000-dump-truck-orange.jpg", alt: "Shacman F3000 dump truck" }],
    count: "8+ in stock",
    hp: "380HP",
    engine: "Weichai WP10.380E22"
  },
  {
    id: "howo-1",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO Sino Truck 371",
    description: "The industry standard for reliability in Nigeria. Perfect for long-haul and site work.",
    images: [{ src: "/images/trucks/howo-sinotruck-dump-white.jpg", alt: "HOWO Sino Truck 371" }],
    count: "12+ in stock",
    hp: "371HP",
    engine: "WD615.47"
  },
  {
    id: "cng-1",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO CNG Tractor Head",
    description: "Fuel-efficient compressed natural gas trucks. Reduce your fleet operating costs significantly.",
    images: [{ src: "/images/trucks/howo-cng-trucks-fleet.jpg", alt: "HOWO CNG trucks" }],
    count: "Available",
    hp: "420HP",
    engine: "T12.42-50 CNG"
  },
  {
    id: "mixer-1",
    brand: "HOWO",
    category: "Construction",
    title: "HOWO Cement Mixer",
    description: "10m³ - 12m³ transit mixers for concrete delivery. High-strength drum and reliable hydraulics.",
    images: [{ src: "/images/trucks/sinotruk-cement-mixer-white.jpg", alt: "Sinotruk HOWO cement mixer" }],
    count: "6+ in stock",
    hp: "371HP"
  },
  {
    id: "excavator-1",
    brand: "XCMG",
    category: "Machinery",
    title: "XCMG XE335G Excavator",
    description: "Powerful earthmover for large scale construction and mining projects.",
    images: [{ src: "/images/excavators/xcmg-xe335g-excavators-fleet.jpg", alt: "XCMG excavator" }],
    count: "Multiple units",
    hp: "250HP"
  },
  {
    id: "loader-1",
    brand: "SDLG",
    category: "Machinery",
    title: "SDLG LG953 Wheel Loader",
    description: "Versatile loader for material handling, clearing, and site preparation.",
    images: [{ src: "/images/loaders/sdlg-lg953-wheel-loaders-fleet.jpg", alt: "SDLG wheel loader" }],
    count: "5+ in stock"
  },
  {
    id: "trailer-1",
    brand: "Generic",
    category: "Trailers",
    title: "Heavy Duty Low-Bed Trailer",
    description: "3-axle and 4-axle configurations for transporting heavy machinery and equipment.",
    images: [{ src: "/images/trailers/blue-lowbed-trailer-4-views.jpg", alt: "Low-bed trailer" }],
    count: "Various types"
  },
  {
    id: "parts-1",
    brand: "HOWO",
    category: "Parts",
    title: "HOWO 371 Engine Assembly",
    description: "Complete brand new engine assemblies and individual spare parts in stock.",
    images: [{ src: "/images/spare-parts/howo-diesel-engine-new-pallet.jpg", alt: "HOWO engine" }],
    count: "Full range"
  }
]

const categories = ["All", "Trucks", "Machinery", "Construction", "Trailers", "Parts"]
const brands = ["All", "Shacman", "HOWO", "XCMG", "SDLG", "Shantui"]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeBrand, setActiveBrand] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const catMatch = activeCategory === "All" || p.category === activeCategory
      const brandMatch = activeBrand === "All" || p.brand === activeBrand
      return catMatch && brandMatch
    })
  }, [activeCategory, activeBrand])

  return (
    <section id="products" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Products</p>
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground lg:text-4xl">
            Trucks, Equipment & Parts
          </h2>
          
          {/* Filters */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1"><Filter className="h-3 w-3" /> Filter by Brand:</span>
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`transition-colors hover:text-accent ${activeBrand === brand ? "text-accent font-bold underline underline-offset-4" : ""}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-accent/90 px-2 py-1 text-[10px] font-bold text-accent-foreground backdrop-blur-sm">
                    {product.brand}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-base font-bold text-card-foreground">{product.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">{product.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary text-primary-foreground"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                    </Button>
                    <a
                      href={`https://wa.me/2348105955892?text=Price%20for%20${encodeURIComponent(product.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  )
}
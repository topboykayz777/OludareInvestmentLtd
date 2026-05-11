"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { Filter, Plus } from "lucide-react"

const products = [
  // === TRUCKS ===
  {
    id: "shacman-f3000-orange",
    brand: "Shacman",
    category: "Trucks",
    title: "Shacman F3000 Dump Truck",
    description: "Heavy-duty 6x4 tipper optimized for Nigerian mining and construction sites.",
    images: [{ src: "/images/trucks/shacman-orange-close.jpg", alt: "Shacman F3000 orange" }],
    hp: "380HP",
    engine: "Weichai WP10.380E22"
  },
  {
    id: "howo-371-white",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO Sino Truck 371",
    description: "The most reliable workhorse in Lagos. 10-tyre dump truck with reinforced chassis.",
    images: [{ src: "/images/trucks/howo-dump-white-close.jpg", alt: "HOWO 371 white" }],
    hp: "371HP",
    engine: "WD615.47"
  },
  {
    id: "howo-371-yellow",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO 371 Heavy Tipper (Yellow)",
    description: "High-visibility yellow fleet units. Perfect for large scale earthmoving projects.",
    images: [{ src: "/images/trucks/howo-dump-yellow-front.jpg", alt: "HOWO 371 yellow" }],
    hp: "371HP",
    engine: "WD615.47"
  },
  {
    id: "shacman-tractor-green",
    brand: "Shacman",
    category: "Trucks",
    title: "Shacman X3000 Tractor Head",
    description: "Premium long-haul tractor head for interstate logistics and heavy container port work.",
    images: [{ src: "/images/trucks/shacman-green-close.jpg", alt: "Shacman tractor green" }],
    hp: "420HP",
    engine: "Weichai WP12"
  },
  {
    id: "howo-cng-truck",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO CNG Dump Truck",
    description: "Compressed Natural Gas powered tipper. Reduce fuel costs by up to 40% in Nigeria.",
    images: [{ src: "/images/trucks/howo-cng-trucks-fleet.jpg", alt: "HOWO CNG truck" }],
    hp: "380HP",
    engine: "T12.38-50 CNG"
  },
  {
    id: "howo-mixer-white",
    brand: "HOWO",
    category: "Trucks",
    title: "Sinotruk Cement Mixer",
    description: "10m³ - 12m³ capacity transit mixers for ready-mix concrete operations.",
    images: [{ src: "/images/trucks/sinotruk-cement-mixer-white.jpg", alt: "HOWO cement mixer" }],
    hp: "371HP"
  },

  // === LIGHT TRUCKS ===
  {
    id: "howo-light-box",
    brand: "HOWO",
    category: "Light Trucks",
    title: "HOWO Light Box Truck",
    description: "4x2 urban delivery truck. Ideal for FMCG distribution and city logistics.",
    images: [{ src: "/images/trucks/howo-light-truck-white.jpg", alt: "HOWO light truck" }],
    hp: "130HP"
  },
  {
    id: "howo-refrigerated",
    brand: "HOWO",
    category: "Light Trucks",
    title: "HOWO Refrigerated Truck",
    description: "Cold chain solution for perishable goods. High-performance cooling unit installed.",
    images: [{ src: "/images/trucks/howo-light-truck-refrigerated.jpg", alt: "HOWO refrigerated truck" }],
    hp: "140HP"
  },
  {
    id: "howo-homan",
    brand: "HOWO",
    category: "Light Trucks",
    title: "HOWO Homan Series",
    description: "Versatile medium-duty truck for construction materials and general haulage.",
    images: [{ src: "/images/trucks/howo-homan-light-truck.jpg", alt: "HOWO Homan" }],
    hp: "160HP"
  },

  // === MACHINERY ===
  {
    id: "xcmg-excavator-xe335",
    brand: "XCMG",
    category: "Machinery",
    title: "XCMG XE335G Excavator",
    description: "33-ton heavy excavator for quarrying and large-scale excavation.",
    images: [{ src: "/images/excavators/xcmg-xe335g-excavators-fleet.jpg", alt: "XCMG XE335G" }],
    engine: "Cummins QSL9"
  },
  {
    id: "cat-320-amphibious",
    brand: "Caterpillar",
    category: "Machinery",
    title: "CAT 320 Amphibious Excavator",
    description: "Specialized swamp buggy for dredging and canal clearing in Lagos coastal areas.",
    images: [{ src: "/images/excavators/cat-320-amphibious-excavator.jpg", alt: "CAT Amphibious" }],
  },
  {
    id: "liugong-roller-yellow",
    brand: "LiuGong",
    category: "Machinery",
    title: "LiuGong Road Roller",
    description: "Single drum vibratory roller for road base compaction and asphalt finishing.",
    images: [{ src: "/images/road-construction/liugong-roller-yellow.jpg", alt: "LiuGong Roller" }],
  },
  {
    id: "shantui-sd22",
    brand: "Shantui",
    category: "Machinery",
    title: "Shantui SD22 Bulldozer",
    description: "The industry standard for land clearing and site preparation in Nigeria.",
    images: [{ src: "/images/bulldozers/shantui-sd22-bulldozer.jpg", alt: "Shantui SD22" }],
    hp: "220HP"
  },
  {
    id: "cat-140h-grader",
    brand: "Caterpillar",
    category: "Machinery",
    title: "CAT 140H Motor Grader",
    description: "Precision grading for road construction and maintenance projects.",
    images: [{ src: "/images/road-construction/cat-grader-140h.jpg", alt: "CAT 140H" }],
  },
  {
    id: "xcmg-forklift",
    brand: "XCMG",
    category: "Machinery",
    title: "XCMG Diesel Forklift",
    description: "3-ton to 5-ton industrial forklifts for warehouse and yard operations.",
    images: [{ src: "/images/machinery/xcmg-forklift-yellow.jpg", alt: "XCMG Forklift" }],
  },

  // === TRAILERS ===
  {
    id: "dump-trailer-black",
    brand: "Generic",
    category: "Trailers",
    title: "Heavy Duty Dump Trailer",
    description: "3-axle rear tipping trailer for bulk aggregates and sand transport.",
    images: [{ src: "/images/trailers/dump-trailer-black-side.jpg", alt: "Dump Trailer" }],
  },
  {
    id: "lowbed-blue",
    brand: "Generic",
    category: "Trailers",
    title: "4-Axle Low-Bed Trailer",
    description: "Heavy equipment transporter for moving excavators and bulldozers nationwide.",
    images: [{ src: "/images/trailers/blue-low-bed-trailer.jpg", alt: "Lowbed Trailer" }],
  },
  {
    id: "sidewall-trailer",
    brand: "Generic",
    category: "Trailers",
    title: "Sidewall Cargo Trailer",
    description: "Versatile trailer for bagged cement, agricultural produce, and general cargo.",
    images: [{ src: "/images/trailers/sidewall-cargo-trailer-grey-3axle.jpg", alt: "Sidewall Trailer" }],
  },

  // === PARTS ===
  {
    id: "weichai-engine-green",
    brand: "Weichai",
    category: "Parts",
    title: "Weichai WP10 Engine Assembly",
    description: "Brand new 380HP engine assembly for Shacman and HOWO trucks.",
    images: [{ src: "/images/spare-parts/weichai-engine-green.jpg", alt: "Weichai Engine" }],
  },
  {
    id: "howo-cabin",
    brand: "HOWO",
    category: "Parts",
    title: "HOWO 371 Truck Cabin",
    description: "Complete cabin assembly including interior trim and dashboard components.",
    images: [{ src: "/images/spare-parts/howo-371-cabins-wrapped-red-white.jpg", alt: "HOWO Cabin" }],
  },
  {
    id: "howo-gearbox",
    brand: "HOWO",
    category: "Parts",
    title: "HOWO 10-Speed Gearbox",
    description: "Genuine HW19710 transmission for heavy-duty Sinotruk models.",
    images: [{ src: "/images/spare-parts/howo-gearbox-in-crate.jpg", alt: "HOWO Gearbox" }],
  },

  // === SPECIALIZED ===
  {
    id: "water-tanker-white",
    brand: "HOWO",
    category: "Specialized",
    title: "HOWO Water Tanker (20,000L)",
    description: "High-capacity water tanker for construction sites and dust suppression.",
    images: [{ src: "/images/trucks/howo-water-tanker-white.jpg", alt: "Water Tanker" }],
    hp: "290HP"
  },
  {
    id: "drilling-rig",
    brand: "Generic",
    category: "Specialized",
    title: "Crawler Drilling Rig",
    description: "Industrial borehole and foundation drilling equipment for construction.",
    images: [{ src: "/images/drilling-rigs/crawler-drilling-rigs-warehouse.jpg", alt: "Drilling Rig" }],
  }
]

const categories = ["All", "Trucks", "Light Trucks", "Machinery", "Trailers", "Parts", "Specialized"]
const brands = ["All", "Shacman", "HOWO", "XCMG", "LiuGong", "Caterpillar", "Shantui", "Weichai"]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeBrand, setActiveBrand] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(p => {
      const catMatch = activeCategory === "All" || p.category === activeCategory
      const brandMatch = activeBrand === "All" || p.brand === activeBrand
      return catMatch && brandMatch
    })
    return showAll ? filtered : filtered.slice(0, 12)
  }, [activeCategory, activeBrand, showAll])

  return (
    <section id="products" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Our Products</p>
          <h2 className="mb-4 text-3xl font-black text-secondary-foreground lg:text-5xl text-balance">
            Nigeria's Premier Heavy-Duty Inventory
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
            {"From 40-ton tippers to genuine engine assemblies, we stock the most reliable brands for the Nigerian terrain. All units inspected and ready for immediate delivery."}
          </p>
          
          {/* Filters */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setShowAll(true); }}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-card text-muted-foreground hover:bg-muted border border-border/50"
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
                  onClick={() => { setActiveBrand(brand); setShowAll(true); }}
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
                className="group overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-accent/90 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-accent-foreground backdrop-blur-sm">
                    {product.brand}
                  </div>
                  {product.hp && (
                    <div className="absolute bottom-3 right-3 rounded-md bg-primary/80 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      {product.hp}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-base font-black text-card-foreground leading-tight">{product.title}</h3>
                  <p className="mb-5 text-xs leading-relaxed text-muted-foreground line-clamp-2">{product.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary text-primary-foreground font-bold"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Specs
                    </Button>
                    <a
                      href={`https://wa.me/2348105955892?text=I%20am%20interested%20in%20the%20${encodeURIComponent(product.title)}.%20Please%20share%20pricing.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="px-3 border-primary/20 hover:bg-accent hover:text-white hover:border-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setShowAll(true)} 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-black uppercase tracking-widest px-12 py-7 gap-3"
            >
              <Plus className="h-5 w-5" />
              View Full Catalog ({products.length} Items)
            </Button>
          </div>
        )}
      </div>

      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  )
}
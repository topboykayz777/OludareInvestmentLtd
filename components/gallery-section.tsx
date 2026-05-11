"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const gallery = [
  // New/Featured Images (Top)
  { src: "/images/trucks/howo-dump-yellow-fleet.jpg", alt: "Yellow HOWO dump trucks fleet at OIL yard", label: "HOWO Yellow Fleet" },
  { src: "/images/trucks/shacman-orange-fleet.jpg", alt: "Orange Shacman dump trucks fleet", label: "Shacman Fleet" },
  { src: "/images/trucks/howo-dump-white-fleet.jpg", alt: "White HOWO dump trucks fleet", label: "HOWO White Fleet" },
  { src: "/images/trucks/shacman-green-fleet.jpg", alt: "Green Shacman tractor heads fleet", label: "Shacman Tractors" },
  { src: "/images/excavators/liugong-fleet-yard.jpg", alt: "LiuGong excavators and loaders", label: "LiuGong Machinery" },
  { src: "/images/road-construction/xcmg-rollers-fleet.jpg", alt: "XCMG road rollers fleet", label: "XCMG Rollers" },
  { src: "/images/trucks/howo-light-truck-white.jpg", alt: "HOWO light box truck", label: "Light Trucks" },
  { src: "/images/trucks/howo-water-tanker-white.jpg", alt: "HOWO water tanker truck", label: "Water Tankers" },
  { src: "/images/machinery/xcmg-forklift-yellow.jpg", alt: "XCMG forklift", label: "XCMG Forklifts" },
  { src: "/images/spare-parts/weichai-engine-green.jpg", alt: "Weichai engine assembly", label: "Engine Stock" },
  { src: "/images/trailers/dump-trailer-black-side.jpg", alt: "Dump trailer side view", label: "Dump Trailers" },
  { src: "/images/road-construction/cat-grader-140h.jpg", alt: "Caterpillar 140H motor grader", label: "CAT Graders" },
  { src: "/images/trucks/howo-dump-yellow-front.jpg", alt: "HOWO dump truck front view", label: "HOWO 371 Front" },
  { src: "/images/trucks/howo-light-truck-refrigerated.jpg", alt: "HOWO refrigerated light truck", label: "Refrigerated Trucks" },
  { src: "/images/trucks/howo-homan-light-truck.jpg", alt: "HOWO Homan light truck", label: "Homan Series" },
  { src: "/images/trucks/howo-dump-white-close.jpg", alt: "HOWO dump truck close up", label: "HOWO 371 Detail" },
  { src: "/images/trucks/shacman-orange-close.jpg", alt: "Shacman F3000 close up", label: "Shacman Detail" },
  { src: "/images/trucks/shacman-green-close.jpg", alt: "Shacman tractor head close up", label: "Shacman Tractor" },
  { src: "/images/trucks/shacman-fleet-green.jpg", alt: "Shacman green fleet", label: "Shacman Green Fleet" },
  { src: "/images/trucks/shacman-fleet-orange.jpg", alt: "Shacman orange fleet", label: "Shacman Orange Fleet" },
  { src: "/images/spare-parts/weichai-engine-grey.jpg", alt: "Weichai engine grey", label: "Weichai Engine" },
  { src: "/images/road-construction/liugong-roller-yellow.jpg", alt: "LiuGong road roller", label: "LiuGong Roller" },
  { src: "/images/trailers/dump-trailer-black-rear.jpg", alt: "Dump trailer rear view", label: "Trailer Rear" },
  { src: "/images/trailers/dump-trailer-white-rear.jpg", alt: "White dump trailer rear", label: "White Trailer" },
  { src: "/images/trucks/howo-dump-white-tipping.jpg", alt: "HOWO dump truck tipping", label: "HOWO Tipping" },
  
  // Original/Shifted Images
  { src: "/images/hero-truck.jpg", alt: "Hero truck image", label: "Premium Fleet" },
  { src: "/images/dump-truck.jpg", alt: "Dump truck", label: "Heavy Tipper" },
  { src: "/images/cement-mixer.jpg", alt: "Cement mixer truck", label: "Mixer Truck" },
  { src: "/images/crane-truck.jpg", alt: "Crane truck", label: "Mobile Crane" },
  { src: "/images/tanker-truck.jpg", alt: "Tanker truck", label: "Fuel Tanker" },
  { src: "/images/flatbed-truck.jpg", alt: "Flatbed truck", label: "Flatbed Logistics" },
  { src: "/images/excavators/xcmg-xe335g-excavators-fleet.jpg", alt: "XCMG excavators fleet", label: "XCMG Excavators" },
  { src: "/images/excavators/cat-320-amphibious-excavator.jpg", alt: "CAT amphibious excavator", label: "Amphibious CAT" },
  { src: "/images/excavators/cat-320cl-amphibious-excavator.jpg", alt: "CAT 320CL excavator", label: "CAT 320CL" },
  { src: "/images/loaders/liugong-wheel-loader.jpg", alt: "LiuGong wheel loader", label: "LiuGong Loader" },
  { src: "/images/loaders/sdlg-lg953-wheel-loaders-fleet.jpg", alt: "SDLG wheel loaders fleet", label: "SDLG Loaders" },
  { src: "/images/loaders/shacman-wheel-loaders-fleet-yard.jpg", alt: "Shacman wheel loaders", label: "Shacman Loaders" },
  { src: "/images/loaders/xcmg-wheel-loader.jpg", alt: "XCMG wheel loader", label: "XCMG Loader" },
  { src: "/images/bulldozers/shantui-sd22-bulldozer.jpg", alt: "Shantui SD22 bulldozer", label: "Shantui SD22" },
  { src: "/images/road-construction/caterpillar-140h-motor-grader.jpg", alt: "CAT 140H motor grader", label: "CAT 140H" },
  { src: "/images/road-construction/saao-single-drum-road-roller.jpg", alt: "SAAO road roller", label: "SAAO Roller" },
  { src: "/images/road-construction/shantui-motor-grader-yellow.jpg", alt: "Shantui motor grader", label: "Shantui Grader" },
  { src: "/images/road-construction/single-drum-roller-orange.jpg", alt: "Single drum roller", label: "Orange Roller" },
  { src: "/images/road-construction/xcmg-xp203-pneumatic-tire-roller.jpg", alt: "XCMG pneumatic roller", label: "XCMG XP203" },
  { src: "/images/drilling-rigs/crawler-drilling-rigs-warehouse.jpg", alt: "Crawler drilling rigs", label: "Drilling Rigs" },
  { src: "/images/drilling-rigs/crawler-drilling-rigs-warehouse-2.jpg", alt: "Drilling rigs warehouse", label: "Rig Inventory" },
  { src: "/images/cranes/xcmg-crane-on-lowbed.jpg", alt: "XCMG crane on lowbed", label: "XCMG Crane" },
  { src: "/images/trailers/blue-low-bed-trailer.jpg", alt: "Blue low bed trailer", label: "Low-Bed Blue" },
  { src: "/images/trailers/blue-lowbed-trailer-4-views.jpg", alt: "Lowbed trailer views", label: "Trailer Specs" },
  { src: "/images/trailers/blue-lowbed-with-dump-trailer-yard.jpg", alt: "Lowbed with dump trailer", label: "Trailer Fleet" },
  { src: "/images/trailers/sidewall-cargo-trailer-grey-3axle.jpg", alt: "Sidewall cargo trailer", label: "Cargo Trailer" },
  { src: "/images/trailers/sidewall-cargo-trailer-grey-3axle-2.jpg", alt: "Sidewall trailer grey", label: "3-Axle Trailer" },
  { src: "/images/spare-parts/howo-371-cabins-wrapped-red-white.jpg", alt: "HOWO 371 cabins", label: "Truck Cabins" },
  { src: "/images/spare-parts/howo-diesel-engine-new-pallet.jpg", alt: "HOWO diesel engine", label: "HOWO Engine" },
  { src: "/images/spare-parts/howo-diesel-engine-pallet-closeup.jpg", alt: "Engine pallet close up", label: "Engine Detail" },
  { src: "/images/spare-parts/howo-diesel-engine-side-view.jpg", alt: "Engine side view", label: "Engine Side" },
  { src: "/images/spare-parts/howo-engines-factory-production-line.jpg", alt: "HOWO engines factory", label: "Factory Stock" },
  { src: "/images/spare-parts/howo-gearbox-black-chains.jpg", alt: "HOWO gearbox", label: "Gearbox Stock" },
  { src: "/images/spare-parts/howo-gearbox-in-crate.jpg", alt: "Gearbox in crate", label: "Crated Parts" },
  { src: "/images/spare-parts/howo-gearbox-on-chain-hoist.jpg", alt: "Gearbox on hoist", label: "Parts Handling" },
  { src: "/images/spare-parts/truck-cabin-wrapped-warehouse.jpg", alt: "Truck cabin warehouse", label: "Cabin Stock" },
  { src: "/images/trucks/cement-mixer-trucks-fleet-silver.jpg", alt: "Cement mixer fleet", label: "Mixer Fleet" },
  { src: "/images/trucks/howo-cement-mixer-green.jpg", alt: "HOWO cement mixer green", label: "Green Mixer" },
  { src: "/images/trucks/howo-cng-trucks-fleet.jpg", alt: "HOWO CNG trucks fleet", label: "CNG Fleet" },
  { src: "/images/trucks/howo-dump-trucks-fleet-white.jpg", alt: "HOWO dump trucks white", label: "White Tippers" },
  { src: "/images/trucks/howo-sinotruck-dump-white.jpg", alt: "HOWO Sinotruk dump", label: "Sinotruk 371" },
  { src: "/images/trucks/howo-sinotruk-tractor-head-white.jpg", alt: "HOWO tractor head", label: "Tractor Head" },
  { src: "/images/trucks/shacman-f3000-dump-truck-orange.jpg", alt: "Shacman F3000 orange", label: "Shacman F3000" },
  { src: "/images/trucks/sinotruk-cement-mixer-white.jpg", alt: "Sinotruk mixer white", label: "White Mixer" },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleImages = useMemo(() => {
    return showAll ? gallery : gallery.slice(0, 24)
  }, [showAll])

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const nextImg = () => setLightbox((prev) => prev !== null ? (prev + 1) % gallery.length : null)
  const prevImg = () => setLightbox((prev) => prev !== null ? (prev - 1 + gallery.length) % gallery.length : null)

  return (
    <section className="bg-background py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Live Inventory</p>
          <h2 className="mb-4 text-3xl font-black text-foreground lg:text-5xl text-balance">
            Nigeria's Largest Truck Stock
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            {"Explore our massive collection of heavy-duty trucks, machinery, and genuine spare parts. Real photos from our Ojodu Berger yard."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-3">
          {visibleImages.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              onClick={() => openLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border/50 bg-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-full bg-accent/90 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-accent-foreground backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                {img.label}
              </span>
            </button>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setShowAll(true)} 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-black uppercase tracking-widest px-12 py-7 gap-3"
            >
              <Plus className="h-5 w-5" />
              View Full Inventory ({gallery.length} Images)
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050a1a]/98 backdrop-blur-2xl" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white z-10 transition-colors" aria-label="Close lightbox">
            <X className="h-10 w-10" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImg() }}
            className="absolute left-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-accent hover:border-accent transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <div className="relative h-[80vh] w-[95vw] max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImg() }}
            className="absolute right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-accent hover:border-accent transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <div className="absolute bottom-8 flex flex-col items-center gap-2">
            <p className="text-lg font-black uppercase tracking-[0.3em] text-accent">
              {gallery[lightbox].label}
            </p>
            <p className="text-xs font-bold text-white/40">
              IMAGE {lightbox + 1} OF {gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
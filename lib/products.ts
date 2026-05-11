export const products = [
  // === TRUCKS (NEW) ===
  {
    id: "shacman-f3000-orange",
    brand: "Shacman",
    category: "Trucks",
    title: "Shacman F3000 Dump Truck",
    description: "Heavy-duty 6x4 tipper optimized for Nigerian mining and construction sites.",
    images: [{ src: "/images/trucks/shacman-orange-close.jpg", alt: "Shacman F3000 orange" }],
    hp: "380HP",
    engine: "Weichai WP10.380E22",
    isUsed: false
  },
  {
    id: "howo-371-white",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO Sino Truck 371",
    description: "The most reliable workhorse in Lagos. 10-tyre dump truck with reinforced chassis.",
    images: [{ src: "/images/trucks/howo-dump-white-close.jpg", alt: "HOWO 371 white" }],
    hp: "371HP",
    engine: "WD615.47",
    isUsed: false
  },
  {
    id: "howo-371-yellow",
    brand: "HOWO",
    category: "Trucks",
    title: "HOWO 371 Heavy Tipper (Yellow)",
    description: "High-visibility yellow fleet units. Perfect for large scale earthmoving projects.",
    images: [{ src: "/images/trucks/howo-dump-yellow-front.jpg", alt: "HOWO 371 yellow" }],
    hp: "371HP",
    engine: "WD615.47",
    isUsed: false
  },
  {
    id: "shacman-tractor-green",
    brand: "Shacman",
    category: "Trucks",
    title: "Shacman X3000 Tractor Head",
    description: "Premium long-haul tractor head for interstate logistics and heavy container port work.",
    images: [{ src: "/images/trucks/shacman-green-close.jpg", alt: "Shacman tractor green" }],
    hp: "420HP",
    engine: "Weichai WP12",
    isUsed: false
  },

  // === USED TRUCKS (PHASE 3 ADDITIONS) ===
  {
    id: "used-howo-371-2021",
    brand: "HOWO",
    category: "Trucks",
    title: "Used HOWO 371 Tipper (2021)",
    description: "Clean pre-owned unit with low mileage. Fully serviced and inspected at our Berger yard.",
    images: [{ src: "/images/trucks/howo-dump-white-fleet.jpg", alt: "Used HOWO 371" }],
    hp: "371HP",
    isUsed: true
  },
  {
    id: "used-shacman-f3000-2020",
    brand: "Shacman",
    category: "Trucks",
    title: "Used Shacman F3000 (2020)",
    description: "Reliable used Shacman tipper. Engine and gearbox in excellent condition. Ready for site work.",
    images: [{ src: "/images/trucks/shacman-orange-fleet.jpg", alt: "Used Shacman F3000" }],
    hp: "380HP",
    isUsed: true
  },

  // === LIGHT TRUCKS ===
  {
    id: "howo-light-box",
    brand: "HOWO",
    category: "Light Trucks",
    title: "HOWO Light Box Truck",
    description: "4x2 urban delivery truck. Ideal for FMCG distribution and city logistics.",
    images: [{ src: "/images/trucks/howo-light-truck-white.jpg", alt: "HOWO light truck" }],
    hp: "130HP",
    isUsed: false
  },
  {
    id: "howo-refrigerated",
    brand: "HOWO",
    category: "Light Trucks",
    title: "HOWO Refrigerated Truck",
    description: "Cold chain solution for perishable goods. High-performance cooling unit installed.",
    images: [{ src: "/images/trucks/howo-light-truck-refrigerated.jpg", alt: "HOWO refrigerated truck" }],
    hp: "140HP",
    isUsed: false
  },

  // === MACHINERY ===
  {
    id: "xcmg-excavator-xe335",
    brand: "XCMG",
    category: "Machinery",
    title: "XCMG XE335G Excavator",
    description: "33-ton heavy excavator for quarrying and large-scale excavation.",
    images: [{ src: "/images/excavators/xcmg-xe335g-excavators-fleet.jpg", alt: "XCMG XE335G" }],
    engine: "Cummins QSL9",
    isUsed: false
  },
  {
    id: "cat-320-amphibious",
    brand: "Caterpillar",
    category: "Machinery",
    title: "CAT 320 Amphibious Excavator",
    description: "Specialized swamp buggy for dredging and canal clearing in Lagos coastal areas.",
    images: [{ src: "/images/excavators/cat-320-amphibious-excavator.jpg", alt: "CAT Amphibious" }],
    isUsed: false
  },

  // === TRAILERS ===
  {
    id: "dump-trailer-black",
    brand: "Generic",
    category: "Trailers",
    title: "Heavy Duty Dump Trailer",
    description: "3-axle rear tipping trailer for bulk aggregates and sand transport.",
    images: [{ src: "/images/trailers/dump-trailer-black-side.jpg", alt: "Dump Trailer" }],
    isUsed: false
  },
  {
    id: "lowbed-blue",
    brand: "Generic",
    category: "Trailers",
    title: "4-Axle Low-Bed Trailer",
    description: "Heavy equipment transporter for moving excavators and bulldozers nationwide.",
    images: [{ src: "/images/trailers/blue-low-bed-trailer.jpg", alt: "Lowbed Trailer" }],
    isUsed: false
  },
  {
    id: "sidewall-trailer",
    brand: "Generic",
    category: "Trailers",
    title: "Sidewall Cargo Trailer",
    description: "Versatile trailer for bagged cement, agricultural produce, and general cargo.",
    images: [{ src: "/images/trailers/sidewall-cargo-trailer-grey-3axle.jpg", alt: "Sidewall Trailer" }],
    isUsed: false
  },

  // === PARTS ===
  {
    id: "weichai-engine-green",
    brand: "Weichai",
    category: "Parts",
    title: "Weichai WP10 Engine Assembly",
    description: "Brand new 380HP engine assembly for Shacman and HOWO trucks.",
    images: [{ src: "/images/spare-parts/weichai-engine-green.jpg", alt: "Weichai Engine" }],
    isUsed: false
  },
  {
    id: "howo-cabin",
    brand: "HOWO",
    category: "Parts",
    title: "HOWO 371 Truck Cabin",
    description: "Complete cabin assembly including interior trim and dashboard components.",
    images: [{ src: "/images/spare-parts/howo-371-cabins-wrapped-red-white.jpg", alt: "HOWO Cabin" }],
    isUsed: false
  }
]
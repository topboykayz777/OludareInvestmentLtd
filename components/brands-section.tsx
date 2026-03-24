import Image from "next/image"

const brands = [
  {
    name: "HOWO Sino Trucks",
    desc: "China's leading heavy truck manufacturer",
    logo: "/images/brands/howo.png",
  },
  {
    name: "Shacman",
    desc: "Shaanxi Automobile Group",
    logo: "/images/brands/shacman.png",
  },
  {
    name: "XCMG",
    desc: "Construction machinery & equipment",
    logo: "/images/brands/xcmg.jpg",
  },
  {
    name: "Caterpillar",
    desc: "Heavy equipment & engines",
    logo: "/images/brands/caterpillar.png",
  },
  {
    name: "Shantui",
    desc: "Bulldozers, graders & rollers",
    logo: "/images/brands/shantui.png",
  },
  {
    name: "LiuGong",
    desc: "Loaders & excavators",
    logo: "/images/brands/liugong.png",
  },
  {
    name: "SDLG",
    desc: "Wheel loaders & excavators",
    logo: "/images/brands/sdlg.png",
  },
  {
    name: "SANY",
    desc: "Cranes & construction machinery",
    logo: "/images/brands/sany.png",
  },
]

export function BrandsSection() {
  return (
    <section className="bg-muted py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Brands We Carry</p>
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl text-balance">
            Trusted Names in Heavy Machinery
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-3 flex h-16 items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  width={140}
                  height={56}
                  className="h-12 w-auto max-w-[120px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xs font-bold text-card-foreground sm:text-sm">{brand.name}</h3>
              <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{brand.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

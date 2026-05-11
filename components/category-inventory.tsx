"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { products } from "@/lib/products"

interface CategoryInventoryProps {
  filterType: "brand" | "category" | "used"
  filterValue: string
  title: string
  description: string
}

export function CategoryInventory({ filterType, filterValue, title, description }: CategoryInventoryProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const filteredProducts = products.filter(p => {
    if (filterType === "brand") return p.brand === filterValue
    if (filterType === "category") return p.category === filterValue
    if (filterType === "used") return p.isUsed === true
    return true
  })

  if (filteredProducts.length === 0) return null

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-black text-secondary-foreground lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
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
            </article>
          ))}
        </div>
      </div>

      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  )
}
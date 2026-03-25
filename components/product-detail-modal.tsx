"use client"

import Image from "next/image"
import { CheckCircle2, Truck, Settings, Shield, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProductDetailModalProps {
  product: any
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!product) return null

  const specs = [
    { label: "Engine", value: product.engine || "Weichai / Cummins" },
    { label: "Horsepower", value: product.hp || "371HP - 420HP" },
    { label: "Transmission", value: product.transmission || "Fast Gear (Manual/AMT)" },
    { label: "Axle", value: product.axle || "Hande / MAN" },
    { label: "Tires", value: "12.00R20 / 315/80R22.5" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.title}</DialogTitle>
          <DialogDescription>Technical Specifications & Features</DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-8 lg:grid-cols-2 mt-4">
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-xl border">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="rounded-lg bg-muted p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{spec.label}</p>
                  <p className="text-sm font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
                <Info className="h-4 w-4" /> Key Features
              </h4>
              <ul className="space-y-2">
                {[
                  "Reinforced chassis for heavy Nigerian loads",
                  "Tropicalized cooling system for high temperatures",
                  "Fuel-efficient engine technology",
                  "Ergonomic cabin with air conditioning",
                  "12-month warranty on major components"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
              <h4 className="mb-2 font-bold text-accent">Ready to Purchase?</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Contact our sales team for a formal proforma invoice and delivery timeline.
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href={`https://wa.me/2348105955892?text=I%20need%20a%20quote%20for%20the%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-accent hover:bg-[#d06a18]">Chat with Sales</Button>
                </a>
                <Button variant="outline" className="w-full" onClick={onClose}>Close Details</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
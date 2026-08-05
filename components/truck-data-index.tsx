"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { brand: "HOWO", model: "371 Heavy Tipper (WD615.47)", engine: "WD615.47 (371HP)", payload: "30-40 Tons", category: "Construction & Sand Winning" },
  { brand: "Shacman", model: "F3000 Tipper (Weichai WP10)", engine: "Weichai WP10 (380HP)", payload: "30-45 Tons", category: "Mining & Quarrying" },
  { brand: "Shacman", model: "X3000 Tractor Head (WP12)", engine: "Weichai WP12 (420HP)", payload: "60+ Tons GCW", category: "Interstate Logistics" },
  { brand: "HOWO", model: "420HP Heavy Tractor", engine: "Sinotruk WD615 (420HP)", payload: "50+ Tons GCW", category: "Apapa Port Haulage" },
  { brand: "XCMG", model: "XE335G Excavator", engine: "Cummins QSL9", payload: "33 Ton Class", category: "Excavation & Dredging" },
  { brand: "Caterpillar", model: "CAT 320 Amphibious", engine: "CAT ACERT Diesel", payload: "Swamp Class", category: "Lagos Canal Dredging" },
  { brand: "HOWO", model: "371 CNG Tipper (Gas)", engine: "Sinotruk Natural Gas", payload: "30-35 Tons", category: "Fuel-Saving Haulage" },
]

export function TruckDataIndex() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">2026 Industry Index</p>
          <h2 className="text-3xl font-black text-foreground lg:text-4xl">Heavy Equipment Specifications Index (Lagos Market)</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Official technical specifications and benchmark payload capacities for heavy-duty trucks and machinery operating across Lagos State and Nigeria.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-bold">Brand</TableHead>
                <TableHead className="font-bold">Model Series</TableHead>
                <TableHead className="font-bold">Engine Configuration</TableHead>
                <TableHead className="font-bold">Payload Capacity</TableHead>
                <TableHead className="font-bold">Primary Application</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.model}>
                  <TableCell className="font-bold text-primary">{item.brand}</TableCell>
                  <TableCell className="font-medium">{item.model}</TableCell>
                  <TableCell className="text-sm">{item.engine}</TableCell>
                  <TableCell className="text-sm">{item.payload}</TableCell>
                  <TableCell className="text-xs uppercase font-bold tracking-wider text-muted-foreground">{item.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Localized Index Footer for Search Intent Coverage across Lagos LGAs */}
        <div className="mt-12 rounded-2xl bg-secondary/60 p-6 border border-border">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-3">Popular Search Directories — Lagos State</h3>
          <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground leading-relaxed">
            <span>• Best HOWO Truck Lagos</span>
            <span>• Best Shacman Truck Nigeria</span>
            <span>• Where to Buy Trucks in Ojodu Berger</span>
            <span>• HOWO 371 Tipper Price 2026</span>
            <span>• Direct Port Used Tippers Apapa</span>
            <span>• Tipper Trucks in Ikeja & Lekki</span>
            <span>• Heavy Equipment Sourcing Agent Lagos</span>
            <span>• Shacman F3000 vs HOWO 371 Comparison</span>
            <span>• Weichai Engine Spare Parts Ladipo</span>
            <span>• 10 Wheeler Dump Trucks Ikorodu</span>
            <span>• Sand Winning Tippers Epe</span>
            <span>• Lowbed Trailer Sales Badagry</span>
            <span>• Truck Financing Dealers Lagos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
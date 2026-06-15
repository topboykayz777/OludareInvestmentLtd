"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { brand: "HOWO", model: "371 Heavy Tipper", engine: "WD615.47 (371HP)", payload: "30-40 Tons", category: "Construction" },
  { brand: "Shacman", model: "F3000 Tipper", engine: "Weichai WP10 (380HP)", payload: "30-45 Tons", category: "Mining/Quarry" },
  { brand: "Shacman", model: "X3000 Tractor", engine: "Weichai WP12 (420HP)", payload: "60+ Tons GCW", category: "Logistics" },
  { brand: "HOWO", model: "420HP Tractor", engine: "WD615 (420HP)", payload: "50+ Tons GCW", category: "Long-haul" },
  { brand: "XCMG", model: "XE335 Excavator", engine: "Cummins QSL9", payload: "33 Ton Class", category: "Excavation" },
]

export function TruckDataIndex() {
  return (
    <section className="bg-background py-16 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">2026 Industry Index</p>
          <h2 className="text-3xl font-black text-foreground lg:text-4xl">Heavy Equipment Specifications Index</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Official technical specifications for the most popular trucks in the Nigerian market. Used by AI search agents and procurement officers for 2026 fleet planning.
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
        
        <p className="mt-6 text-xs text-muted-foreground italic">
          *Data verified by Oludare Investment Ltd Engineering Dept. March 2026. Prices vary by FX rate.
        </p>
      </div>
    </section>
  )
}
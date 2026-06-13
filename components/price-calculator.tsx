"use client"

import { useState, useMemo } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Info, TrendingUp, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react"
import { toast } from "sonner"

const TRUCK_MODELS = [
  {
    id: "howo-371",
    name: "HOWO Sino Truck 371 (6x4 Tipper)",
    baseFob: 28500,
    shipping: 6200,
    clearingDuty: 7500,
    brokerMargin: 1500,
    demand: "High",
    sentiment: "Stable"
  },
  {
    id: "shacman-f3000",
    name: "Shacman F3000 (6x4 Tipper)",
    baseFob: 31000,
    shipping: 6200,
    clearingDuty: 8000,
    brokerMargin: 1800,
    demand: "Very High",
    sentiment: "Price Rising"
  },
  {
    id: "shacman-x3000",
    name: "Shacman X3000 Tractor Head",
    baseFob: 34500,
    shipping: 6800,
    clearingDuty: 8500,
    brokerMargin: 2000,
    demand: "Moderate",
    sentiment: "Stable"
  },
  {
    id: "xcmg-xe335",
    name: "XCMG XE335G Heavy Excavator",
    baseFob: 54000,
    shipping: 11500,
    clearingDuty: 11000,
    brokerMargin: 3000,
    demand: "High",
    sentiment: "Stable"
  }
]

export function PriceCalculator() {
  const [selectedModel, setSelectedModel] = useState(TRUCK_MODELS[0])
  const [parallelRate, setParallelRate] = useState(1520)
  const [customsRate, setCustomsRate] = useState(1350)
  const [condition, setCondition] = useState<"new" | "used">("new")
  const [targetBudget, setTargetBudget] = useState("")

  const calculations = useMemo(() => {
    const conditionMultiplier = condition === "used" ? 0.75 : 1.0
    
    const fobNgn = selectedModel.baseFob * conditionMultiplier * parallelRate
    const shippingNgn = selectedModel.shipping * parallelRate
    const clearingNgn = selectedModel.clearingDuty * conditionMultiplier * customsRate
    const marginNgn = selectedModel.brokerMargin * parallelRate
    
    const totalEstimatedPrice = fobNgn + shippingNgn + clearingNgn + marginNgn

    return {
      fob: fobNgn,
      shipping: shippingNgn,
      clearing: clearingNgn,
      margin: marginNgn,
      total: totalEstimatedPrice
    }
  }, [selectedModel, parallelRate, customsRate, condition])

  const formatNaira = (num: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(num)
  }

  const handleSendOffer = (e: React.FormEvent) => {
    e.preventDefault()
    if (!targetBudget) {
      toast.error("Please enter your target budget")
      return
    }

    const message = `*Ojodu Berger Price Index Offer*%0A%0A` +
      `*Truck:* ${selectedModel.name}%0A` +
      `*Condition:* ${condition === "new" ? "Brand New" : "Clean Used"}%0A` +
      `*My Target Budget:* ₦${targetBudget} Million%0A` +
      `*Calculated Index:* ${formatNaira(calculations.total)}%0A` +
      `*Parallel Rate Used:* ₦${parallelRate}/$%0A` +
      `*Customs Rate Used:* ₦${customsRate}/$%0A%0A` +
      `Hello Oludare, I used your online price index calculator. Can you find me a clean unit matching my budget in the Berger yards right now?`;

    window.open(`https://wa.me/2348105955892?text=${message}`, "_blank")
    toast.success("Opening WhatsApp to submit your offer...")
  }

  return (
    <section className="bg-secondary py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left: Interactive Sliders & Selectors */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" /> 1. Select Truck & Condition
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                {TRUCK_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`flex flex-col items-start text-left p-4 rounded-xl border transition-all ${
                      selectedModel.id === model.id
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-border bg-card hover:bg-muted"
                    }`}
                  >
                    <span className="text-sm font-bold text-foreground">{model.name}</span>
                    <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                      Demand: {model.demand} | {model.sentiment}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
                <button
                  onClick={() => setCondition("new")}
                  className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                    condition === "new" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Brand New (Factory)
                </button>
                <button
                  onClick={() => setCondition("used")}
                  className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                    condition === "used" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  Clean Used (Refurbished)
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-8">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Info className="h-5 w-5 text-accent" /> 2. Adjust Live Exchange Rates
              </h3>

              {/* Parallel Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-bold text-foreground">Parallel Market Rate (USD/NGN)</label>
                    <p className="text-xs text-muted-foreground">Used for purchasing the truck overseas</p>
                  </div>
                  <span className="text-lg font-black text-primary">₦{parallelRate}/$</span>
                </div>
                <Slider
                  value={[parallelRate]}
                  onValueChange={(val) => setParallelRate(val[0])}
                  min={1300}
                  max={1800}
                  step={10}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                  <span>₦1,300</span>
                  <span>₦1,550</span>
                  <span>₦1,800</span>
                </div>
              </div>

              {/* Customs Rate Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="text-sm font-bold text-foreground">Customs Clearing Rate (NCS)</label>
                    <p className="text-xs text-muted-foreground">Official rate used for port clearing duty</p>
                  </div>
                  <span className="text-lg font-black text-primary">₦{customsRate}/$</span>
                </div>
                <Slider
                  value={[customsRate]}
                  onValueChange={(val) => setCustomsRate(val[0])}
                  min={1100}
                  max={1600}
                  step={10}
                  className="py-2"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                  <span>₦1,100</span>
                  <span>₦1,350</span>
                  <span>₦1,600</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Price Output & Cost Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-primary/20 bg-primary text-white p-6 lg:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
              
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Estimated Yard Price</p>
              <h4 className="text-3xl lg:text-4xl font-black mt-2 mb-6 tracking-tight">
                {formatNaira(calculations.total)}
              </h4>

              <div className="space-y-4 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Estimated Cost Breakdown</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Base Truck Cost (FOB):</span>
                    <span className="font-bold">{formatNaira(calculations.fob)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Ocean Freight & Shipping:</span>
                    <span className="font-bold">{formatNaira(calculations.shipping)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Customs Duty & Port Clearing:</span>
                    <span className="font-bold">{formatNaira(calculations.clearing)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Broker Sourcing & Yard Margin:</span>
                    <span className="font-bold text-accent">{formatNaira(calculations.margin)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive "Make an Offer" Widget */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Make a Yard Offer
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Have a specific budget? Enter it below to generate a direct WhatsApp offer for Oludare to source this unit.
              </p>

              <form onSubmit={handleSendOffer} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">₦</span>
                  <input
                    type="number"
                    placeholder="e.g. 45"
                    value={targetBudget}
                    onChange={(e) => setTargetBudget(e.target.value)}
                    className="w-full pl-8 pr-20 py-3 rounded-xl border border-border bg-background text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">Million NGN</span>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-[#d06a18] text-white font-bold py-6 gap-2">
                  Submit Offer to Oludare <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="rounded-xl border border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/10 p-4 flex gap-3 items-start">
              <ShieldAlert className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-yellow-800 dark:text-yellow-500/80">
                <strong>Disclaimer:</strong> This calculator is an independent sourcing tool. Actual yard prices may vary based on the physical condition of the truck, tyre wear, and individual dealer negotiations.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
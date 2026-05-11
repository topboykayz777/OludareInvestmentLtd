"use client"

import { CheckCircle2, MapPin, Calendar } from "lucide-react"

const deliveries = [
  { unit: "3x HOWO 371 Tippers", location: "Abuja FCT", date: "March 2025" },
  { unit: "1x Shacman X3000 Tractor", location: "Port Harcourt", date: "Feb 2025" },
  { unit: "2x XCMG Excavators", location: "Enugu State", date: "Feb 2025" },
  { unit: "5x HOWO CNG Trucks", location: "Lagos State", date: "Jan 2025" },
]

export function RecentDeliveries() {
  return (
    <section className="bg-primary py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="shrink-0 text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Live Activity</p>
            <h2 className="text-2xl font-black text-white">Recent Deliveries</h2>
          </div>
          
          <div className="flex-1 w-full overflow-hidden">
            <div className="flex gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...deliveries, ...deliveries].map((d, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-4 min-w-[280px]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{d.unit}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-[10px] text-white/40 uppercase font-bold">
                          <MapPin className="h-3 w-3" /> {d.location}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-white/40 uppercase font-bold">
                          <Calendar className="h-3 w-3" /> {d.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
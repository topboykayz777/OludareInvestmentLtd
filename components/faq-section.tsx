"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Where is Oludare Investment Ltd located?",
    a: "We are at 209, Lagos/Ibadan Express Way, Beside Total KFC Filling Station, Ojodu Berger, Lagos State. Our yard is easy to find and you're welcome to visit anytime during business hours (Monday to Saturday, 8am-6pm).",
  },
  {
    q: "What truck brands do you sell?",
    a: "We specialize in HOWO Sino Trucks, Shacman, XCMG, Caterpillar, Shantui, LiuGong, SDLG, and SANY. These are reliable brands widely used across Nigeria for construction, mining, and logistics.",
  },
  {
    q: "Do you sell brand new or used trucks?",
    a: "We sell both. We have brand new trucks directly sourced from the manufacturers, as well as quality pre-owned trucks that have been inspected and are in good working condition. Ask us about what's currently available.",
  },
  {
    q: "Can I get spare parts for my truck?",
    a: "Yes. We stock a wide range of genuine and aftermarket parts including engines, gearboxes, truck cabins, brake systems, filters, and more. If we don't have it in stock, we can source it for you quickly.",
  },
  {
    q: "Do you deliver trucks outside Lagos?",
    a: "Absolutely. We deliver to all 36 states in Nigeria. Whether you're in Abuja, Port Harcourt, Kano, or anywhere else, we will arrange transportation to your location.",
  },
  {
    q: "Is financing or installment payment available?",
    a: "We offer flexible payment arrangements for serious buyers. The terms vary depending on the equipment and amount involved. Reach out to us on WhatsApp or by phone to discuss what works for your situation.",
  },
  {
    q: "How do I place an order or get a quote?",
    a: "The easiest way is to chat with us on WhatsApp at 08105955892. You can also call us on 08020890065 or visit our yard at Ojodu Berger. We respond quickly and will give you pricing and availability right away.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Common Questions About Buying Trucks in Lagos
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="pr-4 text-sm font-bold text-card-foreground sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

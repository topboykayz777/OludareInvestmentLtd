"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const generalFaqs = [
  ["What trucks can you source in 2026?", "We can help source HOWO, Shacman, tractor heads, dump trucks, trailers, and other heavy equipment based on your required specification, condition, budget, and location."],
  ["Can I request a truck that is not listed on the website?", "Yes. Website listings are examples of the categories and configurations we handle. Send your exact requirement on WhatsApp and we will check the current sourcing options."],
  ["How do I get the current price?", "Prices depend on model, engine, configuration, condition, exchange rate, and delivery location. Message sales on WhatsApp for the current price and specification of the option that fits your needs."],
  ["What should I send on WhatsApp?", "Include the truck type, preferred brand or model, new or used condition, intended work, quantity, budget range, and delivery location. Photos or a specification sheet can then be shared with you."],
]

const categoryFaqs: Record<string, string[][]> = {
  howo: [["Is HOWO 371 suitable for Nigerian work?", "HOWO 371 is widely used for construction, quarrying, sand delivery, and haulage. The right configuration still depends on your route, load, terrain, and maintenance plan."]],
  shacman: [["Should I choose Shacman F3000 or X3000?", "F3000 is commonly considered for demanding dump-truck and quarry work, while X3000 is often considered for tractor-head and long-haul applications. Send your intended use to sales for a configuration recommendation."]],
  tractor: [["Can you source a tractor head for my route or trailer?", "Yes. Tell us the route, trailer type, load, preferred horsepower, budget, and location so the sourced option can be matched to the work." ]],
}

export function TruckBuyingFaq({ category = "general" }: { category?: string }) {
  const faqs = [...generalFaqs, ...(categoryFaqs[category] ?? [])]
  const [open, setOpen] = useState(0)
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }

  return <section className="bg-background py-16 lg:py-20"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><div className="mx-auto max-w-4xl px-4 lg:px-8"><div className="mb-10"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">Buyer FAQ</p><h2 className="text-3xl font-black text-foreground lg:text-4xl">Questions buyers ask before sourcing a truck</h2><p className="mt-3 text-muted-foreground">Need a direct answer for your situation? Send the details to sales on WhatsApp and we will check the current options.</p></div><div className="space-y-3">{faqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-xl border border-border bg-card"><button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left"><span className="font-bold text-card-foreground">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${open === index ? "rotate-180" : ""}`} /></button><div className={`grid transition-all ${open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p></div></div>)}</div></div></section>
}

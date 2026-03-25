"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"

function useBusinessStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string }>({ isOpen: false, text: "" })

  useEffect(() => {
    function check() {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }))
      const day = now.getDay()
      const hour = now.getHours()
      const minutes = now.getMinutes()
      const time = hour + minutes / 60

      if (day === 0) {
        setStatus({ isOpen: false, text: "Closed today (Sunday) -- Opens Monday 8AM" })
      } else if (day >= 1 && day <= 6) {
        if (time >= 8 && time < 18) {
          const closingIn = 18 - time
          if (closingIn <= 1) {
            setStatus({ isOpen: true, text: `Open now -- Closing soon at 6:00 PM` })
          } else {
            setStatus({ isOpen: true, text: `Open now -- Until 6:00 PM` })
          }
        } else if (time < 8) {
          setStatus({ isOpen: false, text: `Closed -- Opens today at 8:00 AM` })
        } else {
          if (day === 6) {
            setStatus({ isOpen: false, text: "Closed for today -- Opens Monday 8AM" })
          } else {
            setStatus({ isOpen: false, text: "Closed -- Opens tomorrow at 8:00 AM" })
          }
        }
      }
    }
    check()
    const timer = setInterval(check, 60000)
    return () => clearInterval(timer)
  }, [])

  return status
}

export function ContactSection() {
  const businessStatus = useBusinessStatus()

  return (
    <section id="contact" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Get In Touch</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Move Your Business Forward?
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            {"Visit our yard at Ojodu Berger or fill out the form below for a formal corporate quote."}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-card-foreground">Our Yard</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      209, Lagos/Ibadan Express Way,<br />
                      Ojodu Berger, Lagos State
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-card-foreground">Phone / WhatsApp</h3>
                    <div className="mt-1 flex flex-col gap-1">
                      <a href="tel:+2348020890065" className="text-xs text-accent hover:underline">08020890065</a>
                      <a href="tel:+2348105955892" className="text-xs text-accent hover:underline">08105955892</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-card-foreground">Email</h3>
                    <a href="mailto:Oludareinvestmentltd@gmail.com" className="mt-1 text-xs text-accent hover:underline break-all">
                      Oludareinvestmentltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${businessStatus.isOpen ? "bg-green-600" : "bg-red-500"} text-white`}>
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-card-foreground flex items-center gap-2">
                      Status: {businessStatus.isOpen ? "OPEN" : "CLOSED"}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-accent">{businessStatus.text}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-2xl border border-border shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3470!3d6.6370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228a5e0b3c9%3A0x5f1c0c6f0f0b0e0a!2sOjodu+Berger%2C+Lagos-Ibadan+Expressway%2C+Lagos!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oludare Investment Ltd Location"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Right: Quote Form */}
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
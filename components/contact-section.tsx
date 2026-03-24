"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/2348105955892?text=Hello%2C%20I%27m%20interested%20in%20your%20trucks%20and%20machinery.%20Please%20share%20more%20details."

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
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Come See Us or Send a Message
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            {"Our yard is open Monday to Saturday. Walk in, call, email, or just message us on WhatsApp -- whatever's easiest for you."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-card-foreground">Our Yard</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  209, Lagos/Ibadan Express Way,<br />
                  Beside Total KFC Filling Station,<br />
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
                  <a href="tel:+2348020890065" className="text-xs text-accent hover:underline">
                    08020890065 (Call)
                  </a>
                  <a href="tel:+2348105955892" className="text-xs text-accent hover:underline">
                    08105955892 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-card-foreground">Email</h3>
                <a href="mailto:Oludareinvestmentltd@gmail.com" className="mt-1 text-xs text-accent hover:underline">
                  Oludareinvestmentltd@gmail.com
                </a>
              </div>
            </div>

            {/* Live business hours */}
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${businessStatus.isOpen ? "bg-green-600" : "bg-red-500"} text-white`}>
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-card-foreground flex items-center gap-2">
                  Business Hours
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold ${businessStatus.isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    <span className="relative flex h-1.5 w-1.5">
                      {businessStatus.isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />}
                      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${businessStatus.isOpen ? "bg-green-500" : "bg-red-500"}`} />
                    </span>
                    {businessStatus.isOpen ? "OPEN" : "CLOSED"}
                  </span>
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {businessStatus.text}
                </p>
                <p className="mt-1.5 text-[10px] text-muted-foreground">
                  Mon - Sat: 8:00 AM - 6:00 PM | Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="relative h-64 overflow-hidden rounded-xl border border-border lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3470!3d6.6370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228a5e0b3c9%3A0x5f1c0c6f0f0b0e0a!2sOjodu+Berger%2C+Lagos-Ibadan+Expressway%2C+Lagos!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oludare Investment Ltd Location - Ojodu Berger Lagos"
                className="absolute inset-0"
              />
            </div>

            <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-center lg:p-8">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent" />
              </div>
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold text-primary-foreground">Ready to Buy a Truck?</h3>
                <p className="mb-5 text-sm text-primary-foreground/70">
                  Chat with us on WhatsApp right now. We respond fast.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-[#d06a18] font-semibold px-8 gap-2 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Chat on WhatsApp Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

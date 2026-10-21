"use client"

import { useEffect } from "react"
import { supabase } from "@/integrations/supabase/client"

export function WhatsAppTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me/"]')
      if (!link) return
      void supabase.from("whatsapp_click_events").insert({
        event_name: "whatsapp_click",
        page_path: window.location.pathname,
        cta_label: link.textContent?.trim().slice(0, 120) || "WhatsApp link",
      })
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}

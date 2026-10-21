"use client"

import { FormEvent, useState } from "react"
import { supabase } from "@/src/integrations/supabase/client"
import { LockKeyhole, MessageCircle } from "lucide-react"

type EventRow = { id: string; event_name: string; page_path: string; cta_label: string; created_at: string }

export default function WhatsAppAdminPage() {
  const [password, setPassword] = useState("")
  const [events, setEvents] = useState<EventRow[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError("")
    const result = await supabase.rpc("get_whatsapp_click_events", { admin_password: password })
    setLoading(false)
    if (result.error || !result.data?.length) {
      setEvents([])
      setError("Incorrect password or no WhatsApp clicks have been recorded yet.")
      return
    }
    setEvents(result.data as EventRow[])
  }

  return <main className="min-h-screen bg-secondary px-4 py-12"><div className="mx-auto max-w-5xl"><div className="mb-8 flex items-center gap-3"><div className="rounded-xl bg-primary p-3 text-white"><MessageCircle className="h-6 w-6" /></div><div><p className="text-sm font-bold uppercase tracking-widest text-accent">Private dashboard</p><h1 className="text-3xl font-black text-foreground">WhatsApp enquiries</h1></div></div>{events.length === 0 ? <form onSubmit={handleSubmit} className="max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm"><div className="mb-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground"><LockKeyhole className="h-4 w-4" /> Password-protected access</div><label className="text-sm font-semibold text-card-foreground" htmlFor="password">Admin password</label><input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-3 outline-none focus:ring-2 focus:ring-accent" autoComplete="current-password" /><button disabled={loading} className="mt-4 w-full rounded-lg bg-primary px-4 py-3 font-bold text-white disabled:opacity-60">{loading ? "Checking…" : "View click activity"}</button>{error && <p className="mt-4 text-sm text-destructive">{error}</p>}</form> : <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="flex items-center justify-between border-b border-border p-5"><div><h2 className="font-bold text-card-foreground">Recent WhatsApp clicks</h2><p className="text-sm text-muted-foreground">Showing the latest {events.length} recorded clicks.</p></div><button onClick={() => { setEvents([]); setPassword("") }} className="text-sm font-semibold text-accent">Lock dashboard</button></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-secondary text-muted-foreground"><tr><th className="px-5 py-3">Time</th><th className="px-5 py-3">Page</th><th className="px-5 py-3">CTA</th></tr></thead><tbody>{events.map((item) => <tr key={item.id} className="border-t border-border"><td className="whitespace-nowrap px-5 py-3">{new Date(item.created_at).toLocaleString()}</td><td className="px-5 py-3 font-medium">{item.page_path}</td><td className="px-5 py-3 text-muted-foreground">{item.cta_label}</td></tr>)}</tbody></table></div></div>}</div></main>
}

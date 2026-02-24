"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { ExamplesDialog } from "./examples-dialog"

type Feature = { text: string; muted?: boolean }
const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
    </li>
  )
}

type Currency = "INR" | "USD"

const PRICES: Record<Currency, { startup: string; pro: string; premium: string; save: string }> = {
  INR: {
    startup: "Rs 25,000",
    pro: "Rs 55,000",
    premium: "Rs 170,500",
    save: "Ahorra Rs 1,500",
  },
  USD: {
    startup: "$299",
    pro: "$699",
    premium: "$2,049",
    save: "Ahorra $20",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

const startupVideos = ["H1h5dHpp1Nw", "HXARcSSdfMU", "fd8zraQ1JdE", "ARQyF2FA3Ec", "dEZfHADlFtw", "wuyfdfKO6Rc", "VakkmhtrUA0", "o8DoIg9yNGk", "rtReBkFt-To"]
const proVideos = ["ASV2myPRfKA", "eTfS2lqwf6A", "KALbYHmGV4I", "Go0AA9hZ4as", "sB7RZ9QCOAg", "TK2WboJOJaw", "5Xq7UdXXOxI", "kMjWCidQSK0", "RKKdQvwKOhQ"]
const premiumVideos = ["v2AC41dglnM", "pRpeEdMmmQ0", "3AtDnEC4zak", "JRfuAukYTKg", "LsoLEjrDogU", "RB-RcX5DS5A", "hTWKbfoikeg", "YQHsXMglC9A", "09R8_2nJtjg"]

export function Pricing() {
  const [openPlan, setOpenPlan] = useState<null | "Startup" | "Pro" | "Premium">(null)
  const [currency, setCurrency] = useState<Currency>("USD")

  useEffect(() => {
    setCurrency(guessLocalCurrency())
  }, [])

  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Planes y paquetes
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            Precios para marcas
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300" itemProp="description">
            Sin costos ocultos. Marketing visual de alto impacto adaptado a tu presupuesto.
          </p>
          <div className="mt-6">
            <Button asChild className="rounded-full px-5 text-neutral-900 hover:brightness-95" style={{ backgroundColor: "#f2f2f2" }}>
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Contactar ahora
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300" itemScope itemType="https://schema.org/Offer">
            <div className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]" style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}>
              {PRICES[currency].save}
            </div>
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Startup
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].startup}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">por video</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button type="button" onClick={() => setOpenPlan("Startup")} onTouchStart={() => setOpenPlan("Startup")} className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplo
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Reel o teaser de 10 a 15 segundos (1 SKU)",
                  "Escena simple con iluminacion profesional",
                  "1 ronda de ajustes",
                  "Entrega en 10 dias",
                  "Piezas listas para redes y anuncios",
                  "Modelado 3D incluido",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300" itemScope itemType="https://schema.org/Offer">
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Pro
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].pro}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">por video</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button type="button" onClick={() => setOpenPlan("Pro")} onTouchStart={() => setOpenPlan("Pro")} className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplo
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Animacion de 20 a 25 segundos (1 SKU)",
                  "Shot-list definido desde el inicio",
                  "Direccion visual y graficos pro",
                  "2 rondas de ajustes",
                  "Entrega en 3 semanas",
                  "Modelado 3D incluido",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300" itemScope itemType="https://schema.org/Offer">
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                Premium
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  {PRICES[currency].premium}
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-300">por video</span>
                <meta itemProp="priceCurrency" content={currency} />
              </div>
              <Button type="button" onClick={() => setOpenPlan("Premium")} onTouchStart={() => setOpenPlan("Premium")} className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplo
              </Button>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Animacion de 30 a 40 segundos (hasta 5 SKUs)",
                  "Storyboard avanzado y diseno de tomas",
                  "Entrega en 4 semanas",
                  "Iluminacion, camara animada y profundidad",
                  "Hasta 3 rondas de ajustes",
                  "Modelado 3D incluido",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>

      <ExamplesDialog open={openPlan === "Startup"} onOpenChange={(v) => setOpenPlan(v ? "Startup" : null)} planName="Plan Startup" price={PRICES[currency].startup} videoIds={startupVideos} />
      <ExamplesDialog open={openPlan === "Pro"} onOpenChange={(v) => setOpenPlan(v ? "Pro" : null)} planName="Plan Pro" price={PRICES[currency].pro} videoIds={proVideos} />
      <ExamplesDialog open={openPlan === "Premium"} onOpenChange={(v) => setOpenPlan(v ? "Premium" : null)} planName="Plan Premium" price={PRICES[currency].premium} videoIds={premiumVideos} />
    </section>
  )
}

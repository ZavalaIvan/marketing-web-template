"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type Currency = "INR" | "USD"

const ACCENT = "#C6FF3A"

const IN_EXTERIOR_PER_VIEW = 4000
const IN_FIRST_MIN = 4000
const IN_FIRST_MAX = 8000
const IN_ADDITIONAL = 3000
const USD_MULTIPLIER = 2

const fmtINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n)
const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)

const PRICES: Record<
  Currency,
  {
    exterior: string
    interior: string
    walkthrough: string
    save: string
    firstRange: string
    additional: string
    unitLabel: string
  }
> = {
  INR: {
    exterior: `${fmtINR(IN_EXTERIOR_PER_VIEW)}`,
    interior: "Rs 55,000",
    walkthrough: "Rs 170,500",
    save: "Ahorra Rs 1,500",
    firstRange: `${fmtINR(IN_FIRST_MIN)}-${fmtINR(IN_FIRST_MAX)}`,
    additional: `${fmtINR(IN_ADDITIONAL)}`,
    unitLabel: "por vista",
  },
  USD: {
    exterior: `${fmtUSD(IN_EXTERIOR_PER_VIEW * USD_MULTIPLIER)}`,
    interior: "$699",
    walkthrough: "$2,049",
    save: "Ahorra $20",
    firstRange: `${fmtUSD(IN_FIRST_MIN * USD_MULTIPLIER)}-${fmtUSD(IN_FIRST_MAX * USD_MULTIPLIER)}`,
    additional: `${fmtUSD(IN_ADDITIONAL * USD_MULTIPLIER)}`,
    unitLabel: "por vista",
  },
}

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

export function PricingArchviz() {
  const [currency, setCurrency] = useState<Currency>("USD")
  useEffect(() => {
    setCurrency(guessLocalCurrency())
  }, [])

  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Precios claros para marketing inmobiliario
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Paquetes IZ Design</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300">
            Presupuestos previsibles para exteriores, interiores y recorridos orientados a preventa y conversion.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Solicitar propuesta
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
              style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
            >
              {PRICES[currency].save}
            </div>
            <CardHeader className="space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Render exterior</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">{PRICES[currency].exterior}</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">{PRICES[currency].unitLabel}</span>
              </div>
              <Button className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplos
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                  <span className="text-sm text-neutral-100">{`Primera vista ${PRICES[currency].firstRange}`}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                  <span className="text-sm text-neutral-100">{`Cada vista adicional ${PRICES[currency].additional}`}</span>
                </li>
                {[
                  "1 angulo de camara exterior",
                  "Version diurna o atardecer",
                  "Materiales e iluminacion fotorrealistas",
                  "1 ronda de ajustes",
                  "Entrega en 7-10 dias",
                ].map((f, i) => (
                  <li key={i + 100} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Render interior</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">{PRICES[currency].interior}</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">{PRICES[currency].unitLabel}</span>
              </div>
              <Button className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplos
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "1 angulo interior",
                  "Estilismo de mobiliario y props",
                  "Iluminacion y texturas realistas",
                  "2 rondas de ajustes",
                  "Entrega aproximada en 2 semanas",
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

          <Card className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
            <CardHeader className="relative space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Recorrido CGI</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">{PRICES[currency].walkthrough}</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">por 30-40 s</span>
              </div>
              <Button className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors" style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}>
                Ver ejemplos
              </Button>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2">
                {[
                  "Ruta de camara planificada por objetivos comerciales",
                  "Iluminacion avanzada y entorno completo",
                  "Listo para musica y efectos",
                  "Hasta 3 rondas de ajustes",
                  "Entrega aproximada en 4 semanas",
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
    </section>
  )
}

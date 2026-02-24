"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Por que las inmobiliarias nos eligen.",
  subtitle: "Velocidad, realismo y enfoque comercial en cada entrega",
}

export function FeaturesArchviz() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    const saved = localStorage.getItem("iz-design-content")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.featuresArchviz) setContent(parsed.featuresArchviz)
      } catch {}
    }
  }, [])

  return (
    <section id="services" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{content.title}</h2>
      <p className="mb-10 text-center text-white/70">{content.subtitle}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-white/20 liquid-glass">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">IMPACTO VISUAL</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Imagenes que elevan valor percibido y aceleran decisiones</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://picsum.photos/seed/izdesign-premium/900/1200"
                  alt="Render arquitectonico de acabados premium"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://picsum.photos/seed/izdesign-interior/900/1200"
                  alt="Interior fotorrealista para material comercial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/20 liquid-glass">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">RESULTADOS REALES</p>
            <h3 className="mt-1 text-xl font-semibold text-white">
              "Los visuales mejoraron la preventa y facilitaron aprobaciones con inversionistas."
            </h3>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"https://picsum.photos/seed/izdesign-client-1/900/520"}
                width={280}
                height={160}
                alt="Exterior comercial al atardecer para campana de preventa"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
                priority
              />
              <Image
                src={"https://picsum.photos/seed/izdesign-client-2/900/520"}
                width={280}
                height={160}
                alt="Render cinematico de proyecto residencial con alto realismo"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Por que elegimos marketing visual de alto impacto.",
  subtitle: "Estrategia, creatividad y ejecucion enfocadas en conversion.",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("iz-design-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{content.title}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hidden border border-white/20 liquid-glass md:block">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">ESTRATEGIA CREATIVA</p>
            <CardTitle className="mt-1 text-xl text-white">Mensajes claros, visuales memorables y foco comercial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Equipo definiendo estrategia de marketing con notas y laptop"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard con metricas y crecimiento comercial"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/20 liquid-glass">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">RESULTADOS DE CLIENTES</p>
            <CardTitle className="mt-1 text-xl text-white">
              No solo se ve bien: mejora recuerdo de marca, interaccion y conversion.
            </CardTitle>
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
                src={"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80"}
                width={280}
                height={160}
                alt="Proceso creativo orientado a campanas"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80"}
                width={280}
                height={160}
                alt="Visual final para marketing de marca"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}



"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import LazyVideo from "@/components/lazy-video"
import Image from "next/image"

export function FooterArchviz() {
  return (
    <section className="text-white">
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              Agenda una consultoria
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl p-6 liquid-glass sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">APROBACIONES MAS RAPIDAS</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Presenta espacios con impacto y consigue decision mas rapido
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Muestra alternativas, recibe feedback puntual y acelera cierres comerciales con renders y recorridos listos
                para marketing.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] p-2 shadow-2xl liquid-glass">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay
                    loop
                    muted
                    playsInline
                    aria-label="Vista previa de recorrido IZ Design"
                  />
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">IZ Design</div>
                      <p className="text-xs text-white/80">Convierte planos en ventas</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Listo para campana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/iz-design-white.svg" alt="IZ Design logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">IZ Design</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                Visualizacion arquitectonica para preventa, inversion y comunicacion comercial de alto impacto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navegacion</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Servicios", "Precios", "Preguntas", "Nosotros"].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Legal</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>
                    <Link href="/revisions" className="hover:text-lime-300">
                      Politica de revisiones
                    </Link>
                  </li>
                  <li>
                    <Link href="/t&c" className="hover:text-lime-300">
                      Terminos y condiciones
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>Copyright 2026 - IZ Ivan Zavala Design</p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-lime-300">
                Servicios
              </a>
              <a href="#pricing" className="hover:text-lime-300">
                Precios
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

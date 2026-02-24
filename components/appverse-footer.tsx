"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Marketing visual de alto impacto para marcas que quieren crecer con contenido que vende.",
  copyright: "Copyright 2026 - IZ Ivan Zavala Design",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("iz-design-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              Contactanos
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">FLUJO DE APROBACION SIMPLE</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Revisa, comenta y aprueba piezas de marketing desde cualquier lugar
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Centraliza feedback, acelera cambios y lanza campanas con una experiencia mas clara para tu equipo.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] p-2 shadow-2xl liquid-glass">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Vista previa de aprobaciones para campanas"
                  />
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Aprobaciones en minutos</div>
                      <p className="text-xs text-white/80">De la idea a la publicacion sin friccion</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Flujo rapido
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
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navegacion</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Inicio", "Beneficios", "Resultados", "Precios", "Blog", "Contacto"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Redes</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-lime-300"
                      aria-label="Seguir a IZ Design en X"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-lime-300"
                      aria-label="Seguir a IZ Design en YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-lime-300"
                      aria-label="Seguir a IZ Design en Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-lime-300"
                      aria-label="Seguir a IZ Design en Threads"
                    >
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-lime-300">
                Politica de revisiones
              </Link>
              <Link href="/t&c" className="hover:text-lime-300">
                Terminos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}



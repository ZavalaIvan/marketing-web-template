"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LogoMarqueeArchviz() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const logos = [
    { name: "Urbanline", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=UL" },
    { name: "IZ Design", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=IZ" },
    { name: "SkyBlock", image: "https://dummyimage.com/256x256/0b1220/c6ff3a.png&text=SB" },
    { name: "MetaHabitat", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=MH" },
  ]

  const Row = ({ dir, id }: { dir: "left" | "right"; id: string }) => (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex ${dir === "left" ? "animate-scroll-left" : "animate-scroll-right"} whitespace-nowrap`}
        style={{ animationPlayState: pausedRow === id ? "paused" : "running", width: "max-content" }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={`${id}-${i}`}
            className="mx-3 flex-shrink-0"
            onMouseEnter={() => setPausedRow(id)}
            onMouseLeave={() => setPausedRow(null)}
          >
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl">
              <div className="relative h-full w-full">
                <Image src={logo.image || "/placeholder.svg"} alt={logo.name} fill className="object-contain p-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="overflow-hidden py-16 text-white sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between sm:flex-row sm:items-center">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-left sm:text-5xl">
            Equipos de desarrollo que
            <br />
            <span className="text-lime-300">venden mejor con IZ Design</span>
          </h2>
          <Button variant="outline" className="mt-4 border-white/20 bg-transparent text-white liquid-glass sm:mt-0">
            Ver resultados
          </Button>
        </div>
        <div className="relative">
          <Row dir="right" id="first" />
          <div className="mt-6" />
          <Row dir="left" id="second" />
        </div>
      </div>
    </section>
  )
}

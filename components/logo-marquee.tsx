"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const logos = [
    { name: "BrandLift", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=BL" },
    { name: "GrowthOps", image: "https://dummyimage.com/256x256/0b1220/c6ff3a.png&text=GO" },
    { name: "MediaPulse", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=MP" },
    { name: "AdForge", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=AF" },
    { name: "FunnelLab", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=FL" },
    { name: "ReachGrid", image: "https://dummyimage.com/256x256/0b1220/c6ff3a.png&text=RG" },
    { name: "InsightAds", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=IA" },
    { name: "ConversionX", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=CX" },
  ]

  const secondRowLogos = [
    { name: "ClickNorth", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=CN" },
    { name: "SignalStudio", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=SS" },
    { name: "ViralMint", image: "https://dummyimage.com/256x256/0b1220/c6ff3a.png&text=VM" },
    { name: "LeadBloom", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=LB" },
    { name: "StoryReach", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=SR" },
    { name: "AdMetric", image: "https://dummyimage.com/256x256/0b1220/c6ff3a.png&text=AM" },
    { name: "ScaleWave", image: "https://dummyimage.com/256x256/111827/c6ff3a.png&text=SW" },
    { name: "TargetLoop", image: "https://dummyimage.com/256x256/0f172a/c6ff3a.png&text=TL" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="object-contain p-4"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Marcas con <span className="text-lime-300">alto rendimiento</span>
            <br />
            que confian en nosotros
          </h2>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent"
          >
            Ver casos
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



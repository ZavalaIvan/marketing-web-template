import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a>Habla con nosotros</a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/iz-design-white.svg" alt="IZ Design logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">IZ Design</p>
          </div>
          <h1 className="mt-3 text-center font-extrabold tracking-tight leading-[0.95]">
            <span className="block text-base font-semibold uppercase tracking-[0.22em] text-white sm:text-lg md:text-xl">
              Marketing de
            </span>
            <span className="mt-1 block text-5xl uppercase tracking-tight text-lime-300 drop-shadow-[0_0_24px_rgba(132,204,22,0.45)] sm:text-6xl md:text-8xl">
              alto impacto
            </span>
            <span className="mt-2 block text-sm font-medium uppercase tracking-[0.3em] text-white sm:text-base md:text-lg">
              para marcas
            </span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "Rendimiento",
  sub = "Campanas visuales listas para vender.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "IZ Design" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "Conversiones",
    sub: "Transforma trafico en clientes reales.",
    tone: "resultados",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "Velocidad",
    sub: "Lanzamos rapido, sin sacrificar calidad.",
    tone: "velocidad",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cinematic-o21Pr562TclgLhHHER6gvzHRNBUnj2.mp4",
  },
  {
    title: "Contenido Social",
    sub: "Piezas optimizadas para IG, TikTok y Meta.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    title: "Diferenciacion",
    sub: "Haz que tu marca se vea imposible de ignorar.",
    tone: "impacto",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Every%20detail%20counts%2C%20every%20frame%20matters%21Every%20stage%20of%20the%20process%20is%20done%20with%20care.%20From%20plac-0aQhUmeIEWI32BfXyNdANQy72OkyTw.mp4",
  },
  {
    title: "Posicionamiento",
    sub: "Comunica valor de marca desde el primer segundo.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interior-K4oSxppSecydQwbsEP3MkhQM7FU54u.mp4",
  },
]



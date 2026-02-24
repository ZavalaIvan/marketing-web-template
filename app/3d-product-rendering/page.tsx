import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfter } from "./_components/before-after"
import { Camera, Grid2X2, Scissors, Wand2 } from "lucide-react"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Render de Producto 3D | Marketing de impacto",
}

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-10 md:pt-16">
        <div className="flex items-center justify-center">
          <Badge className="rounded-full bg-secondary text-secondary-foreground">Marketing visual para marcas</Badge>
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance text-center text-4xl font-semibold leading-tight md:text-6xl">
          <span className="italic font-normal">Render 3D</span> <span className="font-extrabold">de alto impacto</span>{" "}
          <span className="italic font-normal">para impulsar</span> tus conversiones
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Creamos contenido 3D pensado para anuncios, lanzamientos y redes sociales. Visuales premium que mejoran el
          recuerdo de marca y aceleran la decision de compra.
        </p>

        <div className="mt-6 flex justify-center">
          <Button size="lg" className="rounded-lg">
            Solicitar propuesta
          </Button>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="rounded-full bg-secondary px-4 py-2 text-sm shadow-sm">
            <span className="mr-2">•</span> Piezas listas para pauta, e-commerce y social media{" "}
            <span className="ml-2">•</span>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`https://picsum.photos/seed/izdesign-grid-${i + 1}/640/320`}
                  alt={`Muestra ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-xs text-muted-foreground">Contenido optimizado para campanas de marketing.</p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">Lo que incluye nuestro enfoque</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <Feature
            icon={<Camera className="h-5 w-5" />}
            title="Direccion visual clara"
            desc="Definimos angulos, narrativa y estilo para que cada pieza tenga impacto comercial."
          />
          <Feature
            icon={<Grid2X2 className="h-5 w-5" />}
            title="Composicion orientada a conversion"
            desc="Organizamos cada escena para destacar beneficios y guiar la mirada hacia la accion."
          />
          <Feature
            icon={<Scissors className="h-5 w-5" />}
            title="Versiones por canal"
            desc="Adaptamos formatos para anuncios, e-commerce, landing pages y redes sociales."
          />
          <Feature
            icon={<Wand2 className="h-5 w-5" />}
            title="Acabado premium"
            desc="Materiales, iluminacion y postproduccion para elevar valor percibido de tu marca."
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1100&q=80"
            alt="Producto en primer plano para campana"
            width={1100}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-semibold md:text-4xl">Por que funciona para marketing</h3>
          <ul className="mt-6 space-y-5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Alineado a objetivos de negocio</strong>
              <br />
              Cada entrega se diseña para captar atencion, mejorar CTR y aumentar conversion.
            </li>
            <li>
              <strong className="text-foreground">Mensaje visual consistente</strong>
              <br />
              Tu marca se ve uniforme y profesional en todos los puntos de contacto.
            </li>
            <li>
              <strong className="text-foreground">Escalable por campana</strong>
              <br />
              Creamos variaciones rapidamente sin perder calidad ni identidad visual.
            </li>
            <li>
              <strong className="text-foreground">Rapidez de lanzamiento</strong>
              <br />
              Flujo optimizado para publicar a tiempo en fechas clave de venta.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <Badge className="rounded-full bg-secondary text-secondary-foreground">Recurso incluido</Badge>
          <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">Comparativa visual antes y despues</h3>
          <p className="mt-2 text-sm font-medium text-primary">Demuestra valor en segundos</p>
          <p className="mt-4 text-muted-foreground">
            Incluimos una comparativa interactiva para comunicar claramente la mejora visual y reforzar el argumento
            comercial frente a clientes o stakeholders.
          </p>
        </div>
        <BeforeAfter
          beforeSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
          afterSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          className="mx-auto w-full max-w-xl"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <h3 className="text-center text-3xl font-semibold md:text-4xl">Galeria de resultados</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
          Ejemplos de piezas enfocadas en rendimiento para anuncios y comunicacion de marca.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl">
              <Image
                src={`https://picsum.photos/seed/izdesign-gallery-${i}/1200/900`}
                alt={`Galeria ${i}`}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-2xl bg-secondary/70 px-6 py-10 text-center">
          <h3 className="text-2xl font-semibold md:text-3xl">Listo para lanzar contenido con impacto?</h3>
          <div className="mt-6 flex justify-center">
            <Button size="lg" className="rounded-lg">
              Hablemos de tu campana
            </Button>
          </div>
          <div id="prizes" className="mt-6 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm">
            • Visuales listos para conversion •
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[{ title: "Lanzamiento de producto" }, { title: "Campana social" }, { title: "E-commerce premium" }].map(
            (item, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-xl">
                    <Image
                      src={`https://picsum.photos/seed/${encodeURIComponent(`izdesign-${item.title}`)}/320/320`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-center font-medium">{item.title}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-2xl bg-secondary p-6 md:p-10">
          <h3 className="mb-6 text-center text-3xl font-semibold md:text-4xl">Preguntas frecuentes</h3>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>Cuanto tarda una pieza de render 3D?</AccordionTrigger>
                <AccordionContent>
                  Dependiendo del alcance, una pieza base suele estar lista entre 7 y 14 dias habiles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Incluyen adaptaciones para redes y anuncios?</AccordionTrigger>
                <AccordionContent>
                  Si. Entregamos versiones optimizadas por formato para que publiques en todos tus canales.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Para que tipo de marcas es este servicio?</AccordionTrigger>
                <AccordionContent>
                  Para marcas que quieren elevar percepcion, diferenciacion y conversion con contenido visual de alto
                  impacto.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground/80">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}

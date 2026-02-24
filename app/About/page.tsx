import React from "react"
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IZ Design International",
    url: "https://izdesign.com",
    logo: "https://izdesign.com/logo.png",
    description:
      "IZ Design International crea marketing de impacto para marcas mediante contenido visual 3D enfocado en conversion y crecimiento.",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-555-5555",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Miami" },
      { "@type": "Place", name: "Los Angeles" },
      { "@type": "Place", name: "New York" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United Kingdom" },
    ],
  }

  const features = [
    {
      title: "Marketing de impacto",
      desc: "Creamos piezas visuales que captan atencion, posicionan tu marca y aceleran decisiones de compra.",
    },
    {
      title: "Estrategia creativa",
      desc: "Cada campaña parte de un mensaje claro, una narrativa fuerte y objetivos comerciales medibles.",
    },
    {
      title: "Contenido 3D para conversion",
      desc: "Visuales premium para anuncios, lanzamientos y redes sociales, optimizados para rendimiento.",
    },
    {
      title: "Cobertura internacional",
      desc: "Trabajamos con marcas en Miami, Los Angeles, New York, Canada y Reino Unido.",
    },
    {
      title: "Flujo colaborativo agil",
      desc: "Feedback rapido, revisiones ordenadas y entregas consistentes para mantener velocidad de lanzamiento.",
    },
    {
      title: "Enfoque en negocio",
      desc: "No solo diseno: priorizamos alcance, recuerdo de marca y conversion en cada entrega.",
    },
  ]

  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <section className="relative bg-black px-6 py-20 text-center text-white md:px-12 lg:px-20">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Sobre IZ Design International</h1>
        <p className="mx-auto max-w-3xl text-lg opacity-80 md:text-xl">
          Somos un estudio especializado en marketing de impacto para marcas que quieren crecer con contenido visual que
          conecta, diferencia y vende.
        </p>
      </section>

      <section className="bg-neutral-900 px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transform rounded-2xl bg-neutral-800 p-6 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Listo para elevar el impacto de tu marca?</h2>
        <p className="mb-8 text-lg opacity-80">
          En IZ Design International convertimos ideas en campanas visuales que generan resultados reales.
        </p>
        <button
          type="button"
          className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-neutral-200"
        >
          Hablemos
        </button>
      </section>
    </>
  )
}

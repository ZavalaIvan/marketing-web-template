import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://izdesign.com/#pricing",
    name: "Planes de Marketing Visual",
    description: "Planes de marketing visual y contenido 3D para marcas: Startup, Pro y Premium",
    url: "https://izdesign.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Servicios de Marketing de Alto Impacto",
      description: "Servicios de contenido visual con tres niveles de inversion",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Hasta 15 segundos de contenido visual con 2 revisiones",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Hasta 25 segundos de contenido visual con 4 revisiones",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40 a 60 segundos de contenido visual con revisiones ilimitadas",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://izdesign.com/",
    name: "IZ Design | Marketing de alto impacto para marcas",
    description:
      "Creamos marketing de alto impacto para marcas con contenido visual rapido, consistente y orientado a resultados.",
    url: "https://izdesign.com/",
    mainEntity: {
      "@type": "Organization",
      name: "IZ Design",
      url: "https://izdesign.com",
      sameAs: [],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://izdesign.com/#pricing",
        name: "Seccion de precios",
        url: "https://izdesign.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}



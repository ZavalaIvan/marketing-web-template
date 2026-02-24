import { SiteHeaderArchviz } from "./_components/site-header-archviz"
import { HeroArchviz } from "./_components/hero-archviz"
import { FeaturesArchviz } from "./_components/features-archviz"
import { LogoMarqueeArchviz } from "./_components/logo-marquee-archviz"
import { PricingArchviz } from "./_components/pricing-archviz"
import { FooterArchviz } from "./_components/footer-archviz"
import Script from "next/script"

export const dynamic = "force-static"

export const metadata = {
  title: "Visualizacion Arquitectonica | Marketing de impacto para proyectos",
  description:
    "Impulsa ventas y preventa con visualizacion arquitectonica de alto impacto: renders fotorrealistas y recorridos CGI pensados para marketing inmobiliario.",
  alternates: {
    canonical: "https://izdesign.com/3D-architecture-visualization-studio",
  },
  openGraph: {
    title: "Visualizacion Arquitectonica | Marketing de impacto para proyectos",
    description:
      "Renders y recorridos CGI para comunicar valor, acelerar aprobaciones y aumentar conversion en proyectos inmobiliarios.",
    url: "https://izdesign.com/3D-architecture-visualization-studio",
    type: "website",
  },
}

export default function Page() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://izdesign.com/3D-architecture-visualization-studio",
    name: "Visualizacion Arquitectonica | Marketing de impacto para proyectos",
    description:
      "Renders fotorrealistas y recorridos CGI para marketing de proyectos inmobiliarios, preventa y aprobaciones.",
    url: "https://izdesign.com/3D-architecture-visualization-studio",
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeaderArchviz />
        <HeroArchviz />
        <FeaturesArchviz />
        <LogoMarqueeArchviz />
        <PricingArchviz />
        <FooterArchviz />
      </main>

      <Script
        id="iz-design-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

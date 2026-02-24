"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Building2, Tag, HelpCircle, Info, ChevronDown, Package } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeaderArchviz() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    {
      href: "/3D-architecture-visualization-studio",
      label: "Visualizacion arquitectonica",
      icon: Building2,
      description: "Renders y recorridos CGI para comercializacion",
    },
    {
      href: "/3d-product-rendering",
      label: "Render de producto 3D",
      icon: Package,
      description: "Contenido visual de producto para campanas",
    },
    {
      href: "/",
      label: "Marketing visual",
      icon: Package,
      description: "Piezas de alto impacto para marcas",
    },
  ]

  const links = [
    { href: "#pricing", label: "Precios", icon: Tag },
    { href: "#faq", label: "Preguntas", icon: HelpCircle },
    { href: "#about", label: "Nosotros", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between rounded-full px-6 liquid-glass-header">
          <Link href="/3D-architecture-visualization-studio" className="flex items-center gap-1.5">
            <Image src="/icons/iz-design-white.svg" alt="IZ Design logo" width={20} height={20} className="h-5 w-5" />
            <span className="font-semibold tracking-wide text-white">IZ Design</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-lime-300 data-[state=open]:text-lime-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!mt-2 !rounded-lg !border-gray-800 !bg-gray-950/95 !text-white backdrop-blur-xl">
                    <ul className="grid w-[280px] gap-2 p-3">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-lime-300/60
                                         hover:shadow-[0_0_0_1px_rgba(163,230,53,0.25),0_0_20px_rgba(163,230,53,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70"
                            >
                              <service.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime-400 group-hover:text-lime-300" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-lime-300">{service.label}</div>
                                <p className="mt-0.5 text-xs text-gray-400">{service.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-lime-300">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              asChild
              className="rounded-lg bg-lime-400 px-6 py-2.5 font-medium text-black transition-all hover:scale-[1.02] hover:bg-lime-300 hover:shadow-md"
            >
              <Link href="#" onClick={(e) => e.preventDefault()}>
                Solicitar propuesta
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 flex-col border-gray-800 p-0 liquid-glass">
                <div className="flex items-center gap-1.5 border-b border-gray-800 px-4 py-4">
                  <Image src="/icons/iz-design-white.svg" alt="IZ Design logo" width={24} height={24} className="h-6 w-6" />
                  <span className="text-lg font-semibold tracking-wide text-white">IZ Design</span>
                </div>
                <nav className="mt-2 flex flex-col gap-1 text-gray-200">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 transition-colors hover:bg-gray-900 hover:text-lime-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center text-gray-400">
                          <Building2 className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Servicios</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 flex flex-col border-l-2 border-lime-400/30 bg-gray-900/50">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 py-2.5 pl-8 pr-4 transition-colors hover:bg-gray-900 hover:text-lime-300"
                          >
                            <service.icon className="h-4 w-4 text-lime-400/70" />
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-gray-900 hover:text-lime-300"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full rounded-lg bg-lime-400 px-6 py-2.5 font-medium text-black transition-all hover:scale-[1.02] hover:bg-lime-300 hover:shadow-md"
                  >
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      Empezar proyecto
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

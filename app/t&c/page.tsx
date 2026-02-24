import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terminos y Condiciones — IZ Design",
  description: "Terminos y condiciones para los servicios de animacion 3D de IZ Design.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Terminos y Condiciones</h1>
                  <p className="text-neutral-400 text-lg">
                    Bienvenido a IZ Design. Al acceder a nuestro sitio web, aceptas estos terminos y condiciones. Te
                    pedimos leerlos cuidadosamente.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Introduccion</h2>
                  <p className="text-neutral-300">
                    Estos Terminos y Condiciones regulan el uso del sitio web y servicios de IZ Design. Al usar nuestro
                    sitio, aceptas estos terminos en su totalidad.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Derechos de Propiedad Intelectual</h2>
                  <p className="text-neutral-300">
                    Salvo que se indique lo contrario, IZ Design es propietario de todos los archivos del proyecto. Esto
                    incluye archivos electronicos, dibujos, archivos fuente y cualquier material entregado al cliente, que
                    siguen siendo propiedad exclusiva de IZ Design International, incluso si se comparten.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>No debes republicar material de este sitio.</li>
                    <li>
                      No debes reproducir, duplicar ni copiar material con fines comerciales sin autorizacion.
                    </li>
                    <li>No debes editar ni modificar ningun contenido sin consentimiento.</li>
                    <li>Actualmente, todo el contenido del sitio es temporal (sitio en produccion).</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Uso Aceptable</h2>
                  <p className="text-neutral-300">
                    No debes usar este sitio web de ninguna manera que cause, o pueda causar, danos al sitio o afectar su
                    disponibilidad o accesibilidad.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    4. Limitacion de Responsabilidad y Subjetividad del Contenido
                  </h2>
                  <p className="text-neutral-300">
                    IZ Design no sera responsable por ninguna perdida o dano directo, indirecto o consecuente derivado de
                    estos Terminos o relacionado con nuestro sitio web o servicios. La calidad percibida, el estilo o la
                    idoneidad del contenido creado por nosotros es subjetiva y no puede utilizarse como base para ampliar
                    el alcance del trabajo. Las revisiones se rigen estrictamente por nuestra{" "}
                    <Link href="/revisions" className="text-lime-300 underline">
                      politica de revisiones
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Cambios a Estos Terminos</h2>
                  <p className="text-neutral-300">
                    Podemos actualizar estos Terminos ocasionalmente. Los Terminos revisados aplicaran desde la fecha de
                    su publicacion en este sitio.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Contacto</h2>
                  <p className="text-neutral-300">Si tienes alguna pregunta sobre estos Terminos, contactanos en:</p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a href="mailto:hello@izdesign.com" className="text-lime-300 underline">
                      hello@izdesign.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}


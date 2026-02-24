import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl p-6 shadow-xl liquid-glass sm:p-10">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Preguntas frecuentes</h1>
                  <p className="text-lg text-neutral-400">
                    Respuestas a las dudas mas comunes sobre nuestro enfoque de marketing de impacto para marcas.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Que tipo de marcas pueden trabajar con IZ Design?
                  </h2>
                  <p className="text-neutral-300">
                    Trabajamos con marcas de consumo, tecnologia, belleza, moda, hogar y servicios. Si necesitas
                    contenido que eleve percepcion y resultados comerciales, podemos ayudarte.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    2. En cuanto tiempo entregan una campana visual?
                  </h2>
                  <p className="text-neutral-300">
                    Depende del alcance. Una pieza de marketing de 15 a 20 segundos suele tomar entre 7 y 14 dias
                    habiles despues de aprobar concepto y guion visual.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Solo ejecutan o tambien proponen estrategia?
                  </h2>
                  <p className="text-neutral-300">
                    Hacemos ambas cosas. Podemos ejecutar una idea ya definida o construir estrategia creativa, mensaje,
                    storyboard y direccion visual orientada a conversion.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Como calculan el precio?</h2>
                  <p className="text-neutral-300">
                    El precio considera duracion, complejidad, cantidad de piezas, canales de uso y alcance creativo.
                    Puedes revisar planes base en nuestra{" "}
                    <a href="/#pricing" className="text-lime-300 underline">
                      seccion de precios
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Incluyen revisiones?</h2>
                  <p className="text-neutral-300">
                    Si. Cada plan incluye rondas de ajustes para afinar mensaje, ritmo y acabado visual sin perder foco
                    comercial.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Pueden respetar el estilo visual de nuestra marca?
                  </h2>
                  <p className="text-neutral-300">
                    Totalmente. Adaptamos paleta, tono, ritmo, tipografia y direccion de arte para que el resultado sea
                    coherente con tu identidad y objetivos de campana.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. En que formatos entregan?</h2>
                  <p className="text-neutral-300">
                    Entregamos normalmente en MP4 para video y PNG/JPG para piezas estaticas. Si necesitas otros
                    formatos para pauta o postproduccion, los configuramos.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Pueden manejar volumen alto de piezas?
                  </h2>
                  <p className="text-neutral-300">
                    Si. Tenemos flujo para produccion por lotes y campanas multiformato, manteniendo consistencia visual
                    y tiempos de entrega exigentes.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Como miden si una pieza realmente funciona?
                  </h2>
                  <p className="text-neutral-300">
                    Definimos objetivos desde el inicio: retencion, CTR, conversion o recuerdo de marca. Disenamos cada
                    pieza para mover esas metricas, no solo para verse bien.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. Como empezamos?</h2>
                  <p className="text-neutral-300">
                    Comparte tu objetivo, producto, referencias y fecha de lanzamiento. Te proponemos un plan de accion
                    con tiempos, alcance y siguientes pasos.
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

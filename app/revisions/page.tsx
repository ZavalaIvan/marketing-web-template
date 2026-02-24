import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";

export default function RevisionPolicyPage() {
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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Politica de Revisiones</h1>
                  <p className="text-neutral-400 text-lg">
                    Nuestra politica de revisiones garantiza transparencia y equidad para todos los clientes, manteniendo la calidad y eficiencia de nuestro trabajo.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Revisiones Incluidas</h2>
                  <p className="text-neutral-300">
                    Cada plan incluye una cantidad definida de revisiones segun su nivel:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Plan Startup: 2 revisiones incluidas</li>
                    <li>Plan Pro: 4 revisiones incluidas</li>
                    <li>Plan Premium: revisiones ilimitadas dentro del alcance acordado del proyecto</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Revisiones Adicionales</h2>
                  <p className="text-neutral-300">
                    Cualquier revision adicional a las incluidas se cobrara con las siguientes tarifas por hora:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Plan Startup: $35/hora</li>
                    <li>Plan Pro: $55/hora</li>
                    <li>Plan Premium: $60/hora</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Alcance de las Revisiones</h2>
                  <p className="text-neutral-300">
                    Las revisiones estan destinadas a ajustar y refinar los entregables acordados, no a ampliar el alcance original del trabajo. Cambios significativos o nuevas solicitudes requeriran un nuevo acuerdo de proyecto.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Tiempo de Entrega de Revisiones</h2>
                  <p className="text-neutral-300">
                    El tiempo de entrega de revisiones dependera de la complejidad de los cambios solicitados y de la carga actual de trabajo.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Contacto</h2>
                  <p className="text-neutral-300">
                    Si tienes preguntas sobre nuestra politica de revisiones, contactanos en:
                  </p>
                  <p className="text-neutral-300">
                    Email: <a href="mailto:hello@izdesign.com" className="text-lime-300 underline">hello@izdesign.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  );
}


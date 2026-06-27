import type { Metadata } from "next"
import Link from "next/link"
import { FiCheck, FiArrowRight } from "react-icons/fi"
import { plans } from "@/lib/data"

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes accesibles para PYMES peruanas. Desde S/ 499. Web, automatización y CRM sin costos ocultos.",
}

export default function PlanesPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Precios
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Planes transparentes, sin sorpresas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El precio que ves es el que pagas. Sin costos ocultos, sin cargos por
            cambios menores.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  plan.popular
                    ? "border-brand-500 bg-brand-50/30 shadow-md shadow-brand-500/10"
                    : "border-gray-100 hover:border-brand-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 inset-x-0 flex justify-center">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-brand-600">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-400">{plan.type}</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <FiCheck className="size-4 text-brand-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="block text-center bg-brand-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-brand-700 transition-all active:scale-[0.98]"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl max-w-3xl mx-auto">
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              ¿Necesitas una solución combinada?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Armamos un paquete personalizado con web + automatización + CRM a un
              precio especial.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
            >
              Solicitar cotización <FiArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

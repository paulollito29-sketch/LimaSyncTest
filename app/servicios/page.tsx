import type { Metadata } from "next"
import Link from "next/link"
import { FiCheck, FiArrowRight } from "react-icons/fi"
import { services } from "@/lib/data"
import CtaSection from "@/app/components/cta-section"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "LimaSync ofrece páginas web, automatización de procesos, CRM y transformación digital para PYMES peruanas.",
}

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Servicios
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Soluciones para cada etapa de tu negocio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde que das tu primer paso digital hasta que automatizas cada proceso
            comercial — crecemos contigo.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 ${
                    service.popular
                      ? "bg-brand-600 text-white"
                      : "bg-brand-100 text-brand-700"
                  }`}
                >
                  {service.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {service.longDesc}
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  <strong className="text-gray-700">Ideal para:</strong>{" "}
                  {service.ideal}
                </p>
                <Link
                  href="/planes"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
                >
                  Ver planes disponibles <FiArrowRight className="size-4" />
                </Link>
              </div>

              <div className="flex-1 w-full bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-5">
                  Qué incluye
                </h3>
                <ul className="space-y-3.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <FiCheck className="size-5 text-brand-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="¿No sabes por dónde empezar?"
        description="Agenda una llamada gratuita de 15 minutos y te recomendamos el plan ideal para tu negocio."
        buttonText="Quiero una asesoría gratuita"
      />
    </>
  )
}

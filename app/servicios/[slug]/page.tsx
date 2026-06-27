import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FiCheck, FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { services } from "@/lib/data"
import CtaSection from "@/app/components/cta-section"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: "Servicio no encontrado" }
  return {
    title: `${service.title} — ${service.subtitle}`,
    description: service.desc,
  }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServicePage({ params }: Props) {
  const slug = (await params).slug
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const index = services.findIndex((s) => s.slug === slug)
  const prev = index > 0 ? services[index - 1] : null
  const next = index < services.length - 1 ? services[index + 1] : null

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-36 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors mb-8"
          >
            <FiArrowLeft className="size-4" />
            Volver a servicios
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 ${
                  service.popular
                    ? "bg-brand-600 text-white"
                    : "bg-brand-100 text-brand-700"
                }`}
              >
                {service.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
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

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
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
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/servicios/${prev.slug}`}
                className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
              >
                <FiArrowLeft className="size-4" />
                <span className="text-sm font-medium">{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/servicios/${next.slug}`}
                className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
              >
                <span className="text-sm font-medium">{next.title}</span>
                <FiArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CtaSection
        title={`¿Listo para tu ${service.title.toLowerCase()}?`}
        description="Agenda una demo sin compromiso y descubre cómo podemos ayudarte."
        buttonText="Agenda tu demo"
      />
    </>
  )
}

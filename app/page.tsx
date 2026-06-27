import Hero from "@/app/components/hero"
import ProblemSolution from "@/app/components/problem-solution"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Proyectos entregados", value: "+120" },
              { label: "PYMES confían en nosotros", value: "+50" },
              { label: "Satisfacción promedio", value: "4.9/5" },
              { label: "Días de implementación", value: "5 días" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProblemSolution />

      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Servicios destacados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Lo que ofrecemos
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Desde tu primera página web hasta la automatización completa de tu
            negocio.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Web Básico",
                desc: "Landing page profesional lista en 5 días",
                href: "/servicios/web-basico",
              },
              {
                title: "Web Profesional",
                desc: "Web corporativa completa con panel administrador",
                href: "/servicios/web-profesional",
                popular: true,
              },
              {
                title: "Automatización",
                desc: "Automatiza procesos repetitivos de tu negocio",
                href: "/servicios/automatizacion",
              },
              {
                title: "CRM",
                desc: "Gestiona clientes, ventas y seguimiento",
                href: "/servicios/crm",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`relative rounded-xl p-6 border-2 text-left transition-all hover:-translate-y-1 hover:shadow-lg ${
                  s.popular
                    ? "border-brand-500 bg-brand-50/40"
                    : "border-gray-100 hover:border-brand-200"
                }`}
              >
                {s.popular && (
                  <span className="absolute -top-2.5 left-4 bg-brand-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {s.title}
                </div>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </Link>
            ))}
          </div>

          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold mt-10 hover:text-brand-700 transition-colors"
          >
            Ver todos los servicios <FiArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Caso de éxito
          </span>
          <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            &ldquo;Antes perdía pedidos por WhatsApp todo el tiempo. Con LimaSync
            automatizamos las confirmaciones y las ventas subieron{" "}
            <strong className="text-gray-900">40% en dos meses</strong>.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-semibold">
              MG
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">María García</div>
              <div className="text-sm text-gray-500">
                Dueña de Restaurant La Mar, Miraflores
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/testimonios"
              className="text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
            >
              Ver más testimonios →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#45adad14_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            ¿Listo para digitalizar tu negocio?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Déjanos tus datos y te contactamos en menos de 24 horas con una demo
            personalizada para tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
          >
            Agenda tu demo gratuita <FiArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

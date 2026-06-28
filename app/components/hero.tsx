"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiArrowRight, FiCheck } from "react-icons/fi"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#45adad_0%,_transparent_60%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#59c3c3_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff03_1px,_transparent_1px),_linear-gradient(to_bottom,_#ffffff03_1px,_transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
            >
              <span className="size-2 bg-brand-400 rounded-full animate-pulse" />
              <span className="text-brand-200 text-sm font-medium">
                +50 PYMES peruanas ya confían en nosotros
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Transforma tu negocio con tecnología{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                que sí funciona
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Ayudamos a PYMES peruanas a digitalizar sus procesos en tiempo récord.
              Página web, automatización o CRM — todo lo que necesitas para crecer,
              sin complicaciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
              >
                Agenda tu demo gratuita
                <FiArrowRight className="size-4" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center border-2 border-white/15 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-white/10 transition-all active:scale-[0.97]"
              >
                Ver servicios
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-10 text-sm"
            >
              {["Sin compromiso", "Demo personalizada", "Soporte incluido"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-gray-400"
                  >
                    <FiCheck className="size-4 text-brand-400" />
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/20 to-brand-400/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/Efficiency_and_productivity_for_small_202606232142.jpeg"
                alt="Empresario peruano transformando su negocio con tecnología"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

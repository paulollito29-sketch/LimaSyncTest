import { FiGlobe, FiCode, FiSettings, FiUsers } from "react-icons/fi"
import type { IconType } from "react-icons"

export type ServiceSlug = "web-basico" | "web-profesional" | "automatizacion" | "crm"

export interface ServiceInfo {
  slug: ServiceSlug
  icon: IconType
  title: string
  subtitle: string
  desc: string
  longDesc: string
  features: string[]
  ideal: string
  popular?: boolean
}

export interface PlanInfo {
  name: string
  price: string
  type: string
  desc: string
  features: string[]
  cta: string
  href: string
  popular: boolean
}

export const services: ServiceInfo[] = [
  {
    slug: "web-basico",
    icon: FiGlobe,
    title: "Web Básico",
    subtitle: "Tu primer paso digital",
    desc: "Landing page profesional lista en 5 días. Ideal para negocios que quieren presencia digital inmediata.",
    longDesc:
      "Una landing page profesional y moderna que representa tu negocio en internet. Incluye diseño responsive, formulario de contacto y optimización básica para que tus clientes te encuentren. Lista en solo 5 días.",
    features: [
      "Diseño responsive (se ve bien en celular y computadora)",
      "Formulario de contacto integrado",
      "Hosting y dominio .pe incluidos por 6 meses",
      "Optimización básica SEO",
      "Integración con WhatsApp",
      "1 ronda de revisiones",
    ],
    ideal: "Emprendedores, restaurantes, talleres, profesionales independientes.",
  },
  {
    slug: "web-profesional",
    icon: FiCode,
    title: "Web Profesional",
    subtitle: "Tu negocio en línea 24/7",
    desc: "Web corporativa completa con panel administrativo. Perfecta para empresas que quieren vender online.",
    longDesc:
      "Un sitio web corporativo completo con panel de administración incluido. Puedes editar contenido, publicar en el blog, y gestionar tu portafolio sin conocimientos técnicos. Ideal para empresas que quieren una presencia digital sólida y profesional.",
    features: [
      "Hasta 10 páginas",
      "Panel administrador (edita contenido sin programar)",
      "Blog integrado para atraer clientes",
      "Galería de imágenes y portafolio",
      "SEO optimizado para Google",
      "Integración con redes sociales",
      "Formularios inteligentes",
      "2 rondas de revisiones",
      "Capacitación del equipo",
    ],
    ideal: "Empresas en crecimiento, clínicas, colegios, tiendas online.",
    popular: true,
  },
  {
    slug: "automatizacion",
    icon: FiSettings,
    title: "Automatización Empresarial",
    subtitle: "Deja que la tecnología haga el trabajo pesado",
    desc: "Automatiza procesos repetitivos de tu negocio: facturación, inventarios, reportes y más.",
    longDesc:
      "Identificamos los procesos repetitivos de tu negocio y los automatizamos. Desde facturación electrónica hasta recordatorios de cobranza, reducimos tu carga operativa para que te enfoques en lo importante: hacer crecer tu negocio.",
    features: [
      "Diagnóstico gratuito de procesos",
      "Flujos de trabajo personalizados",
      "Integración con tus sistemas actuales",
      "Automatización de cobranzas y facturación",
      "Reportes automáticos",
      "Notificaciones y alertas inteligentes",
      "Soporte y mantenimiento 3 meses",
    ],
    ideal: "Empresas con procesos manuales que quieren escalar sin contratar más personal.",
  },
  {
    slug: "crm",
    icon: FiUsers,
    title: "CRM y Gestión Comercial",
    subtitle: "Vende más, organiza mejor",
    desc: "Gestiona clientes, ventas y seguimiento desde un solo lugar. Recupera leads y cierra más negocios.",
    longDesc:
      "Un sistema CRM diseñado para PYMES peruanas. Centraliza la información de tus clientes, da seguimiento a tus ventas con un pipeline visual, y automatiza la comunicación por WhatsApp para no perder ninguna oportunidad.",
    features: [
      "Pipeline de ventas visual",
      "Automatización de WhatsApp",
      "Historial completo de clientes",
      "Recordatorios inteligentes de seguimiento",
      "Reportes y dashboards en tiempo real",
      "Importación de contactos desde Excel",
      "Soporte prioritario 24/7",
    ],
    ideal: "Equipos de ventas, asesores inmobiliarios, consultores, distribuidoras.",
  },
]

export const plans: PlanInfo[] = [
  {
    name: "Web Básico",
    price: "S/ 499",
    type: "pago único",
    desc: "Presencia digital inmediata",
    features: [
      "Landing page responsive",
      "Formulario de contacto",
      "Hosting 6 meses gratis",
      "Dominio .pe incluido",
    ],
    cta: "Lo quiero",
    href: "/servicios/web-basico",
    popular: false,
  },
  {
    name: "Web Profesional",
    price: "S/ 1,299",
    type: "pago único",
    desc: "Web corporativa completa",
    features: [
      "Hasta 10 páginas",
      "Panel administrador",
      "Blog + galería",
      "SEO optimizado",
      "Capacitación incluida",
    ],
    cta: "Lo quiero",
    href: "/servicios/web-profesional",
    popular: true,
  },
  {
    name: "Automatización",
    price: "S/ 2,499",
    type: "desde",
    desc: "Procesos optimizados",
    features: [
      "Diagnóstico gratuito",
      "Flujos personalizados",
      "Integración de sistemas",
      "Soporte 3 meses",
    ],
    cta: "Cotizar",
    href: "/servicios/automatizacion",
    popular: false,
  },
  {
    name: "CRM",
    price: "S/ 99",
    type: "/mes",
    desc: "Gestión comercial completa",
    features: [
      "Pipeline de ventas",
      "Automatización WhatsApp",
      "Reportes en tiempo real",
      "Soporte prioritario",
    ],
    cta: "Probar gratis",
    href: "/servicios/crm",
    popular: false,
  },
]

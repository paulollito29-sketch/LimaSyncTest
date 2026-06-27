---
name: limasync
description: LimaSync - CRM y automatizaciones low-cost para PYMEs. Stack: Java 21+, Spring Boot backend, Next.js frontend, PostgreSQL, Docker.
license: MIT
compatibility: opencode
metadata:
  project: LimaSync
  backend: java-spring-boot
  frontend: nextjs-tailwind
  database: postgresql
---

## Proyecto

LimaSync es un CRM con automatizaciones (WhatsApp, email, etc.) a bajo costo para PYMEs.

## Stack tecnológico

### Backend — Java + Spring Boot
- **Java 21+**
- **Spring Boot 3.x** con Maven
- **Spring Security** + JWT (autenticación y roles)
- **Spring Data JPA** + **Hibernate** + **Flyway** (migraciones)
- **Spring Web** (API REST con validación Jakarta)
- **Spring Mail** (automatización de correos)
- **Spring WebSocket** (notificaciones en tiempo real)
- **Spring Cloud OpenFeign** (integración con APIs externas)
- **Spring Cache** + **Redis** (caché)
- **Spring Actuator** + **Micrometer** (métricas y monitoreo)
- Base de datos: **PostgreSQL**

### Frontend — Next.js + Tailwind
- **Next.js 14+** con App Router
- **Tailwind CSS** para estilos
- **Shadcn/ui** como sistema de componentes
- **NextAuth.js** para autenticación
- **React Query** o **SWR** para fetching de datos
- Server Actions para operaciones CRUD
- Landing page promocional (responsive + SEO)

### Infraestructura
- **Docker** + **Dockerfile** optimizado multi-stage
- **GitHub Actions** para CI/CD
- **Sentry** para monitoreo de errores
- **Slf4J/Logback** o **Winston** para logs

### Integraciones
- **WhatsApp API** (mensajes automatizados)
- **Mercado Pago** o **Stripe** (pasarela de pago)
- **OpenFeign** para consumir APIs externas

### Plugins
- **Ponytail** — plugin de minimalismo para agentes AI (YAGNI-first). Instalado vía `opencode.json` plugin system.

### Gestión de tareas
- **Notion** vía MCP server (openocode)
- Bases de datos: Desarrollo y Marketing dentro del workspace

## Convenciones
- Backend: paquete base `com.limasync.*`
- Frontend: `/app` para App Router, `/components` para componentes reutilizables
- Commits en español, descriptivos
- Rama principal: `main`, desarrollo en `develop`

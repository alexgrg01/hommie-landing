import { motion } from "framer-motion"

const pillars = [
  {
    title: "Cobro garantizado",
    description: "Seguro de impago disponible para cada propiedad.",
  },
  {
    title: "Matching por afinidad",
    description: "IA que agrupa inquilinos por estilo de vida real.",
  },
  {
    title: "Onboarding 100% digital",
    description: "Sin visitas, sin papeleo, sin WhatsApp.",
  },
  {
    title: "Madrid · 2026",
    description: "Lanzamiento en la capital. Barcelona y Valencia después.",
  },
]

export function MetricsBanner() {
  return (
    <section id="pilares" className="py-20 px-6 border-b border-border">
      <h2 className="sr-only">Pilares de Encaja</h2>
      <motion.div
        className="mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-base font-bold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

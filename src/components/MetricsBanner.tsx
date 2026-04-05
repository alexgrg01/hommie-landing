import { motion } from "framer-motion"

const metrics = [
  { value: "Gratis", label: "buscar y aplicar como inquilino" },
  { value: "Seguro", label: "de impago para cada propiedad" },
  { value: "30s", label: "video-presentación, no visitas" },
  { value: "IA", label: "matching por afinidad real" },
]

export function MetricsBanner() {
  return (
    <section id="metricas" className="py-20 px-6 border-b border-border">
      <h2 className="sr-only">Hommie en números</h2>
      <motion.div
        className="mx-auto max-w-6xl grid grid-cols-2 gap-8 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.value}
            className="flex items-baseline gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {m.value}
            </span>
            <span className="text-sm text-muted-foreground">
              {m.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

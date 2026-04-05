import { motion } from "framer-motion"
import { Video, Brain, BadgeCheck, Zap } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Video de 30s, no visitas",
    description: "Graba una video-presentación rápida. Sin visitas presenciales ni chats interminables por WhatsApp.",
  },
  {
    icon: Brain,
    title: "Matching por afinidad real",
    description: "La IA agrupa por hábitos, horarios y estilo de vida. Tranquilo con tranquilo, social con social.",
  },
  {
    icon: BadgeCheck,
    title: "Hitos verificados, no reviews",
    description: "Sin estrellas tipo Uber. Ganas badges automáticos: identidad verificada, nómina validada, pagos a tiempo.",
  },
  {
    icon: Zap,
    title: "Busca gratis, acelera si quieres",
    description: "Buscar y aplicar es gratis, sin comisiones de agencia. Si quieres prioridad en el matching o verificación express, tenemos opciones premium.",
  },
]

export function Inquilinos() {
  return (
    <section id="inquilinos" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: 2x2 feature cards */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm ${
                  i % 2 === 1 ? "mt-6" : ""
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-[13px] font-semibold uppercase tracking-widest text-primary">
              Para inquilinos
            </span>
            <h2 className="mt-4 text-[2.5rem] font-extrabold tracking-tight text-foreground md:text-[3rem] leading-[1.1]">
              Compañeros que no te van{" "}
              <span className="font-display italic text-muted-foreground">
                a sacar de quicio.
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Onboarding 100% digital. Sin intermediarios, sin comisiones
              y con compañeros elegidos por compatibilidad real.
            </p>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Encontrar mi habitación
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

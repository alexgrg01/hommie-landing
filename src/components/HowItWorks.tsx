import { motion } from "framer-motion"
import { Building2, Brain, ShieldCheck } from "lucide-react"

const steps = [
  {
    num: "01",
    tag: "PUBLICA",
    title: "Sube tu propiedad en minutos",
    description:
      "Listas tu piso una sola vez. Encaja filtra candidatos por solvencia automáticamente y verifica identidad, nómina y referencias.",
    icon: Building2,
  },
  {
    num: "02",
    tag: "MATCH",
    title: "La IA agrupa inquilinos compatibles",
    description:
      "El algoritmo analiza hábitos, horarios y estilo de vida para emparejar inquilinos compatibles entre sí. Tú apruebas por scoring financiero — la convivencia la decide la afinidad.",
    icon: Brain,
  },
  {
    num: "03",
    tag: "COBRA",
    title: "Firma digital y cobros automatizados",
    description:
      "Contratos firmados digitalmente, cobros recurrentes y seguro de impago disponible como producto separado. Tú cobras cada mes; el inquilino entra sin fricciones.",
    icon: ShieldCheck,
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          {/* Left: sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-[13px] font-semibold uppercase tracking-widest text-primary">
              Proceso
            </span>
            <h2 className="mt-4 text-[2.5rem] font-extrabold tracking-tight text-foreground md:text-[3rem]">
              Cómo{" "}
              <span className="font-display italic text-primary">funciona</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Sin visitas. Sin WhatsApp. Sin comisiones. Así de simple.
            </p>
          </motion.div>

          {/* Right: steps with connecting line */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative flex gap-6"
                >
                  {/* Icon node on the line */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-4 ring-background transition-colors group-hover:bg-primary group-hover:text-white">
                    <step.icon className="h-5 w-5" />
                  </div>

                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {step.tag}
                      </span>
                      <span className="text-xs text-muted-foreground/50 font-mono">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

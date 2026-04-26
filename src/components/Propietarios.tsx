import { motion } from "framer-motion"
import { ShieldCheck, BarChart3, Banknote, Settings } from "lucide-react"

const features = [
  {
    icon: Banknote,
    title: "Gestión automatizada",
    description: "Cobros recurrentes, contratos digitales, incidencias y soporte — todo gestionado por Encaja desde un 12% sobre el alquiler mensual.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro de impago",
    description: "Producto separado contratable desde la plataforma. Nuestro scoring previo reduce la siniestralidad, lo que nos permite negociar primas que no conseguirías solo.",
    badge: "Producto separado",
  },
  {
    icon: BarChart3,
    title: "Scoring financiero, no sesgos",
    description: "Tú apruebas por solvencia validada. Encaja se encarga del matching de convivencia. Sin sesgos, sin riesgo.",
  },
  {
    icon: Settings,
    title: "Inquilinos con hitos verificados",
    description: "Identidad verificada, nómina validada, historial de pagos. Badges automáticos basados en datos, no opiniones.",
  },
]

export function Propietarios() {
  return (
    <section id="propietarios" className="py-28 px-6 bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[13px] font-semibold uppercase tracking-widest text-primary">
              Para propietarios
            </span>
            <h2 className="mt-4 text-[2.5rem] font-extrabold tracking-tight text-foreground md:text-[3rem] leading-[1.1]">
              Tu piso ocupado, cobrado y{" "}
              <span className="font-display italic text-muted-foreground">gestionado.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              Gestionamos tu propiedad, filtramos inquilinos por solvencia
              y te conectamos con un seguro de impago a primas que no
              encontrarías solo.
            </p>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Registrar mi propiedad
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

          {/* Right: feature list — staggered, not grid */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-bold text-foreground">
                      {f.title}
                    </h3>
                    {"badge" in f && f.badge && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

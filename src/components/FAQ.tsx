import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"

const faqs = [
  {
    q: "¿Cómo funciona el matching por IA?",
    a: "Nuestro algoritmo analiza hábitos de convivencia, horarios, estilo de vida y preferencias personales para agrupar inquilinos compatibles. El propietario no interviene en esta selección — solo aprueba candidatos por su scoring financiero. Esto elimina sesgos y reduce conflictos de convivencia.",
  },
  {
    q: "¿Cómo funciona el seguro de impago?",
    a: "Hommie ofrece un seguro de impago como producto separado, respaldado por aseguradoras especializadas. Nuestro scoring financiero previo reduce la siniestralidad, lo que nos permite negociar primas más competitivas que las que conseguirías por tu cuenta. El propietario lo contrata directamente desde la plataforma.",
  },
  {
    q: "¿Cuánto cuesta Hommie?",
    a: "Para inquilinos, buscar, aplicar y hacer matching es gratis. Sin comisiones de agencia. Opcionalmente puedes acceder a funciones premium como prioridad en el matching o verificación express. Para propietarios, cobramos un fee de gestión sobre el alquiler mensual que incluye cobros, contratos, soporte e incidencias. El seguro de impago se contrata aparte.",
  },
  {
    q: "¿Qué son los hitos verificados?",
    a: "En lugar de reviews subjetivas tipo 5 estrellas, Hommie usa badges automáticos basados en datos reales: 'Identidad Verificada', 'Nómina Validada', '6 meses de pagos a tiempo'. Esto genera confianza sin depender de opiniones que suelen estar sesgadas.",
  },
  {
    q: "¿Cómo sustituís las visitas presenciales?",
    a: "Los candidatos crean una video-presentación de 30 segundos (estilo TikTok) en su perfil. Los que pasan el pre-filtro financiero pueden agendar videollamadas de 10 minutos con los compañeros actuales del piso. Sin visitas presenciales, sin chats interminables por WhatsApp.",
  },
  {
    q: "¿En qué ciudades operáis?",
    a: "Lanzamos en Madrid en 2026. Nuestra hoja de ruta incluye expansión a Barcelona y Valencia una vez validado el modelo en la capital. Puedes apuntarte a la waitlist para ser de los primeros cuando lancemos.",
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span className="text-[15px] font-normal text-foreground pr-8">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  // Inject JSON-LD structured data
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "faq-structured-data"
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    })
    // Remove existing if re-rendered
    document.getElementById("faq-structured-data")?.remove()
    document.head.appendChild(script)
    return () => { script.remove() }
  }, [])

  return (
    <section id="faq" className="py-28 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-[13px] font-semibold uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="mt-4 text-[2.5rem] font-extrabold tracking-tight text-foreground md:text-[3rem]">
              Preguntas{" "}
              <span className="font-display italic text-muted-foreground">
                frecuentes
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Todo lo que necesitas saber sobre Hommie antes de unirte.
            </p>
          </motion.div>

          {/* Right: accordion */}
          <div className="rounded-2xl border border-border bg-card px-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

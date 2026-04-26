import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScZvws9v1k4-INV7Im-3yfQeOkkohJPd2eUK-jesIYxcDvgHg/viewform?usp=dialog"

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-gradient-to-br from-[#0C0A1A] via-[#141230] to-[#0E1225] py-32 px-6"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
        style={{
          background: "radial-gradient(ellipse, rgba(79,70,229,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl leading-[1.1]">
          Estamos arrancando
          <br />
          en Madrid.
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Sé de los primeros. Apúntate y te avisamos cuando lancemos.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30 active:scale-[0.97]"
          >
            Apuntarme a la waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

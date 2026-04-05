import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setState("loading")
    setTimeout(() => setState("success"), 1200)
  }

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
          Sé de los primeros. Déjanos tu email y te avisamos cuando lancemos.
        </p>

        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <CheckCircle className="h-10 w-10 text-emerald-400" />
            <p className="text-lg font-semibold text-white">¡Estás dentro!</p>
            <p className="text-sm text-slate-400">
              Te escribiremos pronto. Bienvenido a Hommie.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="waitlist-email" className="sr-only">Tu email</label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 text-white placeholder:text-white/30 backdrop-blur-sm transition-colors focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:w-80"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.97] disabled:opacity-60"
            >
              {state === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Quiero entrar
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}

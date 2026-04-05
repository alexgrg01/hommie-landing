import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Propietarios", href: "#propietarios" },
  { label: "Inquilinos", href: "#inquilinos" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className={`text-[1.35rem] font-bold tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Hommie<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
          >
            Únete a la lista
          </a>
        </div>

        <button
          className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden transition-colors ${
            scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-hero-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Únete a la lista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

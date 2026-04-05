import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, MapPin, Users, ShieldCheck, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react"

/* ── Mock listings ── */
const listings = [
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=560&h=350&fit=crop",
    zone: "Malasaña",
    rooms: 3,
    price: 550,
    match: 95,
    badges: ["Verificado", "Seguro"],
  },
  {
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=560&h=350&fit=crop",
    zone: "Chamberí",
    rooms: 4,
    price: 480,
    match: 88,
    badges: ["Verificado"],
  },
  {
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=560&h=350&fit=crop",
    zone: "Lavapiés",
    rooms: 2,
    price: 620,
    match: 92,
    badges: ["Verificado", "Seguro"],
  },
  {
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=560&h=350&fit=crop",
    zone: "La Latina",
    rooms: 3,
    price: 510,
    match: 97,
    badges: ["Verificado"],
  },
  {
    img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=560&h=350&fit=crop",
    zone: "Chueca",
    rooms: 2,
    price: 650,
    match: 90,
    badges: ["Verificado", "Seguro"],
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=560&h=350&fit=crop",
    zone: "Retiro",
    rooms: 4,
    price: 450,
    match: 85,
    badges: ["Verificado"],
  },
]

/* ── Listing card ── */
function ListingCard({ l }: { l: (typeof listings)[0] }) {
  return (
    <div className="w-[280px] shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden transition-colors hover:border-indigo-500/30 hover:bg-white/[0.07]">
      <img
        src={l.img}
        alt={`Habitación en ${l.zone}, Madrid`}
        className="h-[160px] w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
            <MapPin className="h-3.5 w-3.5 text-indigo-400" />
            {l.zone}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Users className="h-3 w-3" />
            {l.rooms} habs
          </div>
        </div>

        <div className="mt-2 text-lg font-bold text-white">
          {l.price}<span className="text-sm font-normal text-slate-400">€/mes</span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Match {l.match}%
          </div>
          <div className="flex gap-1.5">
            {l.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-slate-300"
              >
                {b === "Verificado" ? (
                  <BadgeCheck className="h-2.5 w-2.5 text-indigo-400" />
                ) : (
                  <ShieldCheck className="h-2.5 w-2.5 text-indigo-400" />
                )}
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Scrollable carousel with nav arrows ── */
function PropertyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = 296 * 2 // 2 cards
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <div className="relative group">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#0C0A1A] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#0C0A1A] to-transparent" />

      {/* Nav arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {listings.map((l) => (
          <ListingCard key={l.zone} l={l} />
        ))}
      </div>
    </div>
  )
}

/* ── Animated blobs ── */
function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "5%", left: "5%" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        initial={{ top: "40%", right: "0%" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        initial={{ bottom: "10%", left: "25%" }}
      />
    </div>
  )
}

/* ── Hero section ── */
export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0C0A1A] via-[#141230] to-[#0E1225]">
      <AnimatedBlobs />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%23fff' stroke-width='.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-20 md:pt-56 md:pb-28">
        {/* Top section: badge + heading + CTA */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-1.5 text-[13px] font-medium text-indigo-300 ring-1 ring-white/[0.08] backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Lanzamiento en Madrid &middot; 2026
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vive con personas
            <br />
            <span className="font-display italic text-indigo-400">que encajan.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            El sistema operativo del co-living. Gestión automatizada y seguro
            de impago para el propietario. Matching por afinidad real y
            onboarding digital para el inquilino. Busca gratis, vive mejor.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#propietarios"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.97]"
            >
              Soy propietario
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#inquilinos"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
            >
              Busco habitación
            </a>
          </motion.div>
        </div>

        {/* Property carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-widest text-slate-500">
            Pisos disponibles en Madrid
          </p>
          <PropertyCarousel />
        </motion.div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

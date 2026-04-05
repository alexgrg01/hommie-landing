export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Hommie<span className="text-primary">.</span>
            </span>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden text-sm text-muted-foreground sm:block">
              Co-living inteligente
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Legal
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </a>
            <a
              href="mailto:hola@hommie.ai"
              className="transition-colors hover:text-foreground"
            >
              hola@hommie.ai
            </a>
          </div>
        </div>

        <div className="mt-8 text-[13px] text-muted-foreground/60">
          &copy; 2026 Hommie. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

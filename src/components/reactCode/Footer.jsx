export default function Footer() {
  return (
    <footer className="border-t border-border/20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="font-serif text-lg italic text-foreground">Revivo</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
              Pricing
            </a>
            <a href="#stories" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans">
              Stories
            </a>
          </div>

          <p className="font-sans text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Revivo. Made with memory.
          </p>
        </div>
      </div>
    </footer>
  );
}
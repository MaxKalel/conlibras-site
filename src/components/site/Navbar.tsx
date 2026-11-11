import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/conlibras-logo-light.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diferencial", label: "Diferencial" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        // trigger when section crosses the middle of the viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
      >
        Pular para o conteúdo
      </a>
      <nav
        aria-label="Principal"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between"
      >
        <a href="#top" className="flex items-center" aria-label="ConLibras — Página inicial">
          <img
            src={logo}
            alt="ConLibras — Consultoria em Libras"
            className="h-10 sm:h-14 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 transition-smooth hover:text-foreground ${
                    isActive ? "text-foreground font-semibold" : ""
                  }`}
                >
                  {l.label}
                  <span
                    className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="#form-contato">Fale conosco</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => {
              const isActive = activeId === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block py-2 font-medium border-l-2 pl-3 transition-smooth ${
                      isActive
                        ? "border-primary text-foreground"
                        : "border-transparent text-foreground/70"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li>
              <Button asChild variant="hero" size="lg" className="w-full">
                <a
                  href="#form-contato"
                  onClick={() => setOpen(false)}
                >
                  Fale conosco
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

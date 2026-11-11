import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/conlibras-logo-dark.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-2xl bg-foreground p-3 sm:p-4">
            <img
              src={logo}
              alt="ConLibras — Consultoria em Libras"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-foreground/70 max-w-sm leading-relaxed">
            Tecnologia e atendimento humano para garantir comunicação em Libras
            em qualquer canal da sua empresa. Inclusão para todos.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3 sm:mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:conlibras2@gmail.com" className="hover:text-foreground transition-smooth">
                conlibras2@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+5585985363880" className="hover:text-foreground transition-smooth">
                (85) 98536-3880
              </a>
            </li>
            <li>Fortaleza · Brasil</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3 sm:mb-4">Redes sociais</h4>
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gledsonlibras/" },
              { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/conlibras/" },
              
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-border grid place-items-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-5 sm:py-6 text-center text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} ConLibras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

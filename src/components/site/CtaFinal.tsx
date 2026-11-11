import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";

export function CtaFinal() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary reveal">
            Vamos conversar
          </span>
          <h2 className="reveal mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Leve acessibilidade para o seu negócio{" "}
            <span className="bg-primary text-primary-foreground px-2">hoje mesmo.</span>
          </h2>
          <p className="reveal mt-6 text-lg text-background/70 max-w-xl mx-auto">
            Inclusão não pode esperar. Envie sua mensagem ou fale agora mesmo
            com um especialista da ConLibras.
          </p>
          <div className="reveal mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Button asChild variant="hero-on-dark" size="xl" className="w-full sm:w-auto justify-center">
              <a href="https://conlibras.vercel.app/" target="_blank" rel="noopener noreferrer">
                Conheça nossa plataforma
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="w-full sm:w-auto justify-center bg-transparent text-background border border-background/30 hover:bg-background hover:text-foreground transition-smooth"
            >
              <a
                href="https://wa.me/5585985363880?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20ConLibras%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div id="form-contato" className="reveal mt-14 max-w-3xl mx-auto rounded-2xl scroll-mt-24 transition-all duration-500 form-highlight-target">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

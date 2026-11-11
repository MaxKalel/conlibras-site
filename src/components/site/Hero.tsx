import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-libras.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[260px] sm:w-[480px] h-[260px] sm:h-[480px] rounded-full bg-primary/30 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground text-background text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
            Acessibilidade em Libras
          </span>

          <h1 className="mt-4 sm:mt-6 font-display text-[1.75rem] xs:text-[2rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight text-balance">
            Conectando pessoas através da{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Libras</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-2.5 sm:h-3 lg:h-4 bg-primary -z-0"
              />
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
            Tecnologia e atendimento humano para garantir comunicação em Língua
            Brasileira de Sinais — em qualquer lugar, a qualquer momento.
          </p>

          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto justify-center">
              <a href="#contato">
                Conheça nossa plataforma
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost-soft" size="xl" className="w-full sm:w-auto justify-center">
              <a href="#como-funciona">
                <PlayCircle className="w-4 h-4" />
                Como funciona
              </a>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-4 text-sm text-foreground/70">
            <div>
              <div className="text-xl sm:text-2xl font-display font-bold text-foreground">Intérpretes humanos</div>
              certificados em Libras
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div>
              <div className="text-xl sm:text-2xl font-display font-bold text-foreground">Tecnologia + pessoas</div>
              inclusão real, sem barreiras
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in mt-4 lg:mt-0">
          <div
            aria-hidden
            className="absolute -inset-3 lg:-inset-6 bg-primary rounded-3xl rotate-2"
          />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-muted">
            <img
              src={heroImage}
              alt="Pessoa se comunicando em Língua Brasileira de Sinais (Libras)"
              className="w-full h-full object-cover aspect-[4/5] sm:aspect-[4/5]"
              width={1280}
              height={1280}
              loading="eager"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-foreground text-background rounded-2xl p-5 shadow-elegant max-w-[230px] hidden sm:block">
            <div className="text-3xl font-display font-bold text-primary">+98%</div>
            <p className="text-sm text-background/80 mt-1 leading-snug">
              de satisfação no atendimento inclusivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

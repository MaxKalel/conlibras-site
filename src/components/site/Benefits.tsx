import { Radio, Users, Headphones, Award } from "lucide-react";

const benefits = [
  {
    icon: Radio,
    title: "Comunicação em tempo real",
    desc: "Atendimento em Libras instantâneo, sem agendamento, em qualquer canal da sua empresa.",
  },
  {
    icon: Users,
    title: "Inclusão para todos os públicos",
    desc: "Mais de 10 milhões de brasileiros surdos passam a se sentir vistos e ouvidos.",
  },
  {
    icon: Headphones,
    title: "Atendimento de qualidade",
    desc: "Reduza barreiras, aumente a satisfação e ofereça uma experiência humana de verdade.",
  },
  {
    icon: Award,
    title: "Imagem institucional fortalecida",
    desc: "Posicione sua marca como referência em ESG, acessibilidade e responsabilidade social.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Inclusão que gera resultado para pessoas e para o seu negócio
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal group relative rounded-2xl p-6 bg-background border border-border hover:-translate-y-1 hover:shadow-elegant transition-smooth"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-foreground grid place-items-center mb-5 group-hover:bg-primary transition-smooth">
                <Icon
                  className="w-5 h-5 text-background group-hover:text-primary-foreground transition-smooth"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

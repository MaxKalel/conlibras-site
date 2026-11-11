import { ShieldCheck, HeartHandshake, MousePointerClick } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Tecnologia confiável",
    desc: "Plataforma estável, segura e em conformidade com a LGPD e a LBI.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte humano de verdade",
    desc: "Intérpretes profissionais qualificados — não somos só software, somos pessoas.",
  },
  {
    icon: MousePointerClick,
    title: "Fácil de usar e implantar",
    desc: "Integre em minutos com um botão, link ou widget. Sem dor de cabeça técnica.",
  },
];

export function Differentiator() {
  return (
    <section id="diferencial" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Nosso diferencial
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Moderno, confiável e feito para escalar
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal rounded-2xl p-7 bg-background border border-border hover:shadow-elegant transition-smooth"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl border-2 border-foreground grid place-items-center mb-5">
                <Icon className="w-6 h-6 text-foreground" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

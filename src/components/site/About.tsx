import { Accessibility, Globe2, MessagesSquare } from "lucide-react";

const items = [
  {
    icon: Accessibility,
    title: "Inclusão digital",
    desc: "Garantimos que pessoas surdas tenham acesso pleno a serviços, conteúdos e atendimentos no mundo digital.",
  },
  {
    icon: Globe2,
    title: "Acessibilidade real",
    desc: "Cumprimos a Lei Brasileira de Inclusão (LBI) com soluções práticas, escaláveis e centradas no usuário.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação sem barreiras",
    desc: "Intérpretes e tecnologia de tradução em Libras conectando empresas e pessoas em tempo real.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            Sobre a ConLibras
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Acessibilidade em Libras como direito,{" "}
            <span className="bg-primary px-2">não como diferencial.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Unimos tecnologia e intérpretes humanos qualificados para que sua
            empresa atenda, escute e inclua todas as pessoas — com qualidade,
            agilidade e respeito.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal rounded-2xl p-7 border border-border hover:border-foreground transition-smooth bg-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center mb-5">
                <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.2} />
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

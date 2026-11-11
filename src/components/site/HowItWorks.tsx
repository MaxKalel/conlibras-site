const steps = [
  {
    n: "01",
    title: "Solicitação do serviço",
    desc: "O usuário ou a empresa aciona a ConLibras por meio de um botão, link ou totem.",
  },
  {
    n: "02",
    title: "Conexão com o intérprete",
    desc: "Em segundos, conectamos a um intérprete de Libras qualificado por vídeo.",
  },
  {
    n: "03",
    title: "Comunicação acontecendo",
    desc: "A conversa flui em Libras com qualidade e naturalidade, sem barreiras.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-foreground/60">
            Como funciona
          </span>
          <h2 className="mt-3 sm:mt-4 text-[1.75rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Comunicação em Libras em três passos
          </h2>
        </div>

        <div className="mt-10 sm:mt-16 grid md:grid-cols-3 gap-4 sm:gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative rounded-2xl p-6 sm:p-8 bg-card border border-border hover:border-foreground transition-smooth"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary font-display font-bold text-xl sm:text-2xl text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] sm:text-base text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "10M+", label: "brasileiros surdos podem ser atendidos" },
  { value: "<10s", label: "tempo médio para conectar a um intérprete" },
  { value: "+98%", label: "satisfação dos usuários atendidos" },
  { value: "24/7", label: "acessibilidade disponível, sempre" },
];

export function Impact() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Impacto
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Mais acessibilidade,{" "}
            <span className="bg-primary text-primary-foreground px-2">mais oportunidades.</span>
          </h2>
          <p className="mt-5 text-lg text-background/70">
            Tecnologia que aproxima pessoas e transforma a maneira como sua
            empresa se comunica com o mundo.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-2xl p-6 border border-background/15 hover:border-primary transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary">
                {s.value}
              </div>
              <p className="mt-2 text-sm text-background/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

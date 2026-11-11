import {
  Languages,
  Headset,
  UserCheck,
  GraduationCap,
  Captions,
  AudioLines,
} from "lucide-react";

const servicos = [
  {
    icon: Languages,
    title: "Tradução e Interpretação de Libras e Guia-Interpretação",
    desc: "Oferecemos serviços especializados de tradução e interpretação de Libras, promovendo acessibilidade comunicacional em eventos, atendimentos, reuniões, ambientes educacionais e conteúdos diversos. Também realizamos guia-interpretação, auxiliando pessoas com surdocegueira na comunicação e mobilidade com segurança e autonomia.",
  },
  {
    icon: Headset,
    title: "Central de Libras",
    desc: "Disponibilizamos uma Central de Libras por meio de um portal próprio, que conecta pessoas surdas a intérpretes de Libras em tempo real. Esse serviço permite a mediação da comunicação entre surdos e ouvintes em diferentes contextos, como atendimentos públicos, consultas, serviços empresariais e situações do dia a dia. A Central funciona como uma ponte acessível e ágil, podendo ser utilizada remotamente (por videochamada) ou integrada a instituições, garantindo inclusão, autonomia e acesso à informação de forma contínua.",
  },
  {
    icon: UserCheck,
    title: "Recrutamento e Seleção de Pessoas com Deficiência",
    desc: "Atuamos na inclusão profissional por meio de processos de recrutamento e seleção acessíveis, conectando empresas a talentos com deficiência. Nosso trabalho é focado na valorização das competências e na promoção de ambientes mais diversos e inclusivos.",
  },
  {
    icon: GraduationCap,
    title: "Cursos, treinamentos, oficinas e workshops",
    desc: "Oferecemos capacitações on-line e presenciais voltadas à inclusão, acessibilidade e Libras, com conteúdos práticos e adaptados para empresas, instituições e público em geral, promovendo conscientização e desenvolvimento de habilidades inclusivas.",
  },
  {
    icon: Captions,
    title: "Legendagem",
    desc: "Produção de legendas acessíveis para vídeos, garantindo que pessoas surdas ou com deficiência auditiva possam compreender plenamente conteúdos audiovisuais, incluindo aspectos sonoros relevantes.",
  },
  {
    icon: AudioLines,
    title: "Audiodescrição",
    desc: "Serviço que transforma elementos visuais em descrições narradas, permitindo que pessoas com deficiência visual tenham acesso completo a conteúdos audiovisuais, culturais e institucionais.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-foreground/60">
            Serviços oferecidos
          </span>
          <h2 className="mt-3 sm:mt-4 text-[1.75rem] sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Soluções completas em acessibilidade e inclusão
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-foreground/70 leading-relaxed">
            Da interpretação em Libras à audiodescrição, entregamos serviços profissionais
            que conectam pessoas e tornam sua empresa verdadeiramente acessível.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="reveal group relative flex flex-col rounded-2xl p-5 sm:p-7 bg-secondary border border-border hover:-translate-y-1 hover:shadow-elegant hover:border-foreground/20 transition-smooth"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-foreground grid place-items-center mb-4 sm:mb-5 group-hover:bg-primary transition-smooth">
                <Icon
                  className="w-5 h-5 text-background group-hover:text-primary-foreground transition-smooth"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="font-bold text-base sm:text-xl leading-snug text-balance">
                {title}
              </h3>
              <p className="mt-2 sm:mt-3 text-[14px] sm:text-[15px] text-foreground/70 leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

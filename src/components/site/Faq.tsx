import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "O que é a Libras e por que minha empresa precisa oferecer atendimento nesse idioma?",
    a: "A Libras (Língua Brasileira de Sinais) é o idioma oficial da comunidade surda no Brasil, reconhecida pela Lei nº 10.436/2002. Oferecer atendimento em Libras garante comunicação efetiva com mais de 10 milhões de pessoas surdas e com deficiência auditiva, além de cumprir obrigações legais e ampliar o alcance da sua marca.",
  },
  {
    q: "O que diz a LBI (Lei Brasileira de Inclusão) sobre acessibilidade?",
    a: "A LBI (Lei nº 13.146/2015) determina que empresas e órgãos públicos devem garantir acessibilidade comunicacional às pessoas com deficiência, incluindo atendimento em Libras. O descumprimento pode gerar multas, ações judiciais e danos à reputação da empresa.",
  },
  {
    q: "O que é a norma NBR 17225 e como ela impacta meu negócio?",
    a: "A NBR 17225 estabelece os requisitos técnicos para a prestação de serviços de tradução e interpretação em Libras à distância. Empresas que adotam serviços em conformidade com a norma garantem qualidade, segurança e acessibilidade real para seus clientes surdos — algo que a ConLibras já entrega de forma nativa.",
  },
  {
    q: "Como funciona a contratação do serviço da ConLibras?",
    a: "É simples: você entra em contato pelo nosso site ou WhatsApp, conversamos sobre as necessidades da sua empresa (canais de atendimento, volume, horários), montamos uma proposta personalizada e em poucos dias o serviço está ativo, com intérpretes treinados e tecnologia integrada aos seus canais.",
  },
  {
    q: "Em quais canais a ConLibras pode ser integrada?",
    a: "Atendemos presencialmente, por videochamada, totens de autoatendimento, sites, aplicativos, call centers e eventos. Nossa solução é flexível e se adapta ao canal onde seu cliente surdo precisar de atendimento.",
  },
  {
    q: "Os intérpretes são humanos ou tecnologia (avatares)?",
    a: "Trabalhamos com intérpretes humanos certificados, garantindo qualidade, contexto cultural e empatia no atendimento. A tecnologia é usada como suporte para conectar o intérprete ao seu canal de forma rápida e segura — nunca substituindo o profissional.",
  },
  {
    q: "A ConLibras emite relatórios e comprovações de atendimento?",
    a: "Sim. Disponibilizamos relatórios detalhados de atendimentos realizados, tempo médio, canais utilizados e indicadores de acessibilidade — úteis para auditoria, ESG e comprovação de conformidade legal.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 text-foreground text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-4 sm:mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas frequentes
          </div>
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
            Tudo que você precisa saber sobre
            <span className="block text-foreground/60 mt-1">
              Libras, LBI e nossa solução
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Respondemos as principais dúvidas sobre acessibilidade,
            legislação e como contratar a ConLibras.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="reveal space-y-2.5 sm:space-y-3"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-2xl px-4 sm:px-6 bg-card shadow-soft data-[state=open]:shadow-elegant data-[state=open]:border-foreground/20 transition-smooth"
            >
              <AccordionTrigger className="text-left text-[15px] sm:text-lg font-semibold hover:no-underline py-4 sm:py-5 gap-3">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed text-[14.5px] sm:text-base pb-4 sm:pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

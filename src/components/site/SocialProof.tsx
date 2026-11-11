import saoJoaoMaracanau from "@/assets/clients/sao-joao-maracanau.png";
import tjpe from "@/assets/clients/tjpe.png";
import saoGoncalo from "@/assets/clients/sao-goncalo.png";
import dpdf from "@/assets/clients/dpdf.png";
import unioeste from "@/assets/clients/unioeste.png";
import crpMg from "@/assets/clients/crp-mg.png";
import saudeRs from "@/assets/clients/saude-rs.png";
import portoAlegre from "@/assets/clients/porto-alegre.png";
import faders from "@/assets/clients/faders.png";
import trt15 from "@/assets/clients/trt15.png";
import trf4 from "@/assets/clients/trf4.png";
import dpePi from "@/assets/clients/dpe-pi.png";
import lunelli from "@/assets/clients/lunelli.png";
import marquise from "@/assets/clients/marquise.png";
import esmaltec from "@/assets/clients/esmaltec.png";
import senai from "@/assets/clients/senai.png";
import marisol from "@/assets/clients/marisol.png";
import stellaMaris from "@/assets/clients/stella-maris.png";
import vaptVupt from "@/assets/clients/vapt-vupt.png";

const clients = [
  { name: "São João de Maracanaú", src: saoJoaoMaracanau, scale: 1 },
  { name: "Tribunal de Justiça de Pernambuco", src: tjpe, scale: 1.45 },
  { name: "Prefeitura de São Gonçalo do Amarante", src: saoGoncalo, scale: 1.45 },
  { name: "Defensoria Pública do Distrito Federal", src: dpdf, scale: 1 },
  { name: "Universidade Estadual do Oeste do Paraná (Unioeste)", src: unioeste, scale: 1 },
  { name: "Conselho Regional de Psicologia de Minas Gerais", src: crpMg, scale: 1 },
  { name: "Secretaria da Saúde do Rio Grande do Sul", src: saudeRs, scale: 1 },
  { name: "Prefeitura de Porto Alegre", src: portoAlegre, scale: 1 },
  { name: "FADERS Acessibilidade e Inclusão", src: faders, scale: 1 },
  { name: "TRT 15ª Região - Campinas", src: trt15, scale: 1 },
  { name: "TRF 4ª Região", src: trf4, scale: 1 },
  { name: "Defensoria Pública do Estado do Piauí", src: dpePi, scale: 1 },
  { name: "Lunelli", src: lunelli, scale: 0.85 },
  { name: "Grupo Marquise", src: marquise, scale: 1 },
  { name: "Esmaltec Eletrodomésticos", src: esmaltec, scale: 0.7 },
  { name: "SENAI", src: senai, scale: 0.7 },
  { name: "Marisol FelizIdade", src: marisol, scale: 0.7 },
  { name: "Faculdade Stella Maris", src: stellaMaris, scale: 1.3 },
  { name: "Vapt Vupt", src: vaptVupt, scale: 0.9 },
];

// Duplicamos a lista para criar o efeito de rolagem infinita sem quebras
const marqueeClients = [...clients, ...clients];

export function SocialProof() {
  return (
    <section className="py-10 sm:py-16 border-y border-border bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <p className="text-center text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] text-foreground/60 mb-6 sm:mb-10 reveal font-semibold">
          Empresas e instituições que investem em inclusão caminham com a ConLibras
        </p>
      </div>

      <div
        className="group relative w-full overflow-hidden reveal
          [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-6 sm:gap-16 md:gap-24 items-center group-hover:[animation-play-state:paused]">
          {marqueeClients.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center justify-center h-20 sm:h-40 md:h-44 shrink-0 px-1.5 sm:px-4"
              aria-hidden={i >= clients.length ? "true" : undefined}
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                style={{ transform: `scale(${c.scale})` }}
                className="max-h-16 sm:max-h-36 md:max-h-40 w-auto object-contain transition-smooth"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

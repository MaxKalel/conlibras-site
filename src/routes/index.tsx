import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Servicos } from "@/components/site/Servicos";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Differentiator } from "@/components/site/Differentiator";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { AccessibilityWidget } from "@/components/site/AccessibilityWidget";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ConLibras — Acessibilidade em Libras para sua empresa" },
      {
        name: "description",
        content:
          "Conectamos pessoas através da Libras com tecnologia e intérpretes humanos. Inclusão real, atendimento 24/7 e comunicação sem barreiras.",
      },
      { property: "og:title", content: "ConLibras — Acessibilidade em Libras para sua empresa" },
      {
        property: "og:description",
        content:
          "Tecnologia e atendimento humano em Libras para empresas que valorizam inclusão.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <About />
          <Benefits />
          <Servicos />
          <HowItWorks />
        <Differentiator />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <AccessibilityWidget />
    </div>
  );
}

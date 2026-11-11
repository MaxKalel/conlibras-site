import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5585985363880";
const MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da ConLibras e gostaria de saber mais sobre acessibilidade em Libras."
);

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3
      bg-[#25D366] hover:bg-[#1ebe5d] text-white p-3 sm:pl-5 sm:pr-6 sm:py-4
      rounded-full shadow-elegant ring-1 ring-black/5 transition-smooth hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" strokeWidth={0} />
      <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">
        Fale no WhatsApp
      </span>
    </a>
  );
}

import { useState } from "react";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "subject" | "message", string>>;

const initial = { name: "", email: "", phone: "", subject: "", message: "", website: "" };

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k as keyof FieldErrors]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (values.name.trim().length < 2) e.name = "Informe seu nome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "E-mail inválido";
    if (values.subject.trim().length < 2) e.subject = "Informe o assunto";
    if (values.message.trim().length < 10) e.message = "Mensagem muito curta (mín. 10 caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (loading) return;
    if (!validate()) return;
    if (values.website) { setSent(true); return; }
    if (!ACCESS_KEY) {
      toast.error("Serviço de contato indisponível.", { description: "Tente novamente pelo WhatsApp." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Site ConLibras",
          subject: `[ConLibras] ${values.subject}`,
          name: values.name,
          email: values.email,
          phone: values.phone || "Não informado",
          message: values.message,
          replyto: values.email,
          botcheck: "",
        }),
      });
      const json: { success?: boolean; message?: string } = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Falha ao enviar mensagem.");
      setSent(true);
      setValues(initial);
      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Não foi possível enviar agora.";
      toast.error(msg, { description: "Tente novamente em instantes ou fale pelo WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-background/15 bg-background/[0.04] backdrop-blur-sm p-8 sm:p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="mt-5 text-xl sm:text-2xl font-bold">Mensagem enviada!</h3>
        <p className="mt-2 text-background/70">
          Recebemos seu contato e responderemos em breve no e-mail informado.
        </p>
        <Button
          onClick={() => setSent(false)}
          className="mt-6 bg-transparent text-background border border-background/30 hover:bg-background hover:text-foreground"
        >
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  const inputBase =
    "bg-background/[0.04] border-background/15 text-background placeholder:text-background/40 focus-visible:ring-primary focus-visible:border-primary/60 hover:border-background/30 transition-colors h-11";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-background/15 bg-background/[0.04] backdrop-blur-sm p-6 sm:p-8 text-left"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={update("website")}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nome" error={errors.name}>
          <Input
            value={values.name}
            onChange={update("name")}
            placeholder="Seu nome completo"
            className={inputBase}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="E-mail" error={errors.email}>
          <Input
            type="email"
            value={values.email}
            onChange={update("email")}
            placeholder="voce@empresa.com"
            className={inputBase}
            autoComplete="email"
            required
          />
        </Field>
        <Field label="Telefone (opcional)" error={errors.phone}>
          <Input
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="(85) 9 0000-0000"
            className={inputBase}
            autoComplete="tel"
          />
        </Field>
        <Field label="Assunto" error={errors.subject}>
          <Input
            value={values.subject}
            onChange={update("subject")}
            placeholder="Como podemos ajudar?"
            className={inputBase}
            required
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Mensagem" error={errors.message}>
          <Textarea
            value={values.message}
            onChange={update("message")}
            placeholder="Conte um pouco sobre seu projeto ou necessidade…"
            className={`${inputBase} h-auto min-h-[140px] py-3`}
            required
          />
        </Field>
      </div>

      <Button
        type="submit"
        variant="hero-on-dark"
        size="xl"
        disabled={loading}
        className="mt-6 w-full sm:w-auto justify-center"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensagem
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>

      <p className="mt-4 text-xs text-background/50">
        Ao enviar, sua mensagem é encaminhada diretamente para a equipe ConLibras.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-background/70">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

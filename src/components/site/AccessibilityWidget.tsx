import { useEffect, useState } from "react";
import { Accessibility, X, Contrast, Plus, Minus, RotateCcw } from "lucide-react";

const STORAGE_KEY = "a11y-prefs";

type Prefs = { fontScale: number; highContrast: boolean };

const DEFAULT: Prefs = { fontScale: 100, highContrast: false };

function applyPrefs(p: Prefs) {
  document.documentElement.style.fontSize = `${p.fontScale}%`;
  document.documentElement.classList.toggle("a11y-high-contrast", p.highContrast);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT, ...JSON.parse(raw) } as Prefs;
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {}
  }, []);

  const update = (next: Prefs) => {
    setPrefs(next);
    applyPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const incFont = () => update({ ...prefs, fontScale: Math.min(prefs.fontScale + 10, 150) });
  const decFont = () => update({ ...prefs, fontScale: Math.max(prefs.fontScale - 10, 80) });
  const reset = () => update(DEFAULT);
  const toggleContrast = () => update({ ...prefs, highContrast: !prefs.highContrast });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir ferramentas de acessibilidade"
        aria-expanded={open}
        className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-50 w-12 h-12 grid place-items-center rounded-full bg-foreground text-background shadow-elegant ring-1 ring-black/5 transition-smooth hover:scale-105 active:scale-95"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Ferramentas de acessibilidade"
          className="fixed left-4 bottom-20 sm:left-6 sm:bottom-24 z-50 w-[260px] rounded-2xl bg-background border border-border shadow-elegant p-4 animate-fade-in-up"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold">Acessibilidade</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="p-1 rounded-md hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              onClick={toggleContrast}
              aria-pressed={prefs.highContrast}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-smooth ${
                prefs.highContrast
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:bg-muted"
              }`}
            >
              <Contrast className="w-4 h-4" />
              Alto contraste
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decFont}
                aria-label="Diminuir fonte"
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-smooth"
              >
                <Minus className="w-4 h-4" />
                A
              </button>
              <button
                type="button"
                onClick={incFont}
                aria-label="Aumentar fonte"
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-smooth"
              >
                <Plus className="w-4 h-4" />
                A
              </button>
            </div>
            <p className="text-[11px] text-foreground/60 text-center">
              Tamanho da fonte: {prefs.fontScale}%
            </p>

            <button
              type="button"
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-smooth"
            >
              <RotateCcw className="w-4 h-4" />
              Redefinir
            </button>
          </div>
        </div>
      )}
    </>
  );
}

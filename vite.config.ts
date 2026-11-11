import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build for Cloudflare Pages.
// - cloudflare: false disables the Workers build so output stays as static assets.
// - tanstackStart.spa enables SPA mode, which generates dist/index.html (shell)
//   that hydrates the TanStack Router client-side.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});

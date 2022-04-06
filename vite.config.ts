import { defineConfig } from "vite";

export default defineConfig({
  root: 'docs',
  optimizeDeps: {
    include: ['vue'],
  },
  // @ts-expect-error Invalid types can be ignored
  ssr: {
    noExternal: ['mermaid']
  },
});
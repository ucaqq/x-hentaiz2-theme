import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: "css",
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: "assets"
  }
})
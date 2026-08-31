import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// './' permite que o mesmo build funcione no domínio do GitHub Pages,
// inclusive quando o repositório for publicado em /nome-do-repositorio/.
export default defineConfig({
  plugins: [react()],
  base: './',
})

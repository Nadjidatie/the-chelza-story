import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // très important pour GitHub Pages
  base: '/the-chelza-story/',
  build: {
    outDir: 'docs', // on build dans docs/ car GitHub Pages pointe dessus
  },
})

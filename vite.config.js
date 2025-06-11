import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'

export default defineConfig({
  base: '', // important pour les chemins relatifs en prod
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sdtraining: resolve(__dirname, 'sdtraining.html'),
        quixotic: resolve(__dirname, 'quixotic.html'),
        drawhub: resolve(__dirname, 'draw-hub.html'),
        windjee: resolve(__dirname, 'windjee.html'),
        sound3d: resolve(__dirname, 'sound3d.html'),
        zombie: resolve(__dirname, 'zombie-invasion.html'),
        kingplouf: resolve(__dirname, 'king-plouf.html'),
      }
    }
  }
})

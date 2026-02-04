import { fileURLToPath, URL } from 'node:url'
import { federation } from "@module-federation/vite";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import postcssConfig from '../../packages/shared/src/ui/postcss.config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'base',
      filename: 'remoteEntry.js',
      exposes: {
        './HeaderApp': './src/components/HeaderApp.vue'
      },
      shared: {
        vue: {
          singleton: true,
        }
      }
    })
  ],
 resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@micro/shared': fileURLToPath(new URL('../../packages/shared/src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    cors: true
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
  css: {
   postcss: postcssConfig
  }
})

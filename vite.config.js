import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'
import { config } from './package.json'

const outDir = resolve(__dirname, `${config.dist.dir}/_vite`)
const srcDir = resolve(__dirname, config.src.dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
  ],
  base: `${config.site.vite}`,
  root: srcDir,
  server: {
    host: '0.0.0.0',
    port: config.port.vite,
  },
  css: {
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
  build: {
    outDir,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-web-component'],
          lodash: ['lodash', 'lodash-es'],
        },
      },
    },
  },
})

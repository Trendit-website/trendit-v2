import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          favicons: `
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="icon" type="image/png" sizes="16x16"href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="180x180"  href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.webmanifest" />
          `,
        },
      },
    }),
  ],
})

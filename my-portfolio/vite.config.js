import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    },
    // Use esbuild minifier (faster and built-in)
    minify: 'esbuild',
    // Drop console logs in production
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  }
})

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React runtime — cached aggressively
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': ['lucide-react', 'framer-motion'],
          // SEO / meta
          'meta-vendor': ['react-helmet-async'],
          // Core pages
          'pages-core': [
            './src/pages/AboutPage',
            './src/pages/Contact',
            './src/pages/EcosystemPage',
          ],
          // Legal pages — rarely visited, separate chunk
          'pages-legal': [
            './src/pages/PrivacyPolicy',
            './src/pages/TermsOfService',
            './src/pages/RefundPolicy',
            './src/pages/Disclaimer',
          ],
        },
      },
    },

    // Production optimizations
    minify: 'esbuild',
    esbuildOptions: {
      drop: ['console', 'debugger'],
    },

    // Asset inlining threshold (4KB)
    assetsInlineLimit: 4096,

    // Split CSS per chunk for better caching
    cssCodeSplit: true,

    // No sourcemaps in production
    sourcemap: false,

    // Warn on large chunks
    chunkSizeWarningLimit: 800,
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'framer-motion',
      'react-helmet-async',
    ],
  },

  css: {
    devSourcemap: true,
  },
});

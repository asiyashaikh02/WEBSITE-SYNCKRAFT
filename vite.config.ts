import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        // Optimize chunk splitting
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendor': ['lucide-react', 'framer-motion'],
              'utils-vendor': ['react-helmet-async'],

              // Feature chunks
              'pages': [
                './src/pages/AboutPage',
                './src/pages/Contact',
                './src/pages/EcosystemPage',
                './src/pages/Industries',
                './src/pages/Products'
              ],
              'legal': [
                './src/pages/PrivacyPolicy',
                './src/pages/TermsOfService',
                './src/pages/RefundPolicy',
                './src/pages/Disclaimer'
              ],
              'funnel': [
                './src/pages/funnel/BookDemo',
                './src/pages/funnel/ContactSales',
                './src/pages/funnel/FreeAudit'
              ]
            }
          }
        },

        // Performance optimizations
        minify: 'esbuild',
        esbuild: {
          drop: ['console', 'debugger'],
          minifyIdentifiers: true,
          minifySyntax: true,
          minifyWhitespace: true
        },

        // Asset optimization
        assetsInlineLimit: 4096, // Inline small assets
        cssCodeSplit: true, // Split CSS for better caching
        sourcemap: false, // Disable sourcemaps in production

        // Chunk size warnings
        chunkSizeWarningLimit: 1000
      },

      // Performance optimizations
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react-router-dom',
          'lucide-react',
          'framer-motion',
          'react-helmet-async'
        ]
      },

      // CSS optimization
      css: {
        devSourcemap: true
      }
    };
});

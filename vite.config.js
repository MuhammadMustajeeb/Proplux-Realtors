import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  // build: {
  //   outDir: 'dist',
  // },
  base: '/',
  resolve: {
    alias: {
      // your aliases
    },
  },
  // ⬇️ This is critical
  optimizeDeps: {},
  esbuild: {},
  define: {},
  css: {},
  assetsInclude: [],
  json: {},
  logLevel: 'info',
  clearScreen: true,
  preview: {
    open: true,
  },
  // ⬇️ Add this to fix React Router blank pages
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});

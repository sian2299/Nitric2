import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  // Set publicDir to '.' to include root-level assets in the build (sw.js, manifest.json)
  publicDir: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      // Ensure sw.js and other files aren't bundled but copied
      external: ['sw.js']
    }
  },
  server: {
    port: 3000
  }
});
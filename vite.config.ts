import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/my-portfolio/' : '',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'client') },
    },
    css: {
      postcss: {},
    },
    build: {
      outDir: 'dist',
      emptyOutDir: false,  // ← don't wipe dist before building
    },
  };
});
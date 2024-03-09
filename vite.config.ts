import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/01_app'),
      '@pages': path.resolve(__dirname, './src/02_pages'),
      '@widgets': path.resolve(__dirname, './src/03_widgets'),
      '@features': path.resolve(__dirname, './src/04_features'),
      '@entities': path.resolve(__dirname, './src/05_entities'),
      '@shared': path.resolve(__dirname, './src/06_shared'),
    },
  },
  plugins: [react()],
});

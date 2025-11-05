import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  base: './', // Use './' for GitHub Pages or relative paths for Vercel
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bilalmssiddiqui.github.io/',
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
});

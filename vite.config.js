import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths"
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
     viteCompression({
      algorithm: 'gzip', 
      threshold: 10240, 
      deleteOriginFile: false,
    }),
    tsconfigPaths(),
    visualizer({ open: true })
  ],
})

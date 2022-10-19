import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  /*
  build: {
    outDir: './docs'//Build App folder whitout a configuration in package.json just using yarn build instead yarn build-docs
  }
  */
})

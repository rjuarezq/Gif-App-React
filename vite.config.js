import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Base for gh-pages
  base: "/Gif-App-React/",//If you want to deploy in other hosting just use: base: "./". It means that you project use a relative path.
  /*
  build: {
    outDir: './docs'//Build App folder whitout a configuration in package.json just using yarn build instead yarn build-docs
  }
  */
})

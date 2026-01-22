import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to relative to support deployment to subdirectories (like GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/meals/' : '/'
})

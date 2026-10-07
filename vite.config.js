import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = dirname(fileURLToPath(import.meta.url))

// Routes declared in src/App.jsx. GitHub Pages only serves real files, so a
// direct visit to /meals/privacy 404s unless that path exists on disk.
function clientRoutes() {
  const source = readFileSync(resolve(projectRoot, 'src/App.jsx'), 'utf8')
  return [...source.matchAll(/\bpath="\/([^"]+)"/g)].map((match) => match[1])
}

// Copy the built SPA shell to each client route and to 404.html. GitHub Pages
// serves a directory index for /privacy and /terms (HTTP 200) and uses
// 404.html for any other deep link, while the browser URL stays intact so
// React Router can render the matching page.
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    writeBundle(options) {
      if (!options.dir) return
      const indexPath = resolve(options.dir, 'index.html')
      copyFileSync(indexPath, resolve(options.dir, '404.html'))
      for (const route of clientRoutes()) {
        const target = resolve(options.dir, route, 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        copyFileSync(indexPath, target)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  // Set base to relative to support deployment to subdirectories (like GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/meals/' : '/'
})

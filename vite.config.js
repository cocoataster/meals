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

// GitHub Pages serves privacy.html at /privacy with HTTP 200 and no redirect.
// /privacy/ is a different path: only privacy/index.html makes that URL return
// 200. The App Store privacy link has a trailing slash, and other links do not,
// so each route is published both ways. 404.html covers any other client route.
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    writeBundle(options) {
      if (!options.dir) return
      const indexPath = resolve(options.dir, 'index.html')
      copyFileSync(indexPath, resolve(options.dir, '404.html'))
      for (const route of clientRoutes()) {
        const htmlTarget = resolve(options.dir, `${route}.html`)
        mkdirSync(dirname(htmlTarget), { recursive: true })
        copyFileSync(indexPath, htmlTarget)

        const directoryIndex = resolve(options.dir, route, 'index.html')
        mkdirSync(dirname(directoryIndex), { recursive: true })
        copyFileSync(indexPath, directoryIndex)
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

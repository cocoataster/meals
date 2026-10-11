import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { LOCALES, SITE_ORIGIN, localeMeta, pageCopy } from './src/i18n.js'

const projectRoot = dirname(fileURLToPath(import.meta.url))

function hreflangBlock() {
  const links = LOCALES.map((locale) => {
    const meta = localeMeta[locale]
    const href = meta.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${meta.path}/`
    return `    <link rel="alternate" hreflang="${meta.hreflang}" href="${href}" />`
  })
  links.push(`    <link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/" />`)
  return links.join('\n')
}

function applyLocaleSeo(html, locale) {
  const t = pageCopy(locale)
  const meta = localeMeta[locale]
  const canonical = meta.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${meta.path}/`
  const title = t.title.replaceAll('&', '&amp;')
  return html
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>/g, '')
    .replace(/<html lang="[^"]*">/, `<html lang="${t.htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${t.description}" />\n    <link rel="canonical" href="${canonical}" />\n${hreflangBlock()}`,
    )
}

function localeForRoute(route) {
  if (route === 'es') return 'es'
  if (route === 'ca') return 'ca'
  return 'en'
}

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
    transformIndexHtml(html) {
      return applyLocaleSeo(html, 'en')
    },
    writeBundle(options) {
      if (!options.dir) return
      const indexPath = resolve(options.dir, 'index.html')
      const englishHtml = readFileSync(indexPath, 'utf8')
      writeFileSync(indexPath, applyLocaleSeo(englishHtml, 'en'))
      copyFileSync(indexPath, resolve(options.dir, '404.html'))

      for (const route of clientRoutes()) {
        const locale = localeForRoute(route)
        const html = applyLocaleSeo(englishHtml, locale)

        const htmlTarget = resolve(options.dir, `${route}.html`)
        mkdirSync(dirname(htmlTarget), { recursive: true })
        writeFileSync(htmlTarget, html)

        const directoryIndex = resolve(options.dir, route, 'index.html')
        mkdirSync(dirname(directoryIndex), { recursive: true })
        writeFileSync(directoryIndex, html)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), githubPagesSpaFallback()],
  // Set base to relative to support deployment to subdirectories (like GitHub Pages)
  base: mode === 'production' ? '/meals/' : '/',
}))

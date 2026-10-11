import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import appIcon from '../assets/appicon.png'
import { APP_STORE_URL, LOCALES, localeFromPath, localeMeta, pageCopy } from '../i18n'

function useLocale() {
  const { pathname } = useLocation()
  return localeFromPath(pathname)
}

export function SiteHeader({ darkMode, setDarkMode }) {
  const locale = useLocale()
  const t = pageCopy(locale)

  return (
    <nav className="fixed top-0 z-50 w-full border-b glass" style={{ borderColor: 'var(--line)' }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:font-extrabold focus:text-white"
      >
        {t.chrome.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-6">
        <Link to={localeMeta[locale].path} className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] object-cover" />
          Meals
        </Link>
        <div className="flex items-center gap-3 text-sm font-bold sm:gap-5">
          <LanguageSwitcher locale={locale} label={t.chrome.language} />
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            aria-label="Toggle color scheme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

function LanguageSwitcher({ locale, label }) {
  return (
    <nav aria-label={label} className="flex items-center gap-1 rounded-full border px-1 py-1" style={{ borderColor: 'var(--line)' }}>
      {LOCALES.map((code) => {
        const current = code === locale
        return (
          <Link
            key={code}
            to={localeMeta[code].path}
            hrefLang={localeMeta[code].hreflang}
            lang={localeMeta[code].htmlLang}
            aria-current={current ? 'page' : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-extrabold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
              current
                ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                : 'text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            {localeMeta[code].switcher}
          </Link>
        )
      })}
    </nav>
  )
}

export function SiteFooter() {
  const locale = useLocale()
  const t = pageCopy(locale)

  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--line)' }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] object-cover" />
          <span className="text-2xl font-extrabold tracking-tight">Meals</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-[var(--muted)]">
          <Link to="/terms" className="hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
            {t.footer.terms}
          </Link>
          <Link to="/privacy" className="hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
            {t.footer.privacy}
          </Link>
          <a
            href={APP_STORE_URL}
            className="hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {t.footer.appStore}
          </a>
        </div>
      </div>
    </footer>
  )
}

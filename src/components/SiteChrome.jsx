import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import appIcon from '../assets/appicon.png'

function FeaturesLink() {
  const location = useLocation()
  const className = 'hidden font-bold text-[var(--muted)] hover:text-[var(--ink)] sm:inline'
  if (location.pathname === '/') {
    return <a href="#features" className={className}>What’s new</a>
  }
  return <Link to="/#features" className={className}>What’s new</Link>
}

export function SiteHeader({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b glass" style={{ borderColor: 'var(--line)' }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] object-cover" />
          Meals
        </Link>
        <div className="flex items-center gap-5 text-sm font-bold">
          <FeaturesLink />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 transition-colors hover:bg-[var(--accent-soft)]"
            aria-label="Toggle color scheme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t py-12" style={{ borderColor: 'var(--line)' }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="mb-1 flex items-center justify-center gap-2 md:justify-start">
            <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] object-cover" />
            <span className="text-2xl font-extrabold tracking-tight">Meals</span>
          </div>
          <p className="text-sm font-semibold text-[var(--muted)]">Breakfast, lunch, and dinner for the week.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-[var(--muted)]">
          <Link to="/privacy" className="hover:text-[var(--ink)]">Privacy</Link>
          <Link to="/terms" className="hover:text-[var(--ink)]">Terms</Link>
          <a href="https://x.com/meals_ios" className="hover:text-[var(--ink)]">X</a>
          <a href="https://instagram.com/meals_ios" className="hover:text-[var(--ink)]">Instagram</a>
          <a href="mailto:meals@cocoataster.com" className="hover:text-[var(--ink)]">Contact</a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs font-semibold text-[var(--muted)]">
        &copy; {new Date().getFullYear()} Meals. All rights reserved.
      </p>
    </footer>
  )
}

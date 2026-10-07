import { Link } from 'react-router-dom'
import appIcon from '../assets/appicon.png'
import appStoreBadge from '../assets/appstore.png'

export const APP_STORE_URL = 'https://apps.apple.com/es/app/meals-weekly-planner/id1612862108'

const homeHash = (id) => `${import.meta.env.BASE_URL}#${id}`

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAF5EF]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-[#1C1C1E]">
          <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] ring-1 ring-black/10" />
          Meals
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-[#3f484c]">
          <a href={homeHash('features')} className="hidden sm:inline hover:text-[#1C1C1E]">Features</a>
          <Link to="/privacy" className="hidden sm:inline hover:text-[#1C1C1E]">Privacy</Link>
          <a href={APP_STORE_URL} className="inline-flex hover:opacity-80">
            <img src={appStoreBadge} alt="Download on the App Store" className="h-10 w-auto" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5 font-semibold tracking-tight">
            <img src={appIcon} alt="" className="h-8 w-8 rounded-[9px] ring-1 ring-black/10" />
            Meals
          </div>
          <p className="mt-2 max-w-sm text-sm text-[#5E686C]">
            A visual weekly meal planner for iPhone. English, Español, and Català.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#3f484c]">
          <Link to="/privacy" className="hover:text-[#1C1C1E]">Privacy</Link>
          <Link to="/terms" className="hover:text-[#1C1C1E]">Terms</Link>
          <a href="https://twitter.com/meals_ios" className="hover:text-[#1C1C1E]">Twitter</a>
          <a href="mailto:meals@cocoataster.com" className="hover:text-[#1C1C1E]">Contact</a>
        </div>
      </div>
      <p className="px-5 pb-8 text-center text-xs text-[#8a9296]">
        © {new Date().getFullYear()} Eric Sans. Meals for iPhone.
      </p>
    </footer>
  )
}

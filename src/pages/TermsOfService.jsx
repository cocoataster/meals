import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

export function TermsOfService({ darkMode, setDarkMode }) {
  return (
    <div className="app-canvas flex min-h-screen flex-col">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="mx-auto w-full max-w-3xl flex-grow space-y-6 px-6 pb-16 pt-28 font-semibold text-[var(--muted)]">
        <Link to="/" className="inline-flex items-center gap-2 font-bold text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--ink)]">Terms of Use</h1>
        <p>
          By downloading or using Meals, these terms apply to you. Please read them before using the app.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">License</h2>
        <p>
          Meals is free to download and use. Planning, your meal library, and calorie notes stay available without an account. We may change the app or charge for additional services in the future.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Your content</h2>
        <p>
          Recipes, photos, and week plans you add belong to you. They stay on your device. You can export them from Settings.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Updates</h2>
        <p>
          Meals is available on iOS. System requirements may change, and you will need to install updates to keep using the app.
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}

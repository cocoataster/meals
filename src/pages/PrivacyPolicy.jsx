import { Link } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

export function PrivacyPolicy({ darkMode, setDarkMode }) {
  return (
    <div className="app-canvas flex min-h-screen flex-col">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="mx-auto w-full max-w-3xl flex-grow px-6 pb-16 pt-28">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 font-bold text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mb-8 text-lg font-semibold leading-relaxed text-[var(--muted)]">
          Meals is built so your meal plans stay with you. There is no account, and the app does not collect personal data.
        </p>
        <div className="playful-card mb-8 flex items-start gap-4 p-6">
          <Lock className="mt-1 shrink-0 text-[var(--accent)]" />
          <div>
            <h2 className="mb-2 text-lg font-extrabold">No data collection</h2>
            <p className="font-semibold text-[var(--muted)]">
              Meals does not collect, store, or share personal data. Your meals and weekly plan stay on your device. You can export them as a JSON file from Settings.
            </p>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-extrabold">Contact</h2>
        <p className="font-semibold text-[var(--muted)]">
          Questions about this policy:{' '}
          <a href="mailto:meals@cocoataster.com" className="font-extrabold text-[var(--accent)] hover:underline">
            meals@cocoataster.com
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

const updated = 'October 10, 2026'

export function PrivacyPolicy({ darkMode, setDarkMode }) {
  return (
    <div className="app-canvas flex min-h-screen flex-col">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="mx-auto w-full max-w-3xl flex-grow px-6 pb-16 pt-28">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 font-bold text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mb-6 text-sm font-bold text-[var(--muted)]">Last updated {updated}</p>
        <p className="mb-8 text-lg font-semibold leading-relaxed text-[var(--muted)]">
          Meals is built so your meal plans stay with you. There is no Meals account, and we do not collect your meals on a server of our own.
        </p>
        <div className="playful-card mb-10 flex items-start gap-4 p-6">
          <Lock className="mt-1 shrink-0 text-[var(--accent)]" />
          <div>
            <h2 className="mb-2 text-lg font-extrabold">We don’t collect your data</h2>
            <p className="font-semibold text-[var(--muted)]">
              Meals does not collect personal data, and we do not store or share it. What you add stays on your device. With Meals Pro, it can also stay in your private iCloud, which we cannot read.
            </p>
          </div>
        </div>

        <div className="space-y-8 font-semibold text-[var(--muted)]">
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--ink)]">On your device</h2>
            <p>
              Your meals, ingredients, tags, week plan, and settings are stored on your iPhone. You can export your meals and weekly plan as a JSON file from Settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--ink)]">iCloud sync</h2>
            <p>
              iCloud sync is part of Meals Pro. When it is on, your meals (including photos, notes, and calories), ingredients, tags, week plan, and grocery check-offs are stored in your own private iCloud database, using CloudKit. That database belongs to your Apple Account. We cannot access it.
            </p>
            <p>
              Settings stay on each device. That includes the day your week starts and the time of the daily reminder. If iCloud is unavailable, Meals keeps working on that device and syncs when iCloud is available again. If Meals Pro ends, sync pauses. Nothing is deleted on the device or in iCloud.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--ink)]">Purchases</h2>
            <p>
              Meals Pro is purchased with Apple’s StoreKit. Apple processes the payment. Meals does not receive your payment details, and we never see your card or Apple Account billing information. The app only learns, on your device, whether Meals Pro is active.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--ink)]">Widget and notifications</h2>
            <p>
              The Home Screen widget reads a copy of today’s plan that the app writes into a shared area on your device (an App Group). That copy stays on the device. The daily reminder is a local notification. It is off until you turn it on, and it is scheduled on the device, not sent from a server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--ink)]">Contact</h2>
            <p>
              Questions about this policy:{' '}
              <a href="mailto:meals@cocoataster.com" className="font-extrabold text-[var(--accent)] hover:underline">
                meals@cocoataster.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

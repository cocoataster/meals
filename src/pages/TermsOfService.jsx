import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

const updated = 'October 10, 2026'

export function TermsOfService({ darkMode, setDarkMode }) {
  return (
    <div className="app-canvas flex min-h-screen flex-col">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="mx-auto w-full max-w-3xl flex-grow space-y-6 px-6 pb-16 pt-28 font-semibold text-[var(--muted)]">
        <Link to="/" className="inline-flex items-center gap-2 font-bold text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--ink)]">Terms of Use</h1>
          <p className="mt-3 text-sm font-bold">Last updated {updated}</p>
        </div>
        <p>
          By downloading or using Meals, these terms apply to you. Please read them before using the app.
          The app is also licensed under{' '}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="font-extrabold text-[var(--accent)] hover:underline"
          >
            Apple’s Licensed Application End User License Agreement
          </a>. Where these terms and that agreement both speak to a purchase, Apple’s agreement covers the sale, and these terms describe Meals Pro.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">License</h2>
        <p>
          Meals is free to download. Planning meals, your library, search, tags, and export stay free, and they do not need an account. Meals Pro is optional.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Meals Pro</h2>
        <p>Meals Pro adds:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A grocery list for the week, grouped by aisle, with check-off and sharing.</li>
          <li>A Home Screen widget, and a daily reminder you can turn on.</li>
          <li>Sync across your devices through your private iCloud.</li>
          <li>Importing a recipe from Safari.</li>
        </ul>
        <p>Everything else in Meals stays free.</p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Subscription and lifetime purchase</h2>
        <p>Meals Pro is sold in the app by Apple, in two ways:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            An annual auto-renewable subscription. If you are eligible, it starts with a 7-day free trial, then renews at the yearly price shown in the app.
          </li>
          <li>A one-time lifetime purchase. You pay the price shown in the app once, and Meals Pro stays unlocked. It does not renew.</li>
        </ul>
        <p>
          Payment is charged to your Apple Account when you confirm the purchase. The annual subscription renews automatically unless you cancel at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before that period ends. You can manage or cancel the subscription in your Apple Account settings after purchase. Any unused part of a free trial is forfeited when you buy Meals Pro. Refunds are handled by Apple, not by us. You can restore a previous purchase from the Meals Pro screen.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Your content</h2>
        <p>
          Recipes, photos, and week plans you add belong to you. They stay on your device. With Meals Pro, they can also be stored in your private iCloud so your other devices can use them. You can export your meals and weekly plan from Settings. If Meals Pro ends, your content stays on your device and in your iCloud, and sync pauses until Pro is active again.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Updates</h2>
        <p>
          Meals is available on iOS. System requirements may change, and you will need to install updates to keep using the app.
        </p>
        <h2 className="text-xl font-extrabold text-[var(--ink)]">Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a href="mailto:meals@cocoataster.com" className="font-extrabold text-[var(--accent)] hover:underline">
            meals@cocoataster.com
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#1C1C1E]">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 py-12">
        <Link to="/" className="text-sm font-medium text-[#5E686C] hover:text-[#1C1C1E]">
          ← Back to Meals
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[#8a9296]">Last updated January 1, 2023</p>

        <p className="mt-8 text-lg leading-relaxed text-[#3f484c]">
          Meals has a zero collection policy. The app does not collect, store, or share personal information. There is nothing for us to sell, send, or hand to anyone else.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-black/5">
          <h2 className="text-lg font-semibold">What stays on your iPhone</h2>
          <p className="mt-2 leading-relaxed text-[#5E686C]">
            Meal photos, names, notes, times, calories, and weekly plans stay on your device. If you delete something, it is gone.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 leading-relaxed text-[#5E686C]">
          Questions about this policy can go to{' '}
          <a href="mailto:meals@cocoataster.com" className="font-medium text-[#c23b32] underline decoration-[#c23b32]/30 underline-offset-4">
            meals@cocoataster.com
          </a>.
        </p>
      </main>
      <SiteFooter />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#1C1C1E]">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 py-12">
        <Link to="/" className="text-sm font-medium text-[#5E686C] hover:text-[#1C1C1E]">
          ← Back to Meals
        </Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">Terms of Service</h1>

        <div className="mt-8 space-y-6 leading-relaxed text-[#3f484c]">
          <p>
            By downloading or using Meals, these terms apply to you. Read them before you use the app.
          </p>
          <h2 className="text-xl font-semibold text-[#1C1C1E]">License</h2>
          <p>
            Meals is free to download and use on iPhone. We may change the app, or charge for a service, at any time and for any reason.
          </p>
          <h2 className="text-xl font-semibold text-[#1C1C1E]">Updates</h2>
          <p>
            Meals is available on iOS. System requirements can change, and you will need to install updates to keep using the app.
          </p>
          <h2 className="text-xl font-semibold text-[#1C1C1E]">Contact</h2>
          <p>
            <a href="mailto:meals@cocoataster.com" className="font-medium text-[#c23b32] underline decoration-[#c23b32]/30 underline-offset-4">
              meals@cocoataster.com
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

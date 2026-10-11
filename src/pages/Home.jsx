import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, Search, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { AppStoreBadge } from '../components/AppStoreBadge'
import { FeatureCard } from '../components/FeatureCard'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { pageCopy } from '../i18n'
import { SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH, screenshotsFor } from '../screenshots'

const Fade = motion.div

const benefitIcons = [
  <CalendarDays size={22} key="week" />,
  <Search size={22} key="search" />,
  <Share2 size={22} key="share" />,
]

function usePageMeta(t) {
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.description)
  }, [t])
}

export function Home({ locale, darkMode, setDarkMode }) {
  const t = pageCopy(locale)
  const shots = screenshotsFor(locale, t.screenshots.alts)
  const [heroShot, ...moreShots] = shots

  usePageMeta(t)

  return (
    <div className="app-canvas flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />

      <main id="main" className="flex-grow pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Fade initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-6 inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--accent)]">
                {t.eyebrow}
              </p>
              <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                {t.headline}
              </h1>
              <p className="mx-auto mb-4 max-w-xl text-lg font-semibold leading-relaxed text-[var(--muted)] lg:mx-0">
                {t.subheadline}
              </p>
              <p className="mx-auto mb-8 max-w-xl text-base font-semibold leading-relaxed text-[var(--muted)] lg:mx-0">
                {t.status}
              </p>
              <div className="flex justify-center lg:justify-start">
                <AppStoreBadge locale={locale} label={t.cta} />
              </div>
            </Fade>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <Fade
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              <img
                src={heroShot.src}
                alt={heroShot.alt}
                width={SCREENSHOT_WIDTH}
                height={SCREENSHOT_HEIGHT}
                className="h-auto w-[min(100%,280px)] md:w-[320px]"
              />
            </Fade>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
            {moreShots.map((shot) => (
              <img
                key={shot.file}
                src={shot.src}
                alt={shot.alt}
                width={SCREENSHOT_WIDTH}
                height={SCREENSHOT_HEIGHT}
                loading="lazy"
                decoding="async"
                className="h-auto w-[180px] shrink-0 snap-center md:w-[200px]"
              />
            ))}
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {t.benefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                delay={0.08 * index}
                icon={benefitIcons[index]}
                title={benefit.title}
                description={benefit.body}
              />
            ))}
          </div>
        </section>

        <section id="compare" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20">
          <div className="playful-card overflow-hidden p-6 md:p-10">
            <div className="overflow-x-auto" tabIndex={0}>
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm md:text-base">
                <caption className="sr-only">{`${t.compare.free} / ${t.compare.pro}`}</caption>
                <thead>
                  <tr className="border-b" style={{ borderColor: 'var(--line)' }}>
                    <th scope="col" className="sticky left-0 z-10 bg-[var(--card)] py-3 pr-4 font-extrabold text-[var(--ink)]">
                      <span className="sr-only">{t.compare.featureLabel}</span>
                    </th>
                    <th scope="col" className="px-3 py-3 text-center font-extrabold text-[var(--ink)]">
                      {t.compare.free}
                    </th>
                    <th scope="col" className="px-3 py-3 text-center font-extrabold text-[var(--accent)]">
                      {t.compare.pro}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.compare.rows.map((row, index) => {
                    const proOnly = t.compare.proIn[index]
                    return (
                      <tr key={row} className="border-b last:border-b-0" style={{ borderColor: 'var(--line)' }}>
                        <th scope="row" className="sticky left-0 z-10 bg-[var(--card)] py-3 pr-4 font-semibold text-[var(--ink)]">
                          {row}
                        </th>
                        <td className="px-3 py-3 text-center font-extrabold">
                          <Mark included={!proOnly} includedLabel={t.compare.included} missingLabel={t.compare.notIncluded} />
                        </td>
                        <td className="px-3 py-3 text-center font-extrabold text-[var(--accent)]">
                          <Mark included includedLabel={t.compare.included} missingLabel={t.compare.notIncluded} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-extrabold text-[var(--ink)]">{t.compare.blurb}</p>
            <p className="mt-3 text-xs font-semibold leading-relaxed text-[var(--muted)]">{t.compare.smallPrint}</p>
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-8">
          <div className="playful-card px-8 py-14 text-center md:px-16">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">{t.privacy.title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold leading-relaxed text-[var(--muted)]">
              {t.privacy.body}
            </p>
            <Link
              to="/privacy"
              className="text-lg font-extrabold text-[var(--accent)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {t.privacy.link}
            </Link>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl">{t.faq.heading}</h2>
          <div className="space-y-3">
            {t.faq.items.map((item) => (
              <details key={item.q} className="playful-card group p-5">
                <summary className="cursor-pointer list-none font-extrabold text-[var(--ink)] marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                  {item.q}
                </summary>
                <p className="mt-3 font-semibold leading-relaxed text-[var(--muted)]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function Mark({ included, includedLabel, missingLabel }) {
  return (
    <span aria-label={included ? includedLabel : missingLabel}>
      {included ? '✓' : '—'}
    </span>
  )
}

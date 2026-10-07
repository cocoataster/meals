import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { Calendar, Camera, Download, Search, Sparkles, UtensilsCrossed } from 'lucide-react'
import { PhoneFrame, AppPreview } from './components/PhoneFrame'
import { FeatureCard } from './components/FeatureCard'
import { SiteFooter, SiteHeader } from './components/SiteChrome'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import appStoreBadge from './assets/appstore.png'

const Fade = motion.div

const features = [
  {
    icon: <Sparkles size={22} />,
    title: 'Brand new look',
    description: 'Warm colors, rounded photo cards, and a lighter layout from the meals library to the week plan.',
  },
  {
    icon: <Search size={22} />,
    title: 'Search everything',
    description: 'The Search tab finds a meal by name, or by the day and period it is planned.',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Your week, your start day',
    description: 'Choose the day the plan begins. The list and the week calendar follow that choice.',
  },
  {
    icon: <Download size={22} />,
    title: 'Export your data',
    description: 'Save your meals and the weekly plan as a JSON file you can keep.',
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: 'Breakfast, lunch, and dinner',
    description: 'Assign meals to each part of the day and review the whole week on one page.',
  },
  {
    icon: <Camera size={22} />,
    title: 'Photos, time, and calories',
    description: 'A picture, a name, prep time, and notes. Calories stay optional.',
  },
]

function Home({ darkMode, setDarkMode }) {
  useEffect(() => {
    if (window.location.hash === '#features') {
      document.getElementById('features')?.scrollIntoView()
    }
  }, [])

  return (
    <div className="app-canvas flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Fade
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-extrabold text-[var(--accent)]">
                <Sparkles size={14} />
                New in 2.0
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                Your meals.
                <br />
                The whole week.
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-lg font-semibold leading-relaxed text-[var(--muted)] lg:mx-0">
                Save the meals you cook, plan breakfast, lunch, and dinner, and find any of them from Search. Everything stays on your iPhone.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="https://apps.apple.com/app/id1612862108"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto" />
                </a>
                <a
                  href="#features"
                  className="rounded-full px-6 py-3 text-base font-extrabold text-[var(--accent)] ring-2 ring-[var(--accent)]/40 transition-colors hover:bg-[var(--accent-soft)]"
                >
                  See what’s new
                </a>
              </div>
              <div className="playful-card mx-auto mt-8 inline-flex items-center gap-3 p-4 text-left lg:mx-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Search size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--muted)]">Search</p>
                  <p className="text-base font-extrabold">Pancakes · Monday</p>
                </div>
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
              <PhoneFrame>
                <AppPreview />
              </PhoneFrame>
            </Fade>
          </div>
        </div>

        <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">A fresher Meals</h2>
            <p className="mx-auto max-w-2xl text-lg font-semibold text-[var(--muted)]">
              Version 2.0 redesigns the app and adds search, a week that starts when you want, and a way to take your data with you.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} delay={0.08 * index} {...feature} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="playful-card px-8 py-14 text-center md:px-16">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-[var(--accent-soft)] text-[var(--accent)]">
              <Sparkles size={28} />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Your data stays yours</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold leading-relaxed text-[var(--muted)]">
              Meals does not collect personal data. Your meals and weekly plan stay on your iPhone, and you can export them whenever you want. No account required.
            </p>
            <Link to="/privacy" className="text-lg font-extrabold text-[var(--accent)] hover:underline">
              Read the Privacy Policy
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event) => setDarkMode(event.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/privacy" element={<PrivacyPolicy darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/terms" element={<TermsOfService darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </Router>
  )
}

export default App

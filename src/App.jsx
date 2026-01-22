import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Calendar, ShoppingCart, ChefHat, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PhoneFrame, AppScreenshotPlaceholder } from './components/PhoneFrame'
import { FeatureCard } from './components/FeatureCard'
import appIcon from './assets/appicon.png'
import appStoreBadge from './assets/appstore.png'

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <img src={appIcon} alt="Meals" className="w-full h-full object-cover" />
            </div>
            Meals
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-xs font-medium text-yellow-700 dark:text-yellow-400 mb-6 border border-yellow-200 dark:border-yellow-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Plan. Shop. Cook.
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 leading-[1.2] pb-2">
                Meal planning <br /> done right.
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Organize your weekly meals, generate shopping lists automatically, and discover new recipes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/es/app/meals-weekly-planner/id1612862108"
                  className="hover:scale-105 transition-transform active:scale-95 transition-all duration-300"
                >
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-[52px] w-auto"
                  />
                </a>
                <button className="px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-300">
                  Learn more
                </button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image / Phone Frame */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <PhoneFrame>
                <AppScreenshotPlaceholder />
              </PhoneFrame>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/3 -right-6 lg:-right-12 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                    <ChefHat size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Weekly Plan</p>
                    <p className="font-bold text-lg text-zinc-900 dark:text-white">Ready</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simplify Your Kitchen</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Everything you need to master your meal prep routine.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              delay={0.2}
              icon={<Calendar className="text-yellow-500" />}
              title="Weekly Planner"
              description="Drag and drop meals to plan your week in seconds. Keep track of breakfast, lunch, and dinner."
            />
            <FeatureCard
              delay={0.4}
              icon={<ShoppingCart className="text-orange-500" />}
              title="Auto Shopping List"
              description="Ingredients are automatically added to your shopping list when you plan a meal."
            />
            <FeatureCard
              delay={0.6}
              icon={<ChefHat className="text-green-500" />}
              title="Recipe Organizer"
              description="Save your favorite recipes, add photos, and keep everything in one place."
            />
          </div>
        </section>

        {/* Privacy Preview */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-8 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-500 mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Your Data Stays Yours</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Privacy isn't a feature; it's a foundation. Meals collects <strong>zero data</strong>.
              Everything remains on your device and iCloud.
            </p>
            <Link
              to="/privacy"
              className="text-yellow-500 font-medium hover:underline text-lg inline-flex items-center gap-2"
            >
              Read our full Privacy Policy
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50 rounded-3xl p-8 mb-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <img src={appIcon} alt="Meals" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Meals</span>
            </div>
            <p className="text-zinc-500 text-sm">Meal planning done right.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
            <a href="mailto:meals@cocoataster.com" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center text-zinc-400 text-xs">
          &copy; {new Date().getFullYear()} Meals App. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'

function App() {
  // Default to dark mode as requested, but also check system preference
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check system preference initially
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)

    // Listen for OS theme changes
    const handler = (e) => setDarkMode(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App

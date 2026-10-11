import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'

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

  const theme = { darkMode, setDarkMode }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home locale="en" {...theme} />} />
        <Route path="/es" element={<Home locale="es" {...theme} />} />
        <Route path="/ca" element={<Home locale="ca" {...theme} />} />
        <Route path="/privacy" element={<PrivacyPolicy {...theme} />} />
        <Route path="/terms" element={<TermsOfService {...theme} />} />
      </Routes>
    </Router>
  )
}

export default App

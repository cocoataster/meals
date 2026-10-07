import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// GitHub Pages also serves these routes at /privacy.html. Drop the extension
// before the router reads the address so both URLs render the same page.
const { pathname, search, hash } = window.location
if (pathname.endsWith('.html') && !pathname.endsWith('/index.html')) {
  const cleanPath = pathname.slice(0, -'.html'.length) || '/'
  window.history.replaceState(null, '', `${cleanPath}${search}${hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

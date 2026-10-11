import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// GitHub Pages also serves these routes at /privacy.html and /privacy/.
// Normalize both to the React Router path before the app reads the address.
const { pathname, search, hash } = window.location
let nextPath = pathname
if (nextPath.endsWith('.html') && !nextPath.endsWith('/index.html')) {
  nextPath = nextPath.slice(0, -'.html'.length) || '/'
}
const base = import.meta.env.BASE_URL
if (nextPath.endsWith('/') && nextPath !== '/' && nextPath !== base) {
  nextPath = nextPath.slice(0, -1)
}
if (nextPath !== pathname) {
  window.history.replaceState(null, '', `${nextPath}${search}${hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

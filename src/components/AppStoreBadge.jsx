import { APP_STORE_URL } from '../i18n'
import badgeEn from '../assets/badges/en.svg'
import badgeEs from '../assets/badges/es.svg'
import badgeCa from '../assets/badges/ca.svg'

const badges = { en: badgeEn, es: badgeEs, ca: badgeCa }

export function AppStoreBadge({ locale, label, className = '' }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-block transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] active:scale-95 ${className}`}
    >
      <img src={badges[locale] ?? badges.en} alt={label} className="h-[52px] w-auto" />
    </a>
  )
}

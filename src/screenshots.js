// App Store Connect 2.0 screenshots live at:
// public/screenshots/asc/{iphone-63,iphone-67,iphone-duo,ipad-13}/{en,es,ca}
export const SCREENSHOT_DEVICES = ['iphone-67', 'iphone-63', 'iphone-duo', 'ipad-13']

export function screenshotSrc(device, locale, file) {
  const base = import.meta.env.BASE_URL
  return `${base}screenshots/asc/${device}/${locale}/${file}`
}

export function screenshotsFor(manifest, locale) {
  const items = []
  for (const device of SCREENSHOT_DEVICES) {
    const files = manifest[`${device}/${locale}`] ?? []
    for (const file of files) {
      items.push({
        device,
        file,
        src: screenshotSrc(device, locale, file),
        kind: device === 'ipad-13' ? 'ipad' : 'iphone',
      })
    }
  }
  return items
}

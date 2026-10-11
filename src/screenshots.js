export const SCREENSHOT_WIDTH = 660
export const SCREENSHOT_HEIGHT = 1434
export const SCREENSHOT_FILES = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp']

export function screenshotsFor(locale, alts) {
  const base = import.meta.env.BASE_URL
  return SCREENSHOT_FILES.map((file, index) => ({
    file,
    src: `${base}screenshots/asc/${locale}/${file}`,
    alt: alts[index] ?? alts[0],
  }))
}

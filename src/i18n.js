import { APP_STORE_URL, MEALS_20_LAUNCHED, SITE_ORIGIN } from './config.js'

export { APP_STORE_URL, MEALS_20_LAUNCHED, SITE_ORIGIN }

export const LOCALES = ['en', 'es', 'ca']

export const localeMeta = {
  en: { htmlLang: 'en', hreflang: 'en', path: '/', switcher: 'EN' },
  es: { htmlLang: 'es', hreflang: 'es-ES', path: '/es', switcher: 'ES' },
  ca: { htmlLang: 'ca', hreflang: 'ca', path: '/ca', switcher: 'CA' },
}

const copy = {
  en: {
    title: 'Meals: Free, Private Weekly Meal Planner for iPhone & iPad',
    description:
      'Plan your week of meals in minutes. Free, no account, Data Not Collected. Meals Pro adds a grocery list, iCloud sync, recipe import and a widget.',
    hero: {
      eyebrow: { prelaunch: 'Meals 2.0 · Coming soon', launch: 'Meals 2.0 · Out now' },
      headline: 'Plan your week. Skip the "what\'s for dinner?"',
      subheadline: 'Meals is the free, private weekly meal planner for iPhone and iPad. No account needed.',
      status: {
        prelaunch: 'Meals 2.0, a full redesign with optional Meals Pro, is coming soon as a free update.',
        launch: 'Meals 2.0 is here: a full redesign, plus optional Meals Pro.',
      },
      cta: { prelaunch: 'Get Meals on the App Store', launch: 'Download free on the App Store' },
    },
    benefits: [
      {
        title: 'Your whole week at a glance.',
        body: 'Breakfast, lunch and dinner for every day, with several dishes per meal.',
      },
      {
        title: 'Find any recipe fast.',
        body: 'Save recipes with photos and ingredients, then search and filter them by tag.',
      },
      {
        title: 'Share it or put it on the fridge.',
        body: 'Share or print your week plan as a PDF or image.',
      },
    ],
    compare: {
      free: 'Free',
      pro: 'Meals Pro',
      featureLabel: 'Feature',
      included: 'Included',
      notIncluded: 'Not included',
      rows: [
        'Week plan with calendar picker and your own week start',
        'Recipes with photos and ingredients',
        'Several dishes per meal',
        'Search, tags and filters',
        'Share or print your week (PDF or image)',
        'Export and import your data as JSON',
        'Grocery list built from your week: by category, check off, share',
        "Today's meals widget and a daily reminder",
        'Import recipes from Safari with the share sheet',
        'Private iCloud sync across your devices',
      ],
      proIn: [false, false, false, false, false, false, true, true, true, true],
      blurb: 'Meals Pro: an annual plan with a 7-day free trial, or a one-time lifetime purchase. Everything else in Meals stays free.',
      smallPrint:
        'Payment is charged to your Apple Account. The subscription renews automatically unless you cancel it at least 24 hours before the end of the current period. Manage or cancel it in your Apple Account settings.',
    },
    privacy: {
      title: 'Your meals stay yours.',
      body: 'No account and no sign-up. The App Store privacy label is "Data Not Collected". Your plans stay on your device, and with Meals Pro they sync through your own private iCloud. You can export everything as JSON at any time.',
      link: 'Read the Privacy Policy',
    },
    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Is Meals free?',
          a: 'Yes. Planning, recipes, search, tags, sharing, printing, and JSON export and import are all free. Meals Pro is optional.',
        },
        {
          q: 'What does Meals Pro add?',
          a: "A grocery list built from your week, a today's meals widget with a daily reminder, recipe import from Safari, and private iCloud sync across your devices.",
        },
        {
          q: 'How does Meals Pro work?',
          a: 'Choose an annual plan with a 7-day free trial (for eligible users) or a one-time lifetime purchase. Prices are shown in the app. You can cancel the annual plan anytime in your Apple Account settings.',
        },
        {
          q: 'Do I need an account?',
          a: 'No. Meals works right away, with no sign-up. Meals Pro uses your own iCloud, not a Meals account.',
        },
        {
          q: 'Can I move my meals to a new iPhone?',
          a: 'Yes. With Meals Pro they sync through iCloud. On the free plan, export your data as JSON and import it back from Settings.',
        },
      ],
    },
    footer: {
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      appStore: 'Meals on the App Store',
    },
    chrome: {
      skip: 'Skip to content',
      language: 'Language',
    },
    screenshots: {
      hero: 'Meals on iPhone',
      iphone: 'Meals on iPhone',
      ipad: 'Meals on iPad',
    },
  },
  es: {
    title: 'Meals: planificador semanal de menús gratis y privado',
    description:
      'Planifica tu semana de comidas en minutos. Gratis, sin cuenta y sin recopilar datos. Meals Pro añade lista de la compra, sincronización con iCloud y más.',
    hero: {
      eyebrow: { prelaunch: 'Meals 2.0 · Muy pronto', launch: 'Meals 2.0 · Ya disponible' },
      headline: 'Planifica tu semana y olvídate del «¿qué cenamos?»',
      subheadline: 'Meals es el planificador semanal de menús gratis y privado para iPhone y iPad. Sin necesidad de cuenta.',
      status: {
        prelaunch: 'Muy pronto llega Meals 2.0, con un diseño renovado y Meals Pro opcional, como actualización gratuita.',
        launch: 'Ya está aquí Meals 2.0: diseño renovado y Meals Pro opcional.',
      },
      cta: { prelaunch: 'Descarga Meals en el App Store', launch: 'Descarga Meals gratis en el App Store' },
    },
    benefits: [
      {
        title: 'Toda tu semana, de un vistazo.',
        body: 'Desayuno, comida y cena para cada día, con varios platos en cada una.',
      },
      {
        title: 'Encuentra cualquier receta al momento.',
        body: 'Guarda recetas con fotos e ingredientes, y búscalas o fíltralas por etiquetas.',
      },
      {
        title: 'Para compartir o para la nevera.',
        body: 'Comparte o imprime tu plan semanal en PDF o imagen.',
      },
    ],
    compare: {
      free: 'Gratis',
      pro: 'Meals Pro',
      featureLabel: 'Función',
      included: 'Incluido',
      notIncluded: 'No incluido',
      rows: [
        'Plan semanal con selector de calendario y el día de inicio que prefieras',
        'Recetas con fotos e ingredientes',
        'Varios platos por comida',
        'Búsqueda, etiquetas y filtros',
        'Comparte o imprime tu semana (PDF o imagen)',
        'Exporta e importa tus datos en JSON',
        'Lista de la compra a partir de tu semana: por categorías, para marcar y compartir',
        'Widget con las comidas de hoy y recordatorio diario',
        'Importa recetas desde Safari con el menú Compartir',
        'Sincronización privada con iCloud entre tus dispositivos',
      ],
      proIn: [false, false, false, false, false, false, true, true, true, true],
      blurb: 'Meals Pro: suscripción anual con 7 días de prueba gratis o compra única de por vida. Todo lo demás en Meals sigue siendo gratis.',
      smallPrint:
        'El pago se carga en tu cuenta de Apple. La suscripción se renueva automáticamente salvo que la canceles al menos 24 horas antes del final del periodo actual. Puedes gestionarla o cancelarla en los ajustes de tu cuenta de Apple.',
    },
    privacy: {
      title: 'Tus comidas son solo tuyas.',
      body: 'Sin cuenta y sin registro. La etiqueta de privacidad del App Store indica «Datos no recopilados». Tus planes se quedan en tu dispositivo y, con Meals Pro, se sincronizan a través de tu propio iCloud privado. Puedes exportarlo todo en JSON cuando quieras.',
      link: 'Lee la política de privacidad',
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Meals es gratis?',
          a: 'Sí. Planificar, guardar recetas, buscar, usar etiquetas, compartir, imprimir y exportar o importar en JSON es gratis. Meals Pro es opcional.',
        },
        {
          q: '¿Qué añade Meals Pro?',
          a: 'Lista de la compra creada a partir de tu semana, widget con las comidas de hoy y recordatorio diario, importación de recetas desde Safari y sincronización privada con iCloud entre tus dispositivos.',
        },
        {
          q: '¿Cómo funciona Meals Pro?',
          a: 'Elige la suscripción anual con 7 días de prueba gratis (si cumples los requisitos) o la compra única de por vida. Verás los precios en la app. Puedes cancelar la suscripción cuando quieras desde los ajustes de tu cuenta de Apple.',
        },
        {
          q: '¿Necesito crear una cuenta?',
          a: 'No. Meals funciona desde el primer momento, sin registro. Meals Pro usa tu propio iCloud, no una cuenta de Meals.',
        },
        {
          q: '¿Puedo pasar mis comidas a un iPhone nuevo?',
          a: 'Sí. Con Meals Pro se sincronizan por iCloud. En la versión gratuita, exporta tus datos en JSON e impórtalos desde Ajustes.',
        },
      ],
    },
    footer: {
      terms: 'Condiciones de uso',
      privacy: 'Política de privacidad',
      appStore: 'Meals en el App Store',
    },
    chrome: {
      skip: 'Saltar al contenido',
      language: 'Idioma',
    },
    screenshots: {
      hero: 'Meals en iPhone',
      iphone: 'Meals en iPhone',
      ipad: 'Meals en iPad',
    },
  },
  ca: {
    title: 'Meals: planificador setmanal de menús gratuït i privat',
    description:
      'Planifica els menjars de la setmana en minuts. Gratuït, sense compte i sense recollir dades. Meals Pro afegeix llista de la compra, iCloud, widget i més.',
    hero: {
      eyebrow: { prelaunch: 'Meals 2.0 · Molt aviat', launch: 'Meals 2.0 · Ja disponible' },
      headline: 'Planifica la setmana i oblida\'t del «què sopem?»',
      subheadline: 'Meals és el planificador setmanal de menús gratuït i privat per a iPhone i iPad. No cal cap compte.',
      status: {
        prelaunch: 'Molt aviat arriba Meals 2.0, amb un disseny renovat i Meals Pro opcional, com a actualització gratuïta.',
        launch: 'Ja és aquí Meals 2.0: disseny renovat i Meals Pro opcional.',
      },
      cta: { prelaunch: 'Descarrega Meals a l\'App Store', launch: 'Descarrega Meals gratis a l\'App Store' },
    },
    benefits: [
      {
        title: 'Tota la setmana d\'un cop d\'ull.',
        body: 'Esmorzar, dinar i sopar per a cada dia, amb diversos plats a cada àpat.',
      },
      {
        title: 'Troba qualsevol recepta en un moment.',
        body: 'Desa receptes amb fotos i ingredients, i cerca-les o filtra-les per etiquetes.',
      },
      {
        title: 'Per compartir o per a la nevera.',
        body: 'Comparteix o imprimeix el pla setmanal en PDF o imatge.',
      },
    ],
    compare: {
      free: 'Gratuït',
      pro: 'Meals Pro',
      featureLabel: 'Funció',
      included: 'Inclòs',
      notIncluded: 'No inclòs',
      rows: [
        'Pla setmanal amb selector de calendari i el dia d\'inici que vulguis',
        'Receptes amb fotos i ingredients',
        'Diversos plats per àpat',
        'Cerca, etiquetes i filtres',
        'Comparteix o imprimeix la setmana (PDF o imatge)',
        'Exporta i importa les teves dades en JSON',
        'Llista de la compra a partir de la setmana: per categories, per marcar i compartir',
        'Widget amb els menjars d\'avui i recordatori diari',
        'Importa receptes des de Safari amb el menú Compartir',
        'Sincronització privada amb iCloud entre els teus dispositius',
      ],
      proIn: [false, false, false, false, false, false, true, true, true, true],
      blurb: 'Meals Pro: subscripció anual amb 7 dies de prova gratuïta o compra única per sempre. Tota la resta de Meals continua sent gratuït.',
      smallPrint:
        'El pagament es carrega al teu compte d\'Apple. La subscripció es renova automàticament tret que la cancel·lis com a mínim 24 hores abans del final del període actual. Pots gestionar-la o cancel·lar-la a la configuració del teu compte d\'Apple.',
    },
    privacy: {
      title: 'Els teus menjars són només teus.',
      body: 'Sense compte i sense registre. L\'etiqueta de privadesa de l\'App Store indica «Dades no recollides». Els teus plans es queden al dispositiu i, amb Meals Pro, se sincronitzen a través del teu propi iCloud privat. Ho pots exportar tot en JSON quan vulguis.',
      link: 'Llegeix la política de privadesa',
    },
    faq: {
      heading: 'Preguntes freqüents',
      items: [
        {
          q: 'Meals és gratuït?',
          a: 'Sí. Planificar, desar receptes, cercar, fer servir etiquetes, compartir, imprimir i exportar o importar en JSON és gratuït. Meals Pro és opcional.',
        },
        {
          q: 'Què afegeix Meals Pro?',
          a: 'Llista de la compra creada a partir de la setmana, widget amb els menjars d\'avui i recordatori diari, importació de receptes des de Safari i sincronització privada amb iCloud entre els teus dispositius.',
        },
        {
          q: 'Com funciona Meals Pro?',
          a: 'Tria la subscripció anual amb 7 dies de prova gratuïta (si hi tens dret) o la compra única per sempre. Veuràs els preus a l\'app. Pots cancel·lar la subscripció quan vulguis des de la configuració del teu compte d\'Apple.',
        },
        {
          q: 'Cal crear un compte?',
          a: 'No. Meals funciona des del primer moment, sense registre. Meals Pro fa servir el teu propi iCloud, no un compte de Meals.',
        },
        {
          q: 'Puc passar els meus menjars a un iPhone nou?',
          a: 'Sí. Amb Meals Pro se sincronitzen per iCloud. A la versió gratuïta, exporta les dades en JSON i importa-les des d\'Ajustos.',
        },
      ],
    },
    footer: {
      terms: 'Condicions d\'ús',
      privacy: 'Política de privadesa',
      appStore: 'Meals a l\'App Store',
    },
    chrome: {
      skip: 'Salta al contingut',
      language: 'Idioma',
    },
    screenshots: {
      hero: 'Meals a l\'iPhone',
      iphone: 'Meals a l\'iPhone',
      ipad: 'Meals a l\'iPad',
    },
  },
}

export function localeFromPath(pathname) {
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  if (pathname === '/ca' || pathname.startsWith('/ca/')) return 'ca'
  return 'en'
}

export function pageCopy(locale) {
  const t = copy[locale] ?? copy.en
  const phase = MEALS_20_LAUNCHED ? 'launch' : 'prelaunch'
  return {
    ...t,
    htmlLang: localeMeta[locale]?.htmlLang ?? 'en',
    eyebrow: t.hero.eyebrow[phase],
    status: t.hero.status[phase],
    cta: t.hero.cta[phase],
    headline: t.hero.headline,
    subheadline: t.hero.subheadline,
  }
}

export function hreflangTags() {
  return LOCALES.map((locale) => {
    const meta = localeMeta[locale]
    const href = meta.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${meta.path}/`
    return { hreflang: meta.hreflang, href }
  })
}

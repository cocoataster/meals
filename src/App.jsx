import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { DeviceShot } from './components/PhoneFrame'
import { StepCard } from './components/FeatureCard'
import { APP_STORE_URL, SiteFooter, SiteHeader } from './components/SiteChrome'
import appStoreBadge from './assets/appstore.png'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import addShot from './assets/screens/add.webp'
import findShot from './assets/screens/find.webp'
import chooseShot from './assets/screens/choose.webp'
import planShot from './assets/screens/plan.webp'

const features = [
  {
    id: 'add',
    kicker: 'Add',
    title: 'Take a picture, name your meal, and add a few details.',
    text: 'Capture the dishes you already cook. A photo, a name, how long it takes, the calories, and any notes you want to remember next time.',
    image: addShot,
    alt: 'New Meal screen with a photo of pancakes, a name field, and sections for image and information.',
  },
  {
    id: 'find',
    kicker: 'Find',
    title: 'Search or filter the meals you actually make.',
    text: 'Your cookbook stays short and personal. Search by name, or filter the list, when you want that one dish and not a catalogue of recipes you will never cook.',
    image: findShot,
    alt: 'Meals list with search, a filter button, and cards showing cook time and calories.',
  },
  {
    id: 'choose',
    kicker: 'Choose',
    title: 'What do you fancy? Make the choice.',
    text: 'Pick breakfast, lunch, or dinner for the day. Each meal shows its photo, time, and calories, so the decision takes a second.',
    image: chooseShot,
    alt: 'Monday meal picker with breakfast, lunch, and dinner buttons under each dish.',
  },
  {
    id: 'plan',
    kicker: 'Plan',
    title: 'See the whole week, one day at a time.',
    text: 'The week plan lines up what you chose, with cook time and calories on the photo. Keep a different plan for every week of the year.',
    image: planShot,
    alt: 'Week Plan for Monday showing pancakes for breakfast and pizza for lunch, each with time and calories.',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#1C1C1E]">
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-8 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c23b32]">Weekly meal planner</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Plan the meals you already love.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#5E686C]">
              Add a photo, keep the time and calories, then choose breakfast, lunch, and dinner. Meals turns the dishes you cook into a week you can see.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={APP_STORE_URL} className="inline-flex transition-transform hover:scale-[1.03]">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-[52px] w-auto" />
              </a>
              <a href="#features" className="text-sm font-semibold text-[#1C1C1E] underline decoration-black/20 underline-offset-4 hover:decoration-black">
                See Add, Find, Choose, Plan
              </a>
            </div>
          </div>
          <DeviceShot
            src={planShot}
            alt="Week Plan on iPhone, with Monday's breakfast and lunch."
          />
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard kicker="Add" title="A photo and the details" text="Name the meal, set the time and calories, and keep a note." />
            <StepCard kicker="Find" title="Your own cookbook" text="Search and filter the list of meals you like to cook." />
            <StepCard kicker="Choose" title="Breakfast, lunch, dinner" text="Assign a meal to the slot you need for that day." />
            <StepCard kicker="Plan" title="Every week of the year" text="A plan for each week, with time and calories on each dish." />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-20 px-5 pb-20">
          {features.map((feature, index) => (
            <section
              id={feature.id}
              key={feature.id}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c23b32]">{feature.kicker}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{feature.title}</h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-[#5E686C]">{feature.text}</p>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <DeviceShot src={feature.image} alt={feature.alt} />
              </div>
            </section>
          ))}
        </div>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-[2rem] bg-[#1C1C1E] px-8 py-12 text-center text-[#FAF5EF] sm:px-16">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your meals stay on your iPhone.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Meals collects no data. There is no account to create, and nothing you add is sent to us.
            </p>
            <Link to="/privacy" className="mt-6 inline-flex text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Read the privacy policy
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App

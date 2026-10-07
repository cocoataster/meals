import { motion } from 'framer-motion'
import { BatteryFull, Calendar, Flame, List, Plus, Search, Settings, Signal, SlidersHorizontal, Timer, Wifi } from 'lucide-react'
import pancakes from '../assets/meals/pancakes.jpg'
import noodles from '../assets/meals/noodles.jpg'
import gardenBowl from '../assets/meals/garden-bowl.jpg'
import pastaNight from '../assets/meals/pasta-night.jpg'

const Rise = motion.div

const meals = [
  { name: 'Pancakes', time: '15 min', kcal: '420', image: pancakes },
  { name: 'Noodles', time: '25 min', kcal: '680', image: noodles },
  { name: 'Garden Bowl', time: '12 min', kcal: '310', image: gardenBowl },
  { name: 'Pasta Night', time: '40 min', kcal: '720', image: pastaNight },
]

export function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto h-[640px] w-[300px] overflow-hidden rounded-[2.6rem] border-[14px] border-zinc-900 bg-zinc-900 shadow-2xl ring-1 ring-white/10">
      <div className="absolute left-1/2 top-0 z-20 flex h-[28px] w-[108px] -translate-x-1/2 items-center justify-end rounded-b-[16px] bg-black pr-3">
        <div className="h-[8px] w-[8px] rounded-full bg-[#1c1c1c]" />
      </div>
      <div className="absolute left-0 right-0 top-2 z-10 flex items-center justify-between px-5 text-[10px] font-extrabold text-[var(--ink)]">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <Signal size={10} />
          <Wifi size={10} />
          <BatteryFull size={12} />
        </span>
      </div>
      <div className="h-full w-full overflow-hidden bg-[var(--canvas)]">
        {children}
      </div>
    </div>
  )
}

function MealCard({ meal }) {
  return (
    <div className="overflow-hidden rounded-[22px] bg-white/80 shadow-[0_10px_18px_rgba(0,0,0,0.16)] dark:bg-white/10">
      <div className="relative aspect-square">
        <img src={meal.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-x-1.5 bottom-1.5 flex items-center justify-between gap-1">
          <span className="inline-flex items-center gap-0.5 rounded-full bg-white/80 px-1.5 py-0.5 text-[8px] font-extrabold text-zinc-900">
            <Timer size={8} className="text-teal-600" />
            {meal.time}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-white/80 px-1.5 py-0.5 text-[8px] font-extrabold text-zinc-900">
            <Flame size={8} className="text-orange-500" />
            {meal.kcal}
          </span>
        </div>
      </div>
      <p className="px-2.5 py-2 text-left text-[13px] font-extrabold leading-tight">{meal.name}</p>
    </div>
  )
}

export function AppPreview() {
  return (
    <div className="flex h-full flex-col pt-10">
      <div className="flex items-center justify-between px-4 pb-3">
        <h2 className="text-[30px] font-extrabold leading-none tracking-tight">Meals</h2>
        <div className="flex items-center gap-2.5 text-[var(--accent)]">
          <SlidersHorizontal size={18} />
          <Plus size={20} />
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 content-start gap-2.5 overflow-hidden px-3">
        {meals.map((meal, index) => (
          <Rise
            key={meal.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + index * 0.08 }}
          >
            <MealCard meal={meal} />
          </Rise>
        ))}
      </div>

      <div className="grid grid-cols-4 border-t px-1 pb-3 pt-2 text-[9px] font-extrabold" style={{ borderColor: 'var(--line)' }}>
        <Tab icon={List} label="Meals" active />
        <Tab icon={Calendar} label="Plan" />
        <Tab icon={Settings} label="Settings" />
        <Tab icon={Search} label="Search" />
      </div>
    </div>
  )
}

function Tab({ icon, label, active = false }) {
  const Icon = icon
  return (
    <div className={`flex flex-col items-center gap-0.5 ${active ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}>
      <Icon size={16} />
      {label}
    </div>
  )
}

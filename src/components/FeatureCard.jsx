import { motion } from 'framer-motion'

const Fade = motion.div

export function FeatureCard({ icon, title, description, delay }) {
  return (
    <Fade
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="playful-card p-6"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-extrabold">{title}</h3>
      <p className="font-semibold leading-relaxed text-[var(--muted)]">{description}</p>
    </Fade>
  )
}

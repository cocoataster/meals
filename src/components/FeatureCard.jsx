export function StepCard({ kicker, title, text }) {
  return (
    <div className="rounded-3xl bg-white/70 p-5 ring-1 ring-black/5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c23b32]">{kicker}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#1C1C1E]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5E686C]">{text}</p>
    </div>
  )
}

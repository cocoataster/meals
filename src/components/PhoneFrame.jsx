export function DeviceShot({ src, alt }) {
  return (
    <div className="mx-auto w-[min(100%,300px)]">
      <div className="rounded-[2.5rem] bg-[#1c1c1e] p-[10px] shadow-[0_28px_70px_-28px_rgba(28,28,30,0.6)] ring-1 ring-black/10">
        <img src={src} alt={alt} className="aspect-[1052/1580] w-full rounded-[2rem] bg-black object-cover object-top" />
      </div>
    </div>
  )
}

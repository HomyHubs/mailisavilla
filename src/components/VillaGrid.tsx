import { villas } from '../data/villas'
import VillaCard from './VillaCard'

export default function VillaGrid() {
  return (
    <section id="cac-loai-villa" className="scroll-mt-20 bg-sand/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Các loại villa</h2>
          <p className="mt-3 text-bark/80">
            Chọn villa theo số phòng ngủ phù hợp với nhóm của bạn. Mỗi loại là một
            lựa chọn không gian và sức chứa riêng.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {villas.map((v) => (
            <VillaCard key={v.slug} villa={v} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { BedDouble, Users } from 'lucide-react'
import type { Villa } from '../data/villas'
import { coverImage } from '../data/images'

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <Link
      to={`/villa/${villa.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={coverImage(villa.slug)}
          alt={villa.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex h-full flex-col p-5">
        <h3 className="text-lg font-semibold text-forest">{villa.name}</h3>

        {/* Dòng 1: mô tả — luôn chiếm 2 dòng để các card đều nhau */}
        <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-bark/70">
          {villa.shortDesc}
        </p>

        {/* Dòng 2: số phòng ngủ · số khách — luôn chiếm 2 dòng để các card đều nhau */}
        <div className="mt-3 flex min-h-[2.75rem] flex-wrap content-start items-start gap-x-4 gap-y-1 text-sm text-bark/80">
          <span className="flex items-center gap-1">
            <BedDouble size={16} className="shrink-0 text-clay" /> {villa.bedrooms} phòng ngủ
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} className="shrink-0 text-clay" /> {villa.capacity}
          </span>
        </div>

        {/* Nút luôn nằm đáy card để thẳng hàng giữa các card */}
        <span className="mt-auto inline-block pt-3 text-sm font-semibold text-clay group-hover:underline">
          Xem chi tiết →
        </span>
      </div>
    </Link>
  )
}

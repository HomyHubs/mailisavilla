import { Link } from 'react-router-dom'
import { BedDouble, Users } from 'lucide-react'
import type { Villa } from '../data/villas'
import { coverImage } from '../data/images'

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <Link
      to={`/villa/${villa.slug}`}
      className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={coverImage(villa.slug)}
          alt={villa.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-forest">{villa.name}</h3>
        <p className="mt-1 text-sm text-bark/70">{villa.shortDesc}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-bark/80">
          <span className="flex items-center gap-1">
            <BedDouble size={16} className="text-clay" /> {villa.bedrooms} phòng ngủ
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} className="text-clay" /> {villa.capacity}
          </span>
        </div>
        <span className="mt-4 inline-block text-sm font-semibold text-clay group-hover:underline">
          Xem chi tiết →
        </span>
      </div>
    </Link>
  )
}

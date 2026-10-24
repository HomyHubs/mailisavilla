import { Link } from 'react-router-dom'
import { BedDouble, Users } from 'lucide-react'
import type { Villa } from '../data/villas'
import { coverImage } from '../data/images'

export default function VillaCard({ villa }: { villa: Villa }) {
  return (
    <Link
      to={`/villa/${villa.slug}`}
      className="group block overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:shadow-md"
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

        {/* Mô tả — giãn cách khỏi tiêu đề + giãn dòng cho thoáng; luôn 2 dòng để card đều nhau */}
        <p className="mt-2.5 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-bark/70">
          {villa.shortDesc}
        </p>

        {/* Thông tin: mỗi mục một dòng riêng, canh giữa cho cân đối */}
        <div className="mt-3 space-y-1 text-sm text-bark/80">
          <div className="flex items-center justify-center gap-1">
            <BedDouble size={16} className="shrink-0 text-clay" /> {villa.bedrooms} phòng ngủ
          </div>
          <div className="flex items-center justify-center gap-1">
            <Users size={16} className="shrink-0 text-clay" /> {villa.capacity}
          </div>
        </div>

        {/* Nút nằm đáy card, cách phần trên vừa phải */}
        <span className="mt-4 inline-block text-sm font-semibold text-clay group-hover:underline">
          Xem chi tiết →
        </span>
      </div>
    </Link>
  )
}

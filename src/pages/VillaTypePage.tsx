import { useParams, Link } from 'react-router-dom'
import { BedDouble, Users } from 'lucide-react'
import { getVilla } from '../data/villas'
import { galleryImages, coverImage, type VillaSlug } from '../data/images'
import Gallery from '../components/Gallery'
import Amenities from '../components/Amenities'
import BookingCTA from '../components/BookingCTA'

export default function VillaTypePage() {
  const { slug } = useParams<{ slug: string }>()
  const villa = slug ? getVilla(slug) : undefined

  if (!villa) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Không tìm thấy loại villa</h1>
        <p className="mt-3 text-bark/70">
          Loại villa bạn tìm không tồn tại. Vui lòng quay lại trang chủ.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream"
        >
          Về trang chủ
        </Link>
      </section>
    )
  }

  const images = galleryImages(villa.slug as VillaSlug)

  return (
    <article>
      {/* Hero ảnh cover của loại villa */}
      <section className="relative h-[46vh] overflow-hidden">
        <img
          src={coverImage(villa.slug as VillaSlug)}
          alt={villa.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 py-8 text-cream">
          <h1 className="font-serif text-3xl font-bold text-cream md:text-5xl">
            {villa.name}
          </h1>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1">
              <BedDouble size={18} /> {villa.bedrooms} phòng ngủ
            </span>
            <span className="flex items-center gap-1">
              <Users size={18} /> {villa.capacity}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-3">
        {/* Nội dung chính */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">Giới thiệu</h2>
          <p className="mt-3 text-bark/80">{villa.longDesc}</p>

          <h2 className="mt-10 text-2xl font-bold">Tiện ích</h2>
          <div className="mt-4">
            <Amenities items={villa.amenities} />
          </div>

          <h2 className="mt-10 text-2xl font-bold">Hình ảnh</h2>
          <p className="mt-1 text-sm text-bark/60">Bấm vào ảnh để xem lớn.</p>
          <div className="mt-4">
            <Gallery images={images} alt={villa.name} />
          </div>
        </div>

        {/* Sidebar đặt phòng (dính khi cuộn ở desktop) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BookingCTA villaName={villa.name} />
        </aside>
      </div>
    </article>
  )
}

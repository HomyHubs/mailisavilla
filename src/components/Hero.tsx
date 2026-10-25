import { contact } from '../config/contact'
import { coverImage } from '../data/images'
import { zaloLink, bookingMessage } from '../lib/booking'

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden sm:min-h-[72vh]">
      <img
        src={coverImage('7pn')}
        alt="Mailisa Villa Đà Lạt"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-bark/40 to-bark/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-cream">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-cream/80 sm:text-sm sm:tracking-[0.3em]">
          Villa Đà Lạt
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-cream drop-shadow sm:text-5xl md:text-6xl">
          {contact.brand}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-cream/90 sm:text-lg md:text-xl">
          {contact.tagline}. Không gian nghỉ dưỡng cho gia đình và những chuyến đi
          đáng nhớ.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="#cac-loai-villa"
            className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest shadow transition hover:bg-sand"
          >
            Xem các villa
          </a>
          <a
            href={zaloLink(bookingMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream shadow transition hover:bg-bark"
          >
            Đặt phòng ngay
          </a>
        </div>
      </div>
    </section>
  )
}

import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews'

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-2 flex items-center justify-center gap-1 text-clay">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">Khách nói gì về chúng tôi</h2>
        <p className="mt-3 text-bark/80">
          Những chia sẻ thật từ các đoàn khách đã lưu trú tại Mailisa Villa.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviews.map((r, i) => (
          <figure
            key={i}
            className="relative rounded-2xl border border-sand bg-white p-6 shadow-sm"
          >
            <Quote className="mb-3 text-clay/50" size={28} />
            <blockquote className="text-bark/80">{r.text}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-forest">
              — {r.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

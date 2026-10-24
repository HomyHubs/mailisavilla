import { Trees, Flame, Utensils, Wifi } from 'lucide-react'

const highlights = [
  { icon: Trees, title: 'Sân vườn rộng', desc: 'Không gian xanh, thoáng đãng giữa Đà Lạt.' },
  { icon: Flame, title: 'Khu BBQ', desc: 'Tổ chức tiệc nướng ngoài trời ấm cúng.' },
  { icon: Utensils, title: 'Bếp đầy đủ', desc: 'Tự nấu những bữa ăn quây quần cùng nhau.' },
  { icon: Wifi, title: 'Tiện nghi đầy đủ', desc: 'Wifi, chỗ đậu xe và hỗ trợ tận tình.' },
]

export default function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Sống chậm giữa Đà Lạt</h2>
        <p className="mt-4 text-bark/80">
          Mailisa Villa mang đến những căn villa ấm cúng, gần gũi thiên nhiên — nơi
          bạn và người thân có thể thật sự thư giãn, tận hưởng tiết trời se lạnh và
          những khoảnh khắc bên nhau.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-sand bg-white/60 p-6 text-center shadow-sm"
          >
            <h.icon className="mx-auto mb-3 text-clay" size={32} />
            <h3 className="text-base font-semibold text-forest">{h.title}</h3>
            <p className="mt-1 text-sm text-bark/70">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

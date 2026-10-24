import { Check } from 'lucide-react'

export default function Amenities({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((it) => (
        <li
          key={it}
          className="flex items-center gap-2 rounded-lg border border-sand bg-white/60 px-3 py-2 text-sm text-bark/80"
        >
          <Check size={16} className="shrink-0 text-clay" />
          {it}
        </li>
      ))}
    </ul>
  )
}

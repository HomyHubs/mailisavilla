import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { contact } from '../config/contact'
import { villas } from '../data/villas'
import { zaloLink, bookingMessage } from '../lib/booking'

const navBase =
  'px-3 py-2 text-sm font-medium transition-colors hover:text-clay'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = (
    <>
      <NavLink to="/" className={navBase} onClick={() => setOpen(false)}>
        Trang chủ
      </NavLink>
      {villas.map((v) => (
        <NavLink
          key={v.slug}
          to={`/villa/${v.slug}`}
          className={navBase}
          onClick={() => setOpen(false)}
        >
          {v.bedrooms} PN
        </NavLink>
      ))}
    </>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-bold text-forest">
            {contact.brand}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-clay">
            Đà Lạt
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links}
          <a
            href={zaloLink(bookingMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-clay px-4 py-2 text-sm font-semibold text-cream shadow-sm transition hover:bg-bark"
          >
            Đặt phòng
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-sand/70 bg-cream px-4 py-3 md:hidden">
          {links}
          <a
            href={zaloLink(bookingMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-clay px-4 py-2 text-center text-sm font-semibold text-cream"
          >
            Đặt phòng
          </a>
        </nav>
      )}
    </header>
  )
}

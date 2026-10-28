import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { contact } from '../config/contact'
import { villas } from '../data/villas'
import { zaloLink, bookingMessage } from '../lib/booking'

const logoImg =
  'data:image/jpeg;base64,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'

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
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 leading-tight"
        >
          <img
            src={logoImg}
            alt={contact.brand}
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-white p-0.5 object-contain shadow-xs border border-sand/60 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold text-forest transition-colors group-hover:text-clay">
              {contact.brand}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-clay">
              Đà Lạt
            </span>
          </div>
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

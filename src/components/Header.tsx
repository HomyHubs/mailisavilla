import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { contact } from '../config/contact'
import { villas } from '../data/villas'
import { zaloLink, bookingMessage } from '../lib/booking'
import { useLanguage } from '../context/LanguageContext'

const navBase =
  'px-3 py-2 text-sm font-medium transition-colors hover:text-clay'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const links = (
    <>
      <NavLink to="/" className={navBase} onClick={() => setOpen(false)}>
        {t.home}
      </NavLink>
      {villas.map((v) => (
        <NavLink
          key={v.slug}
          to={`/villa/${v.slug}`}
          className={navBase}
          onClick={() => setOpen(false)}
        >
          {v.bedrooms} {t.bedroomsShort}
        </NavLink>
      ))}
      <NavLink
        to="/quy-dinh-dich-vu"
        className={navBase}
        onClick={() => setOpen(false)}
      >
        {t.houseRules}
      </NavLink>
    </>
  )

  const languageToggle = (
    <div className="inline-flex items-center rounded-full border border-sand/80 bg-white p-0.5 text-xs font-semibold shadow-xs">
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`rounded-full px-2.5 py-1 transition ${
          language === 'vi'
            ? 'bg-clay text-cream shadow-xs'
            : 'text-bark/70 hover:text-forest'
        }`}
        title="Tiếng Việt"
        aria-label="Chuyển sang Tiếng Việt"
      >
        VN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-2.5 py-1 transition ${
          language === 'en'
            ? 'bg-clay text-cream shadow-xs'
            : 'text-bark/70 hover:text-forest'
        }`}
        title="English"
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="group flex items-center gap-2.5 sm:gap-3 leading-tight"
        >
          <img
            src="/logo.jpg"
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
              {t.villaCity}
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
            {t.bookNow}
          </a>
          <div className="ml-2">{languageToggle}</div>
        </nav>

        {/* Mobile toggle & language */}
        <div className="flex items-center gap-2 md:hidden">
          {languageToggle}
          <button
            className="rounded-md p-2 text-forest"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.openMenu}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            {t.bookNow}
          </a>
        </nav>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { contact } from '../config/contact'
import { villas } from '../data/villas'
import { telLink } from '../lib/booking'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sand/70 bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-cream">
            {contact.brand}
          </h3>
          <p className="mt-2 text-sm text-cream/70">{contact.tagline}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cream/90">
            Các loại villa
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            {villas.map((v) => (
              <li key={v.slug}>
                <Link to={`/villa/${v.slug}`} className="hover:text-clay">
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cream/90">
            Liên hệ
          </h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href={telLink()} className="hover:text-clay">
                {contact.hotline}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${contact.email}`} className="hover:text-clay">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{contact.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} />
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-clay"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {contact.brand}. Mọi thông tin chỉ mang tính
        tham khảo.
      </div>
    </footer>
  )
}

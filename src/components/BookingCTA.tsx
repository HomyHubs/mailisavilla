import { contact } from '../config/contact'
import { zaloLink, messengerLink, telLink, bookingMessage } from '../lib/booking'

export default function BookingCTA({ villaName }: { villaName: string }) {
  const msg = bookingMessage(villaName)
  return (
    <div className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-forest">Đặt {villaName}</h3>
      <p className="mt-2 text-sm text-bark/70">
        Liên hệ trực tiếp qua Zalo hoặc Messenger để được tư vấn và giữ chỗ nhanh
        nhất. Chúng tôi phản hồi trong thời gian sớm nhất.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <a
          href={zaloLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-sand bg-white px-5 py-3 text-sm font-semibold text-forest shadow-sm transition hover:bg-cream"
        >
          <img src="/icons/zalo.webp" alt="" className="h-6 w-6 rounded-md" />
          Đặt qua Zalo
        </a>
        <a
          href={messengerLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-sand bg-white px-5 py-3 text-sm font-semibold text-forest shadow-sm transition hover:bg-cream"
        >
          <img src="/icons/messenger.webp" alt="" className="h-6 w-6 rounded-md" />
          Nhắn Messenger
        </a>
        <a
          href={telLink()}
          className="flex items-center justify-center gap-2 rounded-full border border-sand bg-white px-5 py-3 text-sm font-semibold text-forest shadow-sm transition hover:bg-cream"
        >
          <img src="/icons/phone.png" alt="" className="h-6 w-6" />
          Gọi {contact.hotline}
        </a>
      </div>
    </div>
  )
}

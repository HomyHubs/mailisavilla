import { zaloLink, messengerLink, telLink, bookingMessage } from '../lib/booking'

// Cụm nút nổi góc dưới phải: Zalo, Messenger, Gọi điện.
// Dùng icon app chính thức (public/icons). Nút gọi có hiệu ứng lắc + vòng nhấp nháy.
export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* Zalo */}
      <a
        href={zaloLink(bookingMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Chat Zalo"
        className="transition hover:scale-110"
      >
        <img
          src="/icons/zalo.webp"
          alt="Zalo"
          className="h-14 w-14 rounded-full shadow-lg"
        />
      </a>

      {/* Messenger */}
      <a
        href={messengerLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
        title="Chat Messenger"
        className="transition hover:scale-110"
      >
        <img
          src="/icons/messenger.webp"
          alt="Messenger"
          className="h-14 w-14 rounded-full shadow-lg"
        />
      </a>

      {/* Gọi điện — icon hotline, lắc lắc + vòng nhấp nháy */}
      <a
        href={telLink()}
        aria-label="Gọi điện"
        title="Gọi điện"
        className="relative flex h-14 w-14 items-center justify-center"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-pink-500/40" />
        <img
          src="/icons/phone.png"
          alt="Gọi điện"
          className="relative h-14 w-14 animate-wiggle drop-shadow-lg transition hover:scale-110"
        />
      </a>
    </div>
  )
}

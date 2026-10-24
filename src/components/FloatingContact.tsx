import { zaloLink, messengerLink, telLink, bookingMessage } from '../lib/booking'

// Cụm nút nổi góc dưới phải: Zalo, Messenger, Gọi điện.
// Dùng icon app chính thức (public/icons). Nút gọi có hiệu ứng lắc + vòng nhấp nháy.
// Nút nhỏ hơn trên mobile (h-12) để đỡ che nội dung, to hơn từ sm (h-14).
export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-center gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
      {/* Zalo */}
      <a
        href={zaloLink(bookingMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        title="Chat Zalo"
        className="transition hover:scale-110 active:scale-95"
      >
        <img
          src="/icons/zalo.webp"
          alt="Zalo"
          className="h-12 w-12 rounded-full shadow-lg sm:h-14 sm:w-14"
        />
      </a>

      {/* Messenger */}
      <a
        href={messengerLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
        title="Chat Messenger"
        className="transition hover:scale-110 active:scale-95"
      >
        <img
          src="/icons/messenger.webp"
          alt="Messenger"
          className="h-12 w-12 rounded-full shadow-lg sm:h-14 sm:w-14"
        />
      </a>

      {/* Gọi điện — icon hotline, lắc lắc + vòng nhấp nháy */}
      <a
        href={telLink()}
        aria-label="Gọi điện"
        title="Gọi điện"
        className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14"
      >
        <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-pink-500/40 sm:h-14 sm:w-14" />
        <img
          src="/icons/phone.png"
          alt="Gọi điện"
          className="relative h-12 w-12 animate-wiggle drop-shadow-lg transition hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
        />
      </a>
    </div>
  )
}

import { contact } from '../config/contact'

// Sinh link liên hệ Zalo / Messenger, kèm nội dung soạn sẵn (nếu có).
// Messenger không hỗ trợ prefilled text qua m.me nên text chỉ dùng cho Zalo.

export function zaloLink(message?: string): string {
  const base = `https://zalo.me/${contact.zaloPhone}`
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}

export function messengerLink(): string {
  return `https://m.me/${contact.messengerId}`
}

export function telLink(): string {
  const digits = contact.hotline.replace(/\s+/g, '')
  return `tel:${digits}`
}

// Nội dung soạn sẵn khi đặt một loại villa cụ thể.
export function bookingMessage(villaName?: string): string {
  if (villaName) {
    return `Xin chào ${contact.brand}, tôi muốn được tư vấn đặt ${villaName}. Vui lòng liên hệ lại giúp tôi.`
  }
  return `Xin chào ${contact.brand}, tôi muốn được tư vấn đặt phòng. Vui lòng liên hệ lại giúp tôi.`
}

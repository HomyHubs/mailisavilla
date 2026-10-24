// Thông tin liên hệ Mailisa Villa.
// TODO(config): anh Hoang thay các giá trị placeholder dưới đây bằng thông tin thật.
export const contact = {
  brand: 'Mailisa Villa',
  tagline: 'Không gian sống chậm giữa lòng Đà Lạt',

  // Số điện thoại Zalo (chỉ chữ số, không khoảng trắng). VD thật: '0912345678'
  zaloPhone: '0000000000',

  // Username/ID fanpage cho link m.me. VD thật: 'mailisavilla'
  messengerId: 'mailisavilla',

  // Hotline hiển thị + link tel:
  hotline: '0000 000 000',

  email: 'lienhe@mailisavilla.vn',

  address: 'Đà Lạt, Lâm Đồng',

  // Mạng xã hội (tùy chọn)
  facebook: 'https://facebook.com/mailisavilla',
} as const

export type Contact = typeof contact

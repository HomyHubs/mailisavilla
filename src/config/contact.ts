// Thông tin liên hệ Mailisa Villa.
export const contact = {
  brand: 'Mailisa Villa',
  tagline: 'Không gian sống chậm giữa lòng Đà Lạt',

  // Số điện thoại Zalo (chỉ chữ số, không khoảng trắng).
  zaloPhone: '0862656375',

  // Username Page cho link m.me (từ facebook.com/mailisavilladalat).
  messengerId: 'mailisavilladalat',

  // Hotline hiển thị + link tel:
  hotline: '0862 656 375',

  email: 'villamailisa@gmail.com',

  address: '294/2 Đường Nguyên Tử Lực, Lâm Viên, Đà Lạt, Lâm Đồng 66106, Việt Nam',

  // Link Google Maps (bấm để xem đường đi)
  mapUrl: 'https://maps.app.goo.gl/k49E49dMoi6hd8LCA',

  // Mạng xã hội
  facebook: 'https://www.facebook.com/mailisavilladalat/',
} as const

export type Contact = typeof contact

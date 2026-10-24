import type { VillaSlug } from './images'

// Dữ liệu 4 loại villa (gom theo số phòng ngủ). Nguồn sự thật cho menu, card, trang chi tiết.
// TODO(content): anh Hoang xác nhận lại sức chứa/giá/mô tả theo thực tế & file "Mô tả mailisa villa dalt.docx".

export interface Villa {
  slug: VillaSlug
  name: string
  bedrooms: number
  shortDesc: string
  longDesc: string
  capacity: string
  amenities: string[]
}

export const villas: Villa[] = [
  {
    slug: '3pn',
    name: 'Villa 3 Phòng Ngủ',
    bedrooms: 3,
    shortDesc: 'Ấm cúng cho gia đình nhỏ và nhóm bạn thân.',
    longDesc:
      'Villa 3 phòng ngủ phù hợp cho gia đình nhỏ hoặc nhóm bạn 4–8 người. Không gian ấm cúng, đầy đủ tiện nghi, sân vườn thoáng đãng — nơi lý tưởng để tận hưởng những ngày nghỉ chậm rãi giữa Đà Lạt.',
    capacity: '4–8 khách',
    amenities: ['Sân vườn', 'Bếp đầy đủ', 'Khu BBQ', 'Wifi tốc độ cao', 'Chỗ đậu xe'],
  },
  {
    slug: '6pn',
    name: 'Villa 6 Phòng Ngủ',
    bedrooms: 6,
    shortDesc: 'Rộng rãi cho đoàn khách vừa, đại gia đình.',
    longDesc:
      'Villa 6 phòng ngủ dành cho đại gia đình hoặc đoàn khách 10–16 người. Phòng khách sinh hoạt chung rộng, khu bếp và BBQ ngoài trời, không gian quây quần ấm áp cho những buổi tối se lạnh.',
    capacity: '10–16 khách',
    amenities: ['Sân vườn rộng', 'Bếp đầy đủ', 'Khu BBQ', 'Phòng khách lớn', 'Wifi', 'Chỗ đậu xe'],
  },
  {
    slug: '7pn',
    name: 'Villa 7 Phòng Ngủ',
    bedrooms: 7,
    shortDesc: 'Sân vườn rộng, lý tưởng tổ chức BBQ.',
    longDesc:
      'Villa 7 phòng ngủ với sân vườn rộng rãi, thích hợp cho các đoàn 14–20 khách. Không gian ngoài trời lý tưởng để tổ chức tiệc BBQ, team building hoặc họp mặt gia đình nhiều thế hệ.',
    capacity: '14–20 khách',
    amenities: ['Sân vườn rộng', 'Khu BBQ lớn', 'Bếp đầy đủ', 'Phòng khách lớn', 'Wifi', 'Chỗ đậu xe'],
  },
  {
    slug: '9pn',
    name: 'Villa 9 Phòng Ngủ',
    bedrooms: 9,
    shortDesc: 'Nguyên căn lớn cho đoàn đông & sự kiện.',
    longDesc:
      'Villa 9 phòng ngủ là căn lớn nhất, phục vụ đoàn đông 18–26 khách, team building hoặc sự kiện gia đình. Nhiều không gian chung, sân vườn và khu tiệc ngoài trời, dịch vụ hỗ trợ tận tình.',
    capacity: '18–26 khách',
    amenities: ['Sân vườn lớn', 'Khu tiệc BBQ', 'Nhiều phòng khách', 'Bếp đầy đủ', 'Wifi', 'Chỗ đậu xe rộng'],
  },
]

export function getVilla(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug)
}

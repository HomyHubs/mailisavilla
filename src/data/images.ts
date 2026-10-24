// Manifest ảnh villa theo loại phòng.
// Ảnh được chuẩn hoá bởi scripts/copy-images.ps1 -> public/images/<slug>/{cover,01..16}.jpg
// TODO(slice-4): nén ảnh + tạo bản thumbnail để tải nhanh hơn.

export type VillaSlug = '3pn' | '6pn' | '7pn' | '9pn'

const COUNT_PER_TYPE: Record<VillaSlug, number> = {
  '3pn': 16,
  '6pn': 16,
  '7pn': 16,
  '9pn': 16,
}

function build(slug: VillaSlug): string[] {
  const n = COUNT_PER_TYPE[slug]
  return Array.from({ length: n }, (_, i) => {
    const idx = String(i + 1).padStart(2, '0')
    return `/images/${slug}/${idx}.jpg`
  })
}

export const villaImages: Record<VillaSlug, string[]> = {
  '3pn': build('3pn'),
  '6pn': build('6pn'),
  '7pn': build('7pn'),
  '9pn': build('9pn'),
}

export function coverImage(slug: VillaSlug): string {
  return `/images/${slug}/cover.jpg`
}

export function galleryImages(slug: VillaSlug): string[] {
  return villaImages[slug]
}

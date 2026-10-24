// Manifest ảnh villa — TỰ ĐỘNG đọc hết ảnh trong src/assets/villas/<loại>/
//
// ====== CÁCH ĐỔI / THÊM / XOÁ ẢNH (không cần sửa file này) ======
// Ảnh nằm trong thư mục: src/assets/villas/3pn, 6pn, 7pn, 9pn
//   - Thêm ảnh: bỏ file ảnh (.jpg/.jpeg/.png/.webp) vào thư mục của loại villa đó.
//   - Xoá ảnh: xoá file ảnh khỏi thư mục.
//   - Ảnh đại diện (cover) ngoài trang chủ: đặt tên bắt đầu bằng "cover" (vd cover.jpg).
//     Nếu không có file cover, web tự lấy ảnh ĐẦU TIÊN (theo thứ tự tên) làm đại diện.
// Ảnh tự sắp theo TÊN FILE tăng dần, nên đặt 01.jpg, 02.jpg... để dễ sắp thứ tự.
// Sau khi đổi ảnh, web sẽ tự cập nhật ở lần build kế tiếp (Vercel tự build khi push).
// ================================================================

export type VillaSlug = '3pn' | '6pn' | '7pn' | '9pn'

// Vite quét toàn bộ ảnh trong các thư mục con lúc build (eager = nhúng sẵn URL).
const modules = import.meta.glob(
  '../assets/villas/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

// Gom ảnh theo từng loại villa, sắp xếp theo tên file.
function buildMap() {
  const map: Record<string, { all: string[]; cover: string }> = {}

  // path dạng: ../assets/villas/3pn/01.jpg
  const entries = Object.entries(modules).sort(([a], [b]) => a.localeCompare(b))

  for (const [path, url] of entries) {
    const match = path.match(/villas\/([^/]+)\/([^/]+)$/)
    if (!match) continue
    const slug = match[1]
    const filename = match[2].toLowerCase()
    if (!map[slug]) map[slug] = { all: [], cover: '' }
    // File bắt đầu bằng "cover" => ảnh đại diện, không đưa vào gallery.
    if (filename.startsWith('cover')) {
      map[slug].cover = url
    } else {
      map[slug].all.push(url)
    }
  }

  // Nếu loại nào chưa có cover riêng, lấy ảnh đầu tiên làm cover.
  for (const slug of Object.keys(map)) {
    if (!map[slug].cover && map[slug].all.length > 0) {
      map[slug].cover = map[slug].all[0]
    }
  }
  return map
}

const villaImageMap = buildMap()

export function galleryImages(slug: VillaSlug): string[] {
  return villaImageMap[slug]?.all ?? []
}

export function coverImage(slug: VillaSlug): string {
  return villaImageMap[slug]?.cover ?? ''
}

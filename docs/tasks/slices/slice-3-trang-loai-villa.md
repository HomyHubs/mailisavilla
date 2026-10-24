# Slice/Task slice-3 — Trang chi tiết theo loại phòng

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: slice-2

## Mục tiêu bấm được / nghiệm thu được

Route `/villa/:slug` (slug ∈ 3pn/6pn/7pn/9pn) hiển thị trang chi tiết cho **một loại villa** (các villa cùng số phòng ngủ gom chung 1 trang): tiêu đề + mô tả đầy đủ, thông số (số PN, sức chứa, tiện ích), **gallery ảnh** (lưới + lightbox phóng to), và khối CTA đặt phòng qua Zalo/Messenger kèm nội dung soạn sẵn đúng loại villa.

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | `pages/VillaTypePage.tsx` đọc `:slug`, lấy data từ `villas.ts` + ảnh từ `images.ts` | — | 404 nếu slug sai |
| 2 | `components/Gallery.tsx` — lưới ảnh responsive + lightbox | — | lazy-load ảnh |
| 3 | `components/Amenities.tsx` — danh sách tiện ích (icon lucide) | — | — |
| 4 | `components/BookingCTA.tsx` — nút Zalo/Messenger với text theo loại villa | — | dùng helper `booking.ts` |

## Stub cho phép

Danh sách tiện ích dùng bản chuẩn chung cho mọi villa nếu chưa có dữ liệu riêng — `TODO(content)`.

## Không được stub

Gallery phải render ảnh thật từ `public/images/<slug>/`. Nút đặt phòng phải mở link kèm text đúng loại villa.

## Cách nghiệm thu

Mở `/villa/3pn`, `/villa/6pn`, `/villa/7pn`, `/villa/9pn`: mỗi trang hiện đúng ảnh + mô tả loại đó. Bấm ảnh → lightbox. Bấm "Đặt qua Zalo" → link chứa đúng tên loại villa.

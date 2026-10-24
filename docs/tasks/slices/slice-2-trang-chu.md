# Slice/Task slice-2 — Trang chủ

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: slice-1, asset-0

## Mục tiêu bấm được / nghiệm thu được

Trang chủ `/` hoàn chỉnh, đẹp: Hero (ảnh lớn + slogan + CTA đặt phòng), đoạn giới thiệu Mailisa Villa, và lưới "Các loại villa" gồm 4 card (3/6/7/9 PN) — mỗi card có ảnh cover, số phòng ngủ, sức chứa gợi ý, nút "Xem chi tiết" dẫn sang trang loại villa tương ứng.

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | `src/data/villas.ts` — dữ liệu 4 loại villa (slug, tên, số PN, sức chứa, mô tả ngắn, cover) | — | nguồn sự thật cho card + trang chi tiết |
| 2 | `components/Hero.tsx` — ảnh nền + slogan + CTA | — | — |
| 3 | `components/Intro.tsx` — giới thiệu ngắn (phong cách slow-living) | — | nội dung tham khảo siahomevn |
| 4 | `components/VillaCard.tsx` + `components/VillaGrid.tsx` | — | link `/villa/:slug` |
| 5 | `pages/HomePage.tsx` ráp các section | — | — |

## Stub cho phép

Nội dung giới thiệu/sức chứa là bản nháp hợp lý (dựa trên file mô tả .docx + tham khảo siahomevn), anh Hoang chỉnh sau — đánh dấu `TODO(content)`.

## Không được stub

Điều hướng từ card sang trang loại villa phải hoạt động thật.

## Cách nghiệm thu

Mở `/`: thấy Hero + Giới thiệu + 4 card villa. Bấm "Xem chi tiết" ở card 7PN → chuyển sang `/villa/7pn`.

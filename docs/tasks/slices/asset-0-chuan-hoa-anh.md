# Slice/Task asset-0 — Chuẩn hoá & copy ảnh villa

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: slice-0

## Mục tiêu bấm được / nghiệm thu được

Toàn bộ ảnh villa trong `assets-mailisa/Mailisa Villa/` được copy sang `public/images/<loại>/` với tên gọn, tuần tự, dễ tham chiếu trong code. Tạo một file manifest `src/data/images.ts` (hoặc JSON) liệt kê ảnh theo từng loại phòng để component gallery import.

## Nguồn ảnh (thực tế sau khi giải nén)

| Loại | Thư mục nguồn | Số ảnh (xấp xỉ) | Có video |
| --- | --- | --- | --- |
| 3 PN | `3pn/`, `3pn/Image/` | ~70 | ✓ |
| 6 PN | `6pn/` (trong các zip con) | ít | ✓ |
| 7 PN | `7pn/image/`, `7pn/PHOTO/` | ~80 | ✓ |
| 9 PN | `9pn/image/` | ~20 | ✓ |
| Chung | `Video/villa KH.mp4`, `Review cmt/review.xlsx` | — | — |

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | Copy & đổi tên ảnh sang `public/images/3pn|6pn|7pn|9pn/<loai>-NN.jpg` | — | giới hạn ~12-20 ảnh đẹp/loại để trang nhẹ |
| 2 | Chọn 1 ảnh đại diện (cover) mỗi loại → `public/images/<loai>/cover.jpg` | — | dùng cho card ngoài trang chủ |
| 3 | Tạo manifest `src/data/images.ts` map loại → danh sách đường dẫn ảnh | — | — |

## Stub cho phép

Chưa cần tối ưu/nén ảnh ở slice này (đánh dấu `TODO(slice-4)` phần nén ảnh & lazy-load).

## Cách nghiệm thu

`public/images/` có đủ 4 loại phòng, mỗi loại có `cover.jpg` + các ảnh gallery. Import `src/data/images.ts` trả về đúng danh sách.

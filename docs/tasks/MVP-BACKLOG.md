# MVP Backlog — Mailisa Villa

Bảng chỉ mục cấp cao cho toàn bộ Slice / Task. Đây là bảng TÓM TẮT — chi tiết từng dòng nằm ở file riêng trong `docs/tasks/slices/`. Không viết mô tả dài trong bảng này để tránh xung đột khi nhiều dev cùng sửa.

## Quy tắc

- ID bất biến: chỉ thêm dòng mới, không xóa, không đánh số lại (xem `../../AGENTS.md`, mục "Quy trình thay đổi phạm vi").
- Mỗi dòng có đúng 1 Owner khi chuyển sang "Đang làm" — không nhận việc đã có Owner.
- Cột "Phụ thuộc" liệt kê ID phải Done trước khi bắt đầu — dùng để biết việc nào chạy song song được.
- Cập nhật cột Trạng thái ngay khi đổi, không chờ cuối ngày.
- Khi Slice/Task merge xong vào `dev`: chuyển Trạng thái = Done, xóa Owner, điền số PR, rồi cập nhật rollup ở `../../AGENTS.md`.

## Bối cảnh (tóm tắt — chi tiết ở AGENTS.md mục 2)

- Loại dự án: **landing page tĩnh, chỉ frontend** (không backend, không database).
- Cơ chế: **Lát cắt dọc (Vertical Slice)** — mỗi slice ra một màn hình/trang xem được.
- Mục tiêu: khách xem villa theo loại số phòng ngủ (3/6/7/9 PN), mỗi loại gom chung 1 trang, đặt phòng qua Zalo/Messenger.
- Vì không có backend/DB, slice-0 được diễn giải thành "walking skeleton của FE" (khung chạy được + routing).

## Bảng chỉ mục

| ID | Tên | Cơ chế | Trạng thái | Owner | Nhánh | PR | Phụ thuộc | File chi tiết |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| slice-0 | Walking skeleton FE (Vite+React+TS+Tailwind chạy được) | Dọc | Done | — | dev | — | — | `slices/slice-0-walking-skeleton.md` |
| asset-0 | Chuẩn hoá & copy ảnh villa vào `public/images` | Dọc | Done | — | dev | — | slice-0 | `slices/asset-0-chuan-hoa-anh.md` |
| slice-1 | Khung layout: Header + Footer + nút nổi Zalo/Messenger | Dọc | Done | — | dev | — | slice-0 | `slices/slice-1-layout-lien-he.md` |
| slice-2 | Trang chủ: Hero + Giới thiệu + danh sách loại villa | Dọc | Done | — | dev | — | slice-1, asset-0 | `slices/slice-2-trang-chu.md` |
| slice-3 | Trang chi tiết theo loại phòng (3/6/7/9 PN) + gallery | Dọc | Done | — | dev | — | slice-2 | `slices/slice-3-trang-loai-villa.md` |
| slice-4 | Tiện ích, review khách, hoàn thiện responsive & SEO | Dọc | Done (còn nợ) | — | dev | — | slice-3 | `slices/slice-4-hoan-thien.md` |

## Trạng thái hợp lệ

Chưa bắt đầu, Đang làm, Review, Done, Done (còn nợ), Hoãn, Đã hủy, Đã thay thế. Định nghĩa đầy đủ: xem `../../AGENTS.md`, mục "Quy trình thay đổi phạm vi".

## Cách thêm một Slice/Task mới

1. Tạo file từ `slices/_TEMPLATE.md`, đặt tên `slices/<id>-<slug>.md`.
2. Thêm đúng một dòng vào bảng trên, trạng thái "Chưa bắt đầu".
3. Nếu đây là thay đổi phạm vi của một Slice/Task đã có, đọc `../../AGENTS.md` mục "Quy trình thay đổi phạm vi" trước.

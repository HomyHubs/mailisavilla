# Slice/Task slice-1 — Khung layout + liên hệ

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: slice-0

## Mục tiêu bấm được / nghiệm thu được

Mọi trang được bọc trong một layout chung: Header (logo + menu điều hướng), Footer (thông tin liên hệ + mạng xã hội), và cụm **nút nổi (floating) Zalo + Messenger** ở góc dưới phải, luôn hiển thị khi cuộn. Bấm nút Zalo/Messenger mở đúng link (placeholder) kèm nội dung soạn sẵn.

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | `components/Layout.tsx` bọc `<Outlet/>` + Header + Footer | — | dùng chung mọi route |
| 2 | `components/Header.tsx` responsive (menu + nút "Đặt phòng") | — | mobile có menu hamburger |
| 3 | `components/Footer.tsx` (hotline, email, địa chỉ placeholder, social) | — | — |
| 4 | `components/FloatingContact.tsx` — nút nổi Zalo + Messenger | — | đọc link từ `src/config/contact.ts` |
| 5 | Helper `src/lib/booking.ts` sinh link Zalo/Messenger kèm text soạn sẵn | — | dùng lại ở trang chi tiết |

## Stub cho phép

Link liên hệ là placeholder (`zalo.me/0000000000`, `m.me/mailisavilla`). Đánh dấu `TODO(config)` để anh Hoang điền số thật.

## Không được stub

Nút nổi phải thật sự mở link (target=_blank), responsive phải hoạt động.

## Cách nghiệm thu

Mở bất kỳ trang nào: thấy Header + Footer + 2 nút nổi. Thu nhỏ cửa sổ → layout co giãn đúng, menu chuyển hamburger. Bấm nút nổi → mở tab mới tới link Zalo/Messenger.

## Cập nhật UI nút nổi (bổ sung)

- Nút nổi dùng **icon app chính thức**: Zalo & Messenger (SVG trong `src/components/icons/BrandIcons.tsx`) thay cho chữ/icon generic.
- Nút **điện thoại có hiệu ứng lắc lắc** (`animate-wiggle`, định nghĩa keyframes trong `tailwind.config.js`) + vòng tròn nhấp nháy (`animate-ping`) để thu hút khách gọi.

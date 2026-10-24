# Slice/Task slice-0 — Walking skeleton FE

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: không có

## Mục tiêu bấm được / nghiệm thu được

Khởi tạo project React + Vite + TypeScript + Tailwind chạy được bằng `npm run dev`, mở trình duyệt thấy một trang trắng có routing cơ bản (react-router-dom) với route `/` render được chữ "Mailisa Villa". Chứng minh toàn bộ khung FE đã nối thông (build + dev server + routing + Tailwind).

> Lưu ý: Dự án KHÔNG có backend/database nên walking skeleton ở đây là "khung FE chạy được", không phải "nối FE→BE→DB". Đây là ngoại lệ đã ghi trong AGENTS.md mục 2.

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | `npm create vite` (react-ts), cài Tailwind + cấu hình | — | tailwind.config, index.css với @tailwind |
| 2 | Cài react-router-dom, dựng `src/App.tsx` với BrowserRouter + route `/` | — | — |
| 3 | Tạo `src/config/contact.ts` chứa placeholder Zalo/Messenger/hotline | — | để các slice sau dùng |

## Stub cho phép

Giao diện tối thiểu, chưa cần style đẹp. Thông tin liên hệ dùng placeholder.

## Không được stub

Cấu hình build/dev phải chạy thật (`npm run dev` và `npm run build` không lỗi).

## Cách nghiệm thu

Chạy `npm run dev`, mở `localhost:5173`, thấy trang hiển thị "Mailisa Villa". Chạy `npm run build` không lỗi.

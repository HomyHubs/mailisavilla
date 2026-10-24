# Slice/Task slice-4 — Tiện ích, review khách, hoàn thiện

- Cơ chế: Dọc
- Owner hiện tại: —
- Nhánh: —
- PR: —
- Trạng thái: xem `../MVP-BACKLOG.md`
- Phụ thuộc: slice-3

## Mục tiêu bấm được / nghiệm thu được

Website hoàn thiện cảm giác "đẹp & chuyên nghiệp": section tiện ích/dịch vụ chung ở trang chủ, section review khách (lấy từ `Review cmt/review.xlsx`), tối ưu responsive trên mobile, và SEO cơ bản (title, meta description, Open Graph, favicon). Ảnh được lazy-load/nén để tải nhanh.

## Task

| # | Task | Tầng | Ghi chú |
| --- | --- | --- | --- |
| 1 | `components/Amenities` tổng hợp + `components/Reviews.tsx` đọc dữ liệu review | — | trả nợ `TODO(slice-4)` nén ảnh |
| 2 | Rà soát responsive mọi breakpoint (mobile/tablet/desktop) | — | — |
| 3 | SEO: react-helmet hoặc thẻ meta tĩnh + OG tags + favicon | — | — |
| 4 | Tối ưu ảnh: nén + `loading="lazy"` | — | trả nợ kỹ thuật từ asset-0 |

## Stub cho phép

Review có thể hiển thị dạng trích nội dung tiêu biểu nếu file xlsx khó parse — `TODO(content)`.

## Không được stub

SEO meta và responsive phải thật.

## Cách nghiệm thu

Lighthouse/DevTools: layout ổn trên mobile, có title + meta description + OG. Trang chủ có section tiện ích + review.

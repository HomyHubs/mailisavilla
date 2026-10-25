# Hướng dẫn tự sửa website Mailisa Villa

Tài liệu này dành cho anh Hoang để **tự đổi hình và sửa chữ** trên website mà không cần biết lập trình.

Có **2 cách**: sửa trực tiếp trên GitHub (bằng trình duyệt, không cần máy) hoặc sửa trên máy rồi đẩy lên. Chọn cách nào cũng được.

> Sau khi sửa xong, website tự cập nhật sau **1–2 phút** (Vercel tự build lại). Mở lại trang và nhấn **Ctrl + Shift + R** (máy tính) hoặc tải lại trang (điện thoại) để thấy thay đổi.

---

## PHẦN A — ĐỔI / THÊM / XOÁ HÌNH

Ảnh của mỗi loại villa nằm trong các thư mục:

```
src/assets/villas/3pn/   <- villa 3 phòng ngủ
src/assets/villas/6pn/   <- villa 6 phòng ngủ
src/assets/villas/7pn/   <- villa 7 phòng ngủ
src/assets/villas/9pn/   <- villa 9 phòng ngủ
```

Quy tắc:
- Web **tự đọc HẾT ảnh** trong mỗi thư mục — anh bỏ thêm bao nhiêu ảnh cũng tự hiện, xoá cũng tự ẩn. **Không cần sửa code.**
- Ảnh sắp xếp theo **tên file** tăng dần. Nên đặt tên `01.jpg`, `02.jpg`, `03.jpg`... để dễ sắp thứ tự.
- Ảnh **banner trang chủ (Hero)**: nằm tại file `src/assets/hero.jpg`. Muốn đổi ảnh banner đầu trang chủ, chỉ cần thay thế file này.
- Ảnh **đại diện từng loại villa** (hiện ở danh sách villa ngoài trang chủ): đặt tên bắt đầu bằng `cover` (ví dụ `cover.jpg`). Nếu không có file `cover`, web tự lấy ảnh đầu tiên làm đại diện.
- Định dạng dùng được: `.jpg`, `.jpeg`, `.png`, `.webp`.
- **Mẹo:** ảnh nên dưới ~500KB cho web tải nhanh. Ảnh quá nặng (vài MB) nên giảm dung lượng trước (dùng trang squoosh.app hoặc tinypng.com — kéo ảnh vào, tải ảnh nhẹ hơn về).

### Cách 1 — Trên GitHub (trình duyệt, không cần máy)

**Thêm ảnh:**
1. Mở repo: https://github.com/HomyHubs/mailisavilla
2. Bấm vào thư mục `src` → `assets` → `villas` → chọn loại villa (vd `7pn`).
3. Bấm nút **Add file** (góc trên phải) → **Upload files**.
4. Kéo thả ảnh vào, hoặc bấm **choose your files** rồi chọn ảnh.
5. Kéo xuống dưới, bấm nút xanh **Commit changes**.

**Xoá ảnh:**
1. Vào thư mục loại villa, bấm vào ảnh muốn xoá.
2. Bấm biểu tượng **thùng rác** (Delete this file) ở góc trên phải.
3. Kéo xuống bấm **Commit changes**.

**Đổi tên ảnh / sắp thứ tự:**
1. Bấm vào ảnh → bấm biểu tượng **bút chì** (hoặc nút ⋯ → Rename).
2. Sửa tên (vd đổi `05.jpg` thành `01.jpg` để đưa lên đầu) → **Commit changes**.

### Cách 2 — Trên máy rồi đẩy lên

1. Mở thư mục dự án trên máy, vào `src/assets/villas/<loại villa>`.
2. **Thêm**: copy ảnh vào. **Xoá**: xoá file. **Sắp thứ tự**: đổi tên file.
3. Mở Terminal/CMD tại thư mục dự án, chạy đúng 3 lệnh sau:
   ```bash
   git add -A
   git commit -m "Cap nhat hinh villa"
   git push
   ```

---

## PHẦN B — SỬA CHỮ (TEXT)

Tất cả chữ có thể sửa nằm ở **2 file**. Anh chỉ cần sửa phần nằm **giữa hai dấu nháy** `'...'`, **không xoá dấu nháy, không xoá dấu phẩy** ở cuối dòng.

### File 1: `src/config/contact.ts` — thông tin chung & liên hệ

Sửa được:
- `brand` — tên thương hiệu (vd `'Mailisa Villa'`)
- `tagline` — slogan ngắn
- `zaloPhone` — số Zalo (chỉ chữ số, vd `'0862656375'`)
- `messengerId` — tên Page Facebook (phần sau facebook.com/)
- `hotline` — số điện thoại hiển thị
- `email` — email liên hệ
- `address` — địa chỉ
- `mapUrl` — link Google Maps
- `facebook` — link trang Facebook

Ví dụ đổi slogan:
```ts
tagline: 'Không gian sống chậm giữa lòng Đà Lạt',
```
sửa thành:
```ts
tagline: 'Nghỉ dưỡng đẳng cấp giữa Đà Lạt mộng mơ',
```

### File 2: `src/data/villas.ts` — nội dung từng loại villa

Mỗi loại villa có các dòng:
- `name` — tên villa (vd `'Villa 7 Phòng Ngủ'`)
- `shortDesc` — mô tả ngắn (hiện ở card ngoài trang chủ)
- `longDesc` — mô tả đầy đủ (hiện ở trang chi tiết)
- `capacity` — sức chứa (vd `'14–20 khách'`)
- `amenities` — danh sách tiện ích, mỗi tiện ích trong dấu nháy, cách nhau bởi dấu phẩy

Ví dụ danh sách tiện ích:
```ts
amenities: ['Sân vườn rộng', 'Khu BBQ lớn', 'Bếp đầy đủ', 'Wifi', 'Chỗ đậu xe'],
```

> **Lưu ý khi sửa chữ:**
> - Chỉ sửa phần trong dấu nháy `'...'`.
> - Nếu nội dung có dấu nháy đơn `'` bên trong (vd chữ "O'Hara"), dùng dấu nháy kép bao ngoài `"..."` hoặc bỏ dấu nháy đó đi.
> - Giữ nguyên dấu phẩy ở cuối mỗi dòng.

### Sửa chữ trên GitHub (trình duyệt)
1. Mở file trên GitHub (vd `src/config/contact.ts`).
2. Bấm biểu tượng **bút chì** (Edit this file) góc trên phải.
3. Sửa nội dung trong dấu nháy.
4. Kéo xuống bấm **Commit changes**.

### Sửa chữ trên máy
1. Mở file bằng trình soạn thảo (Notepad, VS Code...).
2. Sửa, lưu lại.
3. Chạy: `git add -A` → `git commit -m "Sua noi dung"` → `git push`.

---

## PHẦN C — CÂU HỎI THƯỜNG GẶP

**Sửa xong mà chưa thấy đổi trên web?**
- Chờ 1–2 phút để Vercel build xong (xem tại vercel.com → project → Deployments, chờ chấm xanh "Ready").
- Nhấn **Ctrl + Shift + R** để xoá cache trình duyệt. Trên điện thoại thử mở tab ẩn danh.

**Lỡ sửa sai, web lỗi?**
- Trên GitHub: vào tab **Commits**, mở commit gần nhất, có thể **Revert** (hoàn tác) về bản trước.
- Hoặc nhắn lại để được hỗ trợ.

**Muốn đổi số điện thoại / Zalo / Messenger?**
- Sửa trong `src/config/contact.ts` (xem Phần B, File 1).

---

Mọi thắc mắc cứ liên hệ để được hỗ trợ thêm. Chúc anh quản lý website thuận lợi!

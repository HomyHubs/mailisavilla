// Review khách — trích từ file "Review cmt/review.xlsx" (nguồn Booking.com của villa).
// TODO(content): anh Hoang bổ sung tên khách / quốc gia thật nếu muốn hiển thị.

export interface Review {
  text: string
  author: string
}

export const reviews: Review[] = [
  {
    text:
      'Nhóm chúng tôi 16 người và đã có khoảng thời gian tuyệt vời ở đây. Đủ phòng cho mọi người, nhiều không gian chung, lại còn có cả khu BBQ! Vị trí gần trung tâm nên đi lại, ăn uống, mua sắm đều rất tiện.',
    author: 'Khách đoàn 16 người',
  },
  {
    text:
      'Chúng tôi cảm nhận được sự riêng tư và an toàn. Khu villa có cổng bảo vệ, hàng xóm yên tĩnh, không bị ai làm phiền. Không gian rất bình yên, tôi rất thích chuyến đi này.',
    author: 'Khách lưu trú',
  },
  {
    text:
      'Chúng tôi rất thích chuyến nghỉ ở đây. Villa yên tĩnh, thoải mái, được bao quanh bởi rừng thông — như một chốn riêng tư tách biệt khỏi thế giới. Chắc chắn sẽ quay lại!',
    author: 'Khách nghỉ dưỡng',
  },
  {
    text:
      'Chủ nhà cực kỳ thân thiện và luôn phản hồi tin nhắn rất nhanh. Mọi dịch vụ chúng tôi cần đều được chăm sóc chu đáo, còn được gợi ý nhiều quán ăn ngon và điểm tham quan.',
    author: 'Khách quốc tế',
  },
]

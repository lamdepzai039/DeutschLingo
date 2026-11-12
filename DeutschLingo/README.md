# Deutschlingo

Ứng dụng học tiếng Đức A1–B2 dạng web tĩnh, không cần cài package hay chạy bước build.

## Chạy thử trên máy

Mở `index.html` trong trình duyệt để dùng bài học, từ vựng và cài đặt. Luyện micro cần chạy qua `localhost` hoặc HTTPS; một số trình duyệt không cấp quyền micro cho trang `file://`.

## Đưa lên hosting tĩnh

1. Tải toàn bộ thư mục dự án lên GitHub, Netlify, Cloudflare Pages hoặc hosting tĩnh tương đương.
2. Chọn thư mục chứa `index.html` làm thư mục publish/root.
3. Giữ nguyên các tệp cùng cấp và tên tệp: `index.html`, `styles.css`, `app.js`, `favicon.svg`, `duolingo-correct.mp3`, `259f517b-0b95-439c-931f-52ddeea3a9fe-removebg-preview.png`. Banner trang chủ dùng hình quyển sách; ảnh cáo mascot xuất hiện trong thẻ “Mỗi ngày một từ mới”. Không cần lệnh build.
4. Bật HTTPS trên tên miền để hỗ trợ quyền micro và trải nghiệm an toàn.
5. Mở URL đã publish trên cả máy tính và điện thoại; thử một bài học, ôn từ, tải/xuất bản sao và kiểm tra quyền micro.

## Dữ liệu và giới hạn hiện tại

- Tiến độ, hồ sơ, ảnh đại diện và cài đặt được lưu trong `localStorage` của trình duyệt trên thiết bị hiện tại. Chúng không tự đồng bộ giữa thiết bị và có thể bị xóa khi người dùng xóa dữ liệu trình duyệt.
- Hồ sơ dùng biểu tượng khách mặc định; trong **Hồ sơ học tập**, bạn có thể chọn ảnh JPG, PNG hoặc WebP từ thiết bị hoặc kéo ảnh vào khung tải lên. Ảnh được cắt vuông, thu nhỏ trước khi lưu và chỉ áp dụng sau khi chọn **Lưu hồ sơ**. Chọn **Dùng biểu tượng khách mặc định** để bỏ ảnh.
- Dùng **Cài đặt → Dữ liệu học tập** để tải bản sao JSON và khôi phục bản sao. Hãy lưu tệp JSON ở nơi an toàn.
- Ứng dụng hiện chưa có backend, đăng nhập thật, đồng bộ đám mây hay cơ chế khôi phục mật khẩu.
- Nhận diện giọng nói phụ thuộc trình duyệt và nhà cung cấp nhận diện; có thể không khả dụng ở một số trình duyệt. Mức trùng khớp văn bản không phải đánh giá chuẩn về phát âm.
- Phông chữ web được tải từ Google Fonts; nếu không có kết nối, ứng dụng dùng phông dự phòng của hệ thống.

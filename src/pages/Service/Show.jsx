import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Show() {
  const { slug } = useParams();
  return (
    <>
      <Header />
      <Container className="my-5 mb-6">
        <Row>
          {/* Cột nội dung dịch vụ */}
          <Col md={6}>
            <h2 className="text-danger fw-bold">{slug.replace(/-/g, " ")}</h2>
            <h2 className="fw-bold">Nội dung dịch vụ:</h2>
            <ol>
              <li>
                <strong>Tư vấn kiểu tóc:</strong>
                <ul>
                  <li>
                    Thợ làm tóc sẽ tư vấn về kiểu tóc phù hợp với bạn dựa trên
                    khuôn mặt, tình trạng tóc và mong muốn của bạn. Bạn có thể
                    chọn từ các kiểu tóc ngắn, dài, uốn xoăn, thẳng, hay bất kỳ
                    kiểu tóc nào khác.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cắt tóc:</strong>
                <ul>
                  <li>
                    Thợ sẽ tiến hành cắt tóc theo kiểu bạn đã chọn. Chúng tôi sử
                    dụng các công cụ và kỹ thuật hiện đại để đảm bảo tóc của bạn
                    được cắt đều và đẹp.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Tạo kiểu:</strong>
                <ul>
                  <li>
                    Sau khi cắt tóc, thợ sẽ tạo kiểu tóc cho bạn. Tùy thuộc vào
                    sở thích, bạn có thể chọn tạo kiểu tóc bồng bềnh, lọn sóng,
                    hoặc gọn gàng.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Chăm sóc tóc:</strong>
                <ul>
                  <li>
                    Chúng tôi sẽ sử dụng sản phẩm chăm sóc tóc chất lượng để giữ
                    cho mái tóc của bạn luôn khỏe mạnh và bóng mượt.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              Hãy đến salon của chúng tôi để trải nghiệm dịch vụ chuyên nghiệp
              và thư giãn! Nếu bạn cần thêm thông tin hoặc muốn đặt lịch hẹn,
              hãy liên hệ với chúng tôi.
            </p>
          </Col>

          {/* Cột form đặt lịch */}
          <Col md={5}>
            <div className="border p-2">
              <h4 className="fw-bold">Đặt lịch</h4>
              <div className="d-flex justify-content-between">
                <del className="text-muted">152,000 ₫</del>
                <p className="fw-bold text-danger">120,000 ₫</p>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Tên người đặt lịch</Form.Label>
                  <Form.Control type="text" placeholder="Nhập tên của bạn..." />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Nhập số điện thoại..."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập địa chỉ email..."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Thời gian đến</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày đến</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Tôi đã đọc kĩ điều khoản và chính sách"
                  />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Đặt lịch hẹn ngay!
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Show;

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Alert
import { useParams } from "react-router-dom";
import { useState } from "react"; // Import useState

function Show() {
  const { slug } = useParams();

  const convertSlugToTitle = (slug) => {
    return slug.replace(/-/g, " ");
  };

  return (
    <>
      <Header />
      <Container className="my-5 mb-6">
        <Row>
          {/* Cột hiển thị thông tin dịch vụ */}
          <Col md={6} className="d-flex flex-column align-items-center">
            <div className="text-center">
              <img
                src="https://i.pinimg.com/enabled_hi/564x/cd/b7/f7/cdb7f7b70b495b4c3aab2aa1504eef78.jpg"
                alt="Hướng dẫn sử dụng"
                style={{
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "contain",
                  marginBottom: "3px",
                }}
              />
              <div className="d-flex justify-content-center mt-3">
                <img
                  src="https://i.pinimg.com/564x/4f/37/5a/4f375a167b7d13447bc64a97c133a565.jpg"
                  alt="Hình 1"
                  style={{
                    width: "130px",
                    height: "127px",
                    objectFit: "cover",
                    margin: "0 5px 5px 0",
                  }}
                />
                <img
                  src="https://i.pinimg.com/564x/9b/83/31/9b833115dc1988e054d51fbf24788d83.jpg"
                  alt="Hình 2"
                  style={{
                    width: "130px",
                    height: "127px",
                    objectFit: "cover",
                    margin: "0 15px 5px",
                  }}
                />
                <img
                  src="https://i.pinimg.com/564x/21/e8/e4/21e8e4bd7da713468714a0f8947f7a57.jpg"
                  alt="Hình 3"
                  style={{
                    width: "130px",
                    height: "127px",
                    objectFit: "cover",
                    margin: "0 5px",
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Cột form đặt lịch */}
          <Col md={5}>
            <div className="border p-2">
              <div className="d-flex justify-content-between align-items-center">
                <h className="text-danger fw-bold mb-0">
                  {convertSlugToTitle(slug)}
                </h>
                <Button variant="dark" type="submit">
                  Đặt lịch hẹn ngay
                </Button>
              </div>
              {/* <h2 className="fw-bold mt-3">Đặt lịch</h2> */}
              <div className="d-flex justify-content-between">
                <del className="text-muted">1520,000 ₫</del>
                <p className="fw-bold text-danger">Tổng: 1200,000 ₫</p>
              </div>

              <h4 className="fw-bold text-start mt-2">Nội dung dịch vụ:</h4>
              <div className="text-start">
                <strong>Tư vấn kiểu tóc:</strong>
                <p>
                  Thợ làm tóc sẽ tư vấn về kiểu tóc phù hợp với bạn dựa trên
                  khuôn mặt, tình trạng tóc và mong muốn của bạn.Bạn có thể chọn
                  từ các kiểu tóc ngắn, dài, uốn xoăn, thẳng, hay bất kỳ kiểu
                  tóc nào khác......
                </p>
                <li>
                  <strong>Cắt tóc:</strong>
                  <p>
                    Thợ sẽ tiến hành cắt tóc theo kiểu bạn đã chọn. Chúng tôi sử
                    dụng các công cụ và kỹ thuật hiện đại để đảm bảo tóc của bạn
                    được cắt đều và đẹp.
                  </p>
                </li>

                <li>
                  <strong>Tạo kiểu:</strong>
                  <p>
                    Sau khi cắt tóc, thợ sẽ tạo kiểu tóc cho bạn. Tùy thuộc vào
                    sở thích, bạn có thể chọn tạo kiểu tóc bồng bềnh, lọn sóng,
                    hoặc gọn gàng.
                  </p>
                </li>

                <li>
                  <strong>Chăm sóc tóc:</strong>
                  <p>
                    Chúng tôi sẽ sử dụng sản phẩm chăm sóc tóc chất lượng để giữ
                    cho mái tóc của bạn luôn khỏe mạnh và bóng mượt.
                  </p>
                </li>
                <p className="text-center">
                  Hãy đến salon của chúng tôi để trải nghiệm dịch vụ chuyên
                  nghiệp và thư giãn! Nếu bạn cần thêm thông tin hoặc muốn đặt
                  lịch hẹn, hãy liên hệ với chúng tôi.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Show;

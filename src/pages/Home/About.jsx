import React from "react";
import { Container, Row, Col, Card, Button, NavLink } from "react-bootstrap";
import Headers from "../../layouts/Header";
import Footers from "../../layouts/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Headers />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-uppercase text-center text-primary-emphasis">Giới thiệu về 30GLOW</h2>
            <p className="text-center">30GLOW – Hệ thống làm đẹp hiện đại, kết hợp dịch vụ tạo kiểu tóc và cung cấp sản phẩm chăm sóc chất lượng.</p>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={6}>
            <h4 className="fw-bold text-primary-emphasis">Tầm nhìn và Sứ mệnh</h4>
            <p>
              Chúng tôi tại 30GLOW luôn nỗ lực trở thành hệ thống làm đẹp hàng đầu, không chỉ mang lại những trải nghiệm dịch vụ đẳng cấp mà còn giúp khách hàng tìm thấy vẻ đẹp tự nhiên và sự tự tin
              trong mỗi lần ghé thăm. Với sứ mệnh tôn vinh cá nhân hóa, chúng tôi hiểu rằng mỗi người đều có phong cách và nhu cầu riêng biệt, vì vậy dịch vụ của chúng tôi luôn được điều chỉnh phù hợp
              với từng khách hàng, từ những kiểu tóc thời thượng đến những liệu trình chăm sóc tóc chuyên sâu.
            </p>

            <p>
              Tại 30GLOW, chúng tôi không chỉ cung cấp dịch vụ cắt, nhuộm, uốn tóc chuyên nghiệp mà còn đầu tư vào các sản phẩm chăm sóc chất lượng cao. Đội ngũ stylist và chuyên gia của chúng tôi
              được đào tạo bài bản, luôn cập nhật xu hướng mới nhất và sẵn sàng đồng hành cùng khách hàng trong hành trình làm mới hình ảnh bản thân. Chúng tôi tin rằng, vẻ đẹp không chỉ là bề ngoài
              mà còn đến từ cảm giác thoải mái, tự tin, và hạnh phúc mà mỗi khách hàng cảm nhận được sau khi sử dụng dịch vụ của chúng tôi.
            </p>

            <p>
              30GLOW cam kết mang đến sự tiện lợi tối đa cho khách hàng với hệ thống đặt lịch online thông minh, giúp bạn dễ dàng lựa chọn stylist và dịch vụ yêu thích chỉ trong vài thao tác. Chúng
              tôi luôn hướng tới việc xây dựng một môi trường chuyên nghiệp, thân thiện và thoải mái, nơi khách hàng không chỉ làm đẹp mà còn có những khoảnh khắc thư giãn thực sự. Hãy đến với 30GLOW
              và trải nghiệm sự khác biệt – bởi chúng tôi tin rằng ai cũng xứng đáng tỏa sáng theo cách riêng của mình.
            </p>
          </Col>
          <Col md={6}>
            <img src="https://cafebiz.cafebizcdn.vn/162123310254002176/2023/7/26/cua-hang-30-shine-1690336371930-16903363727521782137090.jpg" alt="Hair Salon" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="mt-5">
          <h4 className="fw-bold text-primary-emphasis">Dịch vụ của chúng tôi</h4>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-scissors h1 text-primary"></i>
                <h5 className="mt-3 fw-bold">Tạo kiểu tóc chuyên nghiệp</h5>
                <p>Cắt, nhuộm, và uốn tóc thời thượng.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-droplet h1 text-primary"></i>
                <h5 className="mt-3 fw-bold">Dưỡng tóc phục hồi</h5>
                <p>Sử dụng sản phẩm chuyên nghiệp để nuôi dưỡng tóc.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-calendar-check h1 text-primary"></i>
                <h5 className="mt-3 fw-bold">Đặt lịch dễ dàng</h5>
                <p>Chọn stylist yêu thích chỉ với vài thao tác.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="container my-5">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <h3 class="text-primary-emphasis fw-bold">Sản phẩm chăm sóc tóc</h3>
                <ul class="list-unstyled">
                  <li class="border-bottom py-2">Dầu gội và dầu xả cao cấp</li>
                  <li class="border-bottom py-2">Kem dưỡng và tinh chất phục hồi</li>
                  <li class="py-2">Sản phẩm tạo kiểu tóc</li>
                </ul>

                <h3 class="text-primary-emphasis fw-bold mt-4">Sản phẩm chăm sóc da</h3>
                <ul class="list-unstyled">
                  <li class="border-bottom py-2">Sữa rửa mặt dịu nhẹ</li>
                  <li class="border-bottom py-2">Kem dưỡng ẩm hàng ngày</li>
                  <li class="py-2">Kem chống nắng bảo vệ da</li>
                </ul>
              </div>
              <div class="col-lg-6 text-center">
                <img src="https://static.30shine.com/shop-web/banners/Banner3_2-T1023-6.jpg" alt="Sản phẩm chăm sóc" class="img-fluid rounded" />
              </div>
            </div>
        </Row>

        <Row className="text my-5">
          <Col>
            <h4 className="fw-bold text-primary-emphasis">Liên hệ với chúng tôi</h4>
            {/* <p>Địa chỉ: 123 Đường Ánh Dương, Quận 1, TP. Hồ Chí Minh</p> */}
            <p>Hotline: 1900-30GLOW (304569)</p>
            <p>Email: support@30glow.vn</p>
            <Link to="/contact">
              <Button className="btn btn-primary-emphasis" variant="primary">
                Liên hệ ngay
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footers />
    </>
  );
}

export default About;

import React from "react";
import { Container, Row, Col, Card, Button, NavLink, Breadcrumb } from "react-bootstrap";
import Headers from "../../layouts/Header";
import Footers from "../../layouts/Footer";
import { Link } from "react-router-dom";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>Giới thiệu - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Giới thiệu", url: "/gioi-thieu" }]} children={null} />
      <Container className="my-3">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-uppercase text-center text-primary-emphasis">Giới thiệu về 30GLOW</h2>
            <p className="text-center fs-4">30GLOW – Hệ thống làm đẹp hiện đại, kết hợp dịch vụ tạo kiểu tóc và cung cấp sản phẩm chăm sóc chất lượng.</p>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={6}>
            <h3 className="fw-bold text-primary-emphasis">Tầm nhìn và Sứ mệnh</h3>
            <p className="fs-5">
              Chúng tôi tại 30GLOW luôn nỗ lực trở thành hệ thống làm đẹp hàng đầu, không chỉ mang lại những trải nghiệm dịch vụ đẳng cấp mà còn giúp khách hàng tìm thấy vẻ đẹp tự nhiên và sự tự tin
              trong mỗi lần ghé thăm. Với sứ mệnh tôn vinh cá nhân hóa, chúng tôi hiểu rằng mỗi người đều có phong cách và nhu cầu riêng biệt, vì vậy dịch vụ của chúng tôi luôn được điều chỉnh phù hợp
              với từng khách hàng, từ những kiểu tóc thời thượng đến những liệu trình chăm sóc tóc chuyên sâu.
            </p>

            <p className="fs-5">
              Tại 30GLOW, chúng tôi không chỉ cung cấp dịch vụ cắt, nhuộm, uốn tóc chuyên nghiệp mà còn đầu tư vào các sản phẩm chăm sóc chất lượng cao. Đội ngũ stylist và chuyên gia của chúng tôi
              được đào tạo bài bản, luôn cập nhật xu hướng mới nhất và sẵn sàng đồng hành cùng khách hàng trong hành trình làm mới hình ảnh bản thân. Chúng tôi tin rằng, vẻ đẹp không chỉ là bề ngoài
              mà còn đến từ cảm giác thoải mái, tự tin, và hạnh phúc mà mỗi khách hàng cảm nhận được sau khi sử dụng dịch vụ của chúng tôi.
            </p>
          </Col>
          <Col md={6}>
            <img src="https://dkdecor.vn/wp-content/uploads/2024/01/Screenshot-2024-01-16-163647.jpg" alt="Hair Salon" className="img-fluid rounded h-100" />
          </Col>
        </Row>

        <Row className="mt-5">
          <h3 className="fw-bold text-primary-emphasis">Dịch vụ của chúng tôi</h3>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-scissors h1 text-primary"></i>
                <h4 className="mt-3 fw-bold">Tạo kiểu tóc chuyên nghiệp</h4>
                <p>Cắt, nhuộm, và uốn tóc thời thượng.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-droplet h1 text-primary"></i>
                <h4 className="mt-3 fw-bold">Dưỡng tóc phục hồi</h4>
                <p>Sử dụng sản phẩm chuyên nghiệp để nuôi dưỡng tóc.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center">
                <i className="bi bi-calendar-check h1 text-primary"></i>
                <h4 className="mt-3 fw-bold">Đặt lịch dễ dàng</h4>
                <p>Chọn stylist yêu thích chỉ với vài thao tác.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="container my-5">
          <div class="row align-items-center">
            <div class="col-lg-6 text-center">
              <img src="https://static.30shine.com/shop-web/banners/Banner3_2-T1023-6.jpg" alt="Sản phẩm chăm sóc" class="img-fluid rounded" />
            </div>
            <div class="col-lg-6">
              <h3 class="text-primary-emphasis fw-bold">Sản phẩm chăm sóc tóc</h3>
              <ul class="list-unstyled">
                <li class="border-bottom py-2 fs-5">Dầu gội và dầu xả cao cấp</li>
                <li class="border-bottom py-2 fs-5">Kem dưỡng và tinh chất phục hồi</li>
                <li class="py-2 fs-5">Sản phẩm tạo kiểu tóc</li>
              </ul>

              <h3 class="text-primary-emphasis fw-bold mt-4">Sản phẩm chăm sóc da</h3>
              <ul class="list-unstyled">
                <li class="border-bottom py-2 fs-5">Sữa rửa mặt dịu nhẹ</li>
                <li class="border-bottom py-2 fs-5">Kem dưỡng ẩm hàng ngày</li>
                <li class="py-2 fs-5">Kem chống nắng bảo vệ da</li>
              </ul>
            </div>
          </div>
        </div>

        <Row className="text-center my-5 p-4 rounded" style={{ backgroundImage: "url('https://dkdecor.vn/wp-content/uploads/2024/01/Screenshot-2024-01-16-163647.jpg')" }}>
          <Col>
            <h3 className="fw-bold text-primary-emphasis">Liên hệ với chúng tôi</h3>
            {/* <p>Địa chỉ: 123 Đường Ánh Dương, Quận 1, TP. Hồ Chí Minh</p> */}
            <p className="fs-5 text-dark">Hotline: 1900-30GLOW (304569)</p>
            <p className="fs-5 text-dark">Email: support@30glow.vn</p>
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

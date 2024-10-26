import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardService from "../../components/CardService";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";

function Index() {
  const serviceList = [
    {
      name: "Uốn sóng lơi ",
      slug: "Uon-song-loi",
      image: "https://i.pinimg.com/564x/a7/3f/d6/a73fd6d184f46949fa3c8966280e79fb.jpg",
      price: 500000,
      discount: 400000,
    },
    {
      name: "Duỗi phục hồi",
      slug: "duoi-phuc-hoi",
      image: "https://i.pinimg.com/enabled_hi/564x/44/04/c0/4404c0426518962249ba69e3716dc9b1.jpg",
      price: 1000000,
      discount: 800000,
    },
    {
      name: "Nhuộm tóc ",
      slug: "nhuom-toc",
      image: "https://i.pinimg.com/enabled_hi/564x/b9/9c/9f/b99c9f1aaf7284a62c7622af9a5b9684.jpg",
      price: 750000,
      discount: 600000,
    },
    {
      name: "Tạo kiểu tóc nam",
      slug: "tao-kieu-toc-nam",
      image: "https://i.pinimg.com/736x/00/ee/05/00ee05f3696c3f74f5a598df6ab10e85.jpg",
      price: 300000,
      discount: 240000,
    },
  ];
  return (
    <>
      <Header />
      <BreadcrumbComponent props={[{ name: "Dịch vụ", url: "/dich-vu" }]} children={null} />
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Dịch vụ</h3>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          {serviceList.map((service, index) => (
            <CardService key={index.id} {...service} />
          ))}
        </Row>
        <Paginated current={1} total={5} />
      </Container>
      <Container className="my-5">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-danger border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-danger">
                  <i className="bi bi-credit-card" />
                </div>
                <h5 className="fw-bold">Bảo hành 3 ngày</h5>
                <p className="mb-0">Không hài lòng? Hoàn tiền 100%!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-success border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-success">
                  <i className="bi bi-minecart-loaded" />
                </div>
                <h5 className="fw-bold">Đổi trả tận nơi</h5>
                <p className="mb-0">Đổi trả miễn phí, tận nơi. Dễ dàng!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-warning border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Hỗ trợ 24/7</h5>
                <p className="mb-0">Hỗ trợ khách hàng 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      <Footer />
    </>
  );
}

export default Index;

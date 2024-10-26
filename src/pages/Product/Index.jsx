import React, { useState } from "react";
import { Container, FormSelect } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Footers from "../../layouts/Footer";
import Headers from "../../layouts/Header";
import CardProduct from "../../components/CardProduct";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";

function Index() {
  const [filter, setFilter] = useState("default");

  const productList = [
    {
      id: 1,
      name: "Sửa rửa mặt Simple",
      slug: "sua-rua-mat-simple",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 618000,
      discount: 494000,
    },
    {
      id: 2,
      name: "Dầu gội Dvinces",
      slug: "dau-goi-davinces",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 334000,
      discount: 293000,
    },
    {
      id: 3,
      name: "Dầu xả Dvinces",
      slug: "dau-xa-davinces",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 364060,
      discount: 320000,
    },
    {
      id: 4,
      name: "Kem dưỡng ẩm ATS",
      slug: "kem-duong-ats",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 691000,
      discount: 549000,
    },
    {
      id: 5,
      name: "Kem chống nắng SkinAqua",
      slug: "kem-chong-nang-skinaqua",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 284570,
      discount: 159000,
    },
  ];

  return (
    <>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Sản phẩm", url: "/san-pham" }]} children={null} />
      <Container className="my-3">
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Sản phẩm</h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect value={filter} onChange={(e) => setFilter(e.target.value)} style={{ width: "200px" }}>
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              <option value="newest">Sản phẩm mới</option>
            </FormSelect>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-lg-5 g-4">
          {productList.map((product) => (
            <CardProduct key={product.id} {...product} />
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
                <div className="h1 fw-bold my-2 text-warning">
                  <i className="bi bi-headset" />
                </div>
                <h5 className="fw-bold">Hỗ trợ 24/7</h5>
                <p className="mb-0">Hỗ trợ khách hàng 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      <Footers />
    </>
  );
}

export default Index;

/* eslint-disable*/
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Container,
  Row,
  Card,
  Col,
  Table,
  Button,
  Form,
} from "react-bootstrap";

function GioHang() {
  const [carts, setCarts] = useState([
    {
      id: 1,
      name: "Xịt dưỡng tóc",
      price: 1000000,
      discount: 800000,
      quantity: 1,
      tong: 800000,
      image:
        "https://backend.codingfs.com/storage/products/Gel%20r%E1%BB%ADa%20m%E1%BA%B7t%20cho%20da%20d%E1%BA%A7u%20m%E1%BB%A5n%20Dr.%20For%20Skin%20Acsys%20Plus2.jpg",
      slug: "san-pham-1",
    },
    {
      id: 2,
      name: "Serum dưỡng tóc",
      price: 1200000,
      discount: 900000,
      quantity: 2,
      tong: 1800000,
      image:
        "https://backend.codingfs.com/storage/products/X%E1%BB%8Bt%20D%C6%B0%E1%BB%A1ng%20T%C3%B3c%20It's%20A%2010%20Miracle%20Leave-In%20M%E1%BB%81m%20M%C6%B0%E1%BB%A3t%20V%C3%A0%20B%E1%BA%A3o%20V%E1%BB%87%20T%C3%B3c%2059ML.jpg",
      slug: "san-pham-2",
    },
  ]);

  // Tính tổng tạm tính
  const tong = carts.reduce((acc, item) => acc + item.tong, 0);

  // Xác định phí giao hàng
  const PhiGH = tong >= 1000000 ? 0 : 30000;

  // Tổng hóa đơn bao gồm phí giao hàng
  const tongHoaDon = tong + PhiGH;

  const updateQuantity = (id, e) => {
    const updatedCarts = carts.map((item) => {
      if (item.id === id) {
        const newQuantity = +e.target.value;
        return {
          ...item,
          quantity: newQuantity,
          tong: newQuantity * item.discount,
        };
      }
      return item;
    });
    setCarts(updatedCarts);
  };

  const deleteItem = (id) => {
    setCarts(carts.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <section className="section-padding">
        <Container className="pt-5">
          <div className="d-flex align-items-center px-3 py-2 border mb-4">
            <h4 className="mb-0 h4 fw-bold">Giỏ hàng</h4>
            <a href="/" className="ms-auto btn btn-light btn-ecomm">
              Tiếp tục mua sắm
            </a>
          </div>
          <Row className="g-4">
            <Col xs={12} xl={8}>
              <div className="card rounded-0 mb-3">
                <div className="card-body">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th style={{ width: "20%" }}>Hình ảnh</th>
                        <th style={{ width: "65%" }}>Sản phẩm</th>
                        <th scope="col">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <a href="">
                              <img
                                src={item.image}
                                width={100}
                                alt={item.name}
                              />
                            </a>
                          </td>
                          <td>
                            <h5 className="fw-bold mb-0">
                              <a
                                href=""
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {item.name}
                              </a>
                            </h5>
                            <div className="d-flex align-items-center mt-2">
                              <span className="text-decoration-line-through pe-2">
                                {Intl.NumberFormat("en-US").format(item.price)}
                              </span>
                              <span className="text-danger me-auto">
                                {Intl.NumberFormat("en-US").format(
                                  item.discount
                                )}
                              </span>
                              <div className="d-flex align-items-center">
                                <Form.Control
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, e)}
                                  className="me-2"
                                  style={{ width: "200px" }}
                                />
                                <Button
                                  variant="outline-danger"
                                  onClick={() => deleteItem(item.id)}
                                >
                                  <i className="bi bi-trash "></i>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            {Intl.NumberFormat("en-US").format(item.tong)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <h4>
                    Khi mua hóa đơn{" "}
                    <strong style={{ color: "red" }}>1.000.000</strong> bạn sẽ
                    được
                    <span style={{ color: "green" }}> miễn phí giao hàng</span>
                  </h4>
                </div>
              </div>
            </Col>
            <Col xs={12} xl={4}>
              <div className="card rounded-0 mb-3">
                <div className="card-body">
                  <h5 className="mb-0">
                    Tạm Tính: {Intl.NumberFormat("en-US").format(Number(tong))}
                  </h5>
                  {/* Hiển thị phí giao hàng */}
                  <h5 className="mt-3">
                    Phí giao hàng:{" "}
                    {PhiGH === 0 ? (
                      <span className="text-success">Miễn phí</span>
                    ) : (
                      Intl.NumberFormat("en-US").format(PhiGH)
                    )}
                  </h5>
                  <h4 className="bold text-danger fw-bold ">
                    Tổng hóa đơn:{" "}
                    {Intl.NumberFormat("en-US").format(Number(tongHoaDon))}
                  </h4>
                  <div className="d-grid mt-4">
                    <button
                      type="button"
                      className="btn btn-dark btn-ecomm py-3 px-5"
                    >
                      Thanh toán hóa đơn
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="my-5">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">
                  Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.
                </p>
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
      <Footer />
    </>
  );
}

export default GioHang;

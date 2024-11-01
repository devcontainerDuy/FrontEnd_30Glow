// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Alert,
  Card,
} from "react-bootstrap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";

function GioHang() {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const TonPhiGH = 30000;
  const MienPhiGH = 1000000;
  useEffect(() => {
    const storedCarts = localStorage.getItem("cart");
    const cartData = storedCarts ? JSON.parse(storedCarts) : [];
    setCarts(cartData);

    // Tính tổng tiền
    const ThanhTien = cartData.reduce((acc, item) => acc + item.price, 0);
    setTotal(ThanhTien);
  }, []);

  const deleteItem = (id) => {
    const updatedCarts = carts.filter((item) => item.id !== id);
    setCarts(updatedCarts);
    localStorage.setItem("cart", JSON.stringify(updatedCarts));

    // Cập nhật lại tổng tiền
    const newTotal = updatedCarts.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  const PhiGH = total > 0 && total < MienPhiGH ? TonPhiGH : 0;

  return (
    <>
      <Helmet>
        <title>Giỏ hàng - 30GLOW</title>
        <meta name="description" content="Giỏ hàng của bạn" />
      </Helmet>
      <Header />
      <Container className="my-5 mb-5">
        <h4 className="mb-4">Giỏ hàng của bạn</h4>
        {carts.length === 0 ? (
          <h4 className="text-danger text-center">Giỏ hàng hiện đang trống.</h4>
        ) : (
          <Row>
            <Col md={8}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Hình ảnh</th>
                    <th>Sản phẩm</th>
                    <th></th>
                    <th>Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <td className=" d-flex justify-content-center align-items-center">
                        <img
                          src={
                            item.image
                              ? `${import.meta.env.VITE_URL}${item.image}`
                              : "path/to/default-image.jpg"
                          }
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                          alt={item.name} // Thêm thuộc tính alt cho hình ảnh
                        />
                      </td>
                      <td>
                        {item.name} <br></br>
                        <del>
                          <span className="text-decoration-line-through pe-2 text-muted">
                            {Intl.NumberFormat("en-US").format(
                              item.compare_price
                            )}
                          </span>
                        </del>
                        {/* <span className="text-danger me-auto fw-bold ">
                          {Intl.NumberFormat("en-US").format(item.price)}
                        </span> */}
                      </td>

                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => deleteItem(item.id)}
                          className="ms-3"
                        >
                          <i className="bi bi-trash "></i>
                        </Button>
                      </td>
                      <td>
                        <span className="fw-bold">
                          {Intl.NumberFormat("en-US").format(item.price)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h4>
                Khi mua hóa đơn{" "}
                <strong style={{ color: "red" }}>1.000.000</strong> bạn sẽ được
                <span style={{ color: "green" }}> miễn phí giao hàng</span>
              </h4>
            </Col>

            <Col md={4}>
              <div className="summary-box">
                <h6>
                  Tạm Tính:{" "}
                  {total.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h6>
                <h6>
                  Phí giao hàng:{" "}
                  {PhiGH.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h6>
                <h4 className="bold text-danger fw-bold">
                  Tổng cộng:{" "}
                  {(total + PhiGH).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h4>
                {total < MienPhiGH && (
                  <Alert variant="info">
                    Khi mua hóa đơn{" "}
                    {MienPhiGH.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}{" "}
                    bạn sẽ được <strong>miễn phí giao hàng</strong>
                  </Alert>
                )}
                <div className="d-grid mt-4">
                  <a
                    href="/thanh-toan"
                    className="btn btn-dark btn-ecomm py-3 px-5"
                    style={{
                      pointerEvents: carts.length === 0 ? "none" : "auto",
                    }} // Vô hiệu hóa link nếu giỏ hàng trống
                  >
                    Thanh toán hóa đơn
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Container className="my-2">
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

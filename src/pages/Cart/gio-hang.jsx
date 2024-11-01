// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Alert,
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
    // Load cart data from localStorage and calculate total price
    const storedCarts = localStorage.getItem("cart");
    const cartData = storedCarts ? JSON.parse(storedCarts) : [];

    // Kiểm tra dữ liệu giỏ hàng sau khi parse
    if (!Array.isArray(cartData)) {
      console.error("Dữ liệu giỏ hàng không phải là mảng:", cartData);
      return;
    }

    setCarts(cartData);
    calculateTotal(cartData);
  }, []);

  const calculateTotal = (cart) => {
    const ThanhTien = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(ThanhTien);
  };

  const handleCheckout = () => {
  // Lưu giỏ hàng vào localStorage để xử lý thanh toán
  localStorage.setItem("checkoutCart", JSON.stringify(carts));

  // Xóa giỏ hàng khỏi localStorage
  localStorage.removeItem("cart");
  
  // Cập nhật trạng thái giỏ hàng
  setCarts([]);
  
  // Chuyển hướng sang trang thanh toán
  window.location.href = "/thanh-toan";
};
  const deleteItem = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      const updatedCarts = carts.filter((item) => item.id !== id);
      setCarts(updatedCarts);
      localStorage.setItem("cart", JSON.stringify(updatedCarts));
      calculateTotal(updatedCarts); // Cập nhật lại tổng tiền
    }
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
                      <td className="d-flex justify-content-center align-items-center">
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
                          alt={item.name}
                        />
                      </td>
                      <td>
                        {item.name} <br />
                        <del>
                          <span className="text-decoration-line-through pe-2 text-muted">
                            {Intl.NumberFormat("en-US").format(
                              item.compare_price
                            )}
                          </span>
                        </del>
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => deleteItem(item.id)}
                          className="ms-3"
                        >
                          <i className="bi bi-trash" />
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
                  <Button
                    variant="dark"
                    className="btn-ecomm py-3 px-5"
                    onClick={handleCheckout}
                    style={{
                      pointerEvents: carts.length === 0 ? "none" : "auto",
                    }}
                  >
                    Thanh toán hóa đơn
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default GioHang;

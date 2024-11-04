// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
function GioHang() {
  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load cart from localStorage
    const storedCarts = localStorage.getItem("cart");
    const cartData = storedCarts ? JSON.parse(storedCarts) : [];
    setCarts(cartData);
    TongTien(cartData);

    // Fetch data from API
    fetch("https://project1.trungthanhzone.com/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("K nhận api nha cô em ");
        }
        return response.json();
      })
      .then((data) => {
        setCarts(data);
        TongTien(data);
      })
      .catch((error) => {
        console.error("Lỗi rồi gái ơi", error);
      });
  }, []);

  const TongTien = (cart) => {
    const ThanhTien = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(ThanhTien);
  };

  const deleteItem = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      const updatedCarts = carts.filter((item) => item.id !== id);
      setCarts(updatedCarts);
      localStorage.setItem("cart", JSON.stringify(updatedCarts));
      TongTien(updatedCarts);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (name.trim().length < 3) newErrors.name = "Tên phải từ 3 ký tự trở lên.";
    if (!/^\d{10,12}$/.test(phone))
      newErrors.phone = "Số điện thoại phải có 10-12 số.";
    if (!email.includes("@")) newErrors.email = "Email phải chứa ký tự '@'.";
    if (appointmentDate && new Date(appointmentDate) < new Date()) {
      newErrors.appointmentDate = "Ngày đến không được ở trong quá khứ.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      notyf.success("Đặt lịch hẹn thành công!"); // Hiển thị thông báo Notyf
      // Xóa giỏ hàng
      setCarts([]); // Cập nhật trạng thái giỏ hàng
      localStorage.removeItem("cart");
      // Về trang chủ
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  };

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
            <Col md={7}>
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
                      <td>{item.name}</td>
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
                <strong style={{ color: "red" }}> Khi đặt lịch trước</strong>{" "}
                bạn sẽ được tặng
                <span style={{ color: "green" }}> xịt dưỡng tóc Loreal</span>
              </h4>
            </Col>
            <Col md={5}>
              <div
                className="border"
                style={{ padding: "20px", borderRadius: "5px", width: "100%" }}
              >
                <h4 className="bold text-danger fw-bold">
                  Tổng cộng:{" "}
                  {total.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h4>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tên người đặt lịch</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên của bạn..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Nhập số điện thoại..."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Nhập địa chỉ email..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian đến</Form.Label>
                        <Form.Control
                          type="time"
                          value={appointmentTime}
                          onChange={(e) => setAppointmentTime(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày đến</Form.Label>
                        <Form.Control
                          type="date"
                          value={appointmentDate}
                          onChange={(e) => setAppointmentDate(e.target.value)}
                          isInvalid={!!errors.appointmentDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.appointmentDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="dark" type="submit" className="w-100">
                    Đặt lịch hẹn ngay!
                  </Button>
                </Form>
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

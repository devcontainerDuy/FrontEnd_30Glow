/* eslint-disable */
import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  Alert,
} from "react-bootstrap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const ThanhToan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    email: "",
    note: "",
    city: "",
    district: "",
    ward: "",
    paymentMethod: "",
  });

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
      discount: 900000, // giảm
      quantity: 2, //số lượng sp
      tong: 1800000, // giảm x sl
      image:
        "https://backend.codingfs.com/storage/products/X%E1%BB%8Bt%20D%C6%B0%E1%BB%A1ng%20T%C3%B3c%20It's%20A%2010%20Miracle%20Leave-In%20M%E1%BB%81m%20M%C6%B0%E1%BB%A3t%20V%C3%A0%20B%E1%BA%A3o%20V%E1%BB%87%20T%C3%B3c%2059ML.jpg",
      slug: "san-pham-2",
    },
  ]);

  const tong = carts.reduce((acc, item) => acc + item.tong, 0);
  const PhiGH = tong > 0 && tong < 1000000 ? 30000 : 0;
  const tongHoaDon = carts.length === 0 ? 0 : tong + PhiGH;

  const [showSuccess, setShowSuccess] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra tính hợp lệ của form
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!isValid) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    console.log(formData);
    setShowSuccess(true);
  };

  const handleAddressClick = () => {
    setShowAddressForm(true);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <Row>
          <Col md={6}>
            <h4>Đơn đặt hàng</h4>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Sản phẩm</strong>
                  </ListGroup.Item>
                  {carts.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            marginRight: "10px",
                          }}
                        />
                        {/* tên sp */}
                        {item.name}
                      </div>
                      {/* giá */}
                      <span>
                        {Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.tong)}
                      </span>
                    </ListGroup.Item>
                  ))}
                  {/* Form nhập mã giảm giá */}
                  <ListGroup.Item>
                    <Form className="d-flex">
                      <Form.Control
                        type="text"
                        placeholder="Nhập mã giảm giá"
                        className="me-2"
                        style={{ flex: 1 }}
                      />
                      <Button variant="success">Áp dụng</Button>
                    </Form>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tạm tính:</strong>
                    <span className="float-end">
                      {Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(tong)}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Giao hàng:</strong>
                    <span className="float-end">
                      {PhiGH === 0
                        ? "Miễn phí"
                        : Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(PhiGH)}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Tổng cộng:</strong>
                    <span className="float-end">
                      {Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(tongHoaDon)}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            {/* Phương thức thanh toán */}
            <Card className="mt-3 mb-4">
              <Card.Body>
                <h5>Phương thức thanh toán</h5>
                <Form.Check
                  type="radio"
                  label="Online"
                  name="paymentMethod"
                  value="Online"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Trực tiếp"
                  name="paymentMethod"
                  value="Trực tiếp"
                  onChange={handleChange}
                  required
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} style={{ marginLeft: "20px" }}>
            <h4>Thông tin thanh toán</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Nhập họ và tên"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Nhập địa chỉ"
                  value={formData.address}
                  onChange={handleChange}
                  onClick={handleAddressClick}
                  required
                />
              </Form.Group>

              {showAddressForm && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                    <Form.Control
                      as="select"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Vui lòng chọn</option>
                      <option>Hà Nội</option>
                      <option>Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Quận/Huyện</Form.Label>
                    <Form.Control
                      as="select"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Vui lòng chọn</option>
                      <option>Quận 1</option>
                      <option>Quận 2</option>
                      <option>Quận 3</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phường/Xã</Form.Label>
                    <Form.Control
                      as="select"
                      name="ward"
                      value={formData.ward}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Vui lòng chọn</option>
                      <option>Phường 1</option>
                      <option>Phường 2</option>
                      <option>Phường 3</option>
                    </Form.Control>
                  </Form.Group>
                </>
              )}

              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control
                  as="textarea"
                  name="note"
                  placeholder="Nhập ghi chú"
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                />
              </Form.Group>

              <Button
                type="submit"
                // variant="primary"
                style={{
                  width: "100%",
                  marginBottom: "50px",
                  backgroundColor: "black",
                  borderColor: "black",
                }}
              >
                Đặt hàng
              </Button>
            </Form>

            {showSuccess && (
              <Alert variant="success" className="mt-3">
                Đơn hàng của bạn đã được đặt thành công!
              </Alert>
            )}
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default ThanhToan;

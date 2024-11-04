// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Alert,
  Card,
} from "react-bootstrap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

const TonPhiGH = 30000;
const MienPhiGH = 1000000;

function ThanhToan() {
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    phone: "",
    email: "",
    note: "",
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("checkoutCart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCheckoutCart(parsedCart);
      calculateTotal(parsedCart);
    }
    fetchProvinces();
  }, []);

  const calculateTotal = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(
        "https://provinces.open-api.vn/api/?depth=2"
      );
      setProvinces(response.data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const fetchDistricts = async (city) => {
    try {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/p/${city}?depth=2`
      );
      setDistricts(response.data.districts);
      setWards([]); // Reset wards when a new city is selected
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const fetchWards = async (district) => {
    try {
      const response = await axios.get(
        `https://provinces.open-api.vn/api/d/${district}?depth=2`
      );
      setWards(response.data.wards);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Fetch districts when city is selected
    if (name === "city") {
      fetchDistricts(value);
      setFormData((prev) => ({ ...prev, district: "", ward: "", address: "" })); // Reset district, ward and address
    }
    // Fetch wards when district is selected
    else if (name === "district") {
      fetchWards(value);
      setFormData((prev) => ({ ...prev, ward: "", address: "" })); // Reset ward and address
    }
    // Update full address when ward is selected
    else if (name === "ward") {
      const selectedWard = wards.find((ward) => ward.code === value);
      const selectedDistrict = districts.find(
        (district) => district.code === formData.district
      );
      const selectedCity = provinces.find(
        (province) => province.code === formData.city
      );

      // Update address only if all are selected
      if (selectedWard && selectedDistrict && selectedCity) {
        const fullAddress = `${selectedWard.name}, ${selectedDistrict.name}, ${selectedCity.name}`;
        setFormData((prev) => ({ ...prev, address: fullAddress }));
      }
    }
  };

  const handleAddressClick = () => {
    setShowAddressForm(true);
  };
  const [paymentMethod, setPaymentMethod] = useState("");
  const PhiGH = totalPrice > 0 && totalPrice < MienPhiGH ? TonPhiGH : 0;
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra độ dài tên
    if (formData.fullName.length < 5) {
      alert("Tên phải có ít nhất 5 ký tự.");
      return; // Ngừng thực hiện nếu kiểm tra không hợp lệ
    }

    // Kiểm tra định dạng số điện thoại
    const phoneRegex = /^[0-9]{10,12}$/; // Chỉ cho phép số và từ 10-12 ký tự
    if (!phoneRegex.test(formData.phone)) {
      alert("Số điện thoại phải từ 10 đến 12 chữ số.");
      return; // Ngừng thực hiện nếu kiểm tra không hợp lệ
    }

    // Kiểm tra tính hợp lệ của email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Kiểm tra email có chứa ký tự @
    if (!emailRegex.test(formData.email)) {
      alert("Email không hợp lệ. Vui lòng nhập email đúng định dạng.");
      return; // Ngừng thực hiện nếu kiểm tra không hợp lệ
    }

    // Kiểm tra phương thức thanh toán đã được chọn chưa
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán.");
      return; // Ngừng thực hiện nếu không chọn phương thức thanh toán
    }

    // Nếu tất cả kiểm tra đều hợp lệ, tiến hành xử lý đơn hàng
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Xóa giỏ hàng
      localStorage.removeItem("checkoutCart");
      setCheckoutCart([]); // Cập nhật trạng thái giỏ hàng về rỗng
      setFormData({
        fullName: "",
        address: "",
        city: "",
        district: "",
        ward: "",
        phone: "",
        email: "",
        note: "",
      });
      setTotalPrice(0);
      setPaymentMethod("");
    }, 1000); //time reset
  };
  return (
    <>
      <Helmet>
        <title>Thanh toán - 30GLOW</title>
        <meta name="description" content="Trang thanh toán" />
      </Helmet>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={7}>
            <h4>Đơn đặt hàng</h4>
            {checkoutCart.length === 0 ? (
              <h4 className="text-danger text-center">Giỏ hàng trống.</h4>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Hình ảnh</th>
                    <th>Sản phẩm</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {checkoutCart.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center">
                        <img
                          src={
                            item.image
                              ? `${import.meta.env.VITE_URL}${item.image}`
                              : "path/to/default-image.jpg"
                          }
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{Intl.NumberFormat("vi-VN").format(item.price)} đ</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            <Form>
              <Form.Group controlId="discountCode">
                <Form.Label>Nhập mã giảm giá</Form.Label>
                <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    className="me-2"
                    style={{ flex: 1, height: "48px" }}
                  />
                  <Button variant="success" style={{ height: "48px" }}>
                    Áp dụng
                  </Button>
                </Form>
              </Form.Group>
            </Form>
            <Card className="mt-3 p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Tạm tính:</strong>
                <span>{Intl.NumberFormat("vi-VN").format(totalPrice)} đ</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Phí giao hàng:</strong>
                <span>
                  {PhiGH.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center text-danger fw-bold">
                <h5 className="mb-0">Tổng cộng:</h5>
                <span>
                  {Intl.NumberFormat("vi-VN").format(totalPrice + PhiGH)} đ
                </span>
              </div>
            </Card>

            <Card className="mt-3 mb-4">
              <Card.Body>
                <h5>Phương thức thanh toán</h5>
                <Form.Check
                  type="radio"
                  label="Online"
                  name="paymentMethod"
                  value="Online"
                  onChange={(e) => setPaymentMethod(e.target.value)} // Cập nhật paymentMethod
                  required
                />
                <Form.Check
                  type="radio"
                  label="Trực tiếp"
                  name="paymentMethod"
                  value="Trực tiếp"
                  onChange={(e) => setPaymentMethod(e.target.value)} // Cập nhật paymentMethod
                  required
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={5}>
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
                  value={formData.address} // Hiển thị địa chỉ đã chọn
                  onChange={handleChange}
                  onClick={handleAddressClick}
                  required
                />
              </Form.Group>

              {showAddressForm && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Vui lòng chọn</option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Quận/Huyện</Form.Label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Vui lòng chọn</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phường/Xã</Form.Label>
                    <select
                      name="ward"
                      value={formData.ward}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="">Vui lòng chọn</option>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
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
      </Container>
      <Footer />
    </>
  );
}

export default ThanhToan;

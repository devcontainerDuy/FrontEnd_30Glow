/* eslint-disable */ 
import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import Header from "@layouts/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@layouts/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";
import { clearServiceCart, removeFromServiceCart } from "../../store/reducers/serviceCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AuthenContext } from "@context/AuthenContext"; // Nhập ngữ cảnh xác thực

function ServiceCart() {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appointmentDate: "",
    time: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthenContext); // Lấy thông tin người dùng từ ngữ cảnh
  const services = useSelector((state) => state.serviceCart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    //  giá trị khởi tạo cho form nếu người dùng đã đăng nhập
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        phone: user.phone || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleRemoveService = (id) => {
    dispatch(removeFromServiceCart(id));
    window.notyf.success("Đã xóa dịch vụ!");
  };

  const handleClearServices = () => {
    dispatch(clearServiceCart());
    window.notyf.success("Đã xóa tất cả dịch vụ!");
  };

  useEffect(() => {
    const newTotal = services.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [services]);

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) newErrors.name = "Tên phải có ít nhất 3 ký tự.";
    if (!/^0\d{9,11}$/.test(formData.phone)) newErrors.phone = "Số điện thoại không hợp lệ.";
    if (!formData.email.includes("@")) newErrors.email = "Email không hợp lệ.";
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Vui lòng chọn ngày đến.";
    } else if (new Date(formData.appointmentDate) < new Date()) {
      newErrors.appointmentDate = "Ngày đến không được ở trong quá khứ.";
    }
    if (!formData.time) newErrors.time = "Vui lòng chọn giờ đến.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (services.length === 0) {
      window.notyf.error("Bạn phải có ít nhất một dịch vụ để đặt lịch!");
      return;
    }

    if (validateForm()) {
      setLoading(true);

      // Kết hợp ngày và giờ
      const appointmentTime = `${formData.appointmentDate} ${formData.time}:00`;

      const appointment = {
        id_user: null,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        time: appointmentTime,
      };
      const ids = services.map((item) => item.id).filter((id) => id !== null);
      if (ids.length === 0) {
        window.notyf.error("Không có dịch vụ hợp lệ để đặt lịch!");
        return;
      }
      await addNewOrder({
        ...appointment,
        service: ids,
      });
    }
  };
  const addNewOrder = async (DataOrder) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, DataOrder, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.notyf.success("Đặt lịch hẹn thành công!");
      dispatch(clearServiceCart());
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        window.notyf.error(`Có lỗi xảy ra: ${error.response.data.message || "Lỗi không xác định."}`);
      } else {
        window.notyf.error("Có lỗi xảy ra khi tải dữ liệu.");
      }
    } finally {
      setLoading(false);
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
        <h4 className="mb-4">Đặt lịch của bạn</h4>
        {services.length === 0 ? (
          <Row>
            <Col md={7}>
              <div>
                <h5 className="mb-2" style={{ textAlign: "center" }}>
                  <i className="bi bi-calendar-heart fs-1"></i>
                  <hr />
                  <strong style={{ color: "red" }}>
                    Bạn chưa có lịch đặt nào. <Link to="/dich-vu">Đặt lịch ngay!!</Link>
                  </strong>
                </h5>
              </div>
            </Col>
            <Col md={5}>
              <div className="border" style={{ padding: "20px", borderRadius: "5px", width: "100%" }}>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tên người đặt lịch</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên của bạn..." name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control type="tel" placeholder="Nhập số điện thoại..." name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập địa chỉ email..." name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian đến</Form.Label>
                        <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} isInvalid={!!errors.time} />
                        <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày đến</Form.Label>
                        <Form.Control type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} isInvalid={!!errors.appointmentDate} />
                        <Form.Control.Feedback type="invalid">{errors.appointmentDate}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
                    {loading ? "Đang xử lý..." : "Đặt lịch hẹn ngay!"}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
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
                  {services.map((item, index) => (
                    <tr key={index}>
                      <td className="d-flex justify-content-center align-items-center">
                        <img
                          src={item.image ? `${import.meta.env.VITE_URL}${item.image}` : "path/to/default-image.jpg"}
                          style={{ width: "100px", height: "100px", objectFit: "cover" }}
                          alt={item.name}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <Button variant="outline-danger" onClick={() => handleRemoveService(item.id)} className="ms-3">
                          <i className="bi bi-trash" />
                        </Button>
                      </td>
                      <td>
                        <span className="fw-bold">{Intl.NumberFormat("en-US").format(item.price)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => navigate("/dich-vu")} className="text-decoration-none text-body-emphasis">
                  <i className="bi bi-arrow-right ms-2"> Tiếp tục đặt lịch </i>
                </Button>
                <Button variant="outline-danger" onClick={handleClearServices} className="mb-2">
                  <span> Xóa tất cả</span> <i className="bi bi-cart-x"></i>
                </Button>
              </div>
            </Col>
            <Col md={5}>
              <div className="border" style={{ padding: "20px", borderRadius: "5px", width: "100%" }}>
                <h4 className="bold text-danger fw-bold">Tổng cộng: {total.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</h4>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tên người đặt lịch</Form.Label>
                    <Form.Control type="text" placeholder="Nhập tên của bạn..." name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control type="tel" placeholder="Nhập số điện thoại..." name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập địa chỉ email..." name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian đến</Form.Label>
                        <Form.Control type="time" name="time" value={formData.time} onChange={handleChange} isInvalid={!!errors.time} />
                        <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày đến</Form.Label>
                        <Form.Control type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} isInvalid={!!errors.appointmentDate} />
                        <Form.Control.Feedback type="invalid">{errors.appointmentDate}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit" className="w-100">
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

export default ServiceCart;

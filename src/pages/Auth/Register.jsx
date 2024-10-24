// Register.js
import React, { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css'; // Import CSS của Notyf

function Register() {
  // Cấu hình vị trí của Notyf để hiển thị thông báo ở phía trên
  const notyf = new Notyf({
    duration: 3000, // Thời gian hiển thị thông báo (ms)
    position: {
      x: 'center', // Căn giữa theo chiều ngang
      y: 'top',    // Hiển thị phía trên cùng
    },
    dismissible: true, // Cho phép người dùng tắt thông báo thủ công
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Khai báo useNavigate để điều hướng

  // Hàm kiểm tra hợp lệ dữ liệu
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Tên tài khoản không được để trống!";
    if (!formData.email.trim()) newErrors.email = "Email không được để trống!";
    if (!formData.phone.trim()) newErrors.phone = "Số điện thoại không được để trống!";
    if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống!";
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Xác nhận mật khẩu không được để trống!";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    const phoneRegex = /^0\d{9}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có 10 số và bắt đầu bằng số 0!";
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự!";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Xử lý khi người dùng submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      notyf.success("Đăng ký thành công!"); // Hiển thị thông báo thành công
      setTimeout(() => navigate("/dang-nhap"), 2000); // Chuyển hướng sau 2 giây
    } else {
      notyf.error("Vui lòng kiểm tra và điền đúng thông tin!"); // Thông báo lỗi
    }
  };

  // Cập nhật state khi người dùng nhập dữ liệu
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row className="rounded-4 shadow-lg overflow-hidden w-75 mx-auto">
          <Col md={6} className="d-none d-md-block px-0">
            <div
              className="h-100 w-100"
              style={{
                backgroundImage: `url("https://i.pinimg.com/564x/4f/58/53/4f5853f340b64303be02dda402f06411.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Col>

          <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
            <div className="p-5" style={{ width: "100%", maxWidth: "400px" }}>
              <h3 className="text-center mb-4 text-primary-emphasis">Đăng ký</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" placeholder="Tên tài khoản" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Địa chỉ email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Control type="text" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" placeholder="Nhập mật khẩu" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Control type="password" placeholder="Xác nhận mật khẩu" value={formData.confirmPassword} onChange={handleChange} isInvalid={!!errors.confirmPassword} />
                  <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                </Form.Group>

                <Link to="/dang-nhap" className="text-decoration-none text-primary-emphasis d-block mb-3 text-end">
                  Bạn đã có tài khoản?
                </Link>

                <Button variant="primary" type="submit" className="w-100 rounded-3 mb-3">
                  Đăng ký
                </Button>

                <Button variant="outline-primary" className="w-100 rounded-3">
                  Đăng ký với Google
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Register;

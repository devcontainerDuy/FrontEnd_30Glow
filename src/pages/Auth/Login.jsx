
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "notyf/notyf.min.css";
import { Helmet } from "react-helmet";

function Login() {
  const notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "top" },
    dismissible: true,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setFormData((prev) => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email không được để trống!";
    if (!formData.password.trim()) newErrors.password = "Mật khẩu không được để trống!";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json(); // Giả sử API trả về thông tin người dùng
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.username); // Lưu tên người dùng
          notyf.success("Đăng nhập thành công!");
  
          // Điều hướng tới trang chủ
          navigate("/");
          window.location.reload(); // Tải lại để cập nhật giao diện
        } else {
          notyf.error("Thông tin đăng nhập không chính xác!");
        }
      } catch (error) {
        notyf.error("Đã xảy ra lỗi khi kết nối với máy chủ.");
      }
    } else {
      notyf.error("Vui lòng kiểm tra thông tin đăng nhập!");
    }
  };
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-5">
        <Row className="border-rounded-10 shadow w-75 mx-auto">
          <Col md={6} className="d-flex align-items-center justify-content-center bg-white">
            <div className="p-5" style={{ width: "100%", maxWidth: "400px" }}>
              <h3 className="text-center mb-4 text-primary-emphasis">Đăng nhập</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Địa chỉ email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Button variant="outline-secondary rounded-end" onClick={togglePasswordVisibility}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                    </Button>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Ghi nhớ"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </Form.Group>

                <Link to="/quen-mat-khau" className="text-decoration-none text-danger me-2">
                  Quên mật khẩu?
                </Link>
                <Link to="/dang-ky" className="text-decoration-none text-primary-emphasis">
                  Bạn chưa có tài khoản?
                </Link>

                <Button variant="primary" type="submit" className="w-100 mt-2 mb-3">
                  Đăng nhập
                </Button>

                <Button variant="outline-primary" className="w-100">
                  Đăng nhập với Google
                </Button>
              </Form>
            </div>
          </Col>

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
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;

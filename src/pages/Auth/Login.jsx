import { useEffect, useState } from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import useAuthenContext from "@context/AuthenContext";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "", rememberToken: false });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithGoogle, login } = useAuthenContext();

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
      await login({ email: formData.email, password: formData.password, remember_token: formData.rememberToken });
    } else {
      window.notyf.error("Vui lòng kiểm tra thông tin đăng nhập!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = async () => {
    try {
      // Gọi API lấy URL đăng nhập Google
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/google`);
      const { check, url } = response.data;

      if (check) {
        const width = 400;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        // Mở popup đăng nhập Google
        const popup = window.open(url, "GoogleLogin", `width=${width},height=${height},top=${top},left=${left}`);

        if (!popup) {
          window.notyf.error("Popup bị chặn! Hãy cho phép bật popup trên trình duyệt.");
          return;
        }

        // Polling để kiểm tra URL của popup
        const pollTimer = setInterval(() => {
          try {
            if (popup.closed) {
              clearInterval(pollTimer);
              window.notyf.error("Đăng nhập bị hủy.");
              return;
            }

            // Kiểm tra khi popup chuyển hướng về frontend
            if (popup.location.href.startsWith(import.meta.env.VITE_CLIENT_URL)) {
              const hash = popup.location.hash.substring(1);
              const params = new URLSearchParams(hash);

              const loginData = {
                check: params.get("check"),
                uid: params.get("uid"),
                token: params.get("token"),
                expiry: parseInt(params.get("expiry"), 10),
              };

              popup.close(); // Đóng popup
              clearInterval(pollTimer); // Dừng polling

              // Gọi hàm xử lý sau khi đăng nhập thành công
              console.log(loginData);

              loginWithGoogle(loginData);
            }
          } catch (error) {
            // Bỏ qua lỗi cross-origin cho đến khi popup chuyển về cùng domain
          }
        }, 500);
      } else {
        window.notyf.error("Không thể lấy URL đăng nhập Google.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        window.notyf.error(error.response.data.message || "Có lỗi xảy ra khi đăng nhập với Google.");
      } else if (error.request) {
        console.error("Network Error:", error.request);
        window.notyf.error("Không thể kết nối đến server.");
      } else {
        console.error("Error:", error.message);
        window.notyf.error("Có lỗi xảy ra khi đăng nhập với Google.");
      }
    }
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
                  <Form.Control type="email" placeholder="Địa chỉ email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <InputGroup>
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
                    <Button variant="outline-secondary rounded-end" onClick={togglePasswordVisibility}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </Button>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formCheckbox">
                  <Form.Check type="checkbox" label="Ghi nhớ" checked={formData.rememberToken} onChange={(e) => setFormData({ ...formData, rememberToken: e.target.checked })} />
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

                <Button variant="outline-primary" className="w-100" onClick={handleGoogleLogin}>
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

import Header from "@layouts/Header";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ResetPass() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/reset-password/${token}`, {
        password: e.target.password.value,
        password_confirmation: e.target.confirmPassword.value,
      });

      if (response.data.check === true) {
        window.notyf.success(response.data.message);
      } else {
        window.notyf.error(response.data.message);
      }
    } catch (error) {
      window.notyf.error(error.response.data.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Đổi mật khẩu - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-5">
        <Row className="border-rounded-10 shadow w-75 mx-auto">
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
              <h3 className="text-center mb-4 text-primary-emphasis">Đổi mật khẩu mới</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Control type="password" placeholder="Mật khẩu mới" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Control type="password" placeholder="Xác nhận khẩu mới" />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-2 mb-3">
                  Xác nhận
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ResetPass;

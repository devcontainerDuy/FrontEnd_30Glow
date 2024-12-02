/* eslint-disable */
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/addContacts`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        note: formData.subject,
      });
      setStatus({ success: true, message: "Gửi yêu cầu thành công!" });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      setStatus({ success: false, message: "Có lỗi xảy ra khi gửi yêu cầu." });
    }
  };

  return (
    <>
      <Helmet>
        <title>Liên hệ - 30GLOW</title>
        <meta name="description" content="Liên hệ với chúng tôi để được hỗ trợ nhanh chóng." />
      </Helmet>
      <Header />
      <BreadcrumbComponent props={[{ name: "Liên hệ", url: "/lien-he" }]} />
      <Container className="contact-content my-4 pb-3">
        <Row className="align-items-center">
          <Col lg={6} className="pb-4 d-flex justify-content-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/335/178/non_2x/customer-service-concept-with-a-man-sitting-at-his-laptop-and-talking-with-a-call-center-woman-support-contact-us-hotline-operator-illustration-in-flat-style-vector.jpg"
              alt="Liên hệ"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>

          <Col lg={6}>
            <h2 className="mb-4 text-primary fw-bold text-center">Liên hệ với chúng tôi</h2>
            <p className="mb-4 text-secondary text-center">Để lại thông tin của bạn, chúng tôi sẽ liên hệ hỗ trợ bạn nhanh nhất có thể.</p>
            {status.message && <Alert variant={status.success ? "success" : "danger"}>{status.message}</Alert>}
            <Form className="px-3" onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Họ tên</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nhập họ tên..." required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Nhập email..." required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Số điện thoại</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Nhập số điện thoại..." required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Chủ đề</Form.Label>
                    <Form.Control type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Nhập chủ đề..." required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Tin nhắn</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Nhập nội dung tin nhắn..." required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="px-4 py-2">
                  Gửi yêu cầu
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

/* eslint-disable */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import { Helmet } from "react-helmet";

const Contact = () => {
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
          {/* Hình ảnh minh họa */}
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
            <p className="mb-4 text-secondary text-center">
              Để lại thông tin của bạn, chúng tôi sẽ liên hệ hỗ trợ bạn nhanh nhất có thể.
            </p>
            <Form className="px-3">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Họ tên</Form.Label>
                    <Form.Control type="text" placeholder="Nhập họ tên..." />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control type="email" placeholder="Nhập email..." />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Số điện thoại</Form.Label>
                    <Form.Control type="text" placeholder="Nhập số điện thoại..." />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Chủ đề</Form.Label>
                    <Form.Control type="text" placeholder="Nhập chủ đề..." />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Tin nhắn</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Nhập nội dung tin nhắn..." />
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

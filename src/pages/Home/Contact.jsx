import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../layouts/Header"; // Nhập đúng Header
import Footer from "../../layouts/Footer"; // Nhập đúng Footer

const Contact = () => {
  return (
    <div className="contact-container">
      <Header /> {/* Hiển thị Header */}
      <div className="breadcrumb">
        <p>Home / Liên hệ</p>
      </div>
      <Container className="contact-content">
        <Row>
          <Col md={6} className="contact-image">
            <img
              src="https://i.pinimg.com/564x/eb/df/d2/ebdfd2d7ee0b0380baa73df893707b80.jpg"
              alt="Liên hệ"
            />
          </Col>
          <Col md={6}>
            <div className="contact-form">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Họ tên</Form.Label>
                      <Form.Control type="text" placeholder="Họ tên . . ." />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email . . ." />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Số điện thoại . . ."
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Chủ đề</Form.Label>
                      <Form.Control type="text" placeholder="Chủ đề . . .." />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="form-group">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tin nhắn . . ."
                  />
                </Form.Group>
                <Button type="submit">Gửi yêu cầu</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Hiển thị Footer */}
    </div>
  );
};

export default Contact;

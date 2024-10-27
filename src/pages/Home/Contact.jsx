/* eslint-disable*/ 
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
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <BreadcrumbComponent props={[{ name: "Liên hệ", url: "/lien-he" }]} />
      <Container className="contact-content my-3">
        {/* <div className="breadcrumb mt-3 ">
          <p>Home / Liên hệ</p>
        </div> */}
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
                    <Form.Group className="form-group mb-3">
                      <Form.Label>Họ tên</Form.Label>
                      <Form.Control type="text" placeholder="Họ tên . . ." />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-group mb-3">
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
                      <Form.Control type="text" placeholder="Chủ đề . . ." />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="form-group mt-3">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tin nhắn . . ."
                  />
                </Form.Group>
                <Button type="submit" className="mt-3">
                  Gửi yêu cầu
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;

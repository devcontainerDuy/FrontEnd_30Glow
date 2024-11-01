import React from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Helmet } from 'react-helmet';
import { Col, Container, Row, Button, Form, Image } from 'react-bootstrap';

function ProductCard() {
  return (
    <>
      <Helmet>
        <title>Giỏ hàng sản phẩm - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />

      <Container className="my-3">
        <Row className="mb-4 p-2">
          <Col md={7} className="border-end pt-1">
            <h4>Giỏ hàng sản phẩm</h4>
            <div className="overflow-auto" style={{ maxHeight: '400px' }}>
              {[...Array(5)].map((_, idx) => (
                <Row key={idx} className="my-2 align-items-center">
                  <Col xs={3}>
                    <Image
                      src="https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg"
                      fluid
                      rounded
                    />
                  </Col>
                  <Col xs={5}>
                    <h6>Sản phẩm {idx + 1}</h6>
                    <p>Giá: 300,000₫</p>
                    <Form.Group className="d-flex align-items-center">
                      <Form.Label className="me-2 mb-0">Số lượng:</Form.Label>
                      <Form.Control type="number" min="1" defaultValue="1" style={{ width: '60px' }} />
                    </Form.Group>
                  </Col>
                  <Col xs={2} className="text-end">
                    <Button variant="danger" size="sm">
                      Xóa
                    </Button>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
          <Col md={5} className="pt-1">
            <div className="border p-3">
              <div className="d-flex justify-content-between">
                <h6>Tạm tính</h6>
                <p>1,500,000₫</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Phí vận chuyển</h6>
                <p>30,000₫</p>
              </div>
                <p className="text-success fw-bold mt-1">
                    Miễn phí vận chuyển với hóa đơn từ 500k
                </p>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Tổng cộng</h5>
                <h5 className="fw-bold text-danger">1,530,000₫</h5>
              </div>
              <Button variant="dark" className="w-100 mt-3">
                Tiến hành thanh toán
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductCard;

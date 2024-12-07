import React from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SuccessfulOrder() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container className="my-5">
        <Row className="justify-content-center pb-4">
          <Col md={10} lg={8}>
            <Card className="text-center shadow-lg border-0 pb-3">
              <Card.Body>
                <div className="text-success mb-4">
                  <i className="bi bi-check-circle-fill display-1"></i>
                </div>
                <h2 className="fw-bold text-success">Đặt hàng thành công!</h2>
                <p className="text-muted mt-3">Cảm ơn bạn đã tin tưởng và mua sắm tại 30GLOW. Đơn hàng của bạn đã được xác nhận và đang được xử lý.</p>
                <div className="mt-4 d-flex justify-content-center gap-3">
                  <Button variant="outline-success" className="d-flex align-items-center justify-content-center" onClick={() => navigate("/")}>
                    <i className="bi bi-house-door-fill me-2"></i> Về trang chủ
                  </Button>
                  <Button variant="primary" className="d-flex align-items-center justify-content-center" onClick={() => navigate("/order-details")}>
                    <i className="bi bi-card-list me-2"></i> Xem chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default SuccessfulOrder;

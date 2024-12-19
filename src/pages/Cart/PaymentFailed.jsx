import React from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PaymentFailed() {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("orderId");
    const orderTotal = params.get("orderTotal");

    const paymentVNPay = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/vnpay/create-payment?uid=${orderId}&total=${orderTotal}`)
            .then((response) => {
                window.location.href = response.data.url;
            })
            .catch((error) => {
                window.notyf.error(error.response.data.message);
            });
    };
    return (
        <>
            <Header />
            <Container className="my-5">
                <Row className="justify-content-center pb-4">
                    <Col md={10} lg={8}>
                        <Card className="text-center shadow-lg border-0 pb-3">
                            <Card.Body>
                                <div className="text-danger mb-4">
                                    <i className="bi bi-x-circle-fill display-1"></i>
                                </div>
                                <h2 className="fw-bold text-danger">Thanh toán thất bại!</h2>
                                <p className="text-muted mt-3">
                                    Đơn hàng chưa được thanh toán thành công, vui lòng thanh toán lại.
                                </p>
                                <div className="mt-4 d-flex justify-content-center gap-3">
                                    <Button
                                        variant="outline-danger"
                                        className="d-flex align-items-center justify-content-center"
                                        onClick={() => navigate("/")}
                                    >
                                        <i className="bi bi-house-door-fill me-2"></i> Về trang chủ
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="d-flex align-items-center justify-content-center"
                                        onClick={paymentVNPay}>
                                        <i className="bi bi-card-list me-2"></i> Thanh toán lại
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

export default PaymentFailed;

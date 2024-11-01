/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Container, FormSelect } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import Footers from "../../layouts/Footer";
import Headers from "../../layouts/Header";
import CardService from "../../components/CardService";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";
import { Helmet } from "react-helmet";
import axios from "axios";

function Index() {
  const [filter, setFilter] = useState("default");
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  1;
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/services?page=${page}`
      );
      setTotalPage(res.data.data.last_page);
      setServices(res.data.data.data);
      setPage(res.data.data.current_page);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchServices();
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Dịch vụ - 30GLOW</title>
        <meta name="description" content="Danh sách dịch vụ của chúng tôi" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Dịch vụ", url: "/dich-vu" }]} />
      <Container className="my-3">
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">
                Dịch vụ
              </h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ width: "200px" }}
            >
              <option value="default">Mặc định</option>
              <option value="popular">Phổ biến</option>
              <option value="newest">Dịch vụ mới</option>
            </FormSelect>
          </div>
        </div>
        {loading ? (
          <p>Đang tải dịch vụ...</p>
        ) : error ? (
          <p>Có lỗi xảy ra: {error.message}</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-5 g-4">
            {services.length > 0 ? (
              services.map((service, index) => (
                <CardService key={index} {...service} />
              ))
            ) : (
              <h3 className="text-center">Không có dịch vụ</h3>
            )}
          </Row>
        )}
        <Paginated current={page} total={totalPage} handle={handlePageChange} />
      </Container>
     <Container className="my-2">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">
                  Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-danger border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-danger">
                  <i className="bi bi-credit-card" />
                </div>
                <h5 className="fw-bold">Bảo hành 3 ngày</h5>
                <p className="mb-0">Không hài lòng? Hoàn tiền 100%!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-success border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-success">
                  <i className="bi bi-minecart-loaded" />
                </div>
                <h5 className="fw-bold">Đổi trả tận nơi</h5>
                <p className="mb-0">Đổi trả miễn phí, tận nơi. Dễ dàng!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-warning border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-warning">
                  <i className="bi bi-headset" />
                </div>
                <h5 className="fw-bold">Hỗ trợ 24/7</h5>
                <p className="mb-0">Hỗ trợ khách hàng 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      <Footers />
    </>
  );
}

export default Index;

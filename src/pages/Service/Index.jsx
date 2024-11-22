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
  const [allServices, setAllServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [page, setPage] = useState(1);
  const [servicesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllServices = async () => {
    setLoading(true);
    try {
      let allServices = [];
      let currentPage = 1;
      let lastPage = 1;

      do {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services?page=${currentPage}`);
        const data = response.data.data;
        allServices = [...allServices, ...data.data];
        lastPage = data.last_page;
        currentPage++;
      } while (currentPage <= lastPage);

      setAllServices(allServices);
    } catch (error) {
      console.error("Lỗi khi fetch dịch vụ:", error);
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const getFilteredServices = () => {
    let sortedServices = [...allServices];

    if (filter === "sale") {
      sortedServices = sortedServices.filter((service) => service.discount > 0);
    } else if (filter === "high-to-low") {
      sortedServices.sort((a, b) => b.price - a.price);
    } else if (filter === "low-to-high") {
      sortedServices.sort((a, b) => a.price - b.price);
    } else if (filter === "newest") {
      sortedServices.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return sortedServices;
  };

  const updateFilteredServices = () => {
    const newFilteredServices = getFilteredServices();
    setFilteredServices(newFilteredServices);
  };

  const paginatedServices = filteredServices.slice((page - 1) * servicesPerPage, page * servicesPerPage);

  useEffect(() => {
    fetchAllServices();
  }, []);

  useEffect(() => {
    updateFilteredServices();
  }, [filter, allServices]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Dịch vụ - 30GLOW</title>
        <meta name="description" content="Danh sách dịch vụ của chúng tôi" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Dịch vụ", url: "/dich-vu" }]} />
      <Container className="my-3">
        {/* Header và Bộ lọc */}
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Dịch vụ</h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect value={filter} onChange={handleFilterChange} style={{ width: "200px" }}>
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              <option value="newest">Sản phẩm mới</option>
              <option value="sale">Sản phẩm có sale</option>
            </FormSelect>
          </div>
        </div>

        {/* Hiển thị sản phẩm */}
        {loading ? (
          <p>Đang tải dịch vụ...</p>
        ) : error ? (
          <p>Có lỗi xảy ra: {error.message}</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-4 row-cols-xl-5 row-cols-md-3 row-cols-sm-2 g-4">
            {paginatedServices.length > 0 ? paginatedServices.map((service, index) => <CardService key={index} {...service} />) : <h3 className="text-center">Không có dịch vụ</h3>}
          </Row>
        )}

        {/* Phân trang */}
        <Paginated
          current={page}
          total={Math.ceil(filteredServices.length / servicesPerPage)} // Tổng số trang
          handle={handlePageChange}
        />
      </Container>

      {/* Thông tin thêm */}
      <Container className="my-2">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.</p>
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
      </Container>
      <Footers />
    </>
  );
}

export default Index;

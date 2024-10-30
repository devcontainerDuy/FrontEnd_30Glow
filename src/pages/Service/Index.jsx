/* eslint-disable*/
import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row } from "react-bootstrap";
import CardService from "../../components/CardService";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";
import { Helmet } from "react-helmet";

function Index() {
  const [services, setServices] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const Service = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/services?page=${page}`);
      if (!response.ok) {
        throw new Error("Lỗi kết nối tới máy chủ.");}
        
      const data = await response.json();
      setLastPage(data.last_page);
      setServices(data.data);
    } catch (error) {
      setError(error.message);
      console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Service();
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Dịch vụ - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <BreadcrumbComponent props={[{ name: "Dịch vụ", url: "/dich-vu" }]} />
      <Container className="my-3">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">
              Dịch vụ
            </h3>
          </div>
        </div>
        <Row className="g-4">
          {services.slice(0, 5).map((service, index) => (
            <CardService key={index} {...service} />
          ))}
        </Row>
        <Paginated current={page} total={lastPage} handle={setPage} />
      </Container>

      <Footer />
    </>
  );
}

export default Index;

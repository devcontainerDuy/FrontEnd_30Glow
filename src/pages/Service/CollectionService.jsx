/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormSelect } from "react-bootstrap";
import Footers from "@layouts/Footer";
import Headers from "@layouts/Header";
import CardService from "../../components/CardService";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useParams } from "react-router-dom";

function CollectionServices() {
  const { slug } = useParams();
  const [collection, setCollection] = useState({});
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filter, setFilter] = useState("default");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [servicesPerPage] = useState(8);

  useEffect(() => {
    let isMounted = true;
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services-collections/${slug}`);
        if (isMounted) {
          const data = response.data?.data || {};
          setCollection(data);
          setServices(data.services || []);
          setFilteredServices(data.services || []);
        }
      } catch {
        if (isMounted) {
          setCollection({});
          setServices([]);
          setFilteredServices([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchServices();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    let sortedServices = [...services];
    if (selectedFilter === "sale") {
      sortedServices = sortedServices.filter((service) => Number(service.discount) > 0);
    } else if (selectedFilter === "best-sale") {
      sortedServices = sortedServices
        .filter((service) => Number(service.discount) > 0)
        .sort((a, b) => Number(b.discount) - Number(a.discount));
    } else if (selectedFilter === "high-to-low") {
      sortedServices.sort((a, b) => b.price - a.price);
    } else if (selectedFilter === "low-to-high") {
      sortedServices.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "newest") {
      sortedServices.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    setFilteredServices(sortedServices);
    setPage(1);
  };

  const paginatedServices = filteredServices.slice((page - 1) * servicesPerPage, page * servicesPerPage);

  return (
    <>
      <Helmet>
        <title>Bộ sưu tập - 30GLOW</title>
        <meta name="description" content="Trang hiển thị bộ sưu tập dịch vụ" />
      </Helmet>
      <Headers />
      <Container className="my-3">
        <BreadcrumbComponent props={[{ name: collection.name || "Bộ sưu tập", url: `/nhom-dich-vu/${collection.slug || ""}` }]} />
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">
                Bộ sưu tập: {collection.name || ""}
              </h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect value={filter} onChange={handleFilterChange} className="w-auto">
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              <option value="best-sale">Giảm giá tốt nhất</option>
            </FormSelect>
          </div>
        </div>
        {loading ? (
          <p>Đang tải dịch vụ...</p>
        ) : (
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {paginatedServices.length > 0 ? (
              paginatedServices.map((service) => <CardService key={service.id} {...service} />)
            ) : (
              <Col xs="12" className="mx-auto w-100">
                <h3 className="text-center pt-3">Không có dịch vụ nào trong bộ sưu tập này.</h3>
              </Col>
            )}
          </Row>
        )}
        <Paginated current={page} total={Math.ceil(filteredServices.length / servicesPerPage)} handle={setPage} />
      </Container>
      <Footers />
    </>
  );
}

export default CollectionServices;

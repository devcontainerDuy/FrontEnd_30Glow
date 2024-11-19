import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardService from "../../components/CardService";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";

function CollectionServices() {
  const { slug } = useParams();
  const [collection, setCollection] = useState({});
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/services-collections/" + slug);
        setCollection(response.data.data);
        setServices(response.data.data.services);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu dịch vụ:", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>Bộ sưu tập - 30GLOW</title>
        <meta name="description" content="Trang hiển thị bộ sưu tập dịch vụ " />
      </Helmet>
      <Header />
      <Container className="my-3">
        <BreadcrumbComponent
          props={[
            { name: "Dịch vụ", url: "/dich-vu" },
            { name: collection.name, url: `/bo-suu-tap/${collection.slug}` },
          ]}
        />
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Bộ sưu tập: {collection.name}</h3>
          </div>
        </div>
        {loading ? (
          <p>Đang tải dịch vụ...</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-4 g-4">
            {services.length > 0 ? services.map((service) => <CardService key={service.id} {...service} />) : <h3 className="text-center">Không có dịch vụ nào trong bộ sưu tập này.</h3>}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default CollectionServices;

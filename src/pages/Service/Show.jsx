/* eslint-disable */
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Button, Breadcrumb, Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { addToServiceCart } from "../../store/reducers/serviceCartSlice";
import { useDispatch } from "react-redux";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";

function Show() {
  const { slug } = useParams();
  const [ChiTietDV, setChiTietDV] = useState(null);
  const notyf = useRef(new Notyf({ position: { x: "right", y: "top" } }));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChiTietDV = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/services/${slug}`);
        if (response.data?.check) {
          setChiTietDV(response.data.data);
        } else {
          notyf.current.error("Dữ liệu không hợp lệ");
        }
      } catch (error) {
        notyf.current.error("Có lỗi xảy ra khi tải dữ liệu.");
      }
    };
    fetchChiTietDV();
  }, [slug]);

  const handleAddToCart = () => {
    notyf.current.success("Đã thêm vào giỏ hàng!");
    const newItem = { ...ChiTietDV, quantity: 1 };
    dispatch(addToServiceCart(newItem));
  };

  return (
    <>
      <Helmet>
        <title>{ChiTietDV ? ChiTietDV.name : "Chi tiết dịch vụ"} - 30GLOW</title>
        <meta name="description" content={ChiTietDV?.summary} />
      </Helmet>
      <Header />
      <BreadcrumbComponent
        props={[
          { name: "Dịch vụ", url: "/dich-vu" },
          { name: ChiTietDV?.name, url: "/dich-vu/" + ChiTietDV?.slug },
        ]}
      />
      <Container className="my-3 pb-5">
        <Row className="g-4">
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <img
              src={ChiTietDV?.image ? `${import.meta.env.VITE_URL}/${ChiTietDV.image}` : "/default-image.jpg"}
              alt="Hình ảnh dịch vụ"
              className="img-fluid"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <div className="p-4 border rounded shadow-sm bg-light">
              <h4 className="text-primary-emphasis fw-bold fs-4">{ChiTietDV ? ChiTietDV.name : "Tên dịch vụ"}</h4>
              <div className="d-flex align-items-center mt-2">
                <h5 className="text-decoration-line-through text-muted me-3">{ChiTietDV ? ChiTietDV.compare_price.toLocaleString("vi-VN", { style: "currency", currency: "VND" }) : ""}</h5>
                <h5 className="fw-bold text-danger">{ChiTietDV ? ChiTietDV.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" }) : ""}</h5>
                <Badge bg="success" className="p-2 ms-3">
                  {ChiTietDV?.discount}%
                </Badge>
              </div>
              <h5 className="mt-4 fw-bold text-primary-emphasis">Nội dung dịch vụ:</h5>
              <div>{ChiTietDV ? <p dangerouslySetInnerHTML={{ __html: ChiTietDV.content }} /> : <p>Đang tải nội dung...</p>}</div>
              <Button variant="primary" className="w-100 mt-4" onClick={handleAddToCart} style={{ padding: "10px 0", fontWeight: "bold" }}>
                Thêm đặt lịch
              </Button>
            </div>
          </Col>
        </Row>

        {/* Professional Services Section */}
        <Row className="mt-5">
          <Row className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
            <div>
              <h3 className="mb-0 h3 fw-bold text-primary-emphasis">Dịch vụ chuyên nghiệp</h3>
            </div>
          </Row>
          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <i className="bi bi-scissors h1 text-primary"></i>
                  <h4 className="mt-3 fw-bold">Tạo kiểu tóc chuyên nghiệp</h4>
                  <p>Cắt, nhuộm, và uốn tóc thời thượng.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <i className="bi bi-droplet h1 text-primary"></i>
                  <h4 className="mt-3 fw-bold">Dưỡng tóc phục hồi</h4>
                  <p>Sử dụng sản phẩm chuyên nghiệp để nuôi dưỡng tóc.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <i className="bi bi-calendar-check h1 text-primary"></i>
                  <h4 className="mt-3 fw-bold">Đặt lịch dễ dàng</h4>
                  <p>Chọn stylist yêu thích chỉ với vài thao tác.</p>
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

export default Show;

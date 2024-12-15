import React, { useState, useEffect } from "react";
import axios from "axios"; // Đảm bảo đã cài axios
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, FormSelect } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
// import CardBrand from "../../components/CardBrand.jsx";
import CardProduct from "../../components/CardProduct.jsx";
import Paginated from "../../components/Paginated.jsx";

function Index() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("default");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?page=${page}`
      );
      const data = response.data.data;
      setProducts(data.data); // Lưu danh sách sản phẩm
      setTotalPage(data.last_page);
      setPage(data.current_page);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  // Gọi API khi trang được load
  useEffect(() => {
    fetchProducts();
  }, [page]); // Chạy lại khi page thay đổi

  // Xử lý thay đổi trang
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
    }
  };

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Lọc và sắp xếp sản phẩm
  const getFilteredProducts = () => {
    let sortedProducts = [...products];
    if (filter === "sale") {
      sortedProducts = sortedProducts.filter((product) => product.discount > 0);
    } else if (filter === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (filter === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filter === "newest") {
      sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return sortedProducts;
  };

  return (
    <>
      <Helmet>
        <title>Thương hiệu - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <BreadcrumbComponent props={[{ name: "Thương hiệu", url: "/thuong-hieu" }]} />
      <Container className="my-3">
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">
                Thương hiệu
              </h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect value={filter} onChange={handleFilterChange} style={{ width: "200px" }}>
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              <option value="sale">Sản phẩm có sale</option>
            </FormSelect>
          </div>
        </div>

        {loading ? (
          <p className="text-center">Đang tải...</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-5 g-4">
            {getFilteredProducts().map((product, index) => (
              <CardProduct key={index} {...product} />
            ))}
          </Row>
        )}
        <Paginated current={page} total={totalPage} handle={handlePageChange} />
      </Container>
      <Container className="my-5">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          {/* Nội dung khác */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Index;

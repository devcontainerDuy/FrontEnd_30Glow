import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Helmet } from "react-helmet";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Container, Row, Col, FormSelect } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import axios from "axios";

function BrandProducts() {
  const { slug } = useParams();
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("default");
  const [loading, setLoading] = useState(true);

  // Lấy thông tin thương hiệu và sản phẩm
  useEffect(() => {
    const fetchBrandProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/brands/${slug}`);
        setBrand(response.data.data);
        setProducts(response.data.data.products);
        setFilteredProducts(response.data.data.products);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thương hiệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrandProducts();
  }, [slug]);

  // Xử lý bộ lọc sản phẩm
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    let sortedProducts = [...products];
    if (selectedFilter === "sale") {
      sortedProducts = sortedProducts.filter((product) => product.discount > 0);
    } else if (selectedFilter === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedFilter === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "newest") {
      sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
      <Helmet>
        <title>Thương hiệu - 30GLOW</title>
        <meta name="description" content={`Sản phẩm thuộc thương hiệu ${brand.name}`} />
      </Helmet>

      <Header />
      <Container className="my-3">
        <BreadcrumbComponent
          props={[
            { name: "Thương hiệu", url: "/thuong-hieu" },
            { name: brand.name, url: `/thuong-hieu/${slug}` },
          ]}
        />
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Thương hiệu: {brand.name}</h3>
            </div>
          </div>
          {/* Bộ lọc sản phẩm */}
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
          <p>Đang tải sản phẩm...</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 pb-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => {
                const filteredGallery = product.gallery.filter((i) => i.status === 1);
                console.log(filteredGallery);

                return <CardProduct key={index} {...product} gallery={filteredGallery[0].image} />;
              })
            ) : (
              <Col xs="12" className="mx-auto w-100">
                <h3 className="text-center pt-3">Không có sản phẩm nào thuộc thương hiệu này.</h3>
              </Col>
            )}
          </Row>

        )}
      </Container>
      <Footer />
    </>
  );
}

export default BrandProducts;

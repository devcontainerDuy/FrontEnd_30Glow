import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Col, Container, Row, FormSelect } from "react-bootstrap";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";

function CategoryProducts() {
  const { slug } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("default"); // Bộ lọc
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu danh mục và sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/categories/" + slug);
        setCategory(response.data.data);
        setProducts(response.data.data.products);
        setFilteredProducts(response.data.data.products); // Đặt sản phẩm lọc mặc định
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug]);

  // Xử lý thay đổi bộ lọc
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
        <title>Danh mục - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-3">
        <BreadcrumbComponent
          props={[
            { name: "Sản phẩm", url: "/san-pham" },
            { name: category.name, url: `/danh-muc/${category.slug}` },
          ]}
        />
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">
                Danh mục: {category.name}
              </h3>
            </div>
          </div>
          {/* Bộ lọc sản phẩm */}
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect value={filter} onChange={handleFilterChange} style={{ width: "200px" }}>
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              {/* <option value="newest">Sản phẩm mới</option> */}
              <option value="sale">Sản phẩm có sale</option>
            </FormSelect>
          </div>
        </div>
        {loading ? (
          <p>Đang tải sản phẩm...</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <CardProduct key={product.id} {...product} />)
            ) : (
              <Col xs="12" className="mx-auto w-100">
                <h3 className="text-center pt-3">Không có sản phẩm nào thuộc danh mục này.</h3>
              </Col>
            )}
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default CategoryProducts;

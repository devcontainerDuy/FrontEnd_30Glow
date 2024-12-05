import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Col, Container, Row, FormSelect } from "react-bootstrap";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";

function CategoryProducts() {
  const { slug } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("default");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const PRODUCTS_PER_PAGE = 8; // Số sản phẩm mỗi trang

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${slug}?page=${page}`);
        const data = response.data.data;
        setCategory(data);
        setProducts(data.products);
        setFilteredProducts(data.products);
        setTotalPage(Math.ceil(data.products.length / PRODUCTS_PER_PAGE)); // Tổng số trang
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug, page]);

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
    }
    setFilteredProducts(sortedProducts);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const getProductsByPage = () => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, end);
  };

  return (
    <>
      <Helmet>
        <title>Danh mục - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-3 pb-3">
        <BreadcrumbComponent
          props={[
            { name: "Sản phẩm", url: "/san-pham" },
            { name: category.name, url: `/danh-muc/${category.slug}` },
          ]}
        />
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Danh mục: {category.name}</h3>
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
          <p>Đang tải sản phẩm...</p>
        ) : (
          <>
            <Row className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
              {getProductsByPage().length > 0 ? (
                getProductsByPage().map((product) => <CardProduct key={product.id} {...product} />)
              ) : (
                <Col xs="12" className="mx-auto w-100">
                  <h3 className="text-center pt-3">Không có sản phẩm nào thuộc danh mục này.</h3>
                </Col>
              )}
            </Row>
            {filteredProducts.length > PRODUCTS_PER_PAGE && (
              <Paginated current={page} total={totalPage} handle={handlePageChange} />
            )}
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default CategoryProducts;

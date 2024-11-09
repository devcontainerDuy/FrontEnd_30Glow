import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import Paginated from "../../components/Paginated";

function CategoryProducts() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Kiểm tra lại URL này. Nếu không đúng, thay đổi theo endpoint đúng của API.
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${slug}`);
  
        // Kiểm tra response format nếu API không có `data.data`
        setProducts(response.data.data.products); // Cập nhật totalPage từ API nếu có
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);
  
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const getFilteredProducts = () => {
//     return products;
//   };

  return (
    <>
      <Helmet>
        <title>Danh mục - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-3">
        <BreadcrumbComponent
          props={[{ name: "Trang chủ", url: "/" }, { name: slug, url: `/danh-muc/${slug}` }]}
        />
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Danh mục: {slug}</h3>
          </div>
        </div>
        {loading ? (
          <p>Đang tải sản phẩm...</p>
        ) : (
          <Row className="row-cols-1 row-cols-lg-5 g-4">
            {products.length > 0 ? (
              products.map((product) => <CardProduct key={product.id} {...products }/>)
            ) : (
              <h3 className="text-center">Không có sản phẩm nào thuộc danh mục này.</h3>
            )}
          </Row>
        )}
        {/* <Paginated current={page} total={totalPage} handle={handlePageChange} /> */}
      </Container>
      <Footer />
    </>
  );
}

export default CategoryProducts;

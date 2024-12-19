import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormSelect } from "react-bootstrap";
import Headers from "@layouts/Header";
import Footers from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import CardPost from "../../components/CardPost";
import Paginated from "../../components/Paginated";
import { Link } from "react-router-dom";

function Post() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState("default");

  const postPerPage = 6;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };

  const filteredPosts = () => {
    switch (filter) {
      case "post-hot":
        return postList.filter((post) => post.highlighted === 1);
      case "default":
      default:
        return postList;
    }
  };

  const currentPosts = filteredPosts().slice((page - 1) * postPerPage, page * postPerPage);

  useEffect(() => {
    setLoading(true);
    fetch("https://dashboard.30glow.site/api/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.check) {
          setPostList(data.data.data);
          setTotalPage(Math.ceil(data.data.data.length / postPerPage));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Tin Tức - 30GLOW</title>
        <meta name="description" content="Mô tả của bài viết" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Tin Tức", url: "/tin-tuc" }]} />
      <Container className="my-5">
        <Row className="mb-3">
          <Col>
            <h2 className="fw-bold text-uppercase text-center text-primary-emphasis">Tin Tức - 30GLOW</h2>
            <p className="text-center fs-4 text-muted">30GLOW – Hệ thống làm đẹp hiện đại, kết hợp dịch vụ tạo kiểu tóc và cung cấp sản phẩm chăm sóc chất lượng.</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-center mb-3">
          <span className="me-2">Lọc:</span>
          <FormSelect value={filter} onChange={handleFilterChange} style={{ width: "200px" }}>
            <option value="default">Tất cả bài viết</option>
            <option value="post-hot">Bài viết nổi bật</option>
          </FormSelect>
        </div>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
          {loading ? (
            <h3 className="text-center">Đang tải...</h3>
          ) : currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <CardPost
                key={index}
                {...post}
              />
            ))
          ) : (
            <h3 className="text-center">Không có bài đăng</h3>
          )}
        </Row>

        <Paginated current={page} total={totalPage} handle={handlePageChange} />
      </Container>
      <Footers />
    </>
  );
}

export default Post;

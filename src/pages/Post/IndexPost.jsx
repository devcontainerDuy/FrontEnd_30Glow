/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Headers from "@layouts/Header";
import Footers from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import CardPost from "../../components/CardPost";

function Post() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dashboard.30glow.site/api/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.check) {
          setPostList(data.data.data); 
        }
        setLoading(false); // Kết thúc tải
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
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
          {loading ? (
            <h3 className="text-center">Đang tải...</h3>
          ) : postList && postList.length > 0 ? (
            postList.map((post) => (
              <CardPost
                key={post.id}
                name={post.title}
                slug={post.slug}
                image={`https://dashboard.30glow.site${post.image}`}
                createdAt={post.created_at}
                author="30GLOW" // Tạm đặt author cố định
                content={post.summary}
              />
            ))
          ) : (
            <h3 className="text-center">Không có bài đăng</h3>
          )}
        </Row>
        {/*end row*/}
      </Container>
      <Footers />
    </>
  );
}

export default Post;

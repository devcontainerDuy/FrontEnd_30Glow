import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headers from "@layouts/Header";
import Footers from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
  const { slug } = useParams(); // Lấy slug từ URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);

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

  useEffect(() => {
    fetch(`https://dashboard.30glow.site/api/posts/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.check) {
          setPost(data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu chi tiết bài viết:", error);
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{post ? post.title : "Đang tải..."} - 30GLOW</title>
        <meta name="description" content={post ? post.summary : "Chi tiết bài viết"} />
      </Helmet>
      <Headers />
      <BreadcrumbComponent
        props={[
          { name: "Tin Tức", url: "/tin-tuc" },
          { name: post ? post.title : "Đang tải...", url: post ? `/tin-tuc/${post.slug}` : "#" },
        ]}
      />
      <Container className="my-5">
        {loading ? (
          <h3 className="text-center">Đang tải...</h3>
        ) : post ? (
          <>
            <Row className="mb-4">
              <Col>
                <h1 className="fw-bold text-primary-emphasis text-center">{post.title}</h1>
                <p className="text-muted text-center">Đăng bởi 30GLOW </p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <img
                  src={`https://dashboard.30glow.site${post.image}`}
                  alt={post.title}
                  className="img-fluid rounded mx-auto d-block"
                  style={{ width: "800px", height: "500px", objectFit: "cover" }}
                />
              </Col>
            </Row>
            <Row>
              {/* Chia 2 cột */}
              <Col md={7}>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </Col>
              <Col md={5}>
                <Row className="row-cols-1 g-4">
                  <div className=" bg-info bg-opacity-10 border border-info  rounded p-4">
                    {" "}
                    <h2 className="text-danger ">Bài viết nổi bật</h2>
                    {loading ? (
                      <h3 className="text-center">Đang tải...</h3>
                    ) : postList && postList.length > 0 ? (
                      postList
                        .filter((post) => post.highlighted === 1)
                        .slice(0, 2)
                        .map((post) => (
                          <Col key={post.id} className="mb-4">
                            <div className="card">
                              <Link to={`/tin-tuc/${post.slug}`}>
                                <img src={`https://dashboard.30glow.site${post.image}`} alt={post.title} className="card-img-top" style={{ height: "180px", objectFit: "cover" }} />
                              </Link>

                              <div className="card-body">
                                <Link to={`/tin-tuc/${post.slug}`}>
                                  <h5 className="card-title">{post.title}</h5>
                                </Link>

                                <p className="card-text">{post.created_at}</p>
                              </div>
                            </div>
                          </Col>
                        ))
                    ) : (
                      <h3 className="text-center">Không có bài viết nổi bật</h3>
                    )}
                  </div>
                </Row>
              </Col>
            </Row>
          </>
        ) : (
          <h3 className="text-center">Bài viết không tồn tại</h3>
        )}
      </Container>
      <Footers />
    </>
  );
}

export default PostDetail;

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headers from "@layouts/Header";
import Footers from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import CardPost from "@components/CardPost";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetch("https://dashboard.30glow.site/api/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.check) {
          setPostList(data.data.data);
        }
        setLoading(false);
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
          setRelatedPosts(data.data.related);
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
                <img src={`https://dashboard.30glow.site${post.image}`} alt={post.title} className="img-fluid rounded mx-auto d-block" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
              </Col>
            </Row>
            <Row>
              {/* Chia 2 cột */}
              <Col md={8}>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </Col>
              <Col md={4}>
                <Row className="row-cols-1 g-4">
                  <div className=" border border-danger  rounded p-3">
                    {" "}
                    <h2 className="text-danger fw-bold ">Bài viết nổi bật</h2>
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

            <Row className="mt-5">
              <Col>
                <div className="text-start border-0 rounded-0 border-start border-primary border-5 mb-3">
                  <div className="ms-2">
                    <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">BÀI VIẾT LIÊN QUAN </h3>
                  </div>
                </div>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.slice(0, 4).map((relatedPost) => (
                      <CardPost
                        key={relatedPost.id}
                        name={
                          <Link to={`/tin-tuc/${relatedPost.slug}`} className="card-title text-decoration-none">
                            {relatedPost.title}
                          </Link>
                        }
                        slug={relatedPost.slug}
                        image={`https://dashboard.30glow.site${relatedPost.image}`}
                        author="30GLOW"
                        content={relatedPost.summary}
                        collection={relatedPost.collection}
                      />
                    ))
                  ) : (
                    <h3 className="text-center">Không có bài viết liên quan</h3>
                  )}
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

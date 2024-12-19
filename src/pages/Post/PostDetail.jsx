import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headers from "@layouts/Header";
import Footers from "@layouts/Footer";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import CardPost from "@components/CardPost";
import axios from "axios";

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [highlightedPosts, setHighlightedPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/posts/highlighted")
      .then((res) => {
        setHighlightedPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/posts/${slug}`)
      .then((res) => {
        setPost(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
                  {/* <div className=" border border-danger  rounded p-3"> */}
                  <h2 className="text-danger fw-bold ">Bài viết nổi bật</h2>
                  {loading ? (
                    <h3 className="text-center">Đang tải...</h3>
                  ) : highlightedPosts && highlightedPosts.length > 0 ? (
                    highlightedPosts.slice(0, 2).map((post, index) => <CardPost key={index} {...post} />)
                  ) : (
                    <h3 className="text-center">Không có bài viết nổi bật</h3>
                  )}
                  {/* </div> */}
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <div className="text-start border-0 rounded-0 border-start border-primary border-5 mb-3">
                  <div className="ms-2">
                    <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">BÀI VIẾT LIÊN QUAN</h3>
                  </div>
                </div>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts
                      .slice(0, 4)
                      .map((relatedPost) => (
                        <CardPost
                          key={relatedPost.id}
                          name={relatedPost.title}
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

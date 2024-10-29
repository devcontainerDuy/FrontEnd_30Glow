import React, { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row, Col, Form, Button, Carousel, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { Helmet } from "react-helmet";

function Detail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const productList = [
  //   {
  //     id: 1,
  //     name: "Sửa rửa mặt Simple",
  //     slug: "sua-rua-mat-simple",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 618000,
  //     discount: 494000,
  //   },
  //   {
  //     id: 2,
  //     name: "Dầu gội Dvinces",
  //     slug: "dau-goi-davinces",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 334000,
  //     discount: 293000,
  //   },
  //   {
  //     id: 3,
  //     name: "Dầu xả Dvinces",
  //     slug: "dau-xa-davinces",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 364060,
  //     discount: 320000,
  //   },
  //   {
  //     id: 4,
  //     name: "Kem dưỡng ẩm ATS",
  //     slug: "kem-duong-ats",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 691000,
  //     discount: 549000,
  //   },
  //   {
  //     id: 5,
  //     name: "Kem chống nắng SkinAqua",
  //     slug: "kem-chong-nang-skinaqua",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 284570,
  //     discount: 159000,
  //   },
  // ];
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Nguyễn Huy Hoàng",
      avatar: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      content: "Sản phẩm chất lượng, giá rẻ",
      date: "17/10/2024",
      likes: 0,
      liked: false,
      showReplyInput: false,
      replies: [],
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState({});

  const handleQuantityChange = (value) => {
    if (quantity + value > 0) setQuantity(quantity + value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const newCommentData = {
      id: comments.length + 1,
      name: "Người dùng mới",
      avatar: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      content: newComment,
      date: new Date().toLocaleDateString("vi-VN"),
      likes: 0,
      liked: false,
      showReplyInput: false,
      replies: [],
    };
    setComments([newCommentData, ...comments]);
    setNewComment("");
  };

  const toggleLike = (id) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked } : comment)));
  };

  const toggleReplyInput = (id) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, showReplyInput: !comment.showReplyInput } : comment)));
  };

  const handleReply = (id) => {
    const reply = replyContent[id]?.trim();
    if (!reply) return;
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [...comment.replies, { content: reply, date: new Date().toLocaleDateString("vi-VN") }],
              showReplyInput: false,
            }
          : comment
      )
    );
    setReplyContent({ ...replyContent, [id]: "" });
  };

  const handleDelete = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>Chi tiết sản phẩm - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">Chi tiết sản phẩm: {slug}</h3>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <Carousel className="shadow rounded" interval={3000}>
              <Carousel.Item>
                <img className="d-block w-100 rounded" src="https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded" src="https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded" src="https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg" alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col lg={7} className="d-flex flex-column gap-3">
            <h2 className="text-primary-emphasis fw-bold">{slug.replace(/-/g, " ")}</h2>
            <h4 className="fw-semibold text-muted">Sửa rửa mặt dịu nhẹ, dành cho da nhạy cảm</h4>

            <div className="d-flex align-items-center gap-3">
              <p className="fw-bold text-decoration-line-through text-muted mb-0">Giá gốc: 390.000 VND</p>
              <Badge bg="success" className="p-2">
                Giảm 10%
              </Badge>
            </div>

            <h4 className="text-danger fw-bold">Giá giảm: 350.000 VND</h4>

            <Form className="d-flex gap-3 mt-3">
              <div className="d-flex align-items-center border rounded">
                <Button variant="light" onClick={() => handleQuantityChange(-1)}>
                  −
                </Button>
                <Form.Control type="text" value={quantity} readOnly className="text-center border-0" style={{ width: "60px" }} />
                <Button variant="light" onClick={() => handleQuantityChange(1)}>
                  +
                </Button>
              </div>
              <Button variant="primary" type="submit" className="fw-bold flex-grow-1">
                Thêm vào giỏ hàng
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row className="g-3">
          <Col>
            <h3 className="text-primary-emphasis">Mô tả</h3>
            <p className="text-muted">
              Sửa rờng mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy
              cảm. Sửa rờng mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da
              nhạy cảm. Sửa rờng mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa
              cho da nhạy cảm. Sửa rờng mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ, dựa cho da nhạy cảm. Sự mặt dịu nhẹ,
              dựa cho da nhạy cảm.
            </p>
          </Col>
        </Row>

        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3 mt-4">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">Bình luận</h3>
          </div>
        </div>

        <Form onSubmit={handleAddComment} className="d-flex mb-4 mt-4">
          <Form.Control type="text" placeholder="Nhập bình luận của bạn..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="me-2" />
          <Button className="col-2" type="submit" variant="primary">
            Gửi
          </Button>
        </Form>

        <Row>
          <Col>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <div className="d-flex align-items-start gap-3">
                  <img src={comment.avatar} alt="Avatar" className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0">{comment.name}</h6>
                      <small className="text-muted">{comment.date}</small>
                    </div>
                    <p className="mb-1 text-muted">{comment.content}</p>
                    <div className="d-flex gap-3">
                      <Button className="text-decoration-none bg-primary bg-opacity-25" variant="link" size="sm" onClick={() => toggleLike(comment.id)}>
                        {comment.liked ? "Bỏ thích" : "Thích"} ({comment.likes})
                      </Button>
                      <Button className="text-decoration-none" variant="link" size="sm" onClick={() => toggleReplyInput(comment.id)}>
                        Trả lời
                      </Button>
                      <Button className="text-danger text-decoration-none" variant="link" size="sm" onClick={() => handleDelete(comment.id)}>
                        Xóa
                      </Button>
                    </div>

                    {comment.replies.map((reply, index) => (
                      <div key={index} className="ms-4 mt-2">
                        <small className="d-block fw-bold">{reply.content}</small>
                        <small className="text-muted">{reply.date}</small>
                      </div>
                    ))}

                    {comment.showReplyInput && (
                      <Form
                        className="d-flex mt-2 ms-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleReply(comment.id);
                        }}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Nhập trả lời..."
                          value={replyContent[comment.id] || ""}
                          onChange={(e) => setReplyContent({ ...replyContent, [comment.id]: e.target.value })}
                          className="me-2"
                        />
                        <Button type="submit" size="sm" variant="secondary">
                          Gửi
                        </Button>
                      </Form>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 mb-3 mt-4">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">Sản phẩm liên quan</h3>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-lg-5 g-4">
          {productList.map((product) => (
            <CardProduct key={product.id} {...product} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Detail;

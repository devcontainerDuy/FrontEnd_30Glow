/* eslint-disable*/ 
import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Carousel,
  Badge,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";

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
  const [productDetail, setProductDetail] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  // const [productIndex, setProductIndex] = useState([]);

  //   useEffect(() => {
  //   // Call API Products
  //   const Product = async () => {
  //     try {
  //       await axios
  //         .get(import.meta.env.VITE_API_URL + "/products/highlighted")
  //         .then((res) => {
  //           setProductIndex(res.data.data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   Product();
  // }, []);
console.log(relatedProducts);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products/${slug}`)
      .then((res) => {
        console.log(res.data.data); // Kiểm tra dữ liệu trả về từ API
        setProductDetail(res.data.data);
        setRelatedProducts(res.data.data.related_products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);
  

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
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
              liked: !comment.liked,
            }
          : comment
      )
    );
  };

  const toggleReplyInput = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, showReplyInput: !comment.showReplyInput }
          : comment
      )
    );
  };

  const handleReply = (id) => {
    const reply = replyContent[id]?.trim();
    if (!reply) return;
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  content: reply,
                  date: new Date().toLocaleDateString("vi-VN"),
                },
              ],
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
      <BreadcrumbComponent props={[{ name: "Sản phẩm", url: "/san-pham" }, { name: productDetail.name, url: "/san-pham/" + productDetail.slug}]}/>
      <Container className="my-5">
        {/* <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">
              Chi tiết sản phẩm
            </h3>
          </div>
        </div> */}

        <Row className="g-4">
          <Col lg={5}>
          <Swiper spaceBetween={10} slidesPerView={1} className="shadow rounded">
              {productDetail.gallery?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="d-block w-100 rounded"
                    src={`${import.meta.env.VITE_URL}${image.image}`}
                    alt={`Slide ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </Col>

          <Col lg={7} className="d-flex flex-column gap-3">
            <h3 className="text-primary-emphasis fw-bold">
              {productDetail.name}
            </h3>
            <h5 className="fw-semibold text-muted" dangerouslySetInnerHTML={{__html: productDetail.content?.slice(55, 250)}}>
              
            </h5>

            <div className="d-flex align-items-center gap-3">
              <h4 className="text-danger fw-bold">{productDetail.price?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}</h4>
              <p className="fw-bold text-decoration-line-through text-muted mb-0 fs-5">
                {productDetail.price?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
              </p>
              <Badge bg="success" className="p-2">
                {productDetail.discount}%
              </Badge>             
            </div>

            <div className="align-items-center gap-3">
              <p className="fw-semibold text-secondary">Danh mục: {productDetail.category?.name}</p>
            </div>

            <div className="align-items-center gap-3">
              <p className="fw-semibold text-secondary">Thương hiệu: {productDetail.brand?.name}</p>
            </div>

            <Form className="d-flex gap-3 mt-3">
              <div className="d-flex align-items-center border rounded">
                <Button
                  variant="light"
                  onClick={() => handleQuantityChange(-1)}
                >
                  −
                </Button>
                <Form.Control
                  type="text"
                  value={quantity}
                  readOnly
                  className="text-center border-0"
                  style={{ width: "60px" }}
                />
                <Button variant="light" onClick={() => handleQuantityChange(1)}>
                  +
                </Button>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="fw-bold flex-grow-1"
              >
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
            <p dangerouslySetInnerHTML={{ __html: productDetail.content }} />
            </p>
          </Col>
        </Row>

        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3 mt-4">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">Bình luận</h3>
          </div>
        </div>

        <Form onSubmit={handleAddComment} className="d-flex mb-4 mt-4">
          <Form.Control
            type="text"
            placeholder="Nhập bình luận của bạn..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="me-2"
          />
          <Button className="col-2" type="submit" variant="primary">
            Gửi
          </Button>
        </Form>

        <Row>
          <Col>
            {comments.map((comment) => (
              <div key={comment.id} className="mb-4">
                <div className="d-flex align-items-start gap-3">
                  <img
                    src={comment.avatar}
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0">{comment.name}</h6>
                      <small className="text-muted">{comment.date}</small>
                    </div>
                    <p className="mb-1 text-muted">{comment.content}</p>
                    <div className="d-flex gap-3">
                      <Button
                        className="text-decoration-none bg-primary bg-opacity-25"
                        variant="link"
                        size="sm"
                        onClick={() => toggleLike(comment.id)}
                      >
                        {comment.liked ? "Bỏ thích" : "Thích"} ({comment.likes})
                      </Button>
                      <Button
                        className="text-decoration-none"
                        variant="link"
                        size="sm"
                        onClick={() => toggleReplyInput(comment.id)}
                      >
                        Trả lời
                      </Button>
                      <Button
                        className="text-danger text-decoration-none"
                        variant="link"
                        size="sm"
                        onClick={() => handleDelete(comment.id)}
                      >
                        Xóa
                      </Button>
                    </div>

                    {comment.replies.map((reply, index) => (
                      <div key={index} className="ms-4 mt-2">
                        <small className="d-block fw-bold">
                          {reply.content}
                        </small>
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
                          onChange={(e) =>
                            setReplyContent({
                              ...replyContent,
                              [comment.id]: e.target.value,
                            })
                          }
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
            <h3 className="mb-0 h3 fw-bold text-primary-emphasis">
              Sản phẩm liên quan
            </h3>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-lg-5 g-4">
          {relatedProducts.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Detail;

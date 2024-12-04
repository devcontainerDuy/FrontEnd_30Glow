import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import CardProduct from "../../components/CardProduct";
import CardPost from "../../components/CardPost";
import CardService from "../../components/CardService";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

function Index() {
  const [slideIndex, setSlideIndex] = useState([]);
  const [serviceIndex, setServiceIndex] = useState([]);
  const [productIndex, setProductIndex] = useState([]);

  useEffect(() => {
    // Call API Slides
    const Slide = async () => {
      try {
        await axios
          .get(import.meta.env.VITE_API_URL + "/slides")
          .then((res) => {
            setSlideIndex(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };

    // Call API Services
    const Service = async () => {
      try {
        await axios
          .get(import.meta.env.VITE_API_URL + "/services/highlighted")
          .then((res) => {
            setServiceIndex(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    // Call API Products
    const Product = async () => {
      try {
        await axios
          .get(import.meta.env.VITE_API_URL + "/products/highlighted")
          .then((res) => {
            setProductIndex(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    Slide();
    Service();
    Product();
  }, []);

  const postList = [
    {
      name: "Làm thế nào để chọn dầu gội phù hợp với da đầu?",
      slug: "chon-dau-goi-phu-hop",
      image: "https://i.pinimg.com/736x/77/ac/25/77ac25c3b4b1cc810cc0afe803923ae2.jpg",
      createdAt: "2024-11-02",
      author: "Lê Minh Hằng",
      content: "Chọn dầu gội đúng không chỉ giúp làm sạch da đầu mà còn cải thiện sức khỏe tóc đáng kể. Hãy cùng tìm hiểu cách xác định loại da đầu và chọn sản phẩm phù hợp nhất.",
    },
    {
      name: "Khám phá dịch vụ chăm sóc da chuyên sâu tại spa",
      slug: "cham-soc-da-chuyen-sau-tai-spa",
      image: "https://i.pinimg.com/736x/13/95/30/13953045964276a03b5bf63ca6e72813.jpg",
      createdAt: "2024-10-28",
      author: "Trần Quỳnh Hoa",
      content:
        "Dành thời gian chăm sóc da tại các spa không chỉ mang lại làn da khỏe mạnh mà còn giúp bạn thư giãn sau những ngày làm việc căng thẳng. Cùng khám phá các liệu trình làm đẹp da nổi bật tại các spa uy tín.",
    },
    {
      name: "Bí quyết chăm sóc tóc nhuộm để luôn óng mượt",
      slug: "bi-quyet-cham-soc-toc-nhuom",
      image: "https://i.pinimg.com/736x/f8/66/9c/f8669caae105949e4b20d9ee701e4dc4.jpg",
      createdAt: "2024-11-05",
      author: "Phạm Hải Yến",
      content:
        "Tóc nhuộm rất dễ bị hư tổn nếu không được chăm sóc đúng cách. Trong bài viết này, chúng tôi sẽ chia sẻ những mẹo nhỏ giúp tóc nhuộm luôn bền màu và bóng khỏe, từ cách chọn dầu gội đến sản phẩm dưỡng tóc phù hợp.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Trang chủ - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      {/* Start slider section */}
      <section className="p-0 m-0">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000000",
            "--swiper-pagination-color": "#000000",
          }}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {slideIndex.length > 0 ? (
            slideIndex.map((item, index) => (
              <>
                <SwiperSlide key={index}>
                  <Image src={import.meta.env.VITE_URL + item.desktop} fluid className="w-100 height-100" alt={item.name} />
                </SwiperSlide>
              </>
            ))
          ) : (
            <SwiperSlide>
              <Image src="https://storage.30shine.com/banner/2024/20240717_banner_khumui_w.jpg" fluid className="w-100 height-100" alt="Slide 1" />
            </SwiperSlide>
          )}
        </Swiper>
      </section>
      {/* End slider section */}

      {/* Start buy section */}
      <Container className="my-2">
        <Row className="row-cols-2 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-danger border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-danger">
                  <i className="bi bi-credit-card" />
                </div>
                <h5 className="fw-bold">Bảo hành 3 ngày</h5>
                <p className="mb-0">Không hài lòng? Hoàn tiền 100%!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-success border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-success">
                  <i className="bi bi-minecart-loaded" />
                </div>
                <h5 className="fw-bold">Đổi trả tận nơi</h5>
                <p className="mb-0">Đổi trả miễn phí, tận nơi. Dễ dàng!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-warning border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-warning">
                  <i className="bi bi-headset" />
                </div>
                <h5 className="fw-bold">Hỗ trợ 24/7</h5>
                <p className="mb-0">Hỗ trợ khách hàng 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      {/* End buy section */}

      {/* Start service section */}
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">DỊCH VỤ HOT</h3>
          </div>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4">
          {serviceIndex && serviceIndex.length > 0 ? (
            serviceIndex.slice(0, 4).map((item, index) => (
              <CardService key={index} {...item} />
            ))
          ) : (
            <Col xs="12" className="mx-auto w-100">
              <h3 className="text-center pt-3">Không có dịch vụ</h3>
            </Col>
          )}
        </Row>
      </Container>
      {/* End service section */}

      {/* Start product section */}
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">SẢN PHẨM BÁN CHẠY</h3>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            // 640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            // 992: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {productIndex.length > 0 ? (
            productIndex.map((product, index) => (
              <SwiperSlide key={index}>
                <CardProduct {...product} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <h3 className="text-center pt-3">Không có sản phẩm</h3>
            </SwiperSlide>
          )}
        </Swiper>
      </Container>
      {/* End product section */}

      {/* Start banner section */}
      <Container className="my-5">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000000",
            "border-radius": "5px",
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/san-pham">
              <img src="https://www.theskinfit.com/uploads/brand_banner/lAROCHE.jpg" className="img-fluid" alt="..." />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/san-pham">
              <img src="https://daugoiduoclieunguyenxuan.vn/wp-content/uploads/2022/05/Banner-web-NX_1920x650-1.jpg" className="img-fluid" alt="..." />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/san-pham">
              <img src="https://www.beautycos.co.uk/media/amasty/shopby/option_images/loreal_paris.jpg" className="img-fluid" alt="..." />
            </Link>
          </SwiperSlide>
        </Swiper>
      </Container>
      {/* End banner section */}

      {/* Start Post */}
      <Container className="my-5">
        <Row className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3 ">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Tin tức mới nhất về 30Glow</h3>
          </div>
        </Row>

        <Row className="row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
          {postList ? postList.map((post, index) => <CardPost key={index} {...post} />) : <h3 className="text-center">Không có bài đăng</h3>}
        </Row>
        {/*end row*/}
      </Container>
      {/* End Post */}

      <Footer />
    </>
  );
}

export default Index;

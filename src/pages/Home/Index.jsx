import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import CardProduct from "../../components/CardProduct";
import CardPost from "../../components/CardPost";

function Index() {
  const productList = [
    {
      id: 1,
      name: "Product 1",
      slug: "product-1",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 618000,
      discount: 494000,
    },
    {
      id: 2,
      name: "Product 2",
      slug: "product-2",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 334730,
    },
    {
      id: 3,
      name: "Product 3",
      slug: "product-3",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 364060,
      discount: 369230,
    },
    {
      id: 4,
      name: "Product 4",
      slug: "product-4",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 691570,
      discount: 349530,
    },
    {
      id: 5,
      name: "Product 5",
      slug: "product-5",
      image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
      price: 284570,
      discount: 109360,
    },
  ];

  const postList = [
    {
      name: "Bài viết số 1",
      slug: "bai-viet-so-1",
      image: "./src/assets/images/blog/01.webp",
      createdAt: "2024-10-19",
      author: "Nguyễn Văn A",
      content: "Nội dung tóm tắt của bài viết số 1...",
    },
    {
      name: "Hướng dẫn học React",
      slug: "huong-dan-hoc-react",
      image: "./src/assets/images/blog/02.webp",
      createdAt: "2024-10-18",
      author: "Trần Thị B",
      content: "React là một thư viện JavaScript...",
    },
    {
      name: "Khám phá thế giới lập trình",
      slug: "kham-pha-the-gioi-lap-trinh",
      image: "./src/assets/images/blog/03.webp",
      createdAt: "2024-10-17",
      author: "Lê Văn C",
      content: "Lập trình là một lĩnh vực thú vị...",
    },
  ];
  return (
    <>
      <Header />

      {/* Start slider section */}
      <section className='p-0 m-0'>
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
          <SwiperSlide>
            <Image src='https://backend.codingfs.com/storage/slides/20240311_banner_dkp_w.jpeg' fluid className='w-100 height-100' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://backend.codingfs.com/storage/slides/240426_banner_1000_w.jpg' fluid className='w-100 height-100' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='https://backend.codingfs.com/storage/slides/240426_banner_binhan_w.jpg' fluid className='w-100 height-100' alt='' />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* End slider section */}

      {/* Start buy section */}
      <Container className='my-2'>
        <Row className='row-cols-1 row-cols-lg-4 g-4'>
          <Col className='d-flex'>
            <Card className='border-0 rounded-0 border-bottom border-primary border-3 w-100'>
              <Card.Body className='text-center'>
                <div className='h1 fw-bold my-2 text-primary'>
                  <i className='bi bi-truck' />
                </div>
                <h5 className='fw-bold'>Giao hàng siêu tốc 2h</h5>
                <p className='mb-0'>Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex'>
            <Card className='border-0 rounded-0 border-bottom border-danger border-3 w-100'>
              <Card.Body className='text-center'>
                <div className='h1 fw-bold my-2 text-danger'>
                  <i className='bi bi-credit-card' />
                </div>
                <h5 className='fw-bold'>Hoàn tiền 120%</h5>
                <p className='mb-0'>Không hài lòng? Hoàn tiền 120%! Mua ngay!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex'>
            <Card className='border-0 rounded-0 border-bottom border-success border-3 w-100'>
              <Card.Body className='text-center'>
                <div className='h1 fw-bold my-2 text-success'>
                  <i className='bi bi-minecart-loaded' />
                </div>
                <h5 className='fw-bold'>Đổi trả tận nơi</h5>
                <p className='mb-0'>Đổi trả miễn phí, tận nơi. Dễ dàng!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex'>
            <Card className='border-0 rounded-0 border-bottom border-warning border-3 w-100'>
              <Card.Body className='text-center'>
                <div className='h1 fw-bold my-2 text-warning'>
                  <i className='bi bi-headset' />
                </div>
                <h5 className='fw-bold'>Cam kết 7 ngày hiệu quả</h5>
                <p className='mb-0'>Hiệu quả sau 7 ngày hoặc hoàn tiền. Thử ngay!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      {/* End buy section */}

      {/* Start product section */}
      <Container className='my-5'>
        <div className='text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3'>
          <div className='ms-2'>
            <h3 className='mb-0 h3 fw-bold text-uppercase text-primary-emphasis'>SẢN PHẨM BÁN CHẠY ĐƯỢC CẬP NHẬT LIÊN TỤC</h3>
          </div>
        </div>
        <Row className='row-cols-1 row-cols-lg-5 g-4'>
          {productList.map((product, index) => (
            <CardProduct key={index} {...product} />
          ))}
        </Row>
      </Container>
      {/* End product section */}

      {/* Start Post */}
      <Container className='my-5'>
        <div className='text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3'>
          <div className='ms-2'>
            <h3 className='mb-0 h3 fw-bold text-uppercase text-primary-emphasis'>Tin tức mới nhất về 30Glow</h3>
          </div>
        </div>

        <Row className='row-cols-1 row-cols-lg-3 g-4'>
          {postList.map((post, index) => (
            <CardPost key={index} {...post} />
          ))}
        </Row>
        {/*end row*/}
      </Container>
      {/* End Post */}

      <Footer />
    </>
  );
}

export default Index;

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row } from "react-bootstrap";
import CardService from "../../components/CardService";

function Index() {
  const serviceList = [
    {
      name: "Dịch vụ 1",
      slug: "dich-vu-1",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-1.jpg",
      price: 500000,
      discount: 400000,
    },
    {
      name: "Combo chăm sóc tóc",
      slug: "combo-cham-soc-toc",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-2.jpg",
      price: 1000000,
      discount: 800000,
    },
    {
      name: "Nhuộm tóc thời trang",
      slug: "nhuom-toc-thoi-trang",
      image: "https://storage.30shine.com/web/v4/images/uon-trang-chu/uon-3.jpg",
      price: 750000,
      discount: 600000,
    },
    {
      name: "Tạo kiểu tóc nam",
      slug: "tao-kieu-toc-nam",
      image: "https://storage.30shine.com/web/v4/images/pc/pc_home_spa_1.png",
      price: 300000,
      discount: 240000,
    },
  ];
  return (
    <>
      <Header />
      <Container className='my-5'>
        <div className='text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3'>
          <div className='ms-2'>
            <h3 className='mb-0 h3 fw-bold text-uppercase text-primary-emphasis'>Dịch vụ</h3>
          </div>
        </div>
        <Row className='row-cols-1 row-cols-lg-4 g-4'>
          {serviceList.map((service, index) => (
            <CardService key={index} {...service} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Index;

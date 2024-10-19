import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Show() {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h2 className='text-center gradient'>
            Chi tiết: <span>{slug}</span>
          </h2>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Show;

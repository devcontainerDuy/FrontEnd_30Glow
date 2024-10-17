import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <Col xs='auto'>
        <Card>
          <div className='ribban'>20% OFF</div>
          <div className='position-relative overflow-hidden'>
            <div className='product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0'>
              <a className='text-bg-dark'>
                <i className='bi bi-heart' />
              </a>
              <a className='text-bg-dark'>
                <i className='bi bi-basket3' />
              </a>
              <a className='text-bg-dark' data-bs-toggle='modal' data-bs-target='#QuickViewModal'>
                <i className='bi bi-zoom-in' />
              </a>
            </div>
            <Link to='product-details.html'>
              <Image src='./src/assets/images/new-arrival/02.webp' className='card-img-top' alt='...' />
            </Link>
          </div>
          <Card.Body>
            <div className='text-center'>
              <h6 className='mb-1 fw-bold product-name'>Product Name</h6>
              <div className='ratings mb-1 h6'>
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
              </div>
              <p className='mb-0 h6 fw-bold product-price'>$49</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

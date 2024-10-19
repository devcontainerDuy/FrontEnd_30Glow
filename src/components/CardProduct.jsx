import { Card, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardProduct({ name, slug, image, price, discount }) {
  // Tính phần trăm giảm giá và làm tròn
  const sale = Math.round(((price - discount) / price) * 100);
  return (
    <>
      <Col>
        <Card>
          <div className='position-relative overflow-hidden'>
            <div className='d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0'>
              <p className='my-3 h6'>
                <p className='text-bg-danger'>
                  <span className='fw-bold m-2'>{sale}% OFF</span>
                </p>
              </p>
            </div>
            <Link to={`/product/${slug}`}>
              <Image src={image} width={100} className='card-img-top' fluid alt={slug} />
            </Link>
          </div>
          <Card.Body>
            <div className='text-start'>
              <h6 className='mb-1 fw-bold'>{name}</h6>
              <div className='ratings mb-1 h6'>
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
              </div>
              <div className='d-flex'>
                <p className='mb-0 h6'>{discount} ₫</p>
                <del className='mb-0 h6 ms-2 text-muted'>{price} ₫</del>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

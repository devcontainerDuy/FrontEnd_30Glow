/* eslint-disable*/
import { Card, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

<<<<<<< Updated upstream
export default function CardService({ name, slug, price, compare_price, discount, image, summary, content }) {
  // Tính phần trăm giảm giá và làm tròn
  // const sale = Math.round(((price - discount) / price) * 100);
  return (
    <>
      <Col>
        <Card>
          <div className='position-relative overflow-hidden'>
            {discount > 0 ? (
              <div className='d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0 '>
                <p className='my-3 h6'>
                  <span className='text-bg-danger'>
                    <span className='fw-bold m-2'>{discount}% OFF</span>
                  </span>
                </p>
              </div>
            ) : null}
            <Link to={`/dich-vu/${slug}`}>
              <Image src={import.meta.env.VITE_URL + image} width={100} height={400} className='card-img-top' fluid alt={slug} />
=======
export default function CardService({ name, slug, price, compare_price, discount, image }) {
  console.log("image", image);
  return (
    <Col className="d-flex align-items-stretch mb-4">
      <Card className="flex-fill">
        <div className="position-relative overflow-hidden">
          {discount > 0 && (
            <div className="d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0">
              <p className="my-3 h6">
                <span className="text-bg-danger">
                  <span className="fw-bold m-2">{discount}% OFF</span>
                </span>
              </p>
            </div>
          )}
          <Link to={`/dich-vu/${slug}`}>
            <Image src={import.meta.env.VITE_URL + image} className="card-img-top" fluid alt={name} />
          </Link>
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="text-start flex-grow-1">
            <Link to={`/dich-vu/${slug}`} className="text-black text-decoration-none">
              <h6 className="mb-1 fw-bold">{name}</h6>
>>>>>>> Stashed changes
            </Link>
          </div>
          <Card.Body>
            <div className='text-start'>
              <h6 className='mb-1 fw-bold text-truncate' title={name} style={{ maxWidth: "272px" }}>
                <span>{name}</span>
              </h6>
              <div className='ratings mb-1 h6'>
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
                <i className='bi bi-star-fill text-warning' />
              </div>
              <div className='d-flex'>
                {compare_price > 0 ? (
                  <>
                    <p className='fw-bold'>
                      {compare_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p className='ms-2 text-decoration-line-through'>
                      {price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </>
                ) : (
                  <p className='fw-bold'>
                    {price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
<<<<<<< Updated upstream
                )}
              </div>
=======
                </>
              ) : (
                <p className="fw-bold">
                  {compare_price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              )}
>>>>>>> Stashed changes
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

CardService.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  compare_price: PropTypes.number.isRequired,
  discount: PropTypes.number,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

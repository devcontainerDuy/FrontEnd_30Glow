import { Card, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardService({
  name,
  slug,
  price,
  compare_price,
  discount,
  image,
}) {
  const sale =
    compare_price > 0
      ? Math.round(((compare_price - price) / compare_price) * 100)
      : 0;

  return (
    <Col className="d-flex align-items-stretch mb-4">
      <Card className="flex-fill">
        <div className="position-relative overflow-hidden">
          {discount > 0 && (
            <div className="d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0">
              <p className="my-3 h6">
                <span className="text-bg-danger">
                  <span className="fw-bold m-2">{sale}% OFF</span>
                </span>
              </p>
            </div>
          )}
          <Link to={`/dich-vu/${slug}`}>
            <Image
              src={import.meta.env.VITE_URL + image}
              className="card-img-top"
              fluid
              alt={name}
            />
          </Link>
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="text-start flex-grow-1">
            <Link
              to={`/dich-vu/${slug}`}
              className="text-black text-decoration-none"
            >
              <h6 className="mb-1 fw-bold">{name}</h6>
            </Link>
            <div className="ratings mb-1 h6">
              {[...Array(5)].map((_, index) => (
                <i key={index} className="bi bi-star-fill text-warning" />
              ))}
            </div>
            <div className="d-flex">
              {price > 0 ? (
                <>
                  <p className="me-3 text-decoration-line-through">
                    {compare_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <p className="fw-bold text-danger">
                    {price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </>
              ) : (
                <p className="fw-bold">
                  {discount.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardService.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  compare_price: PropTypes.number,
  discount: PropTypes.number,
  image: PropTypes.string.isRequired,
};

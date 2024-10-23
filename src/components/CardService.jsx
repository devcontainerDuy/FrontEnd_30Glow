import { Card, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardService({ name, slug, image, price, discount }) {
  // Tính phần trăm giảm giá và làm tròn
  const sale = Math.round(((price - discount) / price) * 100);
  return (
    <>
      <Col>
        <Card>
          <div className="position-relative overflow-hidden">
            {discount > 0 ? (
              <div className="d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0 ">
                <p className="my-3 h6">
                  <span className="text-bg-danger">
                    <span className="fw-bold m-2">{sale}% OFF</span>
                  </span>
                </p>
              </div>
            ) : null}
            <Link to={`/dich-vu/${slug}`}>
              <Image
                src={image}
                width={100}
                height={400}
                className="card-img-top"
                fluid
                alt={slug}
              />
            </Link>
          </div>
          <Card.Body>
            <div className="text-start">
              <h6 className="mb-1 fw-bold">{name}</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <div className="d-flex">
                {discount > 0 ? (
                  <>
                    <p className="me-3 text-decoration-line-through">
                      {price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                    <p className="fw-bold">
                      {discount.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  </>
                ) : (
                  <p className="fw-bold">
                    {price.toLocaleString("vi-VN", {
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
    </>
  );
}

CardService.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

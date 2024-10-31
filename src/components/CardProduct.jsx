import { Card, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

<<<<<<< Updated upstream
export default function CardProduct({ name, slug, gallery, price, discount }) {
  // Tính phần trăm giảm giá và làm tròn
  const sale = price - (price * (discount / 100));
=======
export default function CardProduct({ name, slug, price, discount, gallery }) {
  const sale = price - price * (discount / 100);
  console.log("gallery", gallery);
>>>>>>> Stashed changes
  return (
    <>
      <Col>
        <Card className="card h-100">
<<<<<<< Updated upstream
          <div className='position-relative overflow-hidden'>
=======
          <div className="position-relative overflow-hidden">
>>>>>>> Stashed changes
            {discount > 0 ? (
              <div className="d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute start-0">
                <p className="my-3 h6">
                  <span className="text-bg-danger">
                    <span className="fw-bold m-2">{discount}% OFF</span>
                  </span>
                </p>
              </div>
            ) : null}
            <Link to={`/san-pham/${slug}`}>
<<<<<<< Updated upstream
              <Image src={import.meta.env.VITE_URL +"/" + gallery[0]['image']} width={100} height={300} className='card-img-top' fluid alt={slug} />
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
=======
              <Image src={import.meta.env.VITE_URL + (gallery.find((item) => item.status === 1)?.image || "")} width={100} height={300} className="card-img-top" fluid alt={slug} />
            </Link>
          </div>
          <Card.Body>
            <div className="text-start">
              <Link to={`/san-pham/${slug}`} className="text-decoration-none link-underline-opacity-100-hover">
                <h6 className="mb-1 fw-bold text-truncate" title={name}>
                  {name}
                </h6>
              </Link>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
>>>>>>> Stashed changes
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
                    <p className="fw-bold text-danger">
                      {sale.toLocaleString("vi-VN", {
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

CardProduct.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gallery: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

import PropTypes from "prop-types";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardPost({ title, slug, image, created_at, summary, collection }) {
  return (
    <Col>
      <Card >
        {/* Sử dụng các lớp Bootstrap cho ảnh */}
        <Image src={import.meta.env.VITE_URL + image} className="card-img-top rounded-0" alt={slug} style={{ height: "230px", objectFit: "cover" }} />
        <Card.Body>
          <div className="d-flex align-items-center gap-4">
            <p className="mb-0">
              <i className="bi bi-calendar me-2" />
              {created_at}
            </p>
            {collection && (
              <p className="mb-1 ms-auto">
                <i className="bi bi-tag me-2" />
                {collection.name}
              </p>
            )}
          </div>
          <Card.Title className="fw-bold mt-3 h5 text-title ">{title}</Card.Title>
          <p className="mb-0 text-title ">{summary}</p>
          <Link to={`/tin-tuc/${slug}`} className="btn btn-outline-dark mt-3">
            Xem thêm
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  collection: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
};

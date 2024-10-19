import PropTypes from "prop-types";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardPost({ name, slug, image, createdAt, author, content }) {
  return (
    <>
      <Col>
        <Card>
          <Image src={image} className='card-img-top rounded-0' alt={slug} />
          <Card.Body className='card-body'>
            <div className='d-flex align-items-center gap-4'>
              <p className='mb-0'>
                <i className='bi bi-person me-2' />
                {author}
              </p>

              <p className='mb-0'>
                <i className='bi bi-calendar me-2' />
                {createdAt}
              </p>
            </div>
            <Card.Title className='card-title fw-bold mt-3 h5'>{name}</Card.Title>
            <p className='mb-0'>{content}</p>
            <Link href={`/bai-viet/${slug}`} className='btn btn-outline-dark btn-ecomm mt-3'>
              Xem thêm
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

CardPost.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

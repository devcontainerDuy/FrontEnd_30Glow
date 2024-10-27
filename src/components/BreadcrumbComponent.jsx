import { Container, Breadcrumb } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function BreadcrumbComponent({ props, children }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <Container className="my-2">
      <div className="d-flex align-items-center rounded-3">
        <Breadcrumb aria-label="breadcrumb" className="mt-3 ms-3">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            <i className="bi bi-house-door-fill text-primary-emphasis" width="16" height="16" />
            <span className="visually-hidden">Trang chủ</span>
          </Breadcrumb.Item>

          {props &&
            props.map((item, index) => (
              <Breadcrumb.Item
                key={index}
                linkAs={Link}
                linkProps={{ to: item.url }}
                aria-current={item.url === currentUrl ? "page" : undefined}
                className={`text-capitalize ${item.url === currentUrl ? "fw-bold" : ""}`}
                active={item.url === currentUrl}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>

        <div className="me-3">{children}</div>
      </div>
    </Container>
  );
}

BreadcrumbComponent.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
};

export default BreadcrumbComponent;

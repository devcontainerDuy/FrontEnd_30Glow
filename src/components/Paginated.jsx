import PropTypes from "prop-types";
import React from "react";
import { Pagination } from "react-bootstrap";

function Paginated({ current, total, handle }) {
  if (total < 1) return null;
  return (
    <>
      <Pagination className="justify-content-center mt-4">
        <Pagination.First onClick={() => handle(1)} disabled={current === 1} />
        <Pagination.Prev onClick={() => handle(current > 1 ? current - 1 : 1)} disabled={current === 1} />
        {current > 3 && (
          <>
            <Pagination.Item onClick={() => handle(1)}>1</Pagination.Item>
            <Pagination.Ellipsis />
          </>
        )}

        {current > 1 && <Pagination.Item onClick={() => handle(current - 1)}>{current - 1}</Pagination.Item>}
        <Pagination.Item linkClassName="text-bg-dark border-dark" active>
          {current}
        </Pagination.Item>
        {current < total && <Pagination.Item linkClassName="text-dark" onClick={() => handle(current + 1)}>{current + 1}</Pagination.Item>}

        {current < total - 2 && (
          <>
            <Pagination.Ellipsis linkClassName="text-dark"/>
            <Pagination.Item linkClassName="text-dark" onClick={() => handle(total)}>{total}</Pagination.Item>
          </>
        )}
        <Pagination.Next linkClassName="text-dark" onClick={() => handle(current < total ? current + 1 : total)} disabled={current === total} />
        <Pagination.Last linkClassName="text-dark" onClick={() => handle(total)} disabled={current === total} />
      </Pagination>
    </>
  );
}

export default Paginated;

Paginated.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handle: PropTypes.func,
};

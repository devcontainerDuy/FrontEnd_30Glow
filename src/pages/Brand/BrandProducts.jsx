import React from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Helmet } from "react-helmet";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { Container, FormSelect } from "react-bootstrap";

function BrandProducts() {
  return (
    <>
      <Helmet>
        <title>Thương hiệu - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>

      <Header />
      <Container className="my-3">
        <BreadcrumbComponent
          props={[
            { name: "Thương hiệu", url: "/thuong-hieu" },
            { name: "Simple", url: `/thuong-hieu/simple` },
          ]}
        />
        <div className="d-flex justify-content-between mb-3">
          <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100">
            <div className="ms-2">
              <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Danh mục:</h3>
            </div>
          </div>
          {/* Bộ lọc sản phẩm */}
          <div className="d-flex align-items-center">
            <span className="me-2">Lọc:</span>
            <FormSelect style={{ width: "200px" }}>
              <option value="default">Mặc định</option>
              <option value="high-to-low">Giá cao nhất</option>
              <option value="low-to-high">Giá thấp nhất</option>
              {/* <option value="newest">Sản phẩm mới</option> */}
              <option value="sale">Sản phẩm có sale</option>
            </FormSelect>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default BrandProducts;

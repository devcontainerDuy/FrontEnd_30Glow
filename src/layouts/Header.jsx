/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Notyf } from "notyf";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Dropdown, Image, Nav, Navbar, NavbarBrand, NavDropdown, NavLink, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "material-icons",
          tagName: "i",
          text: "warning",
        },
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "success",
        background: "green",
        color: "white",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "info",
        background: "#24b3f0",
        color: "white",
        duration: 1500,
        dismissible: false,
        icon: '<i className="bi bi-bag-check"></i>',
      },
    ],
  });

  return (
    <>
      {/*start top header*/}
      <Navbar expand="xl" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="../src/assets/images/logo30GLOW.png" width={100} fluid />
          </Navbar.Brand>

          {/* start header */}

          {/* Button mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* Button mobile */}

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="bg-body-tertiary">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand href="#home">
                  <Image src="../src/assets/images/logo30GLOW.png" width={80} fluid />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto text-uppercase fw-semibold gap-3" variant="underline">
                <Nav.Item>
                  <Nav.Link href="/">Trang chủ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Thông tin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dich-vu">Dịch vụ</Nav.Link>
                </Nav.Item>
                {/* start dropdown */}
                {/* <NavDropdown title='Dịch vụ' id='service-dropdown' className='d-none d-lg-block' data-bs-popper='static'>
                  <Container fluid style={{ width: "532px" }}>
                    <Row>
                      <Col xs={"12"} md={"12"} lg={"12"} xl={"6"} className='d-none d-lg-block text-start'>
                        <Dropdown.Header as={Link} className='text-decoration-none' to='/dich-vu'>
                          Dưỡng tóc
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} to='/'>
                          Phục hồi tóc
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/'>
                          Dưỡng phục hồi Robo Nano
                        </Dropdown.Item>
                      </Col>
                      <Col xs={"12"} md={"12"} lg={"12"} xl={"6"} className='d-none d-lg-block text-start'>
                        <Dropdown.Header as={Link} className='text-decoration-none' to='/'>
                          Combo
                        </Dropdown.Header>
                        <Dropdown.Item as={Link} to='/'>
                          Combo cắt và tạo kiểu
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/'>
                          Combo cắt và uốn
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown> */}
                {/* end dropdown */}

                <NavDropdown title="Sản phẩm" id="product-dropdown" className="d-none d-lg-block">
                  <NavDropdown.Item href="/san-pham">Sản phẩm</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Thương hiệu" id="brand-dropdown" className="d-none d-lg-block">
                  <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="/contact">Liên hệ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link to="#tintuc">Tin tức</Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* end header */}
          <Navbar.Collapse className="justify-content-end gap-3 fs-5">
            <Nav.Item>
              <Nav.Link href="#login">
                <i className="bi bi-search" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="position-relative" href="#login">
                <i className="bi bi-bag" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">8</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#login">
                <i className="bi bi-person-circle" />
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*end top header*/}
    </>
  );
}

export default Header;

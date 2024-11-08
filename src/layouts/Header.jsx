/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Notyf } from "notyf";
import { Container, Dropdown, Image, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { he } from "@faker-js/faker";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Phan Thị Minh Thư");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios
        .post(
          import.meta.env.VITE_API_URL + "/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          if (response.data.check === true) {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            notyf.success(response.data.message);
            setTimeout(() => navigate("/dang-nhap", { replace: true }), 2000);
          } else {
            notyf.error(response.data.message);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

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
          <Navbar.Brand as={Link} to="/">
            <Image src="../src/assets/images/logo30GLOW.png" width={100} fluid />
          </Navbar.Brand>
          {/* start header */}

          {/* Button mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* Button mobile */}

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="bg-body-tertiary">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand as={Link} to="/">
                  <Image src="../src/assets/images/logo30GLOW.png" width={80} fluid />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto text-uppercase fw-semibold gap-3" variant="underline">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Trang chủ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/gioi-thieu">
                    Giới thiệu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/dich-vu">
                    Dịch vụ
                  </Nav.Link>
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
                  <NavDropdown.Item as={Link} to="/san-pham">
                    Sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Thương hiệu" id="brand-dropdown" className="d-none d-lg-block">
                  <NavDropdown.Item as={Link} to="/thuong-hieu">
                    Thương hiệu
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link as={Link} to="/lien-he">
                    Liên hệ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/tin-tuc">
                    Tin tức
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* end header */}

              <Navbar.Collapse className="justify-content-end mx-auto text-uppercase fw-semibold gap-3">
                <Nav.Link as={Link} to={"#"}>
                  <i className="bi bi-search position-relative fs-5"></i>
                </Nav.Link>
                <Nav.Link as={Link} to="#" className="ms-1">
                  <i className="bi bi-bookmark-check position-relative fs-5" title="Lịch đã đặt">
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">9</span>
                  </i>
                </Nav.Link>
                <Nav.Link as={Link} to="/gio-hang" className="ms-1" title="Giỏ hàng">
                  <i className="bi bi-cart3 position-relative fs-5">
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">9</span>
                  </i>
                </Nav.Link>

                {isLoggedIn ? (
                  <>
                    <Dropdown autoClose="outside" className="d-none d-lg-block ms-1">
                      <Dropdown.Toggle as={Nav.Link} variant="link" id="dropdown-basic">
                        <span>Xin chèo:</span>{" "}
                        <Link to="#login" className="text-decoration-none text-dark ms-1">
                          Người dùng
                        </Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Item href="#">Cài đặt</Dropdown.Item>
                        <Dropdown.Item href="#">Thông tin cá nhân</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" role="button" onClick={handleLogout}>
                          Đăng xuất
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/dang-nhap">
                    Đăng nhập
                  </Nav.Link>
                )}
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/*end top header*/}
    </>
  );
}

export default Header;

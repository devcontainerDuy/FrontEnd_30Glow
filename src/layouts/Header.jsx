/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Notyf } from "notyf";
import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Phan Thị Minh Thư");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
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
          <Navbar.Brand href="/">
            <Image
              src="../src/assets/images/logo30GLOW.png"
              width={100}
              fluid
            />
          </Navbar.Brand>
          {/* start header */}

          {/* Button mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* Button mobile */}

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-body-tertiary"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand href="/">
                  <Image
                    src="../src/assets/images/logo30GLOW.png"
                    width={80}
                    fluid
                  />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="me-auto text-uppercase fw-semibold gap-3"
                variant="underline"
              >
                <Nav.Item>
                  <Nav.Link href="/">Trang chủ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/gioi-thieu">Giới thiệu</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link href="/dich-vu">Dịch vụ</Nav.Link>
                </Nav.Item> */}
                <NavDropdown
                  title="Dịch vụ"
                  id="service-dropdown"
                  className="d-none d-lg-block"
                >
                  <NavDropdown.Item href="/dich-vu">Dịch vụ</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Combo Cắt & uốn
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Combo Cắt & Nhuộm
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Combo Cắt & tạo kiểu
                  </NavDropdown.Item>
                </NavDropdown>
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

                <NavDropdown
                  title="Sản phẩm"
                  id="product-dropdown"
                  className="d-none d-lg-block"
                >
                  <NavDropdown.Item href="/san-pham">Sản phẩm</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Thương hiệu"
                  id="brand-dropdown"
                  className="d-none d-lg-block"
                >
                  <NavDropdown.Item href="/thuong-hieu">
                    Thương hiệu
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="/lien-he">Liên hệ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/tin-tuc">Tin tức</Nav.Link>
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
            <Nav.Item title="Đặt lịch">
              <Nav.Link className="position-relative me-1" href="/gio-hang">
                <i className="bi bi-calendar-check" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item title="Giỏ hàng">
              <Nav.Link className="position-relative" href="/gio-hang-san-pham">
                <i className="bi bi-basket2" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </Nav.Link>
            </Nav.Item>
            <Navbar expand="lg" className="bg-body-tertiary sticky-top">
              <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse
                  id="navbar-nav"
                  className="justify-content-end gap-3 fs-5"
                >
                  <Nav className="align-items-center">
                    {isLoggedIn ? (
                      <NavDropdown
                        title={<span>Hi, {username || "Khách hàng"}</span>}
                        id="profile-dropdown"
                        className="fs-6"
                        align="end"
                      >
                        <NavDropdown.Item href="/tai-khoan">
                          <i className="bi bi-person-circle me-2" />
                          Tài khoản
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/hoa-don">
                          <i className="bi bi-box me-2" />
                          Hóa đơn
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/dat-lich">
                          <i className="bi bi-calendar-check me-2" />
                          Đặt lịch
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right me-2" />
                          Đăng xuất
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <Nav.Link href="/dang-nhap">
                        <i
                          className="bi bi-person-circle fs-4"
                          title="Đăng nhập"
                        />
                      </Nav.Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*end top header*/}
    </>
  );
}

export default Header;

/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Notyf } from "notyf";
import { Button, Col, Container, Dropdown, Form, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Phan Thị Minh Thư");
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

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
  const handleLogout = async () => {
    if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
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
              window.notyf.success(response.data.message);
              setTimeout(() => navigate("/dang-nhap", { replace: true }), 2000);
            } else {
              window.notyf.error(response.data.message);
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/categories");
      return setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const tempGroupedCategories = {};
    categories.forEach((category) => {
      const parent = category.parent;
      if (!tempGroupedCategories[parent.id]) {
        tempGroupedCategories[parent.id] = {
          parent: parent,
          children: [],
        };
      }
      tempGroupedCategories[parent.id].children.push(category);
    });
    setGroupedCategories(tempGroupedCategories);
  }, [categories]);

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

          <Navbar.Brand as={NavLink} to="/" end>
            <Image src="../src/assets/images/logo30GLOW.png" width={100} fluid />

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

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="bg-body-tertiary">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand as={NavLink} to="/">
                  <Image src="../src/assets/images/logo30GLOW.png" width={80} fluid />

                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto text-uppercase fw-semibold gap-3" variant="underline">
                <Nav.Item>

                  <Nav.Link href="/">Trang chủ</Nav.Link>
                  <Nav.Link as={NavLink} to="/">
                    Trang chủ
                  </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/gioi-thieu">
                    Giới thiệu
                  </Nav.Link>
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

                <Nav.Item>
                  <Nav.Link as={NavLink} to="/dich-vu">
                    Dịch vụ
                  </Nav.Link>
                </Nav.Item>

                {/* start dropdown */}
                <NavDropdown title="Sản phẩm" id="product-dropdown" data-bs-popper="static" active={isActive("/san-pham" || "/danh-muc/:slug")}>
                  <Container fluid style={{ width: "24rem" }}>
                    <Row className="g-0 row-cols-1 row-cols-lg-2">
                      {Object.values(groupedCategories).map((group, index) => (
                        <Col key={index}>
                          <Dropdown.Header as={NavLink} className="text-decoration-none" to={`/danh-muc/${group.parent.slug}`}>
                            {group.parent.name}
                          </Dropdown.Header>
                          {group.children.map((child) => (
                            <Dropdown.Item key={child.id} as={NavLink} to={`/danh-muc/${child.slug}`}>
                              {child.name}
                            </Dropdown.Item>
                          ))}
                        </Col>
                      ))}
                      <Col className="m-0 p-0">
                        <Dropdown.Header as={NavLink} className="text-decoration-none" to={"/san-pham"}>
                          Tất cả sản phẩm
                        </Dropdown.Header>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                {/* end dropdown */}

                {/* <NavDropdown title="Sản phẩm" id="product-dropdown" className="d-none d-lg-block">
                  <NavDropdown.Item as={Link} to="/san-pham">
                    Sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.2">
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

                </NavDropdown> */}
                <NavDropdown title="Thương hiệu" id="brand-dropdown" className="d-none d-lg-block">
                  <NavDropdown.Item as={NavLink} to="/thuong-hieu">
                    Thương hiệu
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="#action/3.2">

                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/lien-he">
                    Liên hệ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/tin-tuc">
                    Tin tức
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-block d-lg-none">
                  <Nav.Link as={NavLink} to="/tai-khoan">
                    Tài khoản
                  </Nav.Link>
                </Nav.Item>
              </Nav>

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
              {/* end header */}
              <Navbar.Collapse className="justify-content-center">
                <Form className="d-flex mt-3 d-block d-lg-none">
                  <Form.Control type="search" placeholder="Tìm kiếm gì đó..." className="me-2" aria-label="Search" />
                  <Button variant="outline-success">
                    <i className="bi bi-search"></i>
                  </Button>
                </Form>
                <div className="d-flex gap-1 mt-3">
                  <Nav.Link as={NavLink} to="/dat-lich" className="col-6 d-md-none">
                    <Button variant="outline-primary" className="w-100">
                      <span className="me-2">Đặt lịch</span>
                      <span class="badge text-bg-danger">4</span>
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gio-hang" className="col-6 d-md-none">
                    <Button variant="outline-primary" className="w-100">
                      <span className="me-2">Giỏ hàng</span>
                      <span class="badge text-bg-danger">4</span>
                    </Button>
                  </Nav.Link>
                </div>
              </Navbar.Collapse>

              <Navbar.Collapse className="justify-content-end mx-auto text-uppercase fw-semibold gap-3 d-none d-lg-block">
                <Nav.Link as={NavLink} to={"#"}>
                  <i className="bi bi-search position-relative fs-5"></i>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dat-lich" className="ms-1">
                  <i className="bi bi-calendar-check position-relative fs-5" title="Lịch đã đặt">
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">9</span>
                  </i>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gio-hang" className="ms-1" title="Giỏ hàng">
                  <i className="bi bi-cart2 position-relative fs-5">
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">9</span>
                  </i>
                </Nav.Link>
                {isLoggedIn ? (
                  <>
                    <Dropdown autoClose="outside" className="ms-1">
                      <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic1" title={"Khách hàng"} className="dropdown-user text-decoration-none text-dark">
                        <i className="bi bi-person-circle fs-4 ms-2"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Item as={NavLink} to="/tai-khoan">
                          <i className="bi bi-person-circle me-2" />
                          Tài khoản
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/hoa-don">
                          <i className="bi bi-box me-2" />
                          Hóa đơn
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/dat-lich">
                          <i className="bi bi-calendar-check me-2" />
                          Đặt lịch
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" role="button" onClick={handleLogout}>
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
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <Dropdown autoClose="outside" className="ms-1">
                      <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic" title="Tài khoản" className="dropdown-user">
                        <i className="bi bi-person-circle fs-4 me-2"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Item as={NavLink} to="/dang-nhap">
                          <i className="bi bi bi-door-open me-2"></i> Đăng nhập
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as={NavLink} to="/dang-ky">
                          <i className="bi bi-person-add me-2"></i> Đăng ký
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
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

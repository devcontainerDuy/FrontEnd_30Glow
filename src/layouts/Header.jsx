/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, Image, Modal, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import useAuthenContext from "../context/AuthenContext";
import { useSelector } from "react-redux";
import logo from "@img/logo30GLOW.png";
import Swal from "sweetalert2";

function Header() {
  // services
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [collections, setCollections] = useState([]);
  const services = useSelector((state) => state.serviceCart.items);
  const [servicess, setServices] = useState([]);
  const [groupedServices, setGroupedServices] = useState({});
  const { user, logout, cartItems } = useAuthenContext();
  const shoppingCart = useSelector((state) => state.shoppingCart.items);
  const [brands, setBrands] = useState([]);

  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const handleShowSearchModal = () => setIsSearchModalVisible(true);
  const handleCloseSearchModal = () => setIsSearchModalVisible(false);

  const isActive = (path) => location.pathname === path;

  const getCategories = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/categories");
      return setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getBrands = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/brands");
      return setBrands(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCollections = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/services-collections");
      setCollections(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getServices = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/services");
      setServices(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Đăng xuất?",
      text: "Bạn chắc chẫn muốn đăng xuất?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng xuất",
      cancelButtonText: "Quay lại",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  useEffect(() => {
    getCategories();
    getCollections();
    getServices();
    getBrands();
  }, []);

  useEffect(() => {
    const grouped = categories?.reduce((item, category) => {
      const parent = category.parent;
      if (!item[parent.id]) {
        item[parent.id] = { parent, children: [] };
      }
      item[parent.id].children.push(category);
      return item;
    }, {});
    setGroupedCategories(grouped);

    if (collections?.length > 0 && services?.length > 0) {
      const groupedServices = services.reduce((acc, service) => {
        const collectionId = service.id_collection;
        if (!acc[collectionId]) {
          acc[collectionId] = {
            parent: collections.find((col) => col.id === collectionId),
            children: [],
          };
        }
        acc[collectionId].children.push(service);
        return acc;
      }, {});
      setGroupedServices(groupedServices);
    }
  }, [categories, collections, services]);

  return (
    <>
      {/*start top header*/}
      <Navbar expand="xl" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" end>
            <Image src={logo} width={100} fluid alt="logo" />
          </Navbar.Brand>
          {/* start header */}

          {/* Button mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* Button mobile */}

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="bg-body-tertiary">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand as={NavLink} to="/">
                  <Image src={logo} width={80} fluid alt="logo" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto text-uppercase fw-semibold gap-3" variant="underline">
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/">
                    Trang chủ
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/gioi-thieu">
                    Giới thiệu
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dịch vụ" id="service-dropdown" data-bs-popper="static" active={isActive("/dich-vu" || "/dich-vu/:slug")}>
                  <Container fluid style={{ width: "35rem" }}>
                    <Row className="g-0 row-cols-1 row-cols-lg-2">
                      {collections?.map((collection) => (
                        <Col key={collection.id}>
                          <Dropdown.Item as={NavLink} className="text-decoration-none" to={`/nhom-dich-vu/${collection.slug}`}>
                            {collection.name}
                          </Dropdown.Item>
                        </Col>
                      ))}
                    </Row>
                    <Row className="g-0">
                      <Col>
                        <Dropdown.Header as={NavLink} className="text-decoration-none text-center border-top pt-2" to={"/dich-vu"}>
                          Tất cả dịch vụ
                        </Dropdown.Header>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                {/* start dropdown */}
                <NavDropdown title="Sản phẩm" id="product-dropdown" data-bs-popper="static" active={isActive("/san-pham" || "/danh-muc/:slug")}>
                  <Container fluid style={{ width: "24rem" }}>
                    <Row className="g-0 row-cols-1 row-cols-lg-2">
                      {groupedCategories && Object.keys(groupedCategories).length > 0 ? (
                        Object.values(groupedCategories).map((group, index) => (
                          <Col key={index}>
                            <Dropdown.Header as={NavLink} className="text-decoration-none">
                              {group.parent?.name}
                            </Dropdown.Header>
                            {group.children.map((child) => (
                              <Dropdown.Item key={child?.id} as={NavLink} to={`/danh-muc/${child?.slug}`}>
                                {child?.name}
                              </Dropdown.Item>
                            ))}
                          </Col>
                        ))
                      ) : (
                        <Col>
                          <Dropdown.Item>Loading categories...</Dropdown.Item>
                        </Col>
                      )}
                      <Col className="m-0 p-0">
                        <Dropdown.Header as={NavLink} className="text-decoration-none" to={"/san-pham"}>
                          Tất cả sản phẩm
                        </Dropdown.Header>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
                {/* end dropdown */}

                <NavDropdown title="Thương hiệu" id="brand-dropdown" className="d-none d-lg-block">
                  <Container fluid style={{ width: "35rem" }}>
                    <Row className="g-0 row-cols-1 row-cols-lg-2">
                      {brands?.map((brand) => (
                        <Col key={brand.id}>
                          <Dropdown.Item as={NavLink} className="text-decoration-none" to={`/thuong-hieu/${brand.slug}`}>
                            {brand.name}
                          </Dropdown.Item>
                        </Col>
                      ))}
                    </Row>
                    {/* <Row className="g-0">
                      <Col>
                        <Dropdown.Header as={NavLink} className="text-decoration-none text-center border-top pt-2" to={"/thuong-hieu"}>
                          Tất cả thương hiệu
                        </Dropdown.Header>
                      </Col>
                    </Row> */}
                  </Container>
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
                <Navbar.Brand className="d-block d-lg-none m-0 p-0">
                  {user ? (
                    <>
                      <NavDropdown autoClose="outside" className="ms-1">
                        <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic1" title={"Khách hàng"} className="dropdown-user text-decoration-none text-dark">
                          <Nav.Link as={NavLink} to="/tai-khoan">
                            Tài khoản
                          </Nav.Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                          <Dropdown.Header className="fw-semibold">{user?.name}</Dropdown.Header>
                          <Dropdown.Item as={NavLink} to="/tai-khoan">
                            <i className="bi bi-person-circle me-2" />
                            Tài khoản
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/hoa-don">
                            <i className="bi bi-box me-2" />
                            Hóa đơn
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/lich-dat">
                            <i className="bi bi-calendar-check me-2" />
                            Lịch đặt
                          </Dropdown.Item>
                          <Dropdown.Item as={NavLink} to="/lich-dat">
                            <i className="bi bi-calendar-check me-2" />
                            Lịch đặt
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item href="#" role="button" onClick={handleLogout}>
                            <i className="bi bi-box-arrow-right me-2" />
                            Đăng xuất
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </NavDropdown>
                    </>
                  ) : (
                    <>
                      <Dropdown autoClose="outside" className="ms-1">
                        <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic" title="Tài khoản" className="dropdown-user text-decoration-none text-dark">
                          <Nav.Link>Tài khoản</Nav.Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end">
                          <Dropdown.Header className="fw-semibold">Tài khoản</Dropdown.Header>
                          <Dropdown.Item as={NavLink} to="/dang-nhap">
                            <i className="bi bi bi-door-open me-2"></i> Đăng nhập
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item as={NavLink} to="/dang-ky">
                            <i className="bi bi-person-add me-2"></i> Đăng ký
                          </Dropdown.Item>
                          {/* <Dropdown.Item as={NavLink} to="/lich-dat">
                            <i className="bi bi-calendar-check me-2" />
                            Lịch đặt
                          </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  )}
                </Navbar.Brand>
              </Nav>

              {/* end header */}
              <Navbar.Collapse className="justify-content-center">
                <Form className="d-flex mt-3 d-block d-lg-none">
                  <Form.Control type="search" placeholder="Tìm kiếm gì đó..." className="me-2" aria-label="Search" />
                  <Button variant="outline-success">
                    <i className="bi bi-search"></i>
                  </Button>
                </Form>
                <div className="d-flex gap-1 mt-3 d-block d-lg-none">
                  <Nav.Link as={NavLink} to="/dat-lich" className="col-6 d-md-none">
                    <Button variant="outline-primary" className="w-100">
                      <span className="me-2">Đặt lịch</span>
                      <span class="badge text-bg-danger">{services ? services.length : 0}</span>
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gio-hang" className="col-6 d-md-none">
                    <Button variant="outline-primary" className="w-100">
                      <span className="me-2">Giỏ hàng</span>
                      <span class="badge text-bg-danger">
                        {user && user !== null ? (
                          <>
                            <span>{cartItems.length || 0}</span>
                          </>
                        ) : (
                          <>
                            <span>{shoppingCart.length || 0}</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </Nav.Link>
                </div>
              </Navbar.Collapse>

              <Navbar.Collapse className="justify-content-end mx-auto text-uppercase fw-semibold gap-3 d-none d-lg-block">
                <Nav.Link onClick={handleShowSearchModal} style={{ cursor: "pointer" }}>
                  <i className="bi bi-search position-relative fs-5"></i>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dat-lich" className="ms-1">
                  <i className="bi bi-calendar-check position-relative fs-5" title="Lịch đã đặt">
                    <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">{services ? services.length : 0}</span>
                  </i>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gio-hang" className="ms-1" title="Giỏ hàng">
                  <i className="bi bi-cart2 position-relative fs-5">
                    {user && user !== null ? (
                      <>
                        <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length || 0}</span>
                      </>
                    ) : (
                      <>
                        <span className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">{shoppingCart.length || 0}</span>
                      </>
                    )}
                  </i>
                </Nav.Link>
                {user ? (
                  <>
                    <Dropdown autoClose="outside" className="ms-1">
                      <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic1" title={"Khách hàng"} className="dropdown-user text-decoration-none text-dark">
                        <i className="bi bi-person-circle fs-4 ms-2"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Header className="fw-semibold">{user?.name}</Dropdown.Header>
                        <Dropdown.Item as={NavLink} to="/tai-khoan">
                          <i className="bi bi-person-circle me-2" />
                          Tài khoản
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/hoa-don">
                          <i className="bi bi-box me-2" />
                          Hóa đơn
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/lich-dat">
                          <i className="bi bi-calendar-check me-2" />
                          Lịch đặt
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#" role="button" onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right me-2" />
                          Đăng xuất
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <Dropdown autoClose="outside" className="ms-1">
                      <Dropdown.Toggle as={NavLink} variant="link" id="dropdown-basic" title="Tài khoản" className="dropdown-user text-decoration-none text-dark">
                        <i className="bi bi-person-circle fs-4 me-2"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Header className="fw-semibold">Tài khoản</Dropdown.Header>
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

              <Modal show={isSearchModalVisible} onHide={handleCloseSearchModal} className="search-modal mt-5">
                <Modal.Header closeButton>
                  <Modal.Title>Tìm kiếm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Control type="search" placeholder="Nhập từ khóa tìm kiếm..." aria-label="Search" className="mb-3" />
                    <Button variant="primary" className="w-100">
                      Tìm kiếm
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/*end top header*/}
    </>
  );
}

export default Header;

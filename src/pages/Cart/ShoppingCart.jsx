import { Helmet } from "react-helmet";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuthenContext from "@context/AuthenContext";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

const ShoppingCart = () => {
  const { cartItems, updateCart, removeFromCart } = useAuthenContext();

  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product?.discount > 0 ? item.product?.price - (item.product?.price * item.product?.discount) / 100 : item.product?.price;
    return sum + price * item?.quantity;
  }, 0);

  const shippingFee = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shippingFee;
  const totalItems = cartItems.reduce((total, items) => total + items.quantity, 0);

  const handleQuantityChange = (id, change) => {
    const product = cartItems.find((item) => item.id === id);

    if (!product) return;

    const newQuantity = product.quantity + change;

    if (newQuantity < 1) {
      window.notyf.error("Số lượng sản phẩm không thể nhỏ hơn 1");
      return;
    }

    updateCart({ id, id_product: product.product.id, quantity: newQuantity });
  };

  const handleRemoveProduct = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <Helmet>
        <title>Giỏ hàng sản phẩm - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />

      <Container className="my-3">
        <Row className="mb-4 p-2">
          <Col md={8} className="border-end">
            <h4>Giỏ hàng sản phẩm</h4>
            <p className="text-muted">Tổng sản phẩm trong giỏ: {totalItems}</p>
            <div className="overflow-auto border border-1 border-dark-subtle rounded rounded-3 p-4" style={{ maxHeight: "380px" }}>
              {cartItems.length > 0 ? (
                cartItems.map((items, index) => (
                  <Row key={index} className="mb-3 align-items-center w-100 ">
                    <Col xs={3}>
                      <Image src={import.meta.env.VITE_URL + items.product?.image} fluid rounded />
                    </Col>
                    <Col xs={5} className="text-start">
                      <div className="d-flex ">
                        <Link to={`/san-pham/${items.product?.slug}`} className="text-decoration-none h5 link-hover-underline link-dark ">
                          <span>{items.product?.name || "Product Name"}</span>
                        </Link>
                        <div className="ms-auto">{items.product.discount > 0 && <span className="badge text-bg-danger "> {items.product?.discount} %</span>}</div>
                      </div>
                      {items.product?.discount > 0 ? (
                        <>
                          <div>
                            <p className="mb-0 text-danger">
                              Giá gốc: <del>{items.product?.price?.toLocaleString() || "0"}₫</del>
                            </p>
                            <p className=" fw-bold">Giá giảm: {(items.product.price - (items.product.price * items.product.discount) / 100).toLocaleString()}₫</p>
                          </div>
                        </>
                      ) : (
                        <p className="mb-0 fw-bold">Giá: {items.product?.price?.toLocaleString() || "0"}₫</p>
                      )}
                    </Col>
                    <Col xs={3}>
                      <Form.Group className="d-flex align-items-center">
                        <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(items.id, -1)} disabled={items.quantity === 1}>
                          -
                        </Button>
                        <Form.Control type="text" readOnly value={items.quantity} className="text-center mx-2" style={{ width: "60px" }} />
                        <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(items.id, 1)}>
                          +
                        </Button>
                      </Form.Group>
                    </Col>
                    <Col xs={1} className="text-end">
                      <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(items.id)}>
                        Xóa
                      </Button>
                    </Col>
                  </Row>
                ))
              ) : (
                <div className="text-center">
                  <p className="fw-bold m-auto">
                    Không có sản phẩm nào trong giỏ hàng. <Link to="/san-pham">Mua ngay!!</Link>
                  </p>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              <Button variant="outline-secondary" className="mt-3">
                <Link to="/san-pham" className="text-decoration-none text-body-emphasis">
                  <span>Tiếp tục mua hàng</span>
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </Button>
              <Button variant="danger" className="mt-3">
                <span>Xoá tất cả</span>
                <i className="bi bi-trash ms-2" />
              </Button>
            </div>
          </Col>

          <Col md={4} className="py-1">
            <div className="border rounded p-3">
              <div className="d-flex justify-content-between">
                <h6>Tạm tính</h6>
                <p>{subtotal?.toLocaleString() || "0"}₫</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Phí vận chuyển</h6>
                <p>{shippingFee === 0 ? "Miễn phí" : `${shippingFee.toLocaleString()}₫`}</p>
              </div>
              <p className="text-success fw-bold mt-1">Miễn phí vận chuyển với hóa đơn từ 500k</p>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Tổng cộng</h5>
                <h5 className="fw-bold text-danger">{total.toLocaleString()}₫</h5>
              </div>
              <Button variant="primary" className="w-100 mt-3">
                {cartItems.length > 0 ? (
                  <Link to="/thanh-toan-san-pham" className="text-decoration-none text-light">
                    Tiến hành thanh toán
                  </Link>
                ) : (
                  <Link to="/san-pham" className="text-decoration-none text-light">
                    Tiếp tục mua hàng
                  </Link>
                )}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;

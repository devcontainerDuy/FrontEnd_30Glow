import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../store/reducers/shoppingCartSlice";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Helmet } from "react-helmet";
import { Col, Container, Row, Button, Form, Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductCart() {
  const products = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);

  const subtotal = productData.reduce((sum, product) => {
    const price = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;
    return sum + price * product.quantity;
  }, 0);
  const shippingFee = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shippingFee;
  const totalItems = products.reduce((total, product) => total + product.quantity, 0);

  const handleQuantityChange = (id, change) => {
    const product = productData.find((item) => item.id === id);
    const existingItem = products.find((item) => item.id === id);

    if (!product || !existingItem) return;

    const newQuantity = existingItem.quantity + change;

    if (newQuantity > product.in_stock) {
      window.notyf.error("Số lượng sản phẩm trong giỏ hàng vượt quá số lượng tồn kho");
      return;
    }

    if (newQuantity < 1) {
      window.notyf.error("Số lượng sản phẩm không thể nhỏ hơn 1");
      return;
    }

    if (change > 0) {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (products.length > 0) {
      axios.post(import.meta.env.VITE_API_URL + "/carts/loadCart", { cartItems: products }).then((res) => {
        console.log(res.data);
        setProductData(res.data.data);
      });
    } else {
      setProductData([]);
    }
  }, [products]);

  return (
    <>
      <Helmet>
        <title>Giỏ hàng sản phẩm - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />

      <Container className="my-3">
        <Row className="mb-4 p-2">
          <Col md={7} className="border-end pt-1">
            <h4>Giỏ hàng sản phẩm</h4>
            <p className="text-muted fs-6">Tổng sản phẩm trong giỏ: {totalItems}</p>
            <Table striped bordered hover responsive style={{ height: "400px" }}>
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody className="align-middle" style={{ overflowY: "scroll", height: "300px", width: "100%" }}>
                {productData.length > 0 ? (
                  productData.map((items, index) => (
                    <tr key={index}>
                      <td>
                        <Image src={import.meta.env.VITE_URL + items?.gallery} fluid rounded style={{ width: "100px" }} />
                      </td>
                      <td>
                        <div className="d-flex">
                          <h6 className="mb-0">
                            <span>{items?.name || "Product Name"}</span>
                          </h6>
                          <div className="ms-auto">{items.discount > 0 && <span className="badge text-bg-danger"> {items?.discount} %</span>}</div>
                        </div>
                        {items?.discount > 0 ? (
                          <>
                            <div>
                              <p className="mb-0 text-danger">
                                Giá gốc: <del>{items?.price?.toLocaleString() || "0"}₫</del>
                              </p>
                              <p className="fw-bold">Giá giảm: {(items.price - (items.price * items.discount) / 100).toLocaleString()}₫</p>
                            </div>
                          </>
                        ) : (
                          <p className="mb-0 fw-bold">Giá: {items?.price?.toLocaleString() || "0"}₫</p>
                        )}
                      </td>

                      <td>
                        <Form.Group className="d-flex align-items-center">
                          <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(items.id, -1)} disabled={items.quantity === 1}>
                            -
                          </Button>
                          <Form.Control type="text" readOnly value={items.quantity} className="text-center mx-2" style={{ width: "60px" }} />
                          <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(items.id, 1)}>
                            +
                          </Button>
                        </Form.Group>
                      </td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(items.id)}>
                          Xóa
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>Giỏ hàng của bạn đang trống.</p>
                )}
              </tbody>
            </Table>
          </Col>

          <Col md={5} className="pt-1">
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
                <Link to="/thanh-toan-san-pham" className="text-decoration-none text-white">
                  Tiến hành thanh toán
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductCart;

import { useState, useEffect } from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import axios from "axios";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import useAuthenContext from "@context/AuthenContext";

function ProductPayment() {
  const navigate = useNavigate();
  const { cartItems, user, token } = useAuthenContext();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product?.discount > 0 ? item.product?.price - (item.product?.price * item.product?.discount) / 100 : item.product?.price;
    return sum + price * item?.quantity;
  }, 0);

  const shippingFee = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shippingFee;
  const totalItems = cartItems.reduce((total, items) => total + items.quantity, 0);

  const [formData, setFormData] = useState({
    provinceId: "",
    districtId: "",
    wardId: "",
    houseNumber: "",
  });

  const [loading, setLoading] = useState({
    provinces: false,
    districts: false,
    wards: false,
  });

  useEffect(() => {
    setUserInfo(user);
    if (user.address) {
      const addressParts = user?.address?.split(", ");
      setFormData({ houseNumber: addressParts[0] || "" });
    }
  }, [user]);

  // Fetch Provinces
  useEffect(() => {
    const fetchProvinces = async () => {
      setLoading((prev) => ({ ...prev, provinces: true }));
      try {
        const response = await axios.get("https://open.oapi.vn/location/provinces?page=0&size=300");
        setProvinces(response.data.data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      } finally {
        setLoading((prev) => ({ ...prev, provinces: false }));
      }
    };
    fetchProvinces();
  }, []);

  // Fetch Districts when Province changes
  useEffect(() => {
    if (!formData.provinceId) {
      setDistricts([]);
      setWards([]);
      return;
    }
    const fetchDistricts = async () => {
      setLoading((prev) => ({ ...prev, districts: true }));
      try {
        const response = await axios.get(`https://open.oapi.vn/location/districts/${formData.provinceId}?page=0&size=300`);
        setDistricts(response.data.data);
      } catch (error) {
        console.error("Error fetching districts:", error);
      } finally {
        setLoading((prev) => ({ ...prev, districts: false }));
      }
    };
    fetchDistricts();
  }, [formData.provinceId]);

  // Fetch Wards when District changes
  useEffect(() => {
    if (!formData.districtId) {
      setWards([]);
      return;
    }
    const fetchWards = async () => {
      setLoading((prev) => ({ ...prev, wards: true }));
      try {
        const response = await axios.get(`https://open.oapi.vn/location/wards/${formData.districtId}?page=0&size=300`);
        setWards(response.data.data);
      } catch (error) {
        console.error("Error fetching wards:", error);
      } finally {
        setLoading((prev) => ({ ...prev, wards: false }));
      }
    };
    fetchWards();
  }, [formData.districtId]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
      ...(id === "provinceId" ? { districtId: "", wardId: "" } : {}),
      ...(id === "districtId" ? { wardId: "" } : {}),
    }));
  };

  const handleSubmit = () => {
    // Lấy tên tỉnh/thành, quận/huyện, xã/phường từ danh sách
    const provinceName = provinces.find((p) => p.id === formData.provinceId)?.name || "";
    const districtName = districts.find((d) => d.id === formData.districtId)?.name || "";
    const wardName = wards.find((w) => w.id === formData.wardId)?.name || "";

    // Ghép chuỗi địa chỉ hoàn chỉnh
    const fullAddress = `${formData.houseNumber}, ${wardName}, ${districtName}, ${provinceName}`;
    console.log(paymentMethod);

    axios
      .post(
        import.meta.env.VITE_API_URL + "/bills",
        {
          name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone,
          address: fullAddress,
          note: note,
          payment_method: paymentMethod,
          payment_status: 0,
          total: total,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.check === true) {
          if (paymentMethod == 0) {
            navigate("/dat-hang-thanh-cong");
          } else if (paymentMethod == 1) {
            navigate("/dat-hang?orderId=" + response.data.uid + "&orderTotal=" + response.data.total);
          }
        } else {
          window.notyf.error(response.data.message);
        }
      })
      .catch((error) => {
        window.notyf.error(error.response.data.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Thanh toán sản phẩm - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      <Container className="my-3 mb-5">
        <Row className="p-3 border rounded">
          <Col md={7} className="border-end pt-1">
            <h4>Thông tin thanh toán</h4>
            <Form className="mt-3" noValidate>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} placeholder="Nhập họ và tên" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control type="text" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} placeholder="Nhập số điện thoại" required />
                  </Form.Group>
                </Col>
              </Row>

              {/* Địa chỉ */}
              <Form.Group className="mb-3" controlId="provinceId">
                <Form.Label>Tỉnh / Thành phố</Form.Label>
                <Form.Select required value={formData.provinceId} onChange={handleInputChange}>
                  <option value="">Chọn tỉnh/thành phố</option>
                  {loading.provinces ? (
                    <option>Loading...</option>
                  ) : (
                    provinces?.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))
                  )}
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="districtId">
                    <Form.Label>Quận / Huyện</Form.Label>
                    <Form.Select required value={formData.districtId} onChange={handleInputChange} disabled={!formData.provinceId || loading.districts}>
                      <option value="">Chọn quận/huyện</option>
                      {loading.districts ? (
                        <option>Loading...</option>
                      ) : (
                        districts?.map((district) => (
                          <option key={district.id} value={district.id}>
                            {district.name}
                          </option>
                        ))
                      )}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="wardId">
                    <Form.Label>Xã / Phường</Form.Label>
                    <Form.Select required value={formData.wardId} onChange={handleInputChange} disabled={!formData.districtId || loading.wards}>
                      <option value="">Chọn xã/phường</option>
                      {loading.wards ? (
                        <option>Loading...</option>
                      ) : (
                        wards?.map((ward) => (
                          <option key={ward.id} value={ward.id}>
                            {ward.name}
                          </option>
                        ))
                      )}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="houseNumber">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control type="text" placeholder="Số nhà, tên đường..." value={formData.houseNumber} onChange={handleInputChange} required />
              </Form.Group>

              {/* Ghi chú đơn hàng */}
              <Form.Group className="mb-3" controlId="formNote">
                <Form.Label>Ghi chú đơn hàng</Form.Label>
                <Form.Control as="textarea" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Thêm ghi chú nếu có" />
              </Form.Group>

              {/* Hình thức thanh toán */}
              <Form.Group className="mb-3" controlId="formPaymentMethod">
                <Form.Label className="mb-2 fs-5 fw-bold">Hình thức thanh toán</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label={
                      <>
                        <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-success" />
                        Thanh toán khi nhận hàng (COD)
                      </>
                    }
                    name="paymentMethod"
                    id="paymentCOD"
                    className="mb-2"
                    defaultChecked
                    onChange={() => setPaymentMethod(0)}
                  />
                  <Form.Check
                    type="radio"
                    label={
                      <>
                        <FontAwesomeIcon icon={faCreditCard} className="me-2 text-primary" />
                        Chuyển khoản ngân hàng
                      </>
                    }
                    name="paymentMethod"
                    id="paymentBankTransfer"
                    className="mb-2"
                    onChange={() => setPaymentMethod(1)}
                  />
                </div>
              </Form.Group>

              <p>Thời gian giao hàng từ 3 – 5 ngày đối với ngoại thành</p>
              <p>Giao hàng nhanh trong ngày với khu vực Hồ Chí Minh</p>
            </Form>
          </Col>

          <Col md={5} className="pt-1">
            <h4>Đơn hàng của bạn</h4>
            <p className="text-muted">Tổng sản phẩm: {totalItems || 0}</p>
            <div className="order-summary mt-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
              {cartItems?.map((items, index) => (
                <Row key={index} className="align-items-center mb-3" style={{ borderBottom: "1px solid #dee2e6", width: "500px" }}>
                  <Col xs={2}>
                    <Image src={import.meta.env.VITE_URL + items.product?.image} fluid rounded />
                  </Col>
                  <Col xs={9}>
                    <div className="d-flex">
                      <Link to={`/san-pham/${items.product?.slug}`} className="text-decoration-none h6 link-hover-underline link-dark ">
                        <span className="h6 link-dark">{items.product?.name || "Product Name"}</span>
                      </Link>
                      <div className="ms-2">{items.product.discount > 0 && <span className="badge text-bg-danger "> {items.product?.discount} %</span>}</div>
                    </div>
                    {items.product?.discount > 0 ? (
                      <>
                        <div>
                          <p className="mb-0 text-danger">
                            <del>{items.product?.price?.toLocaleString() || "0"}₫</del>
                          </p>
                          <p className="fw-bold">{(items.product.price - (items.product.price * items.product.discount) / 100).toLocaleString()}₫</p>
                        </div>
                      </>
                    ) : (
                      <p className="fw-bold">{items.product?.price?.toLocaleString() || "0"}₫</p>
                    )}
                  </Col>
                  <Col xs={1} className="text-end">
                    <p className="mb-0">x{items.quantity}</p>
                  </Col>
                </Row>
              ))}
            </div>
            <hr />

            <Form.Group className="mb-3" controlId="formVoucher">
              <Form.Label className="fs-5 fw-bold">Mã Voucher</Form.Label>
              <div className="d-flex flex-column flex-md-row gap-2">
                <Form.Control className="flex-grow-1" type="text" placeholder="Nhập mã giảm giá" />
                <Button variant="outline-success" className="w-50 w-md-auto">
                  Áp dụng
                </Button>
              </div>
            </Form.Group>

            <hr />
            <div className="d-flex justify-content-between">
              <h6>Tạm tính</h6>
              <p>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(subtotal)}
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <h6>Phí vận chuyển</h6>
              <p className="text-success">
                {shippingFee === 0
                  ? "Miễn phí"
                  : new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(shippingFee)}
              </p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>Tổng cộng</h5>
              <h5 className="fw-bold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(total)}
              </h5>
            </div>
            <Button variant="primary" className="w-100 mt-3" onClick={handleSubmit}>
              Đặt hàng
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductPayment;

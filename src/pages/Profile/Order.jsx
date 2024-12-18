import React, { useState, useEffect, useContext } from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Row, Col, Badge, Button, Modal, Table } from "react-bootstrap";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthenContext } from "@context/AuthenContext";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";


function Order() {
  const { token } = useContext(AuthenContext);  // Lấy token từ AuthenContext
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Lấy danh sách hóa đơn từ API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/bills`, {
          headers: {
            Authorization: `Bearer ${token}`,  // Thêm token vào header
          },
        });
        if (response.data.check) {
          setOrders(response.data.data);
        } else {
          console.error("Không thể lấy danh sách hóa đơn");
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách hóa đơn:", error);
      }
    };

    if (token) {
      fetchOrders();  // Chỉ lấy dữ liệu khi có token
    }
  }, [token]);

  // Lấy chi tiết hóa đơn từ API
  const fetchOrderDetail = async (bill_detail) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/bills/${bill_detail}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Thêm token vào header
        },
      });
      if (response.data.check) {
        setSelectedOrder(response.data.data);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết hóa đơn:", error);
    }
  };

  function getOrderProgress(status) {
    switch (status) {
      case 0:
        return { percentage: 10, label: "Chờ xử lý" };
      case 1:
        return { percentage: 30, label: "Đã được xác nhận" };
      case 2:
        return { percentage: 50, label: "Đã giao vận chuyển" };
      case 3:
        return { percentage: 70, label: "Đang giao hàng" };
      case 4:
        return { percentage: 100, label: "Đã nhận hàng" };
      case 5:
        return { percentage: 100, label: "Đã hủy đơn" };
      case 6:
        return { percentage: 100, label: "Đã hoàn trả" };
      default:
        return { percentage: 0, label: "Chưa xác định" };
    }
  }

  // Giả lập hàm lấy trạng thái đơn hàng
  function getStatusBadge(status) {
    switch (status) {
      case 0:
        return <Badge bg="warning">Đang chờ xử lý</Badge>;
      case 1:
        return <Badge bg="info">Đã được xác nhận</Badge>;
      case 2:
        return <Badge bg="primary">Đã giao đơn vị vận chuyển</Badge>;
      case 3:
        return <Badge bg="primary">Đang giao hàng</Badge>;
      case 4:
        return <Badge bg="success">Đã nhận hàng</Badge>;
      case 5:
        return <Badge bg="danger">Đã hủy</Badge>;
      case 6:
        return <Badge bg="black">Đã hoàn trả</Badge>;
      default:
        return <Badge bg="secondary">Chưa xác nhận</Badge>;
    }
  }
  function getPaymentStatus(paymentStatus) {
    switch (paymentStatus) {
      case 0:
        return <Badge bg="warning">Chưa thanh toán</Badge>;
      case 1:
        return <Badge bg="success">Đã thanh toán</Badge>;
      case 2:
        return <Badge bg="danger">Thanh toán không thành công</Badge>;
      default:
        return <Badge bg="secondary">Chưa xác nhận</Badge>;
    }
  }
  const handleShowModal = (orderId) => {
    fetchOrderDetail(orderId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <BreadcrumbComponent props={[{ name: "Hóa đơn", url: "/hoa-don" }]} />
      <Container className="mb-5 mt-4">
        <h3 className="mb-4"><i className="bi bi-list me-2" />Danh sách hóa đơn</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã hóa đơn</th>
              <th>Ngày tạo</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.uid}>
                <td>{index + 1}</td>
                <td>{order.uid}</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
                <td>{parseFloat(order.total).toLocaleString()} VND</td>
                <td>{getStatusBadge(order.status)}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShowModal(order.uid)}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} /> Xem chi tiết
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal chi tiết hóa đơn */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết Đơn hàng #{selectedOrder?.uid}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Thông tin khách hàng</h5>
          {/* Thanh ProgressBar */}
          <h6 className="mt-3">Tiến độ đơn hàng</h6>
          <ProgressBar
            now={getOrderProgress(selectedOrder?.status).percentage}
            label={getOrderProgress(selectedOrder?.status).label}
            variant={
              selectedOrder?.status === 4 ? "success" :
                selectedOrder?.status === 5 || selectedOrder?.status === 6 ? "danger" : "info"
            }
            style={{ height: "25px", marginBottom: "20px" }}
          />
          <p><strong>Tên:</strong> {selectedOrder?.name}</p>
          <p><strong>Email:</strong> {selectedOrder?.email}</p>
          <p><strong>Số điện thoại:</strong> {selectedOrder?.phone}</p>
          <p><strong>Địa chỉ:</strong> {selectedOrder?.address}</p>
          <p><strong>Ghi chú:</strong> {selectedOrder?.note}</p>
          <div className="d-flex justify-content-between mb-3">
            {/* <p><strong>Trạng thái đơn hàng:</strong> {getStatusBadge(selectedOrder?.status)}</p> */}
            <p><strong>Trạng thái thanh toán:</strong> {getPaymentStatus(selectedOrder?.payment_status)}</p>
          </div>

          <h5 className="mt-3">Sản phẩm trong đơn hàng</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder?.bill_detail.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>{parseFloat(item.unit_price).toLocaleString()} VND</td>
                  <td>{(item.quantity * parseFloat(item.unit_price)).toLocaleString()} VND</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5 className="fw-bold">Tổng tiền: {parseFloat(selectedOrder?.total).toLocaleString()} VND</h5>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}

export default Order;

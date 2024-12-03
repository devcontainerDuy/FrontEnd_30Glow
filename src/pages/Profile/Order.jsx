import React, { useState } from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Row, Col, Badge, Button, Modal, Table } from "react-bootstrap";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCheckCircle, faClock, faTimesCircle, faInfoCircle, faTruck } from "@fortawesome/free-solid-svg-icons";

const orders = [
  {
    id: 1,
    date: "2023-11-01",
    status: "Đã giao hàng",
    total: "1,500,000 VND",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      address: "123 Đường ABC, Quận 1, TP. HCM",
      note: "Giao trước 10h sáng",
    },
    products: [
      { id: 1, name: "Sản phẩm 1", quantity: 2, price: 500000, total: 1000000 },
      { id: 2, name: "Sản phẩm 2", quantity: 1, price: 500000, total: 500000 },
    ],
    details: "Thông tin chi tiết đơn hàng #1",
  },
  {
    id: 2,
    date: "2023-10-25",
    status: "Đang chờ xử lý",
    total: "750,000 VND",
    customer: {
      name: "Lê Thị B",
      phone: "0987654321",
      address: "456 Đường XYZ, Quận 2, TP. HCM",
      note: "Yêu cầu giao vào buổi chiều",
    },
    products: [
      { id: 3, name: "Sản phẩm 3", quantity: 1, price: 750000, total: 750000 },
    ],
    details: "Thông tin chi tiết đơn hàng #2",
  },
  {
    id: 3,
    date: "2023-10-20",
    status: "Khách hàng từ chối nhận",
    total: "0 VND",
    customer: {
      name: "Trần C",
      phone: "0912345678",
      address: "789 Đường DEF, Quận 3, TP. HCM",
      note: "Đơn hàng đã bị từ chối",
    },
    products: [
      { id: 4, name: "Sản phẩm 4", quantity: 1, price: 0, total: 0 },
    ],
    details: "Thông tin chi tiết đơn hàng #3",
  },
  {
    id: 4,
    date: "2023-11-10",
    status: "Đã xác nhận",
    total: "2,000,000 VND",
    customer: {
      name: "Phạm D",
      phone: "0934567890",
      address: "321 Đường GHI, Quận 4, TP. HCM",
      note: "Yêu cầu giao vào ngày nghỉ",
    },
    products: [
      { id: 5, name: "Sản phẩm 5", quantity: 1, price: 2000000, total: 2000000 },
    ],
    details: "Thông tin chi tiết đơn hàng #4",
  },
  {
    id: 5,
    date: "2023-11-12",
    status: "Đã giao đơn vị vận chuyển",
    total: "500,000 VND",
    customer: {
      name: "Ngô E",
      phone: "0923456789",
      address: "654 Đường JKL, Quận 5, TP. HCM",
      note: "Giao hàng giờ hành chính",
    },
    products: [
      { id: 6, name: "Sản phẩm 6", quantity: 2, price: 250000, total: 500000 },
    ],
    details: "Thông tin chi tiết đơn hàng #5",
  },
  {
    id: 6,
    date: "2023-11-15",
    status: "Đang giao hàng",
    total: "1,200,000 VND",
    customer: {
      name: "Lý F",
      phone: "0915678901",
      address: "987 Đường MNO, Quận 6, TP. HCM",
      note: "Giao trước 18h",
    },
    products: [
      { id: 7, name: "Sản phẩm 7", quantity: 1, price: 1200000, total: 1200000 },
    ],
    details: "Thông tin chi tiết đơn hàng #6",
  },
  {
    id: 7,
    date: "2023-11-18",
    status: "Đã hoàn trả",
    total: "0 VND",
    customer: {
      name: "Hoàng G",
      phone: "0931234567",
      address: "123 Đường PQR, Quận 7, TP. HCM",
      note: "Khách yêu cầu hoàn trả hàng",
    },
    products: [
      { id: 8, name: "Sản phẩm 8", quantity: 1, price: 0, total: 0 },
    ],
    details: "Thông tin chi tiết đơn hàng #7",
  },
];


function getStatusBadge(status) {
  switch (status) {
    case "Đã giao hàng":
      return <Badge bg="success"><FontAwesomeIcon icon={faCheckCircle} /> Đã giao hàng</Badge>;
    case "Đang chờ xử lý":
      return <Badge bg="warning" text="dark"><FontAwesomeIcon icon={faClock} /> Đang chờ xử lý</Badge>;
    case "Khách hàng từ chối nhận":
      return <Badge bg="danger"><FontAwesomeIcon icon={faTimesCircle} /> Khách hàng từ chối nhận</Badge>;
    case "Đã xác nhận":
      return <Badge bg="info"><FontAwesomeIcon icon={faClipboardList} /> Đã xác nhận</Badge>;
    case "Đã giao đơn vị vận chuyển":
      return <Badge bg="primary"><FontAwesomeIcon icon={faTruck} /> Đã giao đơn vị vận chuyển</Badge>;
    case "Đang giao hàng":
      return <Badge bg="secondary"><FontAwesomeIcon icon={faTruck} /> Đang giao hàng</Badge>;
    case "Đã hoàn trả":
      return <Badge bg="dark"><FontAwesomeIcon icon={faTimesCircle} /> Đã hoàn trả</Badge>;
      case "Đã hủy":
        return <Badge bg="danger"><FontAwesomeIcon icon={faTimesCircle} /> Đã hủy</Badge>;      
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
}


function Order() {
  const [showModal, setShowModal] = useState(false); // Quản lý hiển thị modal
  const [selectedOrder, setSelectedOrder] = useState(null); // Đơn hàng được chọn
  const [orderList, setOrderList] = useState(orders); // Chuyển orders sang state

  // Hàm mở modal với thông tin chi tiết của đơn hàng
  const handleShowModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };
  const handleCancelOrder = (orderId) => {
    const updatedOrders = orderList.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: "Đã hủy" }; // Cập nhật trạng thái
      }
      return order;
    });
    setOrderList(updatedOrders); // Cập nhật lại state
    setSelectedOrder(null); // Đóng modal
    setShowModal(false); // Ẩn modal
    alert(`Đơn hàng #${orderId} đã được hủy.`);
  };
  

  return (
    <>
      <Header />
      <BreadcrumbComponent props={[{ name: "Hóa đơn", url: "/hoa-don" }]} />
      <Container className="mb-5 mt-4">
        <h3 className="mb-4">Danh sách đơn hàng</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ngày đặt</th>
              <th>Trạng thái</th>
              <th>Tổng cộng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{getStatusBadge(order.status)}</td>
                <td>{order.total}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => handleShowModal(order)}>
                    <FontAwesomeIcon icon={faInfoCircle} /> Xem chi tiết
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal hiển thị thông tin chi tiết đơn hàng */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết Đơn hàng #{selectedOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Thông tin khách hàng</h5>
          <p>
            <strong>Tên:</strong> {selectedOrder?.customer.name}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {selectedOrder?.customer.phone}
          </p>
          <p>
            <strong>Địa chỉ:</strong> {selectedOrder?.customer.address}
          </p>
          <p>
            <strong>Ghi chú:</strong> {selectedOrder?.customer.note}
          </p>

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
              {selectedOrder?.products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price.toLocaleString()} VND</td>
                  <td>{product.total.toLocaleString()} VND</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Tổng tiền: {selectedOrder?.total}</h5>
          <p>
            <strong>Trạng thái:</strong> {getStatusBadge(selectedOrder?.status)}
          </p>
          <p>
            <strong>Chi tiết:</strong> {selectedOrder?.details}
          </p>
        </Modal.Body>
        <Modal.Footer>
  <Button variant="secondary" onClick={handleCloseModal}>
    Đóng
  </Button>
  {(selectedOrder?.status === "Đang chờ xử lý" || selectedOrder?.status === "Đã xác nhận") && (
    <Button variant="danger" onClick={() => handleCancelOrder(selectedOrder?.id)}>
      Hủy đơn hàng
    </Button>
  )}
</Modal.Footer>


      </Modal>

      <Footer />
    </>
  );
}

export default Order;

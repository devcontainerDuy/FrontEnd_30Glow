/* eslint-disable */
import React, { useState } from "react";
import Header from "@layouts/Header";
import Footer from "@layouts/Footer";
import { Container, Row, Col, Badge, Button, Modal, Table } from "react-bootstrap";
import BreadcrumbComponent from "@components/BreadcrumbComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCheckCircle, faClock, faTimesCircle, faInfoCircle, faTruck, faClipboard, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const orderService = [
  {
    id: 1,
    date: "2023-11-01",
    status: "Đã giao hàng",
    total: "1,500,000 VND",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      note: "Tôi sẽ đến sớm hơn 15p",
    },
    services: [
      { id: 1, name: "Dịch vụ 1", quantity: 2, price: 500000, total: 1000000 },
      { id: 2, name: "Dịch vụ 2", quantity: 1, price: 500000, total: 500000 },
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
      note: "Yêu cầu giao vào buổi chiều",
    },
    services: [{ id: 3, name: "Dịch vụ 3", quantity: 1, price: 750000, total: 750000 }],
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
      note: "Đơn hàng đã bị từ chối",
    },
    services: [{ id: 4, name: "Dịch vụ 4", quantity: 1, price: 0, total: 0 }],
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
      note: "Yêu cầu giao vào ngày nghỉ",
    },
    services: [{ id: 5, name: "Dịch vụ 5", quantity: 1, price: 2000000, total: 2000000 }],
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
      note: "Giao hàng giờ hành chính",
    },
    services: [{ id: 6, name: "Dịch vụ 6", quantity: 2, price: 250000, total: 500000 }],
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
    services: [{ id: 7, name: "Dịch vụ 7", quantity: 1, price: 1200000, total: 1200000 }],
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
    services: [{ id: 8, name: "Dịch vụ 8", quantity: 1, price: 0, total: 0 }],
    details: "Thông tin chi tiết đơn hàng #7",
  },
];

function getStatusBadge(status) {
  switch (status) {
    case "Đã giao hàng":
      return (
        <Badge bg="success">
          <FontAwesomeIcon icon={faCheckCircle} /> Đã hoàn thành
        </Badge>
      );
    case "Đang chờ xử lý":
      return (
        <Badge bg="warning" text="dark">
          <FontAwesomeIcon icon={faClock} /> Đang chờ xử lý
        </Badge>
      );
    case "Khách hàng từ chối nhận":
      return (
        <Badge bg="danger">
          <FontAwesomeIcon icon={faTimesCircle} /> Khách hàng không đến
        </Badge>
      );
    case "Đã xác nhận":
      return (
        <Badge bg="info">
          <FontAwesomeIcon icon={faClipboard} /> Đã xác nhận
        </Badge>
      );
    case "Đã giao đơn vị vận chuyển":
      return (
        <Badge bg="primary">
          <FontAwesomeIcon icon={faTruck} /> Đang ở tiệm
        </Badge>
      );
    case "Đang giao hàng":
      return (
        <Badge bg="secondary">
          <FontAwesomeIcon icon={faTruck} /> Khách hẹn ngày sau
        </Badge>
      );
    case "Đã hoàn trả":
      return (
        <Badge bg="dark">
          <FontAwesomeIcon icon={faTimesCircle} /> Đã hoàn trả
        </Badge>
      );
    case "Đã hủy":
      return (
        <Badge bg="danger">
          <FontAwesomeIcon icon={faTimesCircle} /> Đã hủy
        </Badge>
      );
    default:
      return <Badge bg="secondary">{status}</Badge>;
  }
}

function OrderServices() {
  const [showModal, setShowModal] = useState(false); 
  const [selectedOrderServices, setSelectedOrderServices] = useState(null); 
  const [orderServicesList, setOrderServicesList] = useState(orderService); 

  const handleShowModal = (orderServices) => {
    setSelectedOrderServices(orderServices);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrderServices(null);
  };
  const handleCancelOrderServices = (orderServicesId) => {
    const updatedOrderService = orderServicesList.map((orderServices) => {
      if (orderServices.id === orderServicesId) {
        return { ...orderServices, status: "Đã hủy" }; 
      }
      return orderServices;
    });
    setOrderServicesList(updatedOrderService); // Cập nhật lại state
    setSelectedOrderServices(null); // Đóng modal
    setShowModal(false); // Ẩn modal
    alert(`Dịch vụ #${orderServicesId} đã được hủy.`);
  };

  return (
    <>
      <Header />
      <BreadcrumbComponent props={[{ name: "Lịch đặt ", url: "/lich-dat" }]} />
      <Container className="mb-5 mt-4">
        <h3 className="mb-4">
          <FontAwesomeIcon icon={faAddressBook} /> Danh sách lịch đặt
        </h3>
        <Table striped borderServicesed hover>
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
            {orderServicesList.map((orderServices) => (
              <tr key={orderServices.id}>
                <td>{orderServices.id}</td>
                <td>{orderServices.date}</td>
                <td>{getStatusBadge(orderServices.status)}</td>
                <td>{orderServices.total}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => handleShowModal(orderServices)}>
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
          <Modal.Title>Thông tin chi tiết Đơn hàng #{selectedOrderServices?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Thông tin khách hàng</h5>
          <p>
            <strong>Tên:</strong> {selectedOrderServices?.customer.name}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {selectedOrderServices?.customer.phone}
          </p>

          <p>
            <strong>Ghi chú:</strong> {selectedOrderServices?.customer.note}
          </p>

          <h5 className="mt-3">Dịch vụ đã đặt </h5>
          <Table striped borderServicesed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên dịch vụ</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrderServices?.services.map((service, index) => (
                <tr key={service.id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.quantity}</td>
                  <td>{service.price.toLocaleString()} VND</td>
                  <td>{service.total.toLocaleString()} VND</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h5>Tổng tiền: {selectedOrderServices?.total}</h5>
          <p>
            <strong>Trạng thái:</strong> {getStatusBadge(selectedOrderServices?.status)}
          </p>
          <p>
            <strong>Chi tiết:</strong> {selectedOrderServices?.details}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
          {(selectedOrderServices?.status === "Đang chờ xử lý" || selectedOrderServices?.status === "Đã xác nhận") && (
            <Button variant="danger" onClick={() => handleCancelOrderServices(selectedOrderServices?.id)}>
              Hủy đơn hàng
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}

export default OrderServices;

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
    status: "Đã hủy",
    total: "1,500,000 VND",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      note: "Tôi bận ! ",
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
      note: "Tôi sẽ đến đúng giờgiờ",
    },
    services: [{ id: 3, name: "Dịch vụ 3", quantity: 1, price: 750000, total: 750000 }],
    details: "Thông tin chi tiết đơn hàng #2",
  },
  {
    id: 4,
    date: "2023-11-10",
    status: "Đã xác nhận",
    total: "2,000,000 VND",
    customer: {
      name: "Phạm D",
      phone: "0934567890",
      note: "",
    },
    services: [{ id: 5, name: "Dịch vụ 5", quantity: 1, price: 2000000, total: 2000000 }],
    details: "Thông tin chi tiết đơn hàng #4",
  },
];

function getStatusBadge(status) {
  switch (status) {
    case "Đang chờ xử lý":
      return (
        <Badge bg="warning" text="dark">
          <FontAwesomeIcon icon={faClock} /> Đang chờ xử lý
        </Badge>
      );
    case "Đã xác nhận":
      return (
        <Badge bg="info">
          <FontAwesomeIcon icon={faClipboard} /> Đã xác nhận
        </Badge>
      );
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

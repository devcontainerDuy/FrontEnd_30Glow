import React, { useState } from 'react';
import { Notyf } from 'notyf'; 
import { Modal, Box, Typography } from '@mui/material'; 
import 'notyf/notyf.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Staff.css';
import Navbar from "../layouts/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Staff() {
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
        icon: '<i class="bi bi-bag-check"></i>',
      },
    ],
  });

  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, service_name: "Dịch vụ 1", customer_name: "Khách 1", phone: "0123456789", time: "2024-10-18T14:00" },
    { id: 2, service_name: "Dịch vụ 2", customer_name: "Khách 2", phone: "0987654321", time: "2024-10-19T15:30" },
    { id: 3, service_name: "Dịch vụ 3", customer_name: "Khách 3", phone: "0912345678", time: "2024-10-20T09:00" },
    { id: 4, service_name: "Dịch vụ 4", customer_name: "Khách 4", phone: "0987654322", time: "2024-10-21T10:30" },
    { id: 5, service_name: "Dịch vụ 5", customer_name: "Khách 5", phone: "0934567890", time: "2024-10-22T11:45" },
    { id: 6, service_name: "Dịch vụ 6", customer_name: "Khách 6", phone: "0976543210", time: "2024-10-23T13:15" }
  ]);

  const [idBooking, setIdBooking] = useState(0);
  const [note, setNote] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState({});
  const [filter, setFilter] = useState({
    serviceName: '',
    customerName: '',
    phone: '',
    time: '',
  });

  const handleOpen = (id) => {
    setIdBooking(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNote("");
  };

  const cancelBooking = (id) => {
    handleOpen(id);
  };

  const submitCancel = () => {
    if (note === "") {
      notyf.open({ type: "error", message: "Vui lòng nhập lý do" });
    } else {
      notyf.open({ type: "success", message: "Đã hủy công việc" });
      setBookings(bookings.filter((booking) => booking.id !== idBooking));
      handleClose();
    }
  };

  const submitBooking = (id) => {
    const selectedEmployee = selectedEmployees[id];
    
    if (!selectedEmployee) {
      notyf.open({ type: "error", message: "Vui lòng chọn nhân viên trước khi hoàn thành công việc" });
      return;
    }

    notyf.open({ type: "success", message: "Đã hoàn thành công việc" });
    setBookings(bookings.filter((booking) => booking.id !== id));
    delete selectedEmployees[id];  // Remove the employee selection after booking is completed
  };

  const handleEmployeeChange = (bookingId, employee) => {
    setSelectedEmployees((prev) => ({ ...prev, [bookingId]: employee }));
  };

  const getAvailableEmployees = (bookingId) => {
    const chosenEmployees = Object.values(selectedEmployees);
    return ["nhan-vien-1", "nhan-vien-2", "nhan-vien-3"].filter(
      (emp) => !chosenEmployees.includes(emp) || emp === selectedEmployees[bookingId]
    );
  };

  const filteredBookings = bookings.filter(booking =>
    booking.service_name.toLowerCase().includes(filter.serviceName.toLowerCase()) &&
    booking.customer_name.toLowerCase().includes(filter.customerName.toLowerCase()) &&
    booking.phone.includes(filter.phone) &&
    booking.time.includes(filter.time)
  );

  return (
    <>
      <Navbar />
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 400, bgcolor: "background.paper", p: 4, border: "2px solid #000", boxShadow: 24 }}>
          <Typography variant="h6">Ghi chú hủy</Typography>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ghi chú hủy ..."
              onChange={(e) => setNote(e.target.value)}
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={submitCancel}
            >
              Xác nhận
            </button>
          </div>
        </Box>
      </Modal>
      
      <div className="container">
        <h4>Quản lý / Đơn hàng</h4>
        <div className="card card-primary card-outline text-sm mb-3">
          <div className="card-header">
            <h3 className="card-title">Tìm kiếm đơn hàng</h3>
          </div>
          <div className="card-body row form-group-category">
            <div className="form-group col-md-4">
              <label htmlFor="serviceName" className="form-label">Tên dịch vụ</label>
              <input
                type="text"
                className="form-control"
                id="serviceName"
                value={filter.serviceName}
                onChange={(e) => setFilter({ ...filter, serviceName: e.target.value })}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="customerName" className="form-label">Họ tên</label>
              <input
                type="text"
                className="form-control"
                id="customerName"
                value={filter.customerName}
                onChange={(e) => setFilter({ ...filter, customerName: e.target.value })}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="phone" className="form-label">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={filter.phone}
                onChange={(e) => setFilter({ ...filter, phone: e.target.value })}
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="time" className="form-label">Thời gian</label>
              <input
                type="date"
                className="form-control"
                id="time"
                value={filter.time}
                onChange={(e) => setFilter({ ...filter, time: e.target.value })}
              />
            </div>
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên dịch vụ</th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Thời gian</th>
              <th>Nhân viên</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.service_name}</td>
                <td>{booking.customer_name}</td>
                <td>{booking.phone}</td>
                <td>{new Date(booking.time).toLocaleString()}</td>
                <td>
                  <select
                    onChange={(e) => handleEmployeeChange(booking.id, e.target.value)}
                    defaultValue={selectedEmployees[booking.id] || ""}
                  >
                    <option value="" disabled>Chọn nhân viên</option>
                    {getAvailableEmployees(booking.id).map(emp => (
                      <option key={emp} value={emp}>{emp}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => cancelBooking(booking.id)}>
                  <i className="fas fa-check" />
                  </button>
                  <button className="btn btn-sm btn-danger ms-3" onClick={() => submitBooking(booking.id)}>
                  <i className="fas fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="d-flex justify-items-center justify-content-between">
        <div className="flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-center">
          <div>
            <ul className="pagination">
              <li className="page-item disabled" aria-disabled="true">
                <span className="page-link" aria-hidden="true">
                  Page 1/4
                </span>
              </li>
              <li className="page-item disabled" aria-disabled="true">
                <span className="page-link" aria-hidden="true">
                  First
                </span>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link">1</span>
              </li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#" rel="next" aria-label="Next">Next</a></li>
              <li className="page-item"><a className="page-link" href="#" rel="next">Last</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Staff;


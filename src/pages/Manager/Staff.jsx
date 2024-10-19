import React, { useState } from 'react';
import { Notyf } from 'notyf'; // Assuming you have this library installed
import { Modal, Box, Typography } from '@mui/material'; // Material-UI components
import 'notyf/notyf.min.css'; // Notyf CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS (if you're using Bootstrap)
import './Staff.css';
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service_name: "Dịch vụ 1",
      service_slug: "dich-vu-1",
      customer_name: "Khách 1",
      phone: "0123456789",
      time: "2024-10-18 14:00",
    },
    {
      id: 2,
      service_name: "Dịch vụ 2",
      service_slug: "dich-vu-2",
      customer_name: "Khách 2",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 3,
      service_name: "Dịch vụ 3",
      service_slug: "dich-vu-3",
      customer_name: "Khách 3",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 4,
      service_name: "Dịch vụ 4",
      service_slug: "dich-vu-4",
      customer_name: "Khách 4",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 5,
      service_name: "Dịch vụ 3",
      service_slug: "dich-vu-3",
      customer_name: "Khách 3",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 6,
      service_name: "Dịch vụ 3",
      service_slug: "dich-vu-3",
      customer_name: "Khách 3",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 7,
      service_name: "Dịch vụ 3",
      service_slug: "dich-vu-3",
      customer_name: "Khách 3",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
    {
      id: 8,
      service_name: "Dịch vụ 3",
      service_slug: "dich-vu-3",
      customer_name: "Khách 3",
      phone: "0987654321",
      time: "2024-10-19 15:30",
    },
  ]);
  const [idBooking, setIdBooking] = useState(0);
  const [note, setNote] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cancelBooking = (idBooking) => {
    setIdBooking(idBooking);
    setOpen(true);
  };

  const submitCancel = () => {
    if (note === "") {
      notyf.open({
        type: "error",
        message: "Vui lòng nhập lý do",
      });
    } else {
      notyf.open({
        type: "success",
        message: "Đã hủy công việc",
      });
      setBookings(bookings.filter((booking) => booking.id !== idBooking));
      setOpen(false);
      setNote("");
    }
  };

  const submitBooking = (id) => {
    notyf.open({
      type: "success",
      message: "Đã hoàn thành công việc",
    });
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ghi chú hủy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="row">
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
                  id="button-addon2"
                  onClick={submitCancel}
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      <div className="container">
        <div
          className="row w-100 mt-2 p-3 bg-primary text-light rounded"
          style={{ margin: "0px auto" }}
        >
          <h4 style={{ fontFamily: "Time new romance" }}>Danh sách lịch đặt</h4>
        </div>
        <div className="row pt-2" style={{ fontFamily: "Time new romance" }}>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div className="col-md-3 mb-3" key={booking.id}>
                <div className="card bg-white">
                  <div className="bg-white card-header">
                    <div className="row">
                      <div className="bg-dark col-md-1"></div>
                      <div className="col-md text-center">
                        <a
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"#"}
                        >
                          {booking.service_name}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white card-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Tên khách
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={booking.customer_name}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Số điện thoại
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={booking.phone}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Thời gian
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        value={booking.time}
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="text-end bg-white card-footer text-muted">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => submitBooking(booking.id)}
                    >
                      Hoàn thành
                    </button>
                    <button
                      className="btn btn-sm btn-danger ms-3"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4>Chưa có booking</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Staff;
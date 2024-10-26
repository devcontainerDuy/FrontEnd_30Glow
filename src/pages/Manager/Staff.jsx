
import React, { useState } from 'react';
import { Notyf } from 'notyf'; 
import { Modal, Box, Typography } from '@mui/material'; 
import 'notyf/notyf.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Staff.css';
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
        <h4>
          <span>Quản lý</span>/<span className="text-muted fw-light" />
          Đơn hàng
        </h4>
        <div className="card pd-15 bg-main mb-3">
            <div className="col-md-3">
              <h5 className="card-title mb-2"> Tìm kiếm mã đơn hàng</h5>
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar text-sm"
                  type="search"
                  id="keyword"
                  placeholder="Tìm kiếm"
                  aria-label="Tìm kiếm"
                  defaultValue=""
                  onkeypress="doEnter(event,'keyword','/sourcephp8/admin/order/man/don-hang')"
                />
                <div className="input-group-append bg-primary rounded-right">
                  <button
                    className="btn btn-navbar text-white"
                    type="button"
                    onclick="onSearch('keyword','/sourcephp8/admin/order/man/don-hang')"
                  >
                    <i className="fas fa-search mr-1" />
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="card card-primary card-outline text-sm mb-3">


        <div className="card-header">
          <h3 className="card-title">Tìm kiếm đơn hàng</h3>
        </div>
        <div className="card-body row form-group-category">
          {[
            { label: 'Ngày đặt', id: 'flatpickr-range', placeholder: 'DD/MM/YYYY to DD/MM/YYYY', readOnly: true },
            { label: 'Tình trạng:', id: 'order_status', options: ['Chọn tình trạng', 'Mới đặt', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao', 'Đã hủy'] },
            { label: 'Hình thức thanh toán:', id: 'order_payment', options: ['Chọn hình thức thanh toán', 'Thanh toán trực tiếp tại công ty', 'Thanh toán tại điểm giao hàng', 'Thanh toán bằng chuyển khoản'] },
            { label: 'Tỉnh thành:', id: 'id_city', options: ['Chọn danh mục', 'Thành phố Hà Nội'] },
            { label: 'Quận huyện:', id: 'id_district', options: ['Chọn danh mục', 'Quận Ba Đình'] },
            { label: 'Phường xã:', id: 'id_ward', options: ['Chọn danh mục', 'Phường Phúc Xá'] },
          ].map(({ label, id, placeholder, readOnly, options }) => (
            <div className="form-group col-md-3 col-sm-3" key={id}>
              <label htmlFor={id} className="form-label">{label}</label>
              {options ? (
                <select id={id} className="form-control select2">
                  {options.map((option, index) => (
                    <option value={index} key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input type="text" className="form-control flatpickr-input" placeholder={placeholder} id={id} readOnly={readOnly} />
              )}
            </div>
          ))}

          <div className="form-group text-center mt-2 mb-0 col-12">
            <button
              className="btn btn-primary text-white waves-effect waves-light"
              onClick={() => actionOrder('/sourcephp8/admin/order/man/don-hang')}
            >
              <i className="fas fa-search mr-1" /> Tìm kiếm
            </button>
            <a className="ml-1 btn btn-secondary text-white waves-effect waves-light" href="#" title="Hủy lọc">
              <i className="fas fa-times mr-1" /> Hủy lọc
            </a>
          </div>
        </div>
      
    </div>




    <table className="datatables-category-list table border-top text-sm">
      <thead>
        <tr>
          <th className="align-middle w-[60px]">
            <div className="custom-control custom-checkbox my-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="selectall-checkbox"
              />
            </div>
          </th>
          <th className="text-center w-[70px] !pl-0">STT</th>
          <th className="text-left">Tên dịch vụ</th>
          <th className="text-left">Họ tên</th>
          <th className="text-left">Thời gian</th>
          <th className="text-left">HT thanh toán</th>
          <th className="text-center">Số điện thoại</th>
          <th className="text-left">Tình trạng</th>
          <th className="text-lg-center text-center">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <tr key={booking.id}>
          
          <td className="align-middle">
            <div className="custom-control custom-checkbox my-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="select-checkbox1"
                data-id={40}
              />
            </div>
          </td>
          <td className="align-left w-[70px] !pl-0">
            <input
              type="number"
              className="form-control form-control-mini m-auto update-numb"
              value={booking.id}
            />
          </td>
          <td className="align-left">
            <a className="text-dark text-break">{booking.service_name}</a>
          </td>
          <td className="align-left">
            <a className="text-dark text-break">{booking.customer_name}</a>
          </td>
          <td className="align-left">
            <a className="text-dark text-break">{booking.time}</a>
          </td>
          <td className="align-left">
            <a className="text-dark text-break">Thanh toán bằng chuyển khoản</a>
          </td>
          <td className="align-middle text-center">
            <a className="text-dark text-break">{booking.phone}</a>
          </td>
          <td className="align-right">
            <span className="text-text-primary py-1 px-2 fs-6 rounded-1 bg-text-primary-bg-subtle">
              Mới đặt
            </span>
          </td>
          <td className="align-middle text-center">
        
            <a
               className="btn btn-sm btn-primary"
               onClick={() => submitBooking(booking.id)}
            >
              <i className="fas fa-check" />
            </a>
            <a
              className="btn btn-sm btn-danger ms-3"
              onClick={() => cancelBooking(booking.id)}
            >
              <i className="fas fa-trash" />
            </a>
          </td>
        </tr>
      ))
    ) : (
      <h4>Chưa có booking</h4>
    )}
      </tbody>
    </table>




        {/* <div className="row pt-2" style={{ fontFamily: "Time new romance" }}>
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
          
        </div> */}
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
        <li
          className="page-item disabled"
          aria-disabled="true"
          aria-label="@lang('pagination.previous')"
        >
          <span className="page-link" aria-hidden="true">
            First
          </span>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">1</span>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
          >
            3
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
          >
            4
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            rel="next"
            aria-label="@lang('pagination.next')"
          >
            Next
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            rel="next"
          >
            Last
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Staff;
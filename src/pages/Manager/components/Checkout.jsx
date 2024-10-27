import React, { useState } from "react";
import { Box, Typography, Button, Modal, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Notyf } from "notyf";
import './Staff.css';
import Navbar from "../layouts/Navbar";
// Sample data
const sampleData = [
  { id_booking: 1, name: "Nguyễn Văn A", phone: "0123456789", email: "a@gmail.com", time: "2024-10-26", status: 2, id_customer: 1, service_name: "Dịch vụ A", user_name: "Nhân viên 1" },
  { id_booking: 2, name: "Trần Thị B", phone: "0123456790", email: "b@gmail.com", time: "2024-10-26", status: 1, id_customer: 2, service_name: "Dịch vụ B", user_name: "Nhân viên 2" },
];

function CheckOut() {
  const [bookingsCustomers, setBookingsCustomers] = useState(sampleData);
  const [selectCustomer, setSelectCustomer] = useState([]);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");

  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const handleClose = () => setShow(false);
  const handleShow = (id_customer) => {
    const customer = bookingsCustomers.find(b => b.id_customer === id_customer);
    if (customer) {
      setShow(true);
      setSelectCustomer([customer]);
      console.log("Selected Customer:", customer);
    }
  };

  const handleDateFilter = () => {
    const filteredData = sampleData.filter((item) => {
      const time = new Date(item.time);
      const fromTime = date ? new Date(date) : null;
      const toTime = date1 ? new Date(date1) : null;

      if (fromTime && !toTime) {
        return time >= fromTime;
      }
      if (!fromTime && toTime) {
        return time <= toTime;
      }
      if (fromTime && toTime) {
        return time >= fromTime && time <= toTime;
      }
      return true;
    });
    setBookingsCustomers(filteredData);
  };

  const columns = [
    { field: "id_booking", headerName: "ID", width: 100 },
    { field: "name", headerName: "Tên người đặt", width: 250 },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 250,
      renderCell: (params) =>
        params.value ? (
          <a href={`tel:${params.value}`} className="text-decoration-none">{params.value}</a>
        ) : (
          <span style={{ color: "red" }}>Không có SĐT</span>
        ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) =>
        params.value ? (
          <a href={`mailto:${params.value}`} className="text-decoration-none">{params.value}</a>
        ) : (
          <span style={{ color: "red" }}>Không có Email</span>
        ),
    },
    { field: "time", headerName: "Thời gian đặt lịch", width: 250 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 120,
      renderCell: (params) => (
        <Button onClick={() => handleShow(params.row.id_customer)}>Xem Chi Tiết</Button>
      ),
    },
  ];

  return (
    <>
    <Navbar/>
      <Box sx={{ margin: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Kiểm tra thông tin đặt lịch
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: "1rem" }}>
          <Box>
            <p>Từ ngày</p>
            <TextField
              type="date"
              variant="outlined"
              onChange={(e) => setDate(e.target.value)}
              size="small"
            />
          </Box>
          <Box>
            <p>Đến ngày</p>
            <TextField
              type="date"
              variant="outlined"
              onChange={(e) => setDate1(e.target.value)}
              size="small"
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleDateFilter}
            size="small" // Make the button size small
            sx={{ height: '40px', minWidth: '120px' }} // Match height and set minimum width
          >
            Tìm kiếm
          </Button>
        </Box>
        <Box sx={{ height: 400, width: "100%", marginTop: "2rem" }}>
          <DataGrid
            rows={bookingsCustomers}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row.id_booking}
          />
        </Box>
      </Box>

      {/* Modal for customer details */}
      <Modal open={show} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
            Thông tin chi tiết
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Loại dịch vụ</TableCell>
                  <TableCell align="right">Thời gian đặt lịch</TableCell>
                  <TableCell align="right">Nhân viên thực hiện</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectCustomer.length > 0 ? (
                  selectCustomer.map((row, index) => (
                    <TableRow key={row.id_booking}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="right">{row.service_name}</TableCell>
                      <TableCell align="right">{row.time}</TableCell>
                      <TableCell align="right">{row.user_name}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
                      Không có dữ liệu
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 2 }}>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Đóng
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default CheckOut;
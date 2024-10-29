import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Staff.css';
import Navbar from "../layouts/Navbar";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE', '#FF667F'];

// Sample data for products
const sampleProductData = [
  { product_name: 'Sản phẩm A', total_revenue: 100000 },
  { product_name: 'Sản phẩm B', total_revenue: 200000 },
  { product_name: 'Sản phẩm C', total_revenue: 150000 },
];

// Sample data for services
const sampleServiceData = [
  { service_name: 'Dịch vụ A', service_price: 50000, total_bookings: 4 },
  { service_name: 'Dịch vụ B', service_price: 75000, total_bookings: 3 },
];

// Sample daily revenue data for products
const sampleDailyRevenueData = [
  ['Ngày', 'Doanh thu'],
  ['01/07/2024', 50000],
  ['02/07/2024', 75000],
  ['03/07/2024', 100000],
  ['04/07/2024', 360000],
  ['05/07/2024', 460000],
  ['06/07/2024', 560000],
  ['07/07/2024', 660000],
  ['08/07/2024', 760000],
  ['09/07/2024', 860000],
  ['10/07/2024', 960000],
  ['11/07/2024', 610000],
  ['12/07/2024', 62000],
  ['13/07/2024', 63000],
];

// Sample daily revenue data for services
const sampleServiceDailyRevenueData = [
  ['Ngày', 'Doanh thu'],
  ['01/07/2024', 125000],
  ['02/07/2024', 190000],
  ['03/07/2024', 260000],
  ['04/07/2024', 360000],
  ['05/07/2024', 460000],
  ['06/07/2024', 560000],
  ['07/07/2024', 660000],
  ['08/07/2024', 760000],
  ['09/07/2024', 860000],
  ['10/07/2024', 960000],
  ['11/07/2024', 610000],
  ['12/07/2024', 62000],
  ['13/07/2024', 63000],
];

function Baocao() {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-07-01',
    endDate: '2024-08-30',
  });

  const totalServiceRevenue = sampleServiceData.reduce((acc, item) => {
    return acc + (item.service_price * item.total_bookings);
  }, 0);

  const totalRevenue = sampleProductData.reduce((acc, item) => {
    return acc + (parseFloat(item.total_revenue) || 0);
  }, 0);

  const productPieData = [
    ['Sản phẩm', 'Doanh thu'],
    ...sampleProductData.map(item => [item.product_name, parseFloat(item.total_revenue)]),
  ];

  const servicePieData = [
    ['Dịch vụ', 'Doanh thu'],
    ...sampleServiceData.map(item => [item.service_name, item.service_price * item.total_bookings]),
  ];

  const pieOptions = {
    pieHole: 0.4,
    colors: COLORS,
  };

  const barOptions = {
    colors: COLORS,
    hAxis: { title: 'Ngày' },
    vAxis: { title: 'Doanh thu' },
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDateRange(prevRange => ({
      ...prevRange,
      [name]: value,
    }));
  };

  return (
    <>
    <Navbar/>
    <div style={{ fontFamily: 'Times New Roman' }} className="dashboard-container">
      <main className="main-content">
        <header className="main-header">
          <h2>Tổng quan</h2>
          <div className="metrics-section-mt">
            <div className="metric-card">
              <h5>Tổng doanh thu sản phẩm</h5>
              <h4>{totalRevenue.toLocaleString()} VND</h4>
            </div>
            <div className="metric-card">
              <h5>Tổng doanh thu dịch vụ</h5>
              <h4>{totalServiceRevenue.toLocaleString()} VND</h4>
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-md">
            <h3>Doanh thu hàng ngày sản phẩm</h3>
            <div className="date-range-selector">
              <label>
                Ngày bắt đầu:
                <input
                  type="date"
                  name="startDate"
                  className="form-control"
                  value={dateRange.startDate}
                  onChange={handleDateChange}
                />
              </label>
              <label>
                Ngày kết thúc:
                <input
                  type="date"
                  name="endDate"
                  className="form-control"
                  value={dateRange.endDate}
                  onChange={handleDateChange}
                />
              </label>
            </div>
            <Chart
              chartType="Bar"
              data={sampleDailyRevenueData}
              options={barOptions}
              width="100%"
              height="400px"
            />
          </div>
        </div>

        <div className="full-width-container">
          <div className="chart-container">
            <h3>Doanh thu hàng ngày dịch vụ</h3>
            <Chart
              className="chart"
              chartType="Bar"
              data={sampleServiceDailyRevenueData}
              options={barOptions}
              width="100%"
              height="400px"
            />
          </div>
        </div>

        <div className="row1">
          <div className="col-md-6">
            <h3>Tổng doanh thu sản phẩm</h3>
            <Chart
              chartType="PieChart"
              data={productPieData}
              options={pieOptions}
              width="100%"
              height="400px"
            />
          </div>

          <div className="col-md-6">
            <h3>Tổng doanh thu dịch vụ</h3>
            <Chart
              chartType="PieChart"
              data={servicePieData}
              options={pieOptions}
              width="100%"
              height="400px"
            />
          </div>
        </div>
      </main>
    </div>
    </>
    
  );
}

export default Baocao;
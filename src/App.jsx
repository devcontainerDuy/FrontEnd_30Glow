import { BrowserRouter, Route, Routes } from "react-router-dom";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/Home/Index";
import Contact from "./pages/Home/Contact";
import Detail from "./pages/Product/Detail";
import Product from "./pages/Product/Index";
import Service from "./pages/Service/Index";
import Show from "./pages/Service/Show";
import GioHang from "./pages/Cart/gio-hang";
import About from "./pages/Home/About";
import Brand from "./pages/Brand/Index";
import ThanhToan from "./pages/Cart/thanh-toan";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import ProductCart from "./pages/Cart/ProductCart";
import ProductPayment from "./pages/Cart/ProductPayment";
import ResetPass from "./pages/Auth/ResetPass";
import Account from "./pages/Home/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gioi-thieu' element={<About />} />
        <Route path='/lien-he' element={<Contact />} />
        <Route path='/gio-hang' element={<GioHang />} />
        <Route path='/gio-hang-san-pham' element={<ProductCart />} />
        <Route path='/thanh-toan-san-pham' element={<ProductPayment />} />
        <Route path='/san-pham' element={<Product />} />
        <Route path='/thuong-hieu' element={<Brand />} />
        <Route path='/san-pham/:slug' element={<Detail />} />
        <Route path='/dich-vu' element={<Service />} />
        <Route path='/dich-vu/:slug' element={<Show />} />
        <Route path='/thanh-toan' element={<ThanhToan />} />
        <Route path='/thanh-toan' element={<ThanhToan />} />
        <Route path='/dang-ky' element={<Register />} />
        <Route path='/dang-nhap' element={<Login />} />
        <Route path='/quen-mat-khau' element={<Forgot />} />
        <Route path='/doi-mat-khau' element={<ResetPass />} />
        <Route path='/tai-khoan' element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

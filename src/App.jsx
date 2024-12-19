/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import Home from "./pages/Home/Index";
import Contact from "./pages/Home/Contact";
import Detail from "./pages/Product/Detail";
import Product from "./pages/Product/Index";
import Service from "./pages/Service/Index";
import Show from "./pages/Service/Show";
import ServiceCart from "./pages/Cart/ServiceCart";
import About from "./pages/Home/About";
import Brand from "./pages/Brand/Index";
import ThanhToan from "./pages/Cart/thanh-toan";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import ProductCart from "./pages/Cart/ProductCart";
import ProductPayment from "./pages/Cart/ProductPayment";
import ResetPass from "./pages/Auth/ResetPass";
import Account from "./pages/Profile/Account";
import Notfound from "./pages/Home/Notfound";
import CategoryProducts from "./pages/Product/CategoryProducts";
import { useContext } from "react";
import { AuthenContext } from "./context/AuthenContext";
import Order from "./pages/Profile/Order";
import ProductDetail from "./pages/Product/ProductDetail";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import CollectionServices from "./pages/Service/CollectionService";
import BrandProducts from "./pages/Brand/BrandProducts";
import LocationForm from "./pages/Cart/LocationForm";
import PaymentProduct from "./pages/Cart/PaymentProduct";
import Post from "./pages/Post/IndexPost";
import OrderServices from "./pages/Profile/OrderSV";
import SuccessfulPayment from "./pages/Cart/SuccessfulPayment";
import SuccessfulOrder from "./pages/Cart/SuccessfulOrder";
import OrderSuccessful from "./pages/Cart/OrderSuccessful";
import PostDetail from "./pages/Post/PostDetail";
import PaymentFailed from "./pages/Cart/PaymentFailed";

function App() {
  const { user } = useContext(AuthenContext);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  return (
    <Routes>
      <Route path="/test" element={<LocationForm />} />
      <Route path="/" element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/dat-lich" element={<ServiceCart />} />
      <Route path="/san-pham" element={<Product />} />
      <Route path="/thuong-hieu" element={<Brand />} />
      <Route path="/thuong-hieu/:slug" element={<BrandProducts />} />
      <Route path="/danh-muc/:slug" element={<CategoryProducts />} />
      <Route path="/dich-vu" element={<Service />} />
      <Route path="/dich-vu/:slug" element={<Show />} />
      <Route path="/nhom-dich-vu/:slug" element={<CollectionServices />} />
      <Route path="/lich-dat" element={<OrderServices />} />
      <Route path="/tin-tuc" element={<Post />} />
      <Route path="/tin-tuc/:slug" element={<PostDetail />} />

      {/* <Route path="/dat-hang" element={<OrderSuccessful />} /> */}
      {/* Thanh toán VNPay */}
      <Route path="/dat-hang-thanh-cong" element={<OrderSuccessful />} />
      <Route path="/thanh-toan-thanh-cong" element={<SuccessfulPayment />} />
      <Route path="/thanh-toan-that-bai" element={<PaymentFailed />} />
      {/* Thanh toán VNPay */}
      <Route path="/thanh-toan-sanpham" element={<PaymentProduct />} />
      {!user ? (
        <>
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/san-pham/:slug" element={<Detail />} />
          <Route path="/gio-hang" element={<ProductCart />} />
        </>
      ) : (
        <>
          <Route path="/tai-khoan" element={<Account />} />
          <Route path="/hoa-don" element={<Order />} />
          <Route path="/san-pham/:slug" element={<ProductDetail />} />
          <Route path="/gio-hang" element={<ShoppingCart />} />
          <Route path="/thanh-toan-san-pham" element={<ProductPayment />} />
        </>
      )}
      <Route path="/quen-mat-khau" element={<Forgot />} />
      <Route path="/thay-doi-mat-khau/" element={<ResetPass />} />
      {setInterval(() => {
        <Route path="/*" element={<Notfound />} />;
      }, 1000)}
    </Routes>
  );
}

export default App;

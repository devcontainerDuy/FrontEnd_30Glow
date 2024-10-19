import { BrowserRouter, Route, Routes } from "react-router-dom";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/Home/Index";
import Contact from "./pages/Home/Contact";
import Service from "./pages/Service/Index";
import ServiceShow from "./pages/Service/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dich-vu' element={<Service />} />
        <Route path='/dich-vu/:slug' element={<ServiceShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

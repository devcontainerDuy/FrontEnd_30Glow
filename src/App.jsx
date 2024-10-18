import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home/Index";
import Contact from "./pages/Home/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us.html" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

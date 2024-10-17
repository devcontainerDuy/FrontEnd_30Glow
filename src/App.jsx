import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./bootstrap.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthenProvider } from "./context/AuthenContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthenProvider>
        <App />
      </AuthenProvider>
    </BrowserRouter>
  </StrictMode>
);

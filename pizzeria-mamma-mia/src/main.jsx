import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { SessionProvider } from "./context/SessionContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SessionProvider>
  </React.StrictMode>
);

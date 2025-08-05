import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Updated import
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";

// ✅ Create root using React 18 API
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
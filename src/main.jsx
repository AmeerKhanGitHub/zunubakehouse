import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";

// Add custom CSS for light baby pink background
const style = document.createElement('style');
style.textContent = `
  body {
    background-color: #FFF0F5 !important;
    min-height: 100vh;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

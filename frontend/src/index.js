import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

// Imported bootstrap from the bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
// Imported bootstrap JS plugin from the bootstrap library
import "bootstrap/dist/js/bootstrap.min.js";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();

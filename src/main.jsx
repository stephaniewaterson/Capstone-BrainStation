import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  //strict mode disabled due to wb socket io triggering emit from server twice.
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);

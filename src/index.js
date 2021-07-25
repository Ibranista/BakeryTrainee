import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminLte/plugins/jvectormap/jquery-jvectormap-1.2.2.css";
import "./adminLte/dist/css/AdminLTE.min.css";
import "./adminLte/dist/css/skins/_all-skins.min.css";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// core styles
import "./scss/volt.scss";
// Admin Lte

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router>
        <ScrollToTop />
      </Router>
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

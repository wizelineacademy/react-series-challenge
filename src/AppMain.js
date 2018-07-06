import React, { Component } from "react";
import logo from "./logo.svg";
import "./AppMain.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
class AppMain extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default AppMain;

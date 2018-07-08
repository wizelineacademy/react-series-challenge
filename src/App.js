import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./theme/globalStyle";

import Routes from "./Routes";
import Navbar from "./Components/Navigation/Navbar";
const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Routes />
    </React.Fragment>
  </Router>
);

export default App;

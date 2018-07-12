import React, { Component } from "react";
import Routes from "./router/Routes"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar/>
          <Routes/>
        </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import Routes from "./Routes";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import reducers from "./reducers";
const initialState = { tech: "React " };
const store = createStore(reducers, initialState);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{store.getState().tech}</h1>
        <Navbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;

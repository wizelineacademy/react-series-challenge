import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import "./theme/globalStyle";
import Routes from "./Routes";
import Navbar from "./Components/Navigation/Navbar";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Routes />
        </React.Fragment>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppMain from "./AppMain";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppMain />, document.getElementById("root"));
registerServiceWorker();

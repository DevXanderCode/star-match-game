import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StarMatchGame from "./StarMatchGame";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StarMatchGame />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

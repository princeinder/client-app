import React from "react";
import ReactDOM from "react-dom";
import "react-image-crop/dist/ReactCrop.css";
import "react-image-crop/lib/ReactCrop.scss";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();

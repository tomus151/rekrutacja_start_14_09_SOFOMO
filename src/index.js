import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "leaflet/dist/leaflet.css";

import "./index.css";
import store from "./store";
import App from "./app";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

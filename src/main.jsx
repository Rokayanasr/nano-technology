import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';
import { initFlowbite } from "flowbite";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', () => {
    initFlowbite();
  });

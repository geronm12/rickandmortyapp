import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
); //le paso el renderizado de mi app

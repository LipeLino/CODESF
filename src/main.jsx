import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/CODESF" component={App} />
      <App />
    </HashRouter>
  </React.StrictMode >
);
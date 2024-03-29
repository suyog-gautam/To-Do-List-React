// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

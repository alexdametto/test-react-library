import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button, Text } from "./components";

const App = () => {
  return (
    <div>
      <Button />
      <Text />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

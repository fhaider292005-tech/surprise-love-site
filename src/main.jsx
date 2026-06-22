import React from "react";
import { createRoot } from "react-dom/client";
import Surprise from "../surprise.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Surprise />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Component/App.jsx";

import About from "./Component/About.jsx";

import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

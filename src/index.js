import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Artistes from "./pages/artiste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/artistes",
    element: <Artistes/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage.jsx";
import Shop from "./components/Shop.jsx";
import ShoppingPage from "./components/ShoppingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [{ path: ":pageId", element: <ShoppingPage /> }],
  },
  /*
  {
    path: "wishlist",
    element: <Wishlist />
  },
  {
    path: "checkout",
    element: <Checkout />
  }
  */
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

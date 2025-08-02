import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop />},
      { path: "shop/:productId", element: <Product />},
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;

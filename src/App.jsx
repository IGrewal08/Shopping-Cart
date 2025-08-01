import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "/src/components/Header.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  /* In product menu */
  function addToCart(productId, newQuantity) {
    let inCart = false;
    const productData = data.filter((product) => product.id == productId)[0];
    const cartProduct = { ...productData, quantity: newQuantity };

    const newCart = cart.map((item) => {
      if (item.id == productId) {
        inCart = true;
        item.quantity = item.quantity + newQuantity;
      }
      return item;
    });

    (inCart) ? setCart(newCart) : setCart([...cart, cartProduct]);
  }

  /* In cart */
  function removeFromCart() {}

  function editCart() {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(cart);
  return (
    <>
      <Header />
      <Outlet context={{ products: data, addToCart }} />
    </>
  );
}

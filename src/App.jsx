import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer";

export default function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

    inCart ? setCart(newCart) : setCart([...cart, cartProduct]);
    calTotal();
  }

  function removeFromCart(productId) {
    const newCart = cart.filter((item) => item.id != productId);
    setCart(newCart);
    calTotal();
  }

  function editCart(updatedQuantity, productId) {
    const newCart = cart.map((item) => {
      if (item.id == productId) {
        item.quantity = updatedQuantity;
      }
      return item;
    });
    setCart(newCart);
    calTotal();
  }

  function calTotal() {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    });

    setTotalPrice(Math.floor(total * 100) / 100);
  }

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

  return (
    <>
      <Header />
      <Outlet
        context={{
          products: data,
          addToCart,
          cartFunc: { cart, totalPrice, removeFromCart, editCart, calTotal },
        }}
      />
      <Footer />
    </>
  );
}

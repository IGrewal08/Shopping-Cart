import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "/src/components/Header.jsx";

export default function App() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    function addToCart() {

    }

    function removeFromCart() {

    }

    function editCart() {
        
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
            <Outlet context={{ products:data }}/>
        </>
    );
}
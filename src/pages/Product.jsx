import { useParams, useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "/src/styles/Product.module.css";

export default function Product() {
  const { productId } = useParams();
  const { addToCart } = useOutletContext();

  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(type) {
    const currQuantity = quantity;
    if (type === "neg" && quantity > 1) {
      setQuantity(currQuantity - 1);
    } else if (type === "pos") {
      setQuantity(currQuantity + 1);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const json = await data.json();
        setProductData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.productCard}>
        <Link className={styles.return} to="/shop">{"<"} return</Link>
      {productData === null ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <>
          <div className={styles.imageHolder_Product}>
            <img src={productData.image} alt={productData.description}></img>
          </div>
          <div className={styles.productDetails}>
            <h2 className={styles.title}>{productData.title}</h2>
            <p className={styles.desc}>{productData.description}</p>
            <h2 className={styles.price}>${productData.price}</h2>
            <div className={styles.quantitySelector}>
              Quantity:
              <button onClick={() => handleQuantity("neg")}>-</button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={() => handleQuantity("pos")} type="positive">
                +
              </button>
            </div>
            <div className={styles.submitButtons}>
              <Link to="/cart">
                <button onClick={() => addToCart(productId, quantity)}>Checkout</button>
              </Link>
              <Link to="/shop">
                <button onClick={() => addToCart(productId, quantity)}>
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

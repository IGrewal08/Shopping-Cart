import { useOutletContext } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";
import styles from "/src/styles/Cart.module.css";

export default function Cart() {
  const { cartFunc } = useOutletContext();
  const { cart, totalPrice, removeFromCart, editCart, calTotal } = cartFunc;

  calTotal();

  return (
    <div className={styles.cartContainer}>
      {cart.length === 0 ? (
        <div className={styles.noItems}>No Items in Cart!</div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              props={item}
              editCart={editCart}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className={styles.checkout}>
            <div>Total: ${totalPrice}</div>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CartItem({ props, editCart, removeFromCart }) {
  return (
    <div className={styles.cartCard}>
      <div className={styles.imageHolder}>
        <img src={props.image} alt={props.desc}></img>
      </div>
      <div>
        <h2>{props.title}</h2>
        <h2>${props.price}</h2>
      </div>
      <QuantitySelector
        handleQuantity={editCart}
        quantity={props.quantity}
        itemId={props.id}
      />
      <button
        className={styles.deleteButton}
        onClick={() => removeFromCart(props.id)}
      >
        Delete
      </button>
    </div>
  );
}

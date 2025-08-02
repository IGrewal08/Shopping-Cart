import styles from "/src/styles/Product.module.css";

export default function quantitySelector(props) {
  const { handleQuantity, quantity, itemId } = props;

  function setQuantity(type) {
    const currQuantity = quantity;
    if (type === "neg" && quantity > 1) {
      handleQuantity(currQuantity - 1, itemId);
    } else if (type === "pos") {
      handleQuantity(currQuantity + 1, itemId);
    }
  }

  return (
    <div className={styles.quantitySelector}>
      Quantity:
      <button onClick={() => setQuantity("neg")}>-</button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => setQuantity("pos")} type="positive">
        +
      </button>
    </div>
  );
}

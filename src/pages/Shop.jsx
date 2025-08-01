import { useOutletContext, Link } from "react-router-dom";
import styles from "/src/styles/Shop.module.css";

export default function Shop() {
  const { products } = useOutletContext();

  function handleLinkClick() {
    return <Link to="/shop">CLICK THIS</Link>
  }

  return (
    <div className={styles.container}>
      <div className={styles.shopItems}>
        {products.map((item) => (
          <Link to={`${item.id}`} className={styles.products} key={item.id}>
          <ProductCard
            props={item}
            onClick={() => handleLinkClick(item)}
          />
        </Link>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ props, onClick}) {
  return (
    <div className={styles.sampleCard} onClick={onClick}>
      <div className={styles.imageHolder}>
        <img src={props.image} alt={props.desc}></img>
      </div>
      <h2>{props.title}</h2>
      <h2>${props.price}</h2>
    </div>
  );
}

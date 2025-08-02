import { useOutletContext, Link } from "react-router-dom";
import styles from "/src/styles/Shop.module.css";

export default function Shop() {
  const { products } = useOutletContext();
  window.scrollTo(0, 0);
  return (
    <div className={styles.container}>
      <div className={styles.shopItems}>
        {products.map((item) => (
          <Link to={`${item.id}`} className={styles.products} key={item.id}>
            <ProductCard props={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ props }) {
  return (
    <div className={styles.sampleCard}>
      <div className={styles.imageHolder}>
        <img src={props.image} alt={props.desc}></img>
      </div>
      <h2>{props.title}</h2>
      <h2>${props.price}</h2>
    </div>
  );
}

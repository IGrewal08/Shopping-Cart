import { useOutletContext } from "react-router-dom";
import styles from "/src/styles/Shop.module.css";

export default function Shop() {
  const { products } = useOutletContext();
  return (
    <div className={styles.container}>
      <div className={styles.shopItems}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            desc={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ title, desc, image, price}) {
  return (
    <div className={styles.sampleCard}>
      <div className={styles.imageHolder}>
        <img src={image} alt={desc}></img>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

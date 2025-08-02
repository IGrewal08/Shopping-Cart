import { Link, useOutletContext } from "react-router-dom";
import styles from "/src/styles/Home.module.css";

export default function Home() {
  const { products } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.promotionHeader}>
        <div>Get The Best Deals!</div>
      </div>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.deals}>
          {products.slice(0, 6).map((item) => (
            <PreviewCard
              key={item.id}
              desc={item.description}
              image={item.image}
            />
          ))}
        </div>
      )}
      <Link to="/shop" className={styles.shopLink}>
        Shop Now
      </Link>
    </div>
  );
}

function PreviewCard({ desc, image }) {
  return (
    <div className={styles.sampleCard}>
      <div className={styles.imageHolder}>
        <img src={image} alt={desc}></img>
      </div>
    </div>
  );
}

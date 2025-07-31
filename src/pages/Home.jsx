import { Link, useOutletContext } from "react-router-dom";
import styles from "/src/styles/Home.module.css";

export default function Home() {
  const { products } = useOutletContext();

  return (
    <div className={styles.container}>
      <div className={styles.promotionHeader}>
        Shop the best deals!
        <Link to="/shop">Shop Now</Link>
      </div>
      <div className={styles.deals}>
        {products.slice(0, 6).map((item) => (
          <PreviewCard
            key={item.id}
            title={item.title}
            desc={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

function PreviewCard({ title, desc, image }) {
  return (
    <div className={styles.sampleCard}>
      <div className={styles.imageHolder}>
        <img src={image} alt={desc}></img>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

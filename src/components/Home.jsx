import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import styles from "/src/styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);

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
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.promotionHeader}>
          Shop the best deals!
          <Link to="shop">Shop Now!</Link>
        </div>
        <div className={styles.deals}>
            {data.slice(0, 6).map((item) => (
                <PreviewCard
                    key={item.id}
                    title={item.title}
                    desc={item.description}
                    image={item.image}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

function PreviewCard({ title="", desc="", image=""}) {
  return ( 
    <div className={styles.sampleCard}>
        <img src={image} alt={desc}></img>
        <h2>{title}</h2>
    </div>
  );
}

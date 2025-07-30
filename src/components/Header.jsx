import styles from "/src/styles/Header.module.css";

export default function Header() {
    return (
        <header>
            <div className="logo">MyCart</div>
            <div className={styles.pageButtons}>
                <button className={styles.pageButton}>Wishlist</button>
                <button className={styles.pageButton}>Cart</button>
            </div>
        </header>
    );
}
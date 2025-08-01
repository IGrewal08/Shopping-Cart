import { NavLink, Link } from "react-router-dom";
import styles from "/src/styles/Header.module.css";

export default function Header() {
    return (
        <header>
            <Link className={styles.logo}>MyCart</Link>
            <div className={styles.pageButtons}>
                <NavLink to="wishlist" className={styles.pageButton}>Wishlist</NavLink>
                <NavLink to="cart" className={styles.pageButton}>Cart</NavLink>
            </div>
        </header>
    );
}
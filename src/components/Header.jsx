import { NavLink } from "react-router-dom";
import styles from "/src/styles/Header.module.css";

export default function Header() {
    return (
        <header>
            <div className="logo">MyCart</div>
            <div className={styles.pageButtons}>
                <NavLink to="wishlist" className={styles.pageButton}>Wishlist</NavLink>
                <NavLink to="cart" className={styles.pageButton}>Cart</NavLink>
            </div>
        </header>
    );
}
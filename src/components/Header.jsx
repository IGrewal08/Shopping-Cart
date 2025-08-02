import { NavLink, Link } from "react-router-dom";
import styles from "/src/styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <Link className={styles.logo}>
        <img src="src/assets/Shopping-Cart-logo-main.png" alt="logo" />
      </Link>
      <div className={styles.pageButtons}>
        <NavLink to="shop" className={styles.pageButton}>
          Shop
        </NavLink>
        <NavLink to="cart" className={styles.pageButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-handbag-icon lucide-handbag"
          >
            <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
            <path d="M8 11V6a4 4 0 0 1 8 0v5" />
          </svg>
          <div>Cart</div>
        </NavLink>
      </div>
    </header>
  );
}

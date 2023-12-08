import { FiHeart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import products from "../db/data";

import styles from "./Nav.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
const Nav = () => {
  const { setProducts } = useContext(ProductsContext);

  const handleFilter = (e) =>
    setProducts(
      products.filter(
        (product) =>
          product.title
            .toLocaleLowerCase()
            .indexOf(e.target.value.toLocaleLowerCase()) !==
          -1
      )
    );

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Enter your search shoes."
          onChange={handleFilter}
        />
      </div>

      <div className={styles.profile_container}>
        <a href="#">
          <FiHeart className={styles.nav_icons} />
        </a>
        <a href="#">
          <AiOutlineShoppingCart
            className={styles.nav_icons}
          />
        </a>
        <a href="#">
          <AiOutlineUserAdd className={styles.nav_icons} />
        </a>
      </div>
    </nav>
  );
};
export default Nav;

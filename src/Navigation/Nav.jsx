import { FiHeart } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Enter your search shoes."
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

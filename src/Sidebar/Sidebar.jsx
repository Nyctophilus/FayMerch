import styles from "./Sidebar.module.css";
import { BsCart3 } from "react-icons/bs";

import Gategory from "./Category/Gategory";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <section className={styles.sidebar}>
        <div className={styles.logo_container}>
          <BsCart3 className={styles.cart_icon} />
        </div>

        <Gategory />
        <Price />
        <Colors />
      </section>
    </>
  );
};
export default Sidebar;

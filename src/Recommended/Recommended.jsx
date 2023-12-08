import { useContext } from "react";
import styles from "./Recommended.module.css";
import { ProductsContext } from "../../ProductsContext";

const Recommended = () => {
  const { handleBrandChange } = useContext(ProductsContext);

  return (
    <div>
      <h2 className={styles.Recommended_title}>
        Recommended
      </h2>
      <div className={styles.Recommended_btns}>
        <button onClick={() => handleBrandChange("all")}>
          All Products
        </button>
        <button onClick={() => handleBrandChange("Nike")}>
          Nike
        </button>
        <button onClick={() => handleBrandChange("Adidas")}>
          Adidas
        </button>
        <button onClick={() => handleBrandChange("Puma")}>
          Puma
        </button>
        <button onClick={() => handleBrandChange("Vans")}>
          Vans
        </button>
      </div>
    </div>
  );
};
export default Recommended;

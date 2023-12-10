import { useContext } from "react";
import styles from "../Sidebar/Category/Gategory.module.css";
import { ProductsContext } from "../../ProductsContext";

const Input = ({ value, filterName, name }) => {
  const { handleCategoryChange } =
    useContext(ProductsContext);

  const handleChange = () =>
    handleCategoryChange(value, filterName, name);

  return (
    <label className={styles.sidebar_label_container}>
      <input
        type="radio"
        name={name}
        onClick={handleChange}
        value={value}
      />
      <span
        className={`${styles.checkmark} ${
          name === "color" && styles[filterName]
        }`}
      ></span>
      <span>{filterName}</span>
    </label>
  );
};
export default Input;

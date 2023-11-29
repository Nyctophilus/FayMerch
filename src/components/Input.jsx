import styles from "../Sidebar/Category/Gategory.module.css";

const Input = ({ filterName }) => {
  return (
    <label className={styles.sidebar_label_container}>
      <input type="radio" name="test" />
      <span className={styles.checkmark}></span>
      <span>{filterName}</span>
    </label>
  );
};
export default Input;

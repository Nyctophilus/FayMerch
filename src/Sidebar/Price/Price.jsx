import styles from "../Category/Gategory.module.css";

const Price = () => {
  return (
    <div className="ml">
      <h2
        className={styles.sidebar_title}
        style={{ marginTop: "20px", marginLeft: "15px" }}
      >
        Price
      </h2>

      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>all</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>$0 - $50</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>$50 - $100</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>$100 - $150</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>over $150</span>
      </label>
    </div>
  );
};
export default Price;

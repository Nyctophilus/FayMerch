import styles from "../Category/Gategory.module.css";

// .all{background: linear-gradient(blue, crimson)}
const Colors = () => {
  return (
    <div>
      <h2
        className={styles.sidebar_title}
        style={{ marginTop: "2rem" }}
      >
        Colors
      </h2>

      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>all</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>black</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>Blue</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>red</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>white</span>
      </label>
      <label className={styles.sidebar_label_container}>
        <input type="radio" name="test2" />
        <span className={styles.checkmark}></span>
        <span>green</span>
      </label>
    </div>
  );
};

export default Colors;

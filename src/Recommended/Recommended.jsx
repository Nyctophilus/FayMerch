import styles from "./Recommended.module.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className={styles.Recommended_title}>
          Recommended
        </h2>
        <div className={styles.Recommended_btns}>
          <button>All Products</button>
          <button>Nike</button>
          <button>Adidas</button>
          <button>Puma</button>
          <button>Vans</button>
        </div>
      </div>
    </>
  );
};
export default Recommended;

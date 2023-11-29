import styles from "../products/Products.module.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <section className={styles.card}>
      <img
        className={styles.card_img}
        src="https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg"
        alt="shoe"
      />
      <div className={styles.card_details}>
        <h3 className={styles.card_title}>shoe</h3>
        <section className={styles.card_reviews}>
          <AiFillStar className={styles.rating_start} />
          <AiFillStar className={styles.rating_start} />
          <AiFillStar className={styles.rating_start} />
          <AiFillStar className={styles.rating_start} />
          <span className={styles.total_reviews}>4</span>
        </section>

        <section className={styles.card_price}>
          <div className={styles.price}>
            <del>$300</del> <span>$200</span>
          </div>
          <div>
            <BsFillBagHeartFill
              className={styles.bag_icon}
            />
          </div>
        </section>
      </div>
    </section>
  );
};
export default Card;

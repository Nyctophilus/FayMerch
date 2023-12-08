import { Fragment } from "react";
import styles from "../products/Products.module.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import { RiStarLine } from "react-icons/ri";

const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const totalReveiws = Math.ceil(
    (reviews.match(/\d+/g) / 1500) * 5
  );

  return (
    <section className={styles.card}>
      <img
        className={styles.card_img}
        src={img}
        alt={title}
      />
      <div className={styles.card_details}>
        <h3 className={styles.card_title}>{title}</h3>
        <section className={styles.card_reviews}>
          {[...Array(totalReveiws)].map((_, i) => (
            <Fragment key={i}>{star}</Fragment>
          ))}
          {[...Array(5 - totalReveiws)].map((_, i) => (
            <RiStarLine key={i} />
          ))}

          <span className={styles.total_reviews}>
            {totalReveiws}
          </span>
        </section>

        <section className={styles.card_price}>
          <div className={styles.price}>
            <del>{prevPrice}</del> <span>{newPrice}</span>
          </div>
          <div>
            <BsFillBagHeartFill
              className={styles.bag_icon}
            />
          </div>
        </section>
      </div>
      <hr />
    </section>
  );
};
export default Card;

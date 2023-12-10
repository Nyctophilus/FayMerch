import styles from "../products/Products.module.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import { RiStarLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const totalReveiws = Math.ceil(
    (reviews.match(/\d+/g) / 1500) * 5
  );

  return (
    <motion.article
      className={styles.card}
      layout
      key={title}
      transition={{ duration: 0.5 }}
    >
      <img
        className={styles.card_img}
        src={img}
        alt={title}
      />
      <div className={styles.card_details}>
        <h3 className={styles.card_title}>{title}</h3>
        <section className={styles.card_reviews}>
          {[...Array(totalReveiws)].map((_, i) => (
            <AiFillStar
              className={styles.rating_start}
              key={i}
            />
          ))}
          {[...Array(5 - totalReveiws)].map((_, i) => (
            <RiStarLine
              className={styles.rating_start}
              key={i}
            />
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
    </motion.article>
  );
};
export default Card;

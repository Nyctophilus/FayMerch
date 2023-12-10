import styles from "./Products.module.css";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import { AnimatePresence, motion } from "framer-motion";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <motion.section
      className={styles.card_container}
      layout
    >
      <AnimatePresence>
        {products.map((product) => (
          <Card
            key={Date.now() * Math.random()}
            {...product}
          />
        ))}
      </AnimatePresence>
    </motion.section>
  );
};
export default Products;

import styles from "./Products.module.css";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className={styles.card_container}>
      {products.map((product) => (
        <Card
          key={Date.now() * Math.random()}
          {...product}
        />
      ))}
    </section>
  );
};
export default Products;

import { memo, useContext, useEffect } from "react";
import styles from "../Sidebar/Category/Gategory.module.css";
import { CategoryContext } from "../../CategoryContext";
import { ProductsContext } from "../../ProductsContext";
import data from "../db/data";

const Input = ({ filterName, name }) => {
  const { category, editCategory } =
    useContext(CategoryContext);

  const { products, setProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    if (category && Object.values(category).includes("all"))
      setProducts(data);

    if (
      category?.category &&
      category?.category !== "all"
    ) {
      setProducts(
        data.filter(
          (product) =>
            product.category === category.category
        )
      );
    }

    if (category?.price && category?.price !== "all") {
      setProducts(
        data.filter(
          (product) =>
            product.newPrice <=
            category.price.split("$")[
              category.price.split("$").length - 1
            ]
        )
      );
    }

    if (category?.color && category?.color !== "all") {
      setProducts(
        data.filter(
          (product) => product.color === category.color
        )
      );
    }
  }, [category]);

  const handleChange = (e) => {
    editCategory((preVal) => {
      return {
        ...preVal,
        [e.target.name]: filterName,
      };
    });
  };

  //   console.log(products);
  //   console.log(category);

  return (
    <label className={styles.sidebar_label_container}>
      <input
        type="radio"
        name={name}
        onClick={handleChange}
      />
      <span className={styles.checkmark}></span>
      <span>{filterName}</span>
    </label>
  );
};
export default memo(Input);

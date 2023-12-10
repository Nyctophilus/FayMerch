import { createContext, useEffect, useState } from "react";
import data from "./src/db/data";

export const ProductsContext = createContext();

const ConsumeProducts = ({ children }) => {
  const [products, setProducts] = useState(data);

  const [selectedTab, setSelectedTab] = useState({
    category: "all",
  });
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [query, setQuery] = useState("");

  const handleCategoryChange = (value, filterName, name) =>
    setSelectedTab({ [name]: value });

  const handleQuery = (e) => setQuery(e.target.value);

  const handleBrandChange = (brand) =>
    setSelectedBrand(brand);

  useEffect(() => {
    if (Object.entries(selectedTab)[0][1] === "all") {
      setProducts(data);
      return;
    }

    if (Object.entries(selectedTab)[0][0] === "price") {
      setProducts(
        data.filter(
          (product) =>
            parseInt(product.newPrice) <=
              Object.entries(selectedTab)[0][1] &&
            parseInt(product.newPrice) >
              Object.entries(selectedTab)[0][1] - 50
        )
      );

      return;
    }

    selectedTab &&
      Object?.entries(selectedTab)[0][1] !== "all" &&
      setProducts(
        data.filter(
          (product) =>
            product[Object.entries(selectedTab)[0][0]] ===
            Object.entries(selectedTab)[0][1]
        )
      );
  }, [selectedTab]);

  useEffect(() => {
    query &&
      setProducts(
        data.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        )
      );
  }, [query]);

  useEffect(() => {
    if (selectedBrand === "all") {
      setProducts(data);
      return;
    }

    selectedBrand &&
      setProducts(
        data.filter(
          (product) => product.company === selectedBrand
        )
      );
  }, [selectedBrand]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleCategoryChange,
        handleBrandChange,
        handleQuery,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ConsumeProducts;

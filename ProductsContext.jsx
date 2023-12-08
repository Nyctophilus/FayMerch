import { createContext, useState } from "react";
import data from "./src/db/data";

export const ProductsContext = createContext();

const ConsumeProducts = ({ children }) => {
  const [products, setProducts] = useState(data);
  return (
    <ProductsContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ConsumeProducts;

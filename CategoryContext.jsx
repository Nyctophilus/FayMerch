import { createContext, useState } from "react";

export const CategoryContext = createContext(null);

const ConsumeCategory = ({ children }) => {
  const [category, setCategory] = useState(null);

  const editCategory = (val) => setCategory(val);

  return (
    <CategoryContext.Provider
      value={{ category, editCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default ConsumeCategory;

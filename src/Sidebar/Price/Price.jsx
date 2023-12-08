import Input from "../../components/Input";
import styles from "../Category/Gategory.module.css";

const Price = () => {
  return (
    <div>
      <h2
        className={styles.sidebar_title}
        style={{ marginTop: "1.2rem" }}
      >
        Price
      </h2>

      <Input filterName={"all"} name={"price"} />
      <Input filterName={"$0 - $50"} name={"price"} />
      <Input filterName={"$50 - $100"} name={"price"} />
      <Input filterName={"$100 - $150"} name={"price"} />
      <Input filterName={"over $150"} name={"price"} />
    </div>
  );
};
export default Price;

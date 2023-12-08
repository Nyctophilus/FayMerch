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

      <Input
        value={"all"}
        filterName={"all"}
        name={"price"}
      />
      <Input
        value={50}
        filterName={"$0 - $50"}
        name={"price"}
      />
      <Input
        value={100}
        filterName={"$50 - $100"}
        name={"price"}
      />
      <Input
        value={150}
        filterName={"$100 - $150"}
        name={"price"}
      />
      <Input
        value={200}
        filterName={"over $150"}
        name={"price"}
      />
    </div>
  );
};
export default Price;

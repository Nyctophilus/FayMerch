import Input from "../../components/Input";
import styles from "./Gategory.module.css";

const Gategory = () => {
  return (
    <div>
      <h2 className={styles.sidebar_title}>Category</h2>

      <div>
        <Input filterName={"all"} />
        <Input filterName={"sneakers"} />
        <Input filterName={"flats"} />
        <Input filterName={"sandals"} />
        <Input filterName={"heels"} />
      </div>
    </div>
  );
};
export default Gategory;

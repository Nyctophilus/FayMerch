import Input from "../../components/Input";
import styles from "./Gategory.module.css";

const Gategory = () => {
  return (
    <div>
      <h2 className={styles.sidebar_title}>Category</h2>

      <div>
        <Input filterName={"all"} name={"category"} />
        <Input filterName={"sneakers"} name={"category"} />
        <Input filterName={"flats"} name={"category"} />
        <Input filterName={"sandals"} name={"category"} />
        <Input filterName={"heels"} name={"category"} />
      </div>
    </div>
  );
};
export default Gategory;

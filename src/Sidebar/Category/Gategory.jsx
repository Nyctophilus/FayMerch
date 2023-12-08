import Input from "../../components/Input";
import styles from "./Gategory.module.css";

const Gategory = () => {
  return (
    <div>
      <h2 className={styles.sidebar_title}>Category</h2>

      <div>
        <Input
          value={"all"}
          filterName={"all"}
          name={"category"}
        />
        <Input
          value={"sneakers"}
          filterName={"sneakers"}
          name={"category"}
        />
        <Input
          value={"flats"}
          filterName={"flats"}
          name={"category"}
        />
        <Input
          value={"sandals"}
          filterName={"sandals"}
          name={"category"}
        />
        <Input
          value={"heels"}
          filterName={"heels"}
          name={"category"}
        />
      </div>
    </div>
  );
};
export default Gategory;

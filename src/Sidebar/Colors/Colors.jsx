import Input from "../../components/Input";
import styles from "../Category/Gategory.module.css";

// .all{background: linear-gradient(blue, crimson)}
const Colors = () => {
  return (
    <div>
      <h2
        className={styles.sidebar_title}
        style={{ marginTop: "1.2rem" }}
      >
        Colors
      </h2>

      <Input
        value={"all"}
        filterName={"all"}
        name={"color"}
      />
      <Input
        value={"black"}
        filterName={"black"}
        name={"color"}
      />
      <Input
        value={"blue"}
        filterName={"blue"}
        name={"color"}
      />
      <Input
        value={"red"}
        filterName={"red"}
        name={"color"}
      />
      <Input
        value={"white"}
        filterName={"white"}
        name={"color"}
      />
      <Input
        value={"green"}
        filterName={"green"}
        name={"color"}
      />
    </div>
  );
};

export default Colors;

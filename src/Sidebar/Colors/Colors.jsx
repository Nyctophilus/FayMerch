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

      <Input filterName={"all"} name={"color"} />
      <Input filterName={"black"} name={"color"} />
      <Input filterName={"blue"} name={"color"} />
      <Input filterName={"red"} name={"color"} />
      <Input filterName={"white"} name={"color"} />
      <Input filterName={"green"} name={"color"} />
    </div>
  );
};

export default Colors;

import { types } from "../../../../data/products-type";
import styles from "./Separator.module.scss";

const Separator = ({tab, setTab}) => {

  return (
    <div className={styles.column__separator}>
      {types.map((type) => {
        return (
          <div
            key={type.id}
            className={
              tab === type.id
                ? styles.separator__active
                : styles.separator__inactive
            }
            onClick={() => setTab(type.id)}
          ></div>
        );
      })}
    </div>
  );
};

export default Separator;

import Image from "next/image";
import { types } from "../../../data/products-type";
import styles from "./Tabs.module.scss";

const Tabs = ({ tab, setTab }) => {
  return (
    <div className={styles.column__tab}>
      {types.map((type) => {
        return (
          <div
            key={type.id}
            className={
              tab === type.id ? styles.tab__active : styles.tab__inactive
            }
            onClick={() => setTab(type.id)}
          >
            <>
              <div className={styles.tab__btn}>
                <figure className={styles.tab__img}>
                  <Image
                    src={type.img}
                    alt={type.title}
                    height={30}
                    width={30}
                  />
                </figure>
                <p className={styles.tab__title}>{type.title}</p>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
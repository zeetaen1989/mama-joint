import { useState } from "react";
import { Tabs } from "../../elements";
import CategoryItems from "../CategoryItems/CategoryItems";
import styles from "./Category.module.scss";

const ProductType = () => {

	const [tab, setTab] = useState(1);

  return (
    <div className={styles.container__column}>
      <Tabs tab={tab} setTab={setTab} />
      <CategoryItems tab={tab} setTab={setTab} />
    </div>
  );
};

export default ProductType;
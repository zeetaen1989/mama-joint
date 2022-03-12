import Image from "next/image";
import { useState } from "react";
import { Tabs, Separator } from "../../elements";
import styles from "./ProductTypes.module.scss";

const ProductType = () => {

	const [tab, setTab] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.container__column}>
        <Tabs tab={tab} setTab={setTab} />
        <Separator tab={tab} setTab={setTab} />
      </div>
    </div>
  );
};

export default ProductType;

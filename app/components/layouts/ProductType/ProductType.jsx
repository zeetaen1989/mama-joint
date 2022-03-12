import Image from "next/image";
import { useState } from "react";
import { Tabs, Separator } from "../../elements";
import styles from "./ProductTypes.module.scss";

const ProductType = () => {

	const [tab, setTab] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image src="/images/leaf2.png" alt="Leaf" width={100} height={50} />
      </div>
      <div className={styles.container__column}>
        <Tabs tab={tab} setTab={setTab} />
        <Separator tab={tab} setTab={setTab} />
      </div>
    </div>
  );
};

export default ProductType;

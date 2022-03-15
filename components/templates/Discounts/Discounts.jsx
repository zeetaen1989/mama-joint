import Image from "next/image";
import styles from "./Discounts.module.scss";

const Discounts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__block}>
        <h3>Get Special Discounts</h3>
        <div className={styles.block__img}>
          <Image src="/images/shape.png" alt="shape" height={10} width={100} />
        </div>
        <p>
          Input email address and complete your subscription to get our special
          offer.
        </p>
        <form className={styles.block__input}>
          <input type="email" name="email" aria-label="email address" id="email" required />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Discounts;

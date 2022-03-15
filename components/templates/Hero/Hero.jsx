import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__one}>
        <div className={styles.column__one}>
          <section className={styles.row__one}>
            <p className={styles.desc}>Now taking online orders</p>
            <h1 className={styles.title}>kebabs</h1>
            <p className={styles.info}>
              Restaurant style Yogurt Mint Sauce is delicious dip which is quick
              and easy to. This is a standard Indian mint chutney served with
              poppadums along with mint and lemon.
            </p>
          </section>
          <section className={styles.row__two}>
            <button className={styles.btn__cart}>Add To Cart</button>
            <button className={styles.btn__book}>Book a Table</button>
          </section>
          <section className={styles.row__three}>
            <div className={styles.lunch}>
              <h4>Lunch</h4>
              <time className={styles.time}>1:00 - 3:00pm</time>
            </div>
            <div className={styles.dinner}>
              <h4>Dinner</h4>
              <time className={styles.time}>7:00 - 10:00pm</time>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.container__two}>
        <section className={styles.column__two}>
          <span className={styles.price}>$4.97</span>
          <figure className={styles.img__top}>
            <Image
              src="/images/leaves-overlay.png"
              width={600}
              height={450}
              alt="Mint Leaves"
            />
          </figure>
          <figure className={styles.img__bottom}>
            <Image
              src="/images/hero-img.png"
              width={500}
              height={540}
              alt="Kebabs"
              priority
            />
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Hero;
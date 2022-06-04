import Image from "next/image";
import styles from "./Hero.module.scss";
import { hero } from "../../../data/hero";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__one}>
        <div className={styles.column__one}>
          <section className={styles.row__one}>
            <p className={styles.announcement}>Now taking online orders</p>
            {hero.map((item) => {
              const { id, title, description } = item;

              return (
                <article key={id}>
                  <h1 className={styles.title}>{title}</h1>
                  <p className={styles.info}>{description}</p>
                </article>
              );
            })}
          </section>
          <section className={styles.row__two}>
            <button className={styles.btn__cart}>Add To Cart</button>
            <button className={styles.btn__book}>Book a Table</button>
          </section>
          <section className={styles.row__three}>
            <div className={styles.lunch}>
              <h4>Lunch</h4>
              <p className={styles.time}>
                <time dateTime="13:00">1:00</time> -{" "}
                <time dateTime="13:00">3:00pm</time>
              </p>
            </div>
            <div className={styles.dinner}>
              <h4>Dinner</h4>
              <p className={styles.time}>
                <time dateTime="17:00">7:00</time> -{" "}
                <time dateTime="17:00">10:00pm</time>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.container__two}>
        <section className={styles.column__two}>
          <figure className={styles.img__top}>
            <Image
              src="/images/leaves-overlay.png"
              width={600}
              height={450}
              alt="Mint Leaves"
            />
          </figure>
          <figure className={styles.img__bottom}>
            {hero.map((product) => (
              <div key={product.id}>
                <span className={styles.price}>${product.price}</span>
                <Image
                  src={product.img}
                  width={500}
                  height={540}
                  alt="Kebabs"
                  priority
                />
              </div>
            ))}
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Hero;

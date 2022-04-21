import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import { hero } from "../../../data/hero";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(hero);

  useEffect(() => {
    const lastIndex = products.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, products]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className={styles.container}>
      <div className={styles.container__one}>
        <div className={styles.column__slide}>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
          <span className={styles.slide__dot}></span>
        </div>
      </div>
      <div className={styles.container__two}>
        <div className={styles.column__one}>
          <section className={styles.row__one}>
            <p className={styles.announcement}>Now taking online orders</p>
            {products.map((item, itemIndex) => {
              const { id, title, description } = item;

              let position = "nextSlide";

              if (itemIndex === index) {
                position = "currentSlide";
              }
              if (
                itemIndex === index - 1 ||
                (itemIndex === item.length - 1 && index === 0)
              ) {
                position = "lastSlide";
              }

              return (
                <article className={position} key={id}>
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
              <time className={styles.time}>1:00 - 3:00pm</time>
            </div>
            <div className={styles.dinner}>
              <h4>Dinner</h4>
              <time className={styles.time}>7:00 - 10:00pm</time>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.container__three}>
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
            {products.map((product) => (
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

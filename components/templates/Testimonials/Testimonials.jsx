import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonial } from "../../../data/testimonials";
import { Ratings } from "../../elements";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(testimonial);

  useEffect(() => {
    const lastIndex = data.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

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
      <section className={styles.container__header}>
        <h3>Testimonials</h3>
        <h1>What Are They Saying</h1>
        <figure className={styles.header__img}>
          <Image src="/images/shape.png" alt="shape" height={20} width={180} />
        </figure>
      </section>
      <section className={styles.container__card}>
        {testimonial.map((item, itemIndex) => {
          const { id, img, ratings, location, name, designation, message } =
            item;

          let cards = "next__slide";

          if (itemIndex === index) {
            cards = "active__slide";
          }
          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === item.length - 1)
          ) {
            cards = "last__slide";
          }

          return (
            <article className={styles.cards} key={id}>
              <figure className={styles.card__img}>
                <Image src={img} alt={name} height={300} width={300} />
              </figure>
              <div className={styles.card__info}>
                <h3>{name}</h3>
                <h5>{designation}</h5>
                <span>{location}</span>
                <Ratings rating={ratings} />
                <p>
                  <small>{message}</small>
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Testimonials;

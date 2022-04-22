import Image from "next/image";
import { testimonial } from "../../../data/testimonials";
import { Ratings } from "../../elements";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
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

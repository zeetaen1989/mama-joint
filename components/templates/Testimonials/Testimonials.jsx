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
        {testimonial.map((item) => {
          return (
            <div className={styles.cards} key={item.id}>
              <figure className={styles.card__img}>
                <Image src={item.img} alt={item.name} height={300} width={300} />
              </figure>
              <section className={styles.card__info}>
                <h3>{item.name}</h3>
                <h5>{item.designation}</h5>
                <span>{item.location}</span>
                <Ratings rating={item.ratings} />
                <p><small>{item.message}</small></p>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Testimonials;
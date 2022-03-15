import Image from "next/image";
import styles from "./PopularProducts.module.scss";
import { products } from "../../../data/products-popular";
import { Ratings } from "../../elements";

const PopularProducts = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.container__img}>
        <Image src="/images/leaf1.png" alt="leaf" width={100} height={100} />
      </figure>
      <section className={styles.container__header}>
        <h3>Online Store</h3>
        <h1>Popular Products</h1>
        <figure className={styles.header__img}>
          <Image src="/images/shape.png" alt="shape" width={150} height={20} />
        </figure>
      </section>
      <section className={styles.container__products}>
        {products.map((product) => {
          return (
            <div className={styles.products__list} key={product.id}>
              <figure className={styles.list__img}>
                <Image
                  key={product.id}
                  src={product.img}
                  height={200}
                  width={210}
                  alt={product.title}
                />
              </figure>
              <Ratings rating={product.ratings} />
              <p className={styles.list__category}>{product.category}</p>
              <h2 className={styles.list__title}>{product.title}</h2>
              <button className={styles.list__btn}>Add to Cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PopularProducts;
import Image from "next/image";
import { menu } from "../../../../data/products-menu";
import Ratings from "../../elements/Ratings/Ratings";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdKeyboardArrowRight } from "react-icons/md";
import styles from "./PopularMenu.module.scss";
import Link from "next/link";

const PopularMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Image src="/images/leaf3.png" alt="leaf" width={60} height={150} />
      </div>
      <div className={styles.container__header}>
        <h3>Popular Menu</h3>
        <h1>Amazing Food Served With Delicacy</h1>
        <div className={styles.header__img}>
          <Image src="/images/shape.png" alt="shape" width={150} height={20} />
        </div>
      </div>
      <div className={styles.container__products}>
        {menu.map((item) => {
          return (
            <div key={item.id} className={styles.products__item}>
              <div className={styles.products__img}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={150}
                  height={150}
                />
              </div>
              <Ratings rating={item.ratings} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.item__bottom}>
                <span>${item.price}</span>
                <div className={styles.right}>
                  <div className={styles.icon__heart}>
                    <FaRegHeart />
                  </div>
                  <div className={styles.icon__cart}>
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.container__btn}>
        <div className={styles.btn__link}>
          <Link href="/menu" passHref >
            See All Menu
          </Link>
          <span className={styles.icon}>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;

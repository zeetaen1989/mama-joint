import Image from "next/image";
import styles from "./MobileApp.module.scss";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  MdOutlineShoppingCart,
  MdHome,
  MdNotifications,
} from "react-icons/md";
import { FaHeart, FaShoppingBag, FaGooglePlay, FaApple } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import {
  mobileProductsRow,
  mobileProductsCol,
} from "../../../../data/products-mobile";
import { Ratings } from "../../elements";

const MobileApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__mobile}>
        <span className={styles.mobile__btn}></span>
        <div className={styles.mobile__img}>
          <div className={styles.img__one}>
            <Image src="/images/leaf4.png" alt="Leaf" height={35} width={70} />
          </div>
          <div className={styles.img__two}>
            <Image src="/images/leaf2.png" alt="Leaf" height={15} width={30} />
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.mobile__header}>
            <span className={styles.header__link}>
              <BiMenuAltLeft />
            </span>
            <span className={styles.header__cart}>
              <MdOutlineShoppingCart />
            </span>
          </div>
          <h2>Yannal Restaurant</h2>
          <div className={styles.mobile__products}>
            <div className={styles.products__row}>
              {mobileProductsRow.map((item) => {
                return (
                  <div className={styles.row__items} key={item.id}>
                    <div className={styles.items__img}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={110}
                        width={110}
                      />
                    </div>
                    <>
                      <div className={styles.items__info}>
                        <h5>{item.title}</h5>
                        <Ratings rating={item.ratings} />
                        <div className={styles.info__bottom}>
                          <span>${item.price}</span>
                          <>
                            <div className={styles.bottom__heart}>
                              <FaHeart />
                            </div>
                          </>
                        </div>
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
            <div className={styles.products__column}>
              {mobileProductsCol.map((item) => {
                return (
                  <div key={item.id} className={styles.column__items}>
                    <div className={styles.items__img}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={110}
                        width={110}
                      />
                    </div>
                    <>
                      <div className={styles.items__info}>
                        <h5>{item.title}</h5>
                        <Ratings rating={item.ratings} />
                        <div className={styles.info__bottom}>
                          <span>${item.price}</span>
                          <>
                            <div className={styles.bottom__heart}>
                              <FaHeart />
                            </div>
                          </>
                        </div>
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.mobile__menu}>
            <div className={styles.menu__left}>
              <a href="#" className={styles.left__item}>
                <MdHome />
                <p className={styles.item__text}>Home</p>
              </a>
              <a href="#" className={styles.left__item}>
                <MdNotifications />
                <p className={styles.item__text}>Notification</p>
              </a>
            </div>
            <a href="#" className={styles.menu__center}>
              <FaShoppingBag />
            </a>
            <div className={styles.menu__right}>
              <a href="#" className={styles.right__item}>
                <RiHeartFill />
                <p className={styles.item__text}>Favorites</p>
              </a>
              <a href="#" className={styles.right__item}>
                <TiUser />
                <p className={styles.item__text}>User</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container__info}>
        <h3>Download Our App</h3>
        <h1>It&apos;s all here.<br />
          All in one app.</h1>
        <p>Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
        <div className={styles.info__btn}>
          <a href="https://apple.com" className={styles.btn__apple}>
            <div className={styles.btn__icon}>
              <FaApple />
            </div>
            <div className={styles.apple__text}>
              <p>Available on the</p>
              <span>App Store</span>
            </div>
          </a>
          <a href="https://google.com" className={styles.btn__google}>
            <div className={styles.btn__icon}>
              <FaGooglePlay />
            </div>
            <div className={styles.google__text}>
              <p>Get it on</p>
              <span>Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

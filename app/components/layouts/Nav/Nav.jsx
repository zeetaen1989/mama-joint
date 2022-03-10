import Image from "next/image";
import {
  MdSearch,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
  MdRestaurantMenu,
} from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Image src="/images/logo.svg" alt="Logo" height={30} width={100} />
        </div>
        <nav className={styles.header__center}>
          <ul>
            <li>
              <a href="#">Menu</a>
              <a href="#">About Us</a>
              <a href="#">Our Specials</a>
              <a href="#">Our Locations</a>
              <a href="#">Our Chef</a>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <MdSearch />
          <MdOutlineShoppingCart />
          <MdOutlineAccountCircle />
          <div className={styles.header__menu}>
            <div className={styles.header__menu__open}>
              <CgMenuHotdog />
            </div>
            <div className={styles.header__menu__close}>
              <MdRestaurantMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;

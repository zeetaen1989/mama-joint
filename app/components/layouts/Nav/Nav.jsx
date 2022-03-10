import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdSearch,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
  MdRestaurantMenu,
} from "react-icons/md";
import { CgMenuHotdog } from "react-icons/cg";
import styles from "./Nav.module.scss";

const Nav = () => {
  
  const iconStyle = {
    color: "#2A333E",
    fontSize: "1.5rem",
    cursor: "pointer",
    _hover: {
      color: "#000000",
    }
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/" passHref>
            <Image src="/images/logo.svg" alt="Logo" height={30} width={100} />
          </Link>
        </div>
        <nav className={styles.header__center}>
          <ul>
            <li>
              {/* {linkItems.map(item => {
                <a
                  key={item}
                  href={`/#${item.replace(/\s+/g, "").toLowerCase()}`}
                >
                  {item}
                </a>;
              })} */}
              <Link href="#menu" passHref>Menu</Link>
              <Link href="#about" passHref>About Us</Link>
              <Link href="#specials" passHref>Our Specials</Link>
              <Link href="#locations" passHref>Our Locations</Link>
              <Link href="#chef" passHref>Our Chef</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__right}>
          <MdSearch style={iconStyle} />
          <MdOutlineShoppingCart style={iconStyle} />
          <MdOutlineAccountCircle style={iconStyle} />
          <div className={styles.header__menu}>
            <div className={styles.header__menu__open}>
              <CgMenuHotdog style={iconStyle} />
            </div>
            <div className={styles.header__menu__close}>
              <MdRestaurantMenu style={iconStyle} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;

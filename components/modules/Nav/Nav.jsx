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

const iconStyle = {
  color: "#2A333E",
  fontSize: "1.5rem",
  cursor: "pointer",
  _hover: {
    color: "#000000",
  },
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openMenu = (
    <CgMenuHotdog
      style={iconStyle}
      className={styles.header__menu__open}
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMenu = (
    <MdRestaurantMenu
      style={iconStyle}
      className={styles.header__menu__close}
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const linkItems = ["About Us", "Our Specials", "Our Locations", "Our Chef"];

  return (
    <>
      <header className={styles.header}>
        <figure className={styles.header__left}>
          <Link href="/" passHref>
            <Image src="/images/logo.png" alt="Logo" height={60} width={100} />
          </Link>
        </figure>
        <nav className={styles.header__center} aria-label="primary-navigation">
          <ul>
            <li>
              {linkItems.map((item) => {
                return (
                  <Link
                    href={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                    key={item}
                  >
                    {item}
                  </Link>
                );
              })}
            </li>
          </ul>
        </nav>
        <section className={styles.header__right}>
          <MdSearch style={iconStyle} />
          <MdOutlineShoppingCart style={iconStyle} />
          <MdOutlineAccountCircle style={iconStyle} />
          <div className={styles.header__menu}>
            {open ? closeMenu : openMenu}
          </div>
        </section>
      </header>
    </>
  );
};

export default Nav;

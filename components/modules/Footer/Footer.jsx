import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCopyright,
} from "react-icons/fa";
import { MdLocationPin, MdPhone, MdMailOutline } from "react-icons/md";
import { Discounts } from "../../templates";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <Discounts />
        <div className={styles.container__footer}>
          <div className={styles.footer__logo}>
            <div className={styles.logo__img}>
              <Image
                src="/images/logo-white.png"
                alt="logo"
                height={80}
                width={150}
              />
            </div>
            <div className={styles.logo__links}>
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className={styles.footer__info}>
            <div className={styles.info__contact}>
              <h3>Contact</h3>
              <div className={styles.contact__location}>
                <MdLocationPin />
                <p>F1 - 320 Jeff Heights, Main Blvd, New York, USA</p>
              </div>
              <div className={styles.contact__phone}>
                <MdPhone />
                <span>+01 256 145 789</span>
              </div>
              <div className={styles.contact__mail}>
                <MdMailOutline />
                <a href="mailto:support@yannal.com">support@yannal.com</a>
              </div>
            </div>
            <div className={styles.info__support}>
              <h3>Support</h3>
              <div className={styles.support__links}>
                <a href="#">FAQ</a>
                <a href="#">Shipping & Returns</a>
                <a href="#">Contact Us</a>
                <a href="#">Our Partners</a>
              </div>
            </div>
            <div className={styles.info__items}>
              <h3>Info</h3>
              <div className={styles.items__list}>
                <a href="#">Dates</a>
                <a href="#">Parties</a>
                <a href="#">Birthdays</a>
                <a href="#">Menu</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container__copyright}>
          <FaCopyright />
          <p>2021 Yannal Restaurant</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

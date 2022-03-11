import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__one}>
                <div className={styles.column__one}>
                    <div className={styles.row__one}>
                        <p className={styles.desc}>Now taking online orders</p>
                        <h1 className={styles.title}>kebabs</h1>
                        <p className={styles.info}>
                            Restaurant style Yogurt Mint Sauce is delicious dip
                            which is quick and easy to. This is a standard
                            Indian mint chutney served with poppadums along with
                            mint and lemon.
                        </p>
                    </div>
                    <div className={styles.row__two}>
                        <button className={styles.btn__cart}>Add To Cart</button>
                        <button className={styles.btn__book}>Book a Table</button>
                    </div>
                    <div className={styles.row__three}>
                        <div className={styles.lunch}>
                            <h4>Lunch</h4>
                            <span className={styles.time}>1:00 - 3:00pm</span>
                        </div>
                        <div className={styles.dinner}>
                            <h4>Dinner</h4>
                            <span className={styles.time}>7:00 - 10:00pm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container__two}>
                <div className={styles.column__two}>
                    <span className={styles.price}>
                        $14.97
                    </span>
                    <div className={styles.img__top}>
                        <Image
                            src="/images/leaves-overlay.png"
                            width={600}
                            height={450}
                            alt="Mint Leaves"
                        />
                    </div>
                    <div className={styles.img__bottom}>
                        <Image
                            src="/images/hero-img.png"
                            width={500}
                            height={540}
                            alt="Kebabs"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

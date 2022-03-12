import Image from "next/image";
import { FaStar } from "react-icons/fa";
import  styles from "./PopularProducts.module.scss";
import { products } from "../../../../data/products";

const PopularProducts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__img}>
                <Image src="/images/leaf1.png" alt="leaf" width={100} height={100}/>
            </div>
            <div className={styles.container__header}>
                <h3>Online Store</h3>
                <h1>Popular Products</h1>
                <div className={styles.header__img}>
                    <Image
                        src="/images/shape.png"
                        alt="shape"
                        width={150}
                        height={20}
                    />
                </div>
            </div>
            <div className={styles.container__products}>
                {products.map(product => {
                    return (
                        <div className={styles.products__list} key={product.id}>
                            <Image
                                key={product.id}
                                src={product.img}
                                height={200}
                                width={210}
                                alt={product.title}
                                className={styles.list__img}
                            />
                            <div className={styles.list__star}>
                                <FaStar />
                            </div>
                            <p className={styles.list__category}>{product.category}</p>
                            <h2 className={styles.list__title}>{product.title}</h2>
                            <button type="submit" className={styles.list__btn}>
                                Add to Cart:
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PopularProducts;
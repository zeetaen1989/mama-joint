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
                    <>
                        <Image key={product.id} src={product.img} height={187} width={196} alt={product.title} />
                        <p>{product.category}</p>
                        <h2>{product.title}</h2>
                    </>
                })}
            </div>
        </div>
    );
}

export default PopularProducts;
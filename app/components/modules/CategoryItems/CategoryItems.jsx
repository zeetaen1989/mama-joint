import styles from "./CategoryItems.module.scss";

const CategoryItems = ({ tab, setTab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__subtitle}>
        <p>Faster Food Delivery Service</p>
      </div>
    </div>
  )
}

export default CategoryItems;
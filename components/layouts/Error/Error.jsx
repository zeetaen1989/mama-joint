import styles from "./Error.module.scss";

const Error = () => {
  return (
    <>
      <div className={styles.container}>
        <p>This page does not exist.</p>
      </div>
    </>
  )
}

export default Error;
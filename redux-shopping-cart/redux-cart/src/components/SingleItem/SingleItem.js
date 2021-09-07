import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={'#'}
        alt={'zzz'}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>ABC</p>
        <p className={styles.details__description}>zzzzzzz</p>
        <p className={styles.details__price}>$ 100</p>

        <button
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
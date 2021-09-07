import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={'#'}
        alt={'#'}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>zzz</p>
        <p className={styles.details__desc}>zzzzzzz</p>
        <p className={styles.details__price}>$ zzz</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${''}`}>
          <button
           
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
         
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product
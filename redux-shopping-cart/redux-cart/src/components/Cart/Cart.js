import React from "react";
import styles from "./Cart.module.css";


const Cart = () => {
  
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
       
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: (0 items)</span>
          <span>$ 0</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};


export default  Cart;
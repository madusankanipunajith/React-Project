import React from 'react'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import { Link } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import { addToCart,  deleteFromCart } from '../redux/actions/cartActions'

function CartScreen() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) =>{
        dispatch(addToCart(id,qty))
    }

    const removeHandler = (id) =>{
        dispatch( deleteFromCart(id))
    }

    const getCartCount = ()=>{
        return cartItems.reduce((qty, item)=> Number(item.qty) + qty, 0)
    }

    const getTotalPrice = () =>{
        return cartItems.reduce((price, item)=> item.price * Number(item.qty) + price, 0)
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0? (
                    <div>Your Cart is empty <Link to="/">Back to the shop</Link></div> 
                ): cartItems.map((item)=>(
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                ))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>$ {getTotalPrice().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

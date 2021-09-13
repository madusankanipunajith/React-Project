import React from 'react'
import './ProductScreen.css'

function ProductScreen() {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="###"/>
                </div>

                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p className="left__price">Price: $49.99</p>
                    <p className="left__description"> In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying 
                    on meaningful content. Lorem ipsum may be used as a placeholder before final copy 
                    is available.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>$499.99</span></p>
                    <p>Status: <span>In Stock</span></p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

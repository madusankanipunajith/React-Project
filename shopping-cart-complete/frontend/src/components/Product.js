import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product"/>

            <div className="product-info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual form of a document or a typeface without relying 
                    on meaningful content. Lorem ipsum may be used as a placeholder before final copy 
                    is available.
                </p>
                <p className="info__price">$499.99</p>

                <Link to={`/product/${111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product

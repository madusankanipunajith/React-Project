import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

function Product(props) {
    return (
        <div className="product">
            <img src={props.product.imageUrl} alt={props.product.name}/>

            <div className="product-info">
                <p className="info__name">{props.product.name}</p>
                <p className="info__description">
                   {props.product.description.substring(0,100)}...
                </p>
                <p className="info__price">$ {props.product.price}</p>

                <Link to={`/product/${props.product._id}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product

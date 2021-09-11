import React from 'react'
import "./NavBar.css";
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <h2>Stitches & Curves Shopping Cart</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart">
                    
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar

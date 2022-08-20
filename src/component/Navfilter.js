import React from 'react'
import "../Style/Navfilter.css"
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const categories = [{
    filter: "women's clothing",
    displayName: 'Women'
},
{
    filter: "men's clothing",
    displayName: 'Men'
}, {
    filter: "jewelery",
    displayName: 'Smart Gear'
}, {
    filter: "electronics",
    displayName: 'Accessories'
},
]
const Navbarone = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <div className='navbar-one-one'>
            <div class="navbar">
                <div class="nav-container">
                    <input class="checkbox" type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <div class="Vlogo">

                        <div className='veniaicon'>
                            <h1><NavLink to="/">VENIA</NavLink></h1>

                        </div>
                        <NavLink to="/login" className="searchicicon"> < FiSearch /></NavLink>&nbsp;&nbsp;&nbsp;
                        <NavLink to="/signin" className="searchicicon" >< FiShoppingBag /></NavLink>
                        <NavLink to="/cart" className="cart">
                            {' '}
                            {props.countCartItems ? (
                                <p className="btn btn-success">{props.countCartItems}</p>
                            ) : (
                                ''
                            )}
                        </NavLink>{' '}
                    </div>
                    <div class="menu-items">
                        <ul className="">
                            {
                                categories?.map(category =>
                                    <li className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                    </li>
                                )
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbarone

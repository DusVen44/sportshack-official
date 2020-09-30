import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <NavLink to='/' className="navlink">Home</NavLink>
            <NavLink to='/smoothies' className="navlink">Smoothies</NavLink>
            <NavLink to='/cafe' className="navlink">Fit Grill Cafe</NavLink>
            <NavLink to='/protein' className="navlink">Protein</NavLink>
            <NavLink to='/vitamins-and-supplements' className="navlink">Vitamins & Supplements</NavLink>
            <NavLink to='/body-comp-analyzer' className="navlink">Body Comp Analyzer</NavLink>
            <NavLink to='/gear' className="navlink">Apparel & Accessories</NavLink>
            <NavLink to='/contact' className="navlink">Contact</NavLink>
        </div>
    )
}

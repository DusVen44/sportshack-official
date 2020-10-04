import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Burger.css';

export default function Burger() {
    const [menuOpen, toggleMenuStatus] = useState(false);
    const toggleMenu = () => toggleMenuStatus(!menuOpen);

    return (
        <Menu
            left
            onOpen={toggleMenu}
            onClose={toggleMenu}
            isOpen={menuOpen}
        >

        {/* MENU LINKS */}
            <Link to='/' className="bm-item" onClick={toggleMenu}>
                Home
            </Link>
            <Link to='/smoothies' className="bm-item" onClick={toggleMenu}>
                Smoothies
            </Link>
            <Link to='/cafe' className="bm-item" onClick={toggleMenu}>
                Fit Grill Cafe
            </Link>
            <Link to='/protein' className="bm-item" onClick={toggleMenu}>
                Protein
            </Link>
            <Link to='/vitamins-and-supplements' className="bm-item" onClick={toggleMenu}>
                Vitamins & Supplements
            </Link>
            <Link to='/body-comp-analyzer' className="bm-item" onClick={toggleMenu}>
                Body Comp Analyzer
            </Link>
            <Link to='/gear' className="bm-item" onClick={toggleMenu}>
                Apparel & Accessories
            </Link>
            <Link to='/contact' className="bm-item" onClick={toggleMenu}>
                Contact
            </Link>
            
        </Menu>
    );
};

import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
        {/* STORE NAME */}
            <section className="store-name">
                <h1>SPORTSHACK</h1>
                <h1>SUPPLEMENT DEPOT</h1>
            </section>

        {/* ADDRESS AND PHONE NUMBER */}
            <section className="address-and-number">
            <a  href="https://www.google.com/maps/place/Sportshack+Supplement+Depot+%26+Smoothie+Cafe/@30.2116361,-92.029948,17z/data=!4m5!3m4!1s0x86249c5ff14345d3:0x9db00476ff1ed85a!8m2!3d30.2116315!4d-92.0277593"
                target="_blank"
                rel='noopener noreferrer'    
            >
                <p>2002 Johnston Street</p>
                <p>Lafayette, LA 70503</p>
            </a>
                <a href="tel:337-456-7890" className="num-link"><p>(337) 889-3680</p></a>
            </section>

        {/* HOURS OF OPERATION */}
            <section className="hours">
                <p>Mon - Fri: 8:00am - 7:00pm</p>
                <p>Saturday: 9:00am - 6:00pm</p>
                <p>Sunday: CLOSED</p>
            </section>
        </div>
    );
};

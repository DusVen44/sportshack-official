import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="header">

            <section className="store-name">
                <h1>Sportshack</h1>
                <h1>Supplement Depot</h1>
            </section>

            <section className="address-and-number">
                <h3>2002 Johnston Street</h3>
                <h3>Lafayette, LA 70503</h3>
                <h3>(337) 889-3680</h3>
            </section>

            <section className="hours">
                <h3>Mon - Fri: 7:00am - 8:00pm</h3>
                <h3>Saturday: 9:00am - 6:00pm</h3>
                <h3>Sunday: CLOSED</h3>
            </section>

        </div>
    )
}

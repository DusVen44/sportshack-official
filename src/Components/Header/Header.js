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
                <p>2002 Johnston Street</p>
                <p>Lafayette, LA 70503</p>
                <p>(337) 889-3680</p>
            </section>

            <section className="hours">
                <p>Mon - Fri: 7:00am - 8:00pm</p>
                <p>Saturday: 9:00am - 6:00pm</p>
                <p>Sunday: CLOSED</p>
            </section>
        </div>
    )
}

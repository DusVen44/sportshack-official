import React from 'react';
import './Gear.css';

export default function Gear() {
    return (
        <div className="gear-page">
            <section className="smoothies-heading">
                <h1>Apparel & Accessories</h1>
                <h3>Shirts - Shaker Bottles - Hats</h3>
            </section>

            <section className="gear-intro-box">
                <p className="gear-intro">
                    Don't forget to stock up on Sportshack Supplement Depot shirts and shaker bottles! We want you 
                    to rep your favorite nutrition store at the gym and in every day life. We're extremely proud to
                    serve you along with everyone else in Acadiana, and we're always adding new gear so you can  
                    look and feel like an athletic machine.
                </p>
            </section>

            <section className="gear-gallery">
                <p>Here will be a non-categorized gallery of all accessories</p>
            </section>
        </div>
    )
}

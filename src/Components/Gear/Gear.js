import React from 'react';
import './Gear.css';
import { bottles, packLarge, packSmall, shirts } from '../../Stores/gearSTORE';

export default function Gear() {
    return (
        <div className="gear-page">
        {/* HEADING AND INFO */}
            <section className="gear-heading">
                <h1 classname="gear-title">Apparel & Accessories</h1>
                <h3 className="gear-subheading">Shirts - Shaker Bottles - Food Containers</h3>
            </section>

            <section className="gear-intro-box">
                <p className="gear-intro">
                    Don't forget to stock up on Sportshack Supplement Depot shirts and shaker bottles! We want you 
                    to rep your favorite nutrition store at the gym and in every day life. We're extremely proud to
                    serve you along with everyone else in Acadiana, and we're always adding new gear so you can  
                    look and feel like an athletic machine.
                </p>
            </section>

        {/* PICTURES */}
            <section className="gear-gallery">
                <img src={bottles} alt="shaker bottles" className="bottles-pic gear-pic"></img>
                <img src={packSmall} alt="small food container" className="small-pack-pic gear-pic"></img>
                <img src={packLarge} alt="large food container" className="large-pack-pic gear-pic"></img>
                <img src={shirts} alt="shirts" className="shirts-pic gear-pic"></img>
            </section>
        </div>
    );
};

import React from 'react';
import './Contact.css';
import InfoBox from '../InfoBox/InfoBox';
import Map from '../Map/Map';

export default function Contact() {
    return (
        <div className="contact-page">
        {/* HEADING */}
            <section className="contact-heading">
                <h1>Contact Us</h1>
            </section>

        {/* INFOBOX AND MAP COMPONENTS */}
            <section className="contact-box">
                <InfoBox />
                <Map />
            </section>
            
        </div>
    );
};

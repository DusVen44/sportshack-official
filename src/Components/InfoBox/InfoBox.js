import React from 'react';
import './InfoBox.css';

export default function InfoBox() {
    return (
        <div className="info-box-component">
            <section className="name-and-address">
                <h3>Sportshack Supplement Depot</h3>
                <p>2002 Johnston Street</p>
                <p>Lafayette, LA 70503</p>
            </section>

            <section className="number">
                <h3>CALL US</h3>
                <p>(337) 889-3680</p>
            </section>

            <section className="hours-operations">
                <h3>HOURS OF OPERATION</h3>
                <p>Monday: 7:00am - 8:00pm</p>
                <p>Tuesday: 7:00am - 8:00pm</p>
                <p>Wednesday: 7:00am - 8:00pm</p>
                <p>Thursday: 7:00am - 8:00pm</p>
                <p>Friday: 7:00am - 8:00pm</p>
                <p>Saturday: 9:00am - 6:00pm</p>
                <p>Sunday: CLOSED</p>
            </section>

            <a  className="link-to-map"
                href="https://www.google.com/maps/place/Sportshack+Supplement+Depot+%26+Smoothie+Cafe/@30.2116361,-92.029948,17z/data=!4m5!3m4!1s0x86249c5ff14345d3:0x9db00476ff1ed85a!8m2!3d30.2116315!4d-92.0277593"
                target="_blank"
                rel='noopener noreferrer'    
            >
                GET DIRECTIONS
            </a>
        </div>
    )
}

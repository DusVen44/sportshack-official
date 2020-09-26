import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <section className="contact-heading">
                <h1>Contact Us</h1>
            </section>

            <section className="contact-box">
                <div className="address">
                    <h3>Sportshack Supplement Depot</h3>
                    <p>2002 Johnston Street</p>
                    <p>Lafayette, LA 70503</p>
                    <a 
                        className="link-to-map"
                        href="https://www.google.com/maps/place/Sportshack+Supplement+Depot+%26+Smoothie+Cafe/@30.2116361,-92.029948,17z/data=!4m5!3m4!1s0x86249c5ff14345d3:0x9db00476ff1ed85a!8m2!3d30.2116315!4d-92.0277593"
                        target="_blank"
                        rel='noopener noreferrer'    
                    >
                        Get Directions
                    </a>
                </div>

                <div className="phone">
                    <h3>Call Us</h3>
                    <p>(337) 889-3680</p>
                </div>

                <div className="hours">
                    <h3>Hours of Operation</h3>
                    <p>Monday: 7:00am - 8:00pm</p>
                    <p>Tuesday: 7:00am - 8:00pm</p>
                    <p>Wednesday: 7:00am - 8:00pm</p>
                    <p>Thursday: 7:00am - 8:00pm</p>
                    <p>Friday: 7:00am - 8:00pm</p>
                    <p>Saturday: 9:00am - 6:00pm</p>
                    <p>Sunday: CLOSED</p>
                </div>
            </section>
            
        </div>
    )
}

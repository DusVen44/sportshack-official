import React from 'react';
import './Home.css';
import InfoBox from '../InfoBox/InfoBox';
import Map from '../Map/Map';
import { college, elliptical, scale, trainer, homewrap, homesmoothie, fruitHeart, curl, manTrainer } from '../../Stores/homepageSTORE';

export default function Home() {
    return (
        <div className="home-page">
        {/* HEADING AND INTRO */}
            <h1 className="home-heading">Building Better Bodies Since 2001</h1>

            <p className="home-intro">
                First launched in 2001, Sportshack Supplement Depot is the result of decorated
                former bodybuilder Benny Nele's lifelong pursuit of health and fitness. As of 
                2013, Sportshack found its permanent home at <a  href="https://www.google.com/maps/place/Sportshack+Supplement+Depot+%26+Smoothie+Cafe/@30.2116361,-92.029948,17z/data=!4m5!3m4!1s0x86249c5ff14345d3:0x9db00476ff1ed85a!8m2!3d30.2116315!4d-92.0277593"
                    target="_blank"
                    rel='noopener noreferrer'  
                    className="info-box-address"  
                >2002 Johnston Street Lafayette, Louisiana</a>. Located just a few short blocks 
                from UL's campus, we are situated in the heart of the Acadiana community. We serve 
                the community by providing... 
            </p>

            <ul>
                <li>30+ Pre-Workouts</li>
                <li>20+ Muscle Builders and Fat Burners</li>
                <li>Isolate, Casein, Whey Blends, and Plant Protein Powders</li>
                <li>Energy Drinks and Pre-Made Protein Shakes</li>
                <li>Protein Snacks including Bars, Cookies, Chips, and Spreads</li>
                <li>Made-to-Order Smoothies with over 30 Flavors</li>
                <li>Custom Made Wraps, Paninis, Salads, and Bowls</li>
                <li>and Vitamins, too!</li>
            </ul>

            <p className="home-intro">
                Looking for something specific? Call us at <a href="tel:337-456-7890">(337) 889-3680</a> to 
                speak with a sales associate about your needs. We commit ourselves to hiring a helpful, friendly 
                staff who provide you with the ultimate consumer experience.
            </p>

            <p className="home-intro">
                At Sportshack, we devote ourselves to listening and talking with you about your personal health and 
                fitness goals. Our customer service is guided by quality information and products, which we use to
                help make your goals easily achievable. So, stop by the store today and see what the Sportshack 
                experience is all about!
            </p>

        {/* CALL TO ACTION */}
            <h2 className="question">
                Who should stop by Sportshack?
            </h2>

            <section className="answers-box">
                <div className="pic-and-answer-box">
                    <img src={college} alt="graduation cap"></img>
                    <h3 className="answer">College Students</h3>
                    <img src={college} alt="graduation cap"></img>
                </div>
                <p className="why">We are proud supporters of Ragin Cajun athletics, and our store is located
                    just a few blocks from UL's campus on the bike path. Come by before class to pick up a <a href='/smoothies'>
                    smoothie</a> or <a href='/cafe'>wrap</a>.
                </p>

                <div className="pic-and-answer-box">
                    <img src={scale} alt="scale and fruits"></img>
                    <h3 className="answer">Anyone Wanting to Lose Weight</h3>
                    <img src={fruitHeart} alt="scale and fruits"></img>
                </div>
                <p className="why">Don't allow untrained, unqualified, and uninterested people to give you bad advice on 
                    becoming a better, healthier you. Our staff members are devoted to health and fitness, and all 
                    of us have a passion for helping you become the healthiest version of yourself. Let us guide you 
                    to the products that perfectly fit your goals.
                </p>

                <div className="pic-and-answer-box">
                    <img src={elliptical} alt="elliptical"></img>
                    <h3 className="answer">Health Nuts</h3>
                    <img src={curl} alt="elliptical"></img>
                </div>
                <p className="why">We have every <a href='/vitamins-and-supplements'>vitamin and supplement</a> that
                    you can imagine. Come see our vast inventory of products that will give you the extra edge in your 
                    fitness journey.
                </p>

                <div className="pic-and-answer-box">
                    <img src={trainer} alt="personal trainer"></img>
                    <h3 className="answer">Personal Trainers</h3>
                    <img src={manTrainer} alt="personal trainer"></img>
                </div>
                <p className="why">We have exactly what you need to build the perfect diet and training program for your 
                    clients. Our <a href='/body-comp-analyzer'>Body Comp Analyzer</a> will provide you with a complete 
                    breakdown of your client's current physical and metabolic state. After viewing body fat %, basal 
                    metabolic rate, and mass distribution, you will create the best possible custom-made program for 
                    your client. Sportshack also has the VIP Trainers Program. Talk to a team member about joining the
                    program so you and your clients can save big on all of our products.
                </p>

                <div className="pic-and-answer-box">
                    <img src={homewrap} alt="wrap"></img>
                    <h3 className="answer">Everyone on Lunch Break</h3>
                    <img src={homesmoothie} alt="smoothie"></img>
                </div>
                <p className="why">Our convenient location and quick-serving cafe provides you with a great place to stop 
                    for lunch. The quiet, friendly atmosphere is perfect for 1-on-1s and small groups to get together for 
                    delicious <a href='/cafe'>wraps, paninis</a> and <a href='/smoothies'>smoothies</a>.
                </p>
       
            </section>

        {/* INFO BOX AND MAP COMPONENTS */}
            <section className="info-and-map">
                <InfoBox />
                <Map />
            </section>
        </div>
    );
};

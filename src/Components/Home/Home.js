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
                Sportshack Supplement Depot is Lafayette's #1 nutrition store to help you accomplish all of your 
                health goals. Whether you're looking to achieve peak athletic performance or just want to lose a 
                few pounds, our expert staff will guide you through every step. With the lowest prices, most 
                nutritious and delicious <a href='/smoothies'>Smoothies</a>, the healthiest <a href='/cafe'>Paninis 
                and Wraps</a>, and the highest quality <a href='/vitamins-and-supplemnts'> Vitamins and Supplements</a>, 
                Sportshack guarantess satisfaction on every visit. 
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

                <p className="home-outro">
                    Since 2001, Benny and his Sportshack team have been serving the great people of Acadiana with the best 
                    smoothies and supplements on the market. We want you to join our family of satisfied customers. Come by 
                    today and let us help you take your fitness to the next level. 
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

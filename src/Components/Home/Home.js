import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">

            <p className="home-intro">
                Sportshack Supplement Depot is Lafayette's #1 nutrition store to help you accomplish all of your 
                health goals. Whether you're looking to achieve peak athletic performance or just want to lose a 
                few pounds, our expert staff will guide you through every step. With the lowest prices, most 
                nutritious and delicious <a href='/smoothies'>Smoothies</a>, the healthiest <a href='/cafe'>Paninis 
                and Wraps</a>, and the highest quality <a href='/vitamins-and-supplemnts'> Vitamins and Supplements</a>, 
                Sportshack guarantess satisfaction on every visit. 
            </p>

            <h2 className="question">
                Who should stop by Sportshack Supplement Depot?
            </h2>

            <section className="answers-box">
                <h3 className="answer">College Students</h3>
                <p className="why">We are proud supporters of Ragin Cajun athletics, and our store is located
                    just a few blocks from UL's campus on the bike path. Come by before class to pick up a <a href='/smoothies'>
                    smoothie</a> or <a href='/cafe'>wrap</a>.
                </p>

                <h3 className="answer">Anyone Wanting to Lose Weight</h3>
                <p className="why">Don't allow untrained, unqualified, and uninterested people to give you bad advice on 
                    becoming a better, healthier you. Our staff members are devoted to health and fitness, and all 
                    of us have a passion for helping you become the healthiest version of yourself. Let us guide you 
                    to the products that perfectly fit your goals.
                </p>

                <h3 className="answer">Health Nuts</h3>
                <p className="why">We have every <a href='/vitamins-and-supplements'>vitamin and supplement</a> that
                    you can imagine. Come see our vast inventory of products that will give you the extra edge in your 
                    fitness journey.
                </p>

                <h3 className="answer">Personal Trainers</h3>
                <p className="why">We have exactly what you need to build the perfect diet and training program for your 
                    clients. Our Body Comp Analyzer will provide you with a complete breakdown of your client's current
                    physical and metabolic state. After viewing body fat %, basal metabolic rate, and mass distribution, 
                    you will create the best possible custom-made program for your client.
                </p>

                <h3 className="answer">Everyone on Lunch Break</h3>
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

            <section className="info-and-map">
                <h3>This is where addresss, phone number, and hours will be. Also, a picture of the location on a map.</h3>
            </section>
        </div>
    )
}

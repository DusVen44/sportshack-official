import React, { useContext } from 'react';
import './Smoothies.css';
import { SmoothiesContext } from '../../SmoothiesContext';

export default function Smoothies() {
    const { smoothies20, smoothies32 } = useContext(SmoothiesContext);
    console.log(smoothies20);
    console.log(smoothies32);
    return (
        <div className="smoothies-page">
            <section className="smoothies-heading">
                <h1>Smoothies</h1>
                <h3>Refuel After Your Workout</h3>
            </section>

            <section className="smoothies-intro-box">
                <p className="smoothies-intro1">
                    We make fresh smoothies all day! After you finish a hard workout, you need to replenish your body with
                    with the right nutrients. Our smoothies are low in fat & sugar and filled with high-quality protein so 
                    you can recover the right way. 
                </p>

                <p className="smoothies-intro2">
                    Want to maximize your smoothie? Ask our team member to add in extra fruit, protein, energy boosters, 
                    fat burners, wheat grass shots, etc. Do you have a specific request? Since our smoothies are made to 
                    order, we can customize your choice so it fits your nutrition needs. View our flavors and nutrition
                    facts below to find your new favorite smoothie in Lafayette.
                </p>
            </section>

            <p>Below will be the full list of smoothies. This is where the API call will happen, and I will list every
                flavor in every size.
            </p>

            {/* <section className="smoothies-list">
                {smoothies.map(smoothie => {
                    return (
                        <div className="smoothie">
                            <h1>{smoothie.flavor}</h1>
                        </div>
                    )
                })}
                
            </section> */}
        </div>
    )
}

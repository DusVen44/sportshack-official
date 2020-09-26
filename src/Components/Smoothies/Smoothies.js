import React from 'react';
import './Smoothies.css';

export default function Smoothies() {
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

            <section className="smoothies-list">
                <div className="smoothie">
                    <h3 className="smoothie-name">
                        Banana Cream Pie
                    </h3>
                    <h4 className="nutrition-facts">
                        <p>Serving Size: 20oz</p>
                        <p>Calories: 395</p>
                        <p>Total Fat 2.5g</p>
                        <p>Saturated Fat: 0g</p>
                        <p>Trans Fat: 0g</p>
                        <p>Cholesterol 9.5mg</p>
                        <p>Total Carbohydrate: 54.5g</p>
                        <p>Dietary Fiber: 4.5g</p>
                        <p>Sugars: 24.5g</p>
                        <p>Protein: 38.5g</p>
                    </h4>
                </div>
            </section>
        </div>
    )
}

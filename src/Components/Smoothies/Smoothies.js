import React, { useContext } from 'react';
import './Smoothies.css';
import { SmoothiesContext } from '../../SmoothiesContext';
import SmoothieNutrition from'../SmoothieNutrition/SmoothieNutrition';

export default function Smoothies() {
    const { smoothies20, smoothies32 } = useContext(SmoothiesContext);
    // console.log(smoothies32);
    return (
        <div className="smoothies-page">
            <section className="smoothies-page-heading">
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

                <p className="smoothies-intro3">
                    Sportshack now features Girl Scout Cookie Smoothies in these delicious flavors!
                </p>

                <ul className="girl-scout-flavors">
                    <li>Do-Si-Do</li>
                    <li>Samoas</li>
                    <li>Savanna Smiles</li>
                    <li>S'mores</li>
                    <li>Tag-a-Long</li>
                    <li>Thin Mint</li>
                </ul>
            </section>

            <section className="smoothie-sizes">
                <h1>20oz Smoothies</h1>
                <h1>32oz Smoothies</h1>
            </section>

            <section className="smoothies-section">
                <div className="smoothies20-list">
                    {/* <h1 className="smoothie-heading">20oz Smoothies</h1> */}
                    {smoothies20.smoothies20 && smoothies20.smoothies20.map(smoothie => {
                        return (
                            <SmoothieNutrition smoothie={smoothie} key={smoothie.id}/>
                        )
                    })}
                </div>

                <div className="smoothies32-list">
                    {/* <h1 className="smoothie-heading">32oz Smoothies</h1> */}
                    {smoothies32.smoothies32 && smoothies32.smoothies32.map(smoothie => {
                        return (
                            <SmoothieNutrition smoothie={smoothie} key={smoothie.id}/>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

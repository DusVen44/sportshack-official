import React from 'react';
import './BodyComp.css';
import { inbody, sheet } from '../../Stores/bodyCompSTORE';

export default function BodyComp() {
    return (
        <div className="body-comp-page">
            <section className="body-comp-heading">
                <h1>Body Composition Analyzer</h1>
                <h3 className="body-subheading">Discover your starting point - Track your progress - Crush your goals</h3>
            </section>

            <section className="body-comp-intro-box">
                <p className="body-comp-intro1">
                    Sportshack offers you the latest in cutting edge technology for analyzing your body composition.
                    The Body Composition Analyzer measures your body and produces and easy-to-read analysis containing 
                    your weight, skeletal muscle mass, body fat mass, BMI, body fat percentage, basal metabolic rate, 
                    and segmental lean analysis. The body composition analyzer keeps every analysis stored so you can 
                    keep track of your progress.
                </p>

                <p className="body-comp-intro2">
                    The body composition analyzer is the ultimate tool for personal trainers and their clients. The 
                    mirror can replace the scale, but nothing can track progress like the InBody 370. Using science and 
                    technology, you're able to adjust your client's program and dial in the perfect program for success. 
                    Ask a team member about the VIP Trainers Program. This will provide you and your clients massive 
                    discounts for any product in Sportshack.
                </p>

                <p className="body-comp-intro3">
                    The Body Comp Analyzer is available for ALL Sportshack customers. Stipulations may apply. Talk to a 
                    team member about using this amazing tool today!
                </p>
            </section>

            <section className="body-comp-pics">
                <img src={inbody} className="body-pic" alt="inbody 370"></img>
                <img src={sheet} className="body-pic" alt="results sheet"></img>
            </section>
            
        </div>
    )
}

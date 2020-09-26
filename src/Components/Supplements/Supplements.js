import React from 'react';
import './Supplements.css';

export default function Supplements() {
    return (
        <div className="supplements-page">
            <section className="supplements-heading">
                <h1>Vitamins & Supplements</h1>
                <h3>
                    Boost Immune System - Bulk Up - Slim Down - Burn Fat - Get Stronger - 
                    Increase Testosterone - Enhance Endurance
                </h3>
            </section>

            <section className="supplements-intro-box">
                <p className="supplements-intro1">
                    Is your workout missing some oomph? Sportshack Supplement Depot will show you how to put that
                    oomph back into your training so you can boost your progression like a champion. We carry 
                    hundreds of vitamins and supplements to help you before, during, and after your training. Our 
                    staff members are highly trained on every item we sell, and their knowledge will lead you to 
                    the perfect product that fits your needs.
                </p>
            </section>

            <section className="supplements-gallery">
                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Vitamins
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Protein
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Pre-Workout
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Pro-Hormones
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Testosterone Boosters
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Protein Bars
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Energy Boosters
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Weight Gainers
                    </h2>
                    <div className="supplement-pics">
                        <p>Here will be a gallery of featured products</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

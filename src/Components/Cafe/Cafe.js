import React from 'react';
import './Cafe.css';
import CafePics from '../CafePics/CafePics';

export default function Cafe() {
    return (
        <div className="cafe-page">
        {/* HEADING AND INFO */}
            <section className="cafe-heading">
                <h1>Fit Grill Cafe</h1>
                <h3>Custom Wraps</h3>
            </section>

            <section className="cafe-intro-box">
                <p className="cafe-intro1">
                    Starting at only $5.99, you can create your own panini or wrap. Choose your bread, meat, cheese,
                    veggies, and sauce. Your food will be freshly-made by a team member and served to you quickly. 
                    Breadless options are available.
                </p>
                
                <p className="cafe-intro2">
                    To see more of these insanely delicious wraps, follow <a href="https://www.instagram.com/custom_honey_wraps/" target="_blank" rel="noopener noreferrer">Custom Honey Wraps</a> on Instagram.
                </p>
            </section>

        {/* PICTURES */}
            <div>
                <CafePics />
            </div>

        {/* CAFE OPTIONS */}
            <section className="cafe-ingredients">
                <div className="breads-and-wraps category">
                    <h2 className="ingredient-category">
                        Breads & Wraps
                    </h2>
                    <p className="ingredient">Ciabatta Roll</p>
                    <p className="ingredient">Panini Bread</p>
                    <p className="ingredient">Wheat Wrap</p>
                    <p className="ingredient">Jalapeno Cheese Wrap</p>
                    <p className="ingredient">Spinach Wrap</p>
                    <p className="ingredient">Garlic Wrap</p>
                    <p className="ingredient">Tomato Basil Wrap</p>
                </div>

                <div className="cheese category">
                    <h2 className="ingredient-category">
                        Cheese
                    </h2>
                    <p className="ingredient">Swiss</p>
                    <p className="ingredient">American</p>
                    <p className="ingredient">Pepper Jack</p>
                    <p className="ingredient">Sharp Cheddar</p>
                </div>

                <div className="meats category">
                    <h2 className="ingredient-category">
                        Meats
                    </h2>
                    <p className="ingredient">Turkey</p>
                    <p className="ingredient">Ham</p>
                    <p className="ingredient">Low Fat Tuna</p>
                    <p className="ingredient">Grilled Chicken</p>
                    <p className="ingredient">Roast Beef</p>
                    <p className="ingredient">Light Chicken Salad</p>
                    <p className="ingredient">Fajita Steak</p>
                </div>

                <div className="veggies category">
                    <h2 className="ingredient-category">
                        Veggies
                    </h2>
                    <p className="ingredient">Spinach</p>
                    <p className="ingredient">Onions</p>
                    <p className="ingredient">Tomatoes</p>
                    <p className="ingredient">Black Olives</p>
                    <p className="ingredient">Spring Mix</p>
                    <p className="ingredient">Jalapenos</p>
                    <p className="ingredient">Pickles</p>
                    <p className="ingredient">Banana Peppers</p>
                </div>

                <div className="sauces category">
                    <h2 className="ingredient-category">
                        Sauces
                    </h2>
                    <p className="ingredient">Light Creamy Pesto</p>
                    <p className="ingredient">Light Mayonnaise</p>
                    <p className="ingredient">Honey Mustard</p>
                    <p className="ingredient">Spicy Ranch</p>
                    <p className="ingredient">Cajun Honey Mustard</p>
                    <p className="ingredient">Sweet Honey Teriyaki</p>
                    <p className="ingredient">Light Ranch</p>
                </div>
            </section>
        </div>
    );
};

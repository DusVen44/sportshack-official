import React from 'react';
import './SmoothieNutrition.css';

export default function SmoothieNutrition(smoothie) {
    return (
        <div className="smoothie">
            <h1 className="smoothie-name">{smoothie.smoothie.flavor}</h1>
            <h3 className="fact">Nutrition Facts</h3>
            <h4 className="size fact">Size: {smoothie.smoothie.size}oz</h4>
            <h4 className="fact">Calories: {smoothie.smoothie.calories}</h4>
            <h4 className="fact">Total Fat: {smoothie.smoothie.total_fat}g</h4>
            <p className="small-fact fact">Saturated Fat: {smoothie.smoothie.saturated_fat}g</p>
            <p className="small-fact fact">Trans Fat: {smoothie.smoothie.trans_fat}g</p>
            <h4 className="fact">Cholesterol: {smoothie.smoothie.cholesterol}mg</h4>
            <h4 className="fact">Total Carbs: {smoothie.smoothie.total_carbohydrates}g</h4>
            <p className="small-fact fact">Dietary Fiber: {smoothie.smoothie.dietary_fiber}g</p>
            <p className="small-fact fact">Sugars: {smoothie.smoothie.sugars}g</p>
            <h4 className="fact">Protein: {smoothie.smoothie.protein}g</h4>
        </div>
    )
}

import React from 'react';
import './SmoothieNutrition.css';

export default function SmoothieNutrition(smoothie) {
    return (
        <div className="smoothie">
            <h1>{smoothie.smoothie.flavor}</h1>
            <h3>Nutrition Facts</h3>
            <h4>Size: {smoothie.smoothie.size}oz</h4>
            <h4>Calories: {smoothie.smoothie.calories}</h4>
            <h4>Total Fat: {smoothie.smoothie.total_fat}g</h4>
            <p className="small-fact">Saturated Fat: {smoothie.smoothie.saturated_fat}g</p>
            <p className="small-fact">Trans Fat: {smoothie.smoothie.trans_fat}g</p>
            <h4>Cholesterol: {smoothie.smoothie.cholesterol}mg</h4>
            <h4>Total Carbohydrate: {smoothie.smoothie.total_carbohydrates}g</h4>
            <p className="small-fact">Dietary Fiber: {smoothie.smoothie.dietary_fiber}g</p>
            <p className="small-fact">Sugars: {smoothie.smoothie.sugars}g</p>
            <h4>Protein: {smoothie.smoothie.protein}g</h4>
        </div>
    )
}

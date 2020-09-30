import React from 'react';
import Gallery from '../Gallery/Gallery';
import './Protein.css';
import { fuelx30, hexapro, isoFit, isoSurge, iso100, mutantMass, plantBased, quickMass, seriousMass, superMass, trutein } from '../../Stores/proteinSTORE';

export default function Protein() {
    return (
        <div className="protein-page">
            <section className="protein-heading">
                <h1>Protein</h1>
                <h3>Want to build more muscle? You need more protein.</h3>
                <h3>Want to burn more fat? You need more protein.</h3>
                <h3>Want to recover quicker? You need more protein.</h3>
            </section>

            <section className="protein-intro-box">
                <p className="protein-intro1">
                    The benefits of a high protein diet are well-documented, so it's no secret why most people choose
                    protein powder as their first supplement. If you want more muscle, less fat, a quicker recovery time,
                    or need to hit your macros more efficiently, protein powder is a must-have for your diet. Sportshack 
                    carries whey protein isolates, protein blends, mass gainers, and plant-based vegan protein.
                </p>
            </section>

            <section className="protein-galleries">
                <div className="protein-category">
                    <h1>Whey Isolate and Blends</h1>
                    <Gallery pics={[fuelx30, hexapro, isoFit, isoSurge, iso100, trutein]} />
                </div>

                <div className="protein-category">
                    <h1>Mass Gainers</h1>
                    <Gallery pics={[mutantMass, quickMass, seriousMass, superMass]} />
                </div>

                <div className="protein-category">
                    <h1>Plant-Based</h1>
                    <img src={plantBased} alt="plant-based protein" className="plant-protein"></img>
                </div>
            </section>
            
        </div>
    )
}

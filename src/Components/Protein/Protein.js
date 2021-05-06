import React from 'react';
import Gallery from '../Gallery/Gallery';
import './Protein.css';
import { c620, fuelx30, hexapro, isoFit, isoSurge, iso100, mutantMass, plantBased, quickMass, seriousMass, superMass, trutein } from '../../Stores/proteinSTORE';

export default function Protein() {
    return (
        <div className="protein-page">
        {/* HEADING AND INFO */}
            <section className="protein-heading">
                <h1 className="protein-title">Protein</h1>
                <h3 className="protein-subheading">Want to build more muscle? You need more protein.</h3>
                <h3 className="protein-subheading">Want to burn more fat? You need more protein.</h3>
                <h3 className="protein-subheading">Want to recover quicker? You need more protein.</h3>
            </section>

            <section className="protein-intro-box">
                <p className="protein-intro1">
                    The benefits of a high protein diet are well-documented, so it's no secret why most people choose
                    protein powder as their first supplement. If you want more muscle, less fat, a quicker recovery time,
                    or need to hit your macros more efficiently, protein powder is a must-have for your diet. Sportshack 
                    carries whey protein isolates, protein blends, mass gainers, and plant-based vegan protein. 
                </p>

                <p className="protein-intro2">
                    Below is a gallery of featured protein options. Come by the store to see all of our protein powders 
                    and discover which one is the best for you.
                </p>
            </section>

        {/* PICTURES OF FEATURED PROTEIN */}
            <section className="protein-galleries">
                <div className="protein-category">
                    <h1 className="protein-cat-title">Whey Isolate and Blends</h1>
                    <Gallery pics={[c620, fuelx30, hexapro, isoFit, isoSurge, iso100, trutein]} />
                </div>

                <div className="protein-category">
                    <h1 className="protein-cat-title">Mass Gainers</h1>
                    <Gallery pics={[mutantMass, quickMass, seriousMass, superMass]} />
                </div>

                <div className="protein-category">
                    <h1 className="protein-cat-title">Plant-Based</h1>
                    <img src={plantBased} alt="plant-based protein" className="plant-protein"></img>
                </div>
            </section>
            
        </div>
    );
};

import React from 'react';
import './Supplements.css';
import Gallery from '../Gallery/Gallery';
import { animalPak, vitastack } from '../../Stores/vitaminSTORE';
import { pre620, bamf, bucked, cuts, nitraflex, psychotic, sharp, tone, totalWar, woke } from '../../Stores/preSTORE';
import { allDayYouMay, aminoCuts, extend } from '../../Stores/BCAASTORE';
import { boneafide, leanfx, lipodreneElite, lipodrene, sharpfx, shredabull, tnt } from '../../Stores/fatBurnerSTORE';
import { allMax, concret, kre, nitrocell } from '../../Stores/creatineSTORE';
import { liverPlus, organDefender, organShield } from '../../Stores/organSTORE';
import { baf, goliath, mammoth, raf, shredMatrix, tightToneHer, tightTone } from '../../Stores/stackSTORE';
import { dim, hydraLean, muscleTest, pctElite, testMd } from '../../Stores/pctSTORE';
import { adrenolyn, bigNoise, full, noxygen, plasma, pumpocalypse } from '../../Stores/pumpSTORE';
import { lightsOut, sedative, somatomax } from '../../Stores/sleepSTORE';
import { cyto, grazed, superGreens } from '../../Stores/greenStore';
import { carbion, karbolyn } from '../../Stores/carbSTORE';
import { gButter, meat, one, quest } from '../../Stores/foodSTORE';
import { d3, bang, c4 } from '../../Stores/energySTORE';

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
                    <Gallery pics={[animalPak, vitastack]}/>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Pre-Workout
                    </h2>
                    <Gallery pics={[pre620, bamf, bucked, cuts, nitraflex, psychotic, sharp, tone, totalWar, woke]}/>
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        BCAAs
                    </h2>
                    <Gallery pics={[allDayYouMay, aminoCuts, extend]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Fat Burners
                    </h2>
                    <Gallery pics={[boneafide, leanfx, lipodrene, lipodreneElite, sharpfx, shredabull, tnt]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Creatine
                    </h2>
                    <Gallery pics={[allMax, concret, kre, nitrocell]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Organ Protection
                    </h2>
                    <Gallery pics={[liverPlus, organDefender, organShield]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Anabolic Edge Stacks
                    </h2>
                    <Gallery pics={[baf, goliath, mammoth, raf, shredMatrix, tightToneHer, tightTone]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        PCT & Test Boosters
                    </h2>
                    <Gallery pics={[dim, hydraLean, muscleTest, pctElite, testMd]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Pump Agents
                    </h2>
                    <Gallery pics={[adrenolyn, bigNoise, full, noxygen, plasma, pumpocalypse]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Sleep Aids
                    </h2>
                    <Gallery pics={[lightsOut, sedative, somatomax]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Greens
                    </h2>
                    <Gallery pics={[cyto, grazed, superGreens]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Carbs
                    </h2>
                    <Gallery pics={[carbion, karbolyn]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Protein Bars & Food
                    </h2>
                    <Gallery pics={[gButter, meat, one, quest]} />
                </div>

                <div className="supplement-box">
                    <h2 className="supplement-type">
                        Energy Drinks
                    </h2>
                    <Gallery pics={[d3, bang, c4]} />
                </div>
            </section>
        </div>
    )
}

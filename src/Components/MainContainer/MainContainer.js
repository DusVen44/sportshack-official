import React from 'react';
import { Route } from 'react-router-dom';
import './MainContainer.css';
import Home from '../Home/Home';
import Smoothies from '../Smoothies/Smoothies';
import Cafe from '../Cafe/Cafe';
import Protein from '../Protein/Protein';
import Supplements from '../Supplements/Supplements';
import BodyComp from '../BodyComp/BodyComp';
import Gear from '../Gear/Gear';
import Contact from '../Contact/Contact';



export default function MainContainer() {
    return (
        <div className="main-container">
            <Route exact path='/' component={Home} />
            <Route path='/smoothies' component={Smoothies} />
            <Route path='/cafe' component={Cafe} />
            <Route path='/protein' component={Protein} />
            <Route path='/vitamins-and-supplements' component={Supplements} />
            <Route path='/body-comp-analyzer' component={BodyComp} />
            <Route path='/gear' component={Gear} />
            <Route path='/contact' component={Contact} /> 
        </div>
    );
};

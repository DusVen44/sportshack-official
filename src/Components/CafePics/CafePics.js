import React from 'react';
import './CafePics.css';
import { cafeRoom, noah, wrap1, wrap2, wrap3, wrap4, wrap5, wrap6, wrap7, wrap8, wrap9 } from '../../Stores/cafeSTORE';

export default function CafePics() {
    return (
        <div className="cafe-pics-box">
        {/* MAIN PICTURES */}
            <div className="room-and-noah">
                <img src={cafeRoom} alt="cafe room" className="cafe-main-pic"></img>
                <img src={noah} alt="noah the chef" className="cafe-main-pic"></img>
            </div>

        {/* WRAP PICTURES */}
            <div className="wraps-box">
                <img src={wrap1} alt="wrap" className="wrap-pic"></img>
                <img src={wrap2} alt="wrap" className="wrap-pic"></img>
                <img src={wrap3} alt="wrap" className="wrap-pic"></img>
                <img src={wrap4} alt="wrap" className="wrap-pic"></img>
                <img src={wrap5} alt="wrap" className="wrap-pic"></img>
                <img src={wrap6} alt="wrap" className="wrap-pic"></img>
                <img src={wrap7} alt="wrap" className="wrap-pic"></img>
                <img src={wrap8} alt="wrap" className="wrap-pic"></img>
                <img src={wrap9} alt="wrap" className="wrap-pic"></img>
            </div>
        </div>
    );
};

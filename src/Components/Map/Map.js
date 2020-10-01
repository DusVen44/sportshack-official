import React from 'react';
import './Map.css';
import map from '../../images/map/map.png';


export default function Map() {
    return (
        <div className="map-component">
            <a  href="https://www.google.com/maps/place/Sportshack+Supplement+Depot+%26+Smoothie+Cafe/@30.2116361,-92.029948,17z/data=!4m5!3m4!1s0x86249c5ff14345d3:0x9db00476ff1ed85a!8m2!3d30.2116315!4d-92.0277593"
                target="_blank"
                rel='noopener noreferrer'  
            >
                <img src={map} alt="store location" className="map-image"></img>
            </a>
        </div>
    )
};

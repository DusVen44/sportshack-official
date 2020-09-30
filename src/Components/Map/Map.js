import React from 'react';
import './Map.css';
import map from '../../images/map/map.png';


export default function Map() {
    return (
        <div className="map-component">
            <img src={map} alt="store location" className="map-image"></img>
        </div>
    )
};

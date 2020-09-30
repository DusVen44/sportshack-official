import React from 'react';
import './Gallery.css';

export default function Gallery(pics) {
    return (
        <div className="gallery">
            {pics.pics.map(i => {
                return (
                    <img src={i} alt="product" className="product-image" key={i}></img>
                )
            })}
        </div>
    )
}

import React from 'react';
import './Footer.css';
import { FiInstagram, FiFacebook } from 'react-icons/fi';

export default function Footer() {
    return (
        <div className="footer">
            <h3>Follow us on <a href="https://www.facebook.com/SportshackSupplementDepot" target="_blank" rel="noopener noreferrer">
                                <FiFacebook className="icon"/>
                             </a> and <a href="https://www.instagram.com/sportshack.suppsandcafe/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <FiInstagram className="icon"/>
                                      </a>!</h3>
        </div>
    )
}

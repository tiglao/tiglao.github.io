// Footer.js
import React from 'react';
import './Footer.css'; // Make sure to have a corresponding Footer.css file

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-title">
                <h1 className="footer-cursive">systems-oriented</h1>
                <h1 className="footer-sans-serif">CONSULTANT DEVELOPER</h1>
            </div>
            <div className="footer-content">
                <p className="footer-text">I'M A CONSULTANT AND DEVELOPER BASED IN BOSTON. WITH RICH EXPERIENCE IN DATA SCIENCE AND COLLECTIVE LEADERSHIP...</p>
                <button className="btn btn-dark footer-button">CONTACT ME</button>
            </div>
        </div>
    );
}

export default Footer;

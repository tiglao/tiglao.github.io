import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <div>
                        <span className="fst-italic">Ellie Tiglao</span>
                        <span className="ms-2 fw-normal">FULL STACK DEVELOPER</span>
                    </div>
                    <div>
                        <a className="me-4" href="#portfolio">PORTFOLIO</a>
                        <a className="me-4" href="#about">ABOUT</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

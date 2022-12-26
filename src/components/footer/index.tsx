import React from 'react';
import './style.scss';

export default function Footer(){
    return (
        
        <>
            <div className="vdr-footer ">
            <div className="vdr-footer__main container">
                <div className="vdr-footer__main--left">
                </div>
                <ul className="vdr-footer__main--right">
                    <li className="link">Company Information</li>
                    <li className="link">Service</li>
                    <li className="link">Privascy Policy</li>
                    <li className="link">Terms of Use</li>
                    <li className="link">Contact Us</li>
                </ul>
            </div>
            <div className="vdr-copyright">
                <div className="vdr-copyright__logo "></div>
            </div>
            </div>
        </>
    )
}
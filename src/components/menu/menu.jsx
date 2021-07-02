import React from 'react';
import './menu.scss';

export default function Menu({isActive}) {
    return (
         <div className={`menu ${isActive && 'active'}`}>
            <ul className="menu-items">
                
            <li> <a href="#contact">Contact</a> </li>
            <li> <a href="#portfolio">Portfolio</a> </li>
            <li> <a href="#testimonials">Testimonials</a> </li>
            <li> <a href="#intro">About</a> </li>
            <li> <a href="#works">Works</a></li>
            </ul>
        </div>
    )
}

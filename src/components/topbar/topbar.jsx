import React, {useState} from 'react';
import { PermContactCalendar, Email } from '@material-ui/icons';

import './topbar.scss';


export default function Topbar(props) {
    const [isActive, setIsActive] = useState(false);

    const clickMenueHandler = () => {
        setIsActive(!isActive);
        props.onActiveChange()
    }

    return (
        <div className={`topbar ${ isActive && 'active'}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#contact" className="logo">Riad.</a>
                    <div className="item-container">
                        <PermContactCalendar className="icon"/>
                        <span>06 14 25 16 46</span>
                    </div>
                    <div className="item-container">
                        <Email className="icon"/>
                        <span>riadbenrabeh@gmail.com</span>
                    </div>
                </div>

                <div className="right" onClick={clickMenueHandler}>
                    <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
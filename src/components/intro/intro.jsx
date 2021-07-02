import React, {useEffect, useRef} from 'react';
import {init} from 'ityped';

import './intro.scss';

export default function Intro() {

    const typingRef = useRef();

    useEffect(() => {
        init(
            typingRef.current,
            {
                showCursor: true,
                strings: ['NodeJs FullStack developer', 'JavaScript fanatic!', 'developing more than just code!' ],
                startDelay: 500,
                backDelay: 1500,
                typeSpeed: 100,
                backSpeed: 50
             }
            )
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="image-wrapper">
                    <img src="assets/images/profile.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="intro-wrapper">
                    <div className="intro-name">
                        <h1>Hello, I'm</h1>
                        <h2>Riad BENRABEH</h2>
                    </div>
                    <h3>Software Engineer, <span  ref= {typingRef}></span></h3>
                    
                    
            </div>

            <div className='arrow'>
                <a href="#portfolio">
                <img src="assets/images/arroW.png" alt="" />
                </a>
                
            </div>
        </div>
        </div>
    )
}

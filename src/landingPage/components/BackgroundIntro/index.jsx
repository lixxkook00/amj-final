import React from 'react'

import './BackgroundIntro.scss'

export default function BackgroundIntro() {
  return (
    <div className="background-intro">
        <div className="background-intro-image">
            <div className="background-intro-image-wrap">
                <img src="./images/H1.png" alt="" />
                {/* <img src="./images/Frame 4.png" alt="" /> */}

                {/* start */}
                 <div className="lamp lamp--5">
                </div>

                <div className="lava">
                    <div className="lava-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <svg className="gooey-filter" version="1.1">
                            <defs>
                            <filter id="gooey">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooey" />
                                <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                            </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* light */}
                <div className="glow glow--1"></div>
                <div className="glow glow--2"></div>
                <div className="glow glow--3"></div>
            </div>
        </div>
        
    </div>
  )
}

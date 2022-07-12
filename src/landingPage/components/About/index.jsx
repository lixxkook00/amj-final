import React, { useRef, useState } from "react";

import './About.scss'

export default function About() {
    const swiperAbout = useRef(null);

  return (
    <div className="about">
        <div className="container">
            <div className="row">
                {/* PARAGRAPH */}
                <div className="col-xl-6">
                    <div className="story-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Story
                        </div>
                    </div>
                    <div className="paragraph">
                        Earth's background in 2163: natural disasters continuously occur, habitats are severely affected, life is threatened, a deadly atmosphere covers the whole planet, and the population decreases continuously, leading to the danger of extinction. 
                    </div>
                    <div className="paragraph">
                        On earth, the tiger is a species with the greatest strength, ability to hunt and fight, and is highly adaptable in the harsh jungle environment. Therefore, a special force was established with 1575 tiger warriors selected through many rigorous training, testing, and evaluation courses. They are sent to find and explore a new planet in order to assist in the evacuation of all creatures on Earth to this new location.
                    </div>
                </div>

                <div className="col-xl-6 centering">
                    <div className="img-width">
                        <img src="https://www.clipartmax.com/middle/m2i8N4G6Z5m2A0N4_characters-art-badass-video-game-characters/" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

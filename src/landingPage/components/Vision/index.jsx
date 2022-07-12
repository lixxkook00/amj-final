import React from 'react'
import './Vision.scss'

import img from '../../images/charc2.png'

export default function Vision() {
  return (
   <div className="vision">
        <div className="container">
            <div className="row">

                <div className="col-xl-6 flex-column">
                    <div className="vision-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Vision
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        In the short term, we aspire to become a multi-channel, cross-platform gaming environment that attracts many exciting games and tournaments. The venue for a professional esports tournament in the digital space. We create a playground for esports teams to have explosive confrontations.
                        <br />
                        In the long term, AMJ targets becoming one of the top 5 game service management enterprises in the world. Promotional support for potential games. We will build a metaverse exclusively for gamers.
                    </div>
                </div>

                 <div className="col-xl-6 centering">
                    <img className="img-width" src={img} alt="" />
                </div>
            </div>
        </div>
   </div>
  )
}
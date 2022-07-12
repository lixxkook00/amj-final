import React from 'react'
import './Vision.scss'

import img from '../../images/charc2.png'

export default function Vision() {
  return (
   <div className="vision">
        <div className="container">
            <div className="row">

                <div className="col-xl-6 col-lg-6 flex-column">
                    <div className="vision-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Vision
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        In the short term, it will become a platform to provide NFT certificates of prestigious and highly secure gems. Make sure the gems you buy are always the best, real gems. Moreover, when you buy it, you can increase your profit through the market mechanism.
                        <br />
                        In the long term: open up the gem ecosystem and community. Where people can interact and exchange gems with each other. Create multiple applications for gem certificates.
                    </div>
                </div>

                 <div className="col-xl-6 col-lg-6 centering">
                    <img className="img-width" src={img} alt="" />
                </div>
            </div>
        </div>
   </div>
  )
}
import React from 'react'
import './Mission.scss'

import img from '../../images/charc3.png'

export default function Mission() {
  return (
   <div className="mission">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 centering">
                    <img className="img-width" src={img} alt="" />
                </div>

                <div className="col-xl-6 col-lg-6 flex-column">
                    <div className="mission-title centering-left">
                        <div className="primary-title-lp primary-gradient-text">
                            Mission
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph centering">
                        AMJ is a project that makes gem testing faster and testing evidence more valuable. Bring NFT applications to the jewelry industry.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

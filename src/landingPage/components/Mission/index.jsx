import React from 'react'
import './Mission.scss'

export default function Mission() {
  return (
   <div className="mission">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 centering">
                    <img className="img-width" src="https://www.seekpng.com/png/full/345-3451966_fortnite-season-6-png.png" alt="" />
                </div>

                <div className="col-xl-6 flex-column">
                    <div className="mission-title centering-left">
                        <div className="primary-title-lp primary-gradient-text">
                            Mission
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        Our mission is to create an equitable playing field for all gamers. Help developers and sponsors maximize the benefits of participating in the AMJ ecosystem. We will develop a metaverse platform where viewers can watch their favorite tournaments in the most real way. Become one of the top 5 communities organizing Esport tournaments.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

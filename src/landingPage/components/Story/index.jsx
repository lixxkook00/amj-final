import React from 'react'
import './Story.scss'

import img from '../../images/charc1.png'

export default function Story() {
  return (
   <div className="story">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 centering">
                    <img className="img-width" src={img} alt="" />
                </div>

                <div className="col-xl-6 flex-column">
                    <div className="story-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Story
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        AMJ is an independent software provider, technology research, and investment. We are delivering open gaming platforms and professional services to both the online and land-based gaming sectors. We believe in value-driven technology solutions that simplify your business whether you are an operator, vendor, or regulator.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

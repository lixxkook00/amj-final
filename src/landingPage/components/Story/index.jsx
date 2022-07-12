import React from 'react'
import './Story.scss'

import img from '../../images/charc1.png'

export default function Story() {
  return (
   <div className="story">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 centering">
                    <img className="img-width" src={img} alt="" />
                </div>

                <div className="col-xl-6 col-lg-6 flex-column">
                    <div className="story-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Story
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying.
                        <br />
                        The applicability of the stones is not high. The gems are only used for viewing in kind or attached to jewelry as a noticeable highlight.
                        <br />
                        For that reason, we built the AMJ project with the desire to make the verification process faster and more secure, and the proof of the verification become more valuable thanks to the blockchain platform technology and NFT's application.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

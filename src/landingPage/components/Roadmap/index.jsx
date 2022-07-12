import React from 'react'
import './Roadmap.scss'

export default function Roadmap() {
  return (
    <div className="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="roadmap-title centering">
                        <div className="primary-title primary-gradient-text">
                            Roadmap
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                </div>
                <div className="container-x">
                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span>Brainstorm project ideas</span>
                            <span>Complete project mechanism</span>
                            <span>Build the foundation of the project.</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span>Build Whitepaper v1</span>
                            <span>Build the project's website</span>
                            <span>Upload to the project testnet</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span>Round private-sale</span>
                            <span>Pre-sale round</span>
                            <span>Public-sale</span>
                            <span>Project Mainnet</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                          <span>Open NFT market for the projects</span>
                          <span>Complete staking mechanisms</span>
                          <span>Build the project's metaverses</span>
                          <span>Development joins Metaverse via VR devices</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

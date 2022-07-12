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
                            <h3>12/2022</h3>
                            <span>Application via Android and IOS</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Q4/2023</h3>
                            <span>Beta version of gaming marketplace platform</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Q1/2024</h3>
                            <span>Official Launching</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Q2/2024</h3>
                            <span>Massive community marketing, partner bonding and run business</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2025</h3>
                            <span>Research on 3D new platform</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2026</h3>
                            <span>Release metaverse platform and new business model</span>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2027</h3>
                            <span>IPO on London Stock Exchange</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

import React, { Suspense, useRef, useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stage } from '@react-three/drei'
// import Model from '../Model'
import './Team.scss'

import CEO from '../../images/CEO-img.jpg'

export default function Team() {
    const ref = useRef()

    return (
        <div className="team">
        <div className="container">
            <div className="row">
                {/* TITLE */}
                <div className="col-xl-12">
                        <div className="team-title centering">
                            <div className="primary-title primary-gradient-text">
                                Team
                                <div className="primary-title__line"></div>
                            </div>
                        </div>
                </div>

                <div className="col-xl-6 col-12">
                        <div className="team-infor">
                            <div className="team-infor-edu">
                                Master Degree in Finance & Business Administration
                            </div>

                            <div className="team-infor-name">
                                MARK BUTCHER
                            </div>

                            <div className="team-infor-job">
                                CEO - MAMJ Technology Research & Investment Ltd
                            </div>

                            <div className="team-infor-desc">
                                Utilizing many of the same tactics commonly used today. From my then unprecedented guerrilla operating and branding techniques to the continuously innovative ways in which I use brand integration, and remain a cutting edge business strategist.
                            </div>

                            {/* <div className="team-infor-social">
                                <a href="" className="team-infor-social-item">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>

                                <a href="" className="team-infor-social-item">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>

                                <a href="" className="team-infor-social-item">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a href="" className="team-infor-social-item">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </div> */}
                        </div>
                </div>

                    <div className="col-xl-6 col-12">
                        {/* <div className="team-avt centering">
                            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 , position: [0, 0, 0] }}>
                                <Suspense fallback={null}>
                                <Stage controls={ref} preset="soft" intensity={0.8}  contactShadow={false} environment="city">
                                    <Model />
                                </Stage>
                                </Suspense>
                                <OrbitControls ref={ref} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} autoRotate enableZoom={false} enablePan={true} enableRotate={true} />
                            </Canvas>
                        </div> */}
                        <div className="team-ceo centering">
                            <img src={CEO} alt="" />
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

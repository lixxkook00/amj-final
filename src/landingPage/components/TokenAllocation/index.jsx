import React,{useState} from 'react'
import './TokenAllocation.scss'

// import CountUp from "react-countup";
// import VisibilitySensor from 'react-visibility-sensor';

import CircleChart from '../CircleChart'

export default function TokenAllocation() {
    
    return (
        <div className="token-allocation">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="token-allocation-title centering">
                            <div className="primary-title primary-gradient-text">
                                Token Allocation
                                <div className="primary-title__line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="token-allocation-chart">
                            <div className="free-chartjs"></div>
                            <CircleChart />
                        </div>
                    </div>

                    <div className="col-xl-6 centering">
                        <div className="row centering">

                            <div className="col-xl-6 col-6">
                                <div className="token-allocation-percent">
                                    <div className="token-allocation-percent-num dev">
                                        60.25%
                                    </div>
                                    <div className="token-allocation-percent-name">
                                        ICO Program
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-6">
                                <div className="token-allocation-percent">
                                    <div className="token-allocation-percent-num adv">
                                        7.10%
                                    </div>
                                    <div className="token-allocation-percent-name">
                                        Marketing and Community Development
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-6">
                                <div className="token-allocation-percent">
                                    <div className="token-allocation-percent-num mar">
                                        12.65%
                                    </div>
                                    <div className="token-allocation-percent-name">
                                        Dev Team
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-6">
                                <div className="token-allocation-percent">
                                    <div className="token-allocation-percent-num liqui">
                                        12%
                                    </div>
                                    <div className="token-allocation-percent-name">
                                        Ecosystem Application
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12 col-12">
                                <div className="token-allocation-percent">
                                    <div className="token-allocation-percent-num hybri">
                                        8%
                                    </div>
                                    <div className="token-allocation-percent-name">
                                        Partners and Venture Capitals
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React , { useState,useEffect } from 'react'

import { createRoot } from 'react-dom/client';

import './MyTeamPage.scss'

import axios from 'axios';

export default function MyTeamPage() {

  const [totalMember,setTotalMember] = useState(0)

  const [f2tof10,setF2toF10] = useState(0)


  return (
    <div className="my-team">

        {/* header */}
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 co-md-6 centering">
                    <div className="primary-title primary-gradient-text">
                        MY TEAM
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 co-md-6">
                    <div className="my-team-infor gradient-box d-flex">
                        <div className="my-team-infor-item">
                            <div className="my-team-infor-item-title">
                                Fixed Salary
                            </div>
                            <div className="my-team-infor-item-value">
                                <span className="value">
                                    0,000/month
                                </span>
                            </div>
                        </div>
                        <div className="my-team-infor-item">
                            <div className="my-team-infor-item-title">
                                Total Members
                            </div>
                            <div className="my-team-infor-item-value">
                                <span className="value">
                                    0
                                </span>
                            </div>
                        </div>
                        <div className="my-team-infor-item">
                            <div className="my-team-infor-item-title">
                                F2-F10
                            </div>
                            <div className="my-team-infor-item-value">
                                <span className="value">
                                  0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12">
                    {/* AFFILIATE TREE */}
                  <div className="affiliate-content">
                    <div className="affiliate-item">
                      <div className="affiliate-item-icon">
                        <i className="fa-solid fa-circle-minus"></i>
                      </div>

                      <div className="affiliate-item-content">
                        <span className="value">
                          L1 
                          </span> - <span className="value">
                                 Person 1
                            </span> - person1 - 07/07/2022 11:44:16</div>
                      <div id="affiliate-c8214616-dab1-4706-92f4-86f08730d793" className="affiliate-dd">
                          <div className="affiliate-item">
                            <div className="affiliate-item-icon"><i className="fa-solid fa-circle"></i></div>
                            <div className="affiliate-item-content"><span className="value">L2</span> - <span className="value">Person 2</span> - person2 - 07/07/2022 11:46:44</div>
                            <div id="affiliate-5b0da1af-2df2-4dfb-8b5c-aaeae23c3c30" className="affiliate-dd"></div>
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

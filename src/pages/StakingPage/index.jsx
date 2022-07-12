import React , {useState} from 'react'
import './StakingPage.scss'

import Countdown from '../../components/Countdown'
import ComingSoon from '../../components/ComingSoon'

export default function StakingPage() {

  const [stakingStatus,setStakingStatus] = useState("stake")

  return (
    <div className="staking">
        
      {/* SLIDER */}
      <div className="container">
          <div className="row">
              <div className="col-xl-12">
                  <div className="staking-intro">
                    <img src="./images/staking-intro.png" alt="" />
                  </div>
              </div>
          </div>
      </div>

      {/* INFOR */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="staking-infor d-flex">
              <div className="staking-infor-item">
                <div className="staking-infor-item-title">
                  Balance
                </div>
                <div className="staking-infor-item-value">
                  <span className="value">
                    0,000 AMJ
                  </span>
                </div>
              </div>

              <div className="staking-infor-item">
                <div className="staking-infor-item-title">
                  Token Locked
                </div>
                <div className="staking-infor-item-value">
                  <span className="value">
                    0,000 AMJ
                  </span>
                </div>
              </div>

              <div className="staking-infor-item">
                <div className="staking-infor-item-title">
                  Available Balance
                </div>
                <div className="staking-infor-item-value">
                  <span className="value">
                    0,000 AMJ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STAKING CONTENT */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="staking-fisrt gradient-box">
              <div className="row">
                {/* LEFT */}
                <div className="col-xl-6 col-lg-6">
                  <div className="staking-fisrt-left">
                    {/* button */}
                    <div className="d-flex">
                      <div className={`primary-btn ${stakingStatus==="stake" ? "orange" : "empty"}`} onClick={() => setStakingStatus("stake")}>
                        Stake
                      </div>
                      <div className={`primary-btn ${stakingStatus==="unstake" ? "orange" : "empty"}`} onClick={() => setStakingStatus("unstake")}>
                        Unstake
                      </div>
                    </div>

                    {/* input */}
                    <div className="staking-input d-flex">
                      <input type="text" />
                      <div className="staking-input-name">
                        MAX
                      </div>
                    </div>

                    {/* staking time */}
                    {
                      stakingStatus==="stake"
                      &&
                      <div className="staking-time">
                        <div className="staking-time-title">
                          Staking Time
                        </div>
                        <div className="staking-time-wrapper d-flex">
                          <div className="staking-time-item active">
                            <div className="staking-time-item-num">
                              6
                            </div>
                            <div className="staking-time-item-text">
                              Months
                            </div>
                          </div>

                          <div className="staking-time-item">
                            <div className="staking-time-item-num">
                              9
                            </div>
                            <div className="staking-time-item-text">
                              Months
                            </div>
                          </div>

                          <div className="staking-time-item">
                            <div className="staking-time-item-num">
                              12
                            </div>
                            <div className="staking-time-item-text">
                              Months
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    
                    {
                      stakingStatus==="unstake"
                      &&
                      <div className="staking-time">
                        <div className="staking-time-title">
                          Staking Time
                        </div>
                        <Countdown />
                      </div>
                    }

                    {/* button submit */}
                    <div className="staking-buttons centering">
                      <div className="primary-btn">
                        STAKE
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* RIGHT */}
                <div className="col-xl-6 col-lg-6">
                  <div className="staking-fisrt-right">

                    <div className="staking-fisrt-right-item">
                      <div className="staking-fisrt-right-item-title">
                        APR
                      </div>
                      <div className="staking-fisrt-right-item-value">
                        0.1%/day
                      </div>
                    </div>

                    <div className="staking-fisrt-right-item">
                      <div className="staking-fisrt-right-item-title">
                        All Partners
                      </div>
                      <div className="staking-fisrt-right-item-value">
                        0 <i className="fa-solid fa-person"></i>
                      </div>
                    </div>

                    <div className="staking-fisrt-right-item">
                      <div className="staking-fisrt-right-item-title">
                        Development Commission
                      </div>
                      <div className="staking-fisrt-right-item-value">
                        <span className="value">
                          0,000 AMJ
                        </span>
                      </div>
                    </div>

                    <div className="staking-fisrt-right-item">
                      <div className="staking-fisrt-right-item-title">
                        Token Rewards By Stake
                      </div>
                      <div className="staking-fisrt-right-item-value">
                        <span className="value">
                          0,000 AMJ
                        </span>
                      </div>
                    </div>
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

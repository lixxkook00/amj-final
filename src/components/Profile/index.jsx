import React , {useState , useEffect} from 'react'
import './Profile.scss'


// Modal
import Deposite from '../../modals/Deposite'
import Withdraw from '../../modals/Withdraw'
import Tranfer from '../../modals/Tranfer'

import DepositeQR from '../../modals/DepositeQR';
import Bonus from '../Bonus'

import {useNavigate} from 'react-router-dom'

export default function Profile() {

  let navigate = useNavigate();

  const [deposite,setDeposite] = useState(false)
  const [depositeQR,setDepositeQR] = useState(false)

  const [withdraw,setWithdraw] = useState(false)
  const [tranfer,setTranfer] = useState(false)

  return (
    <>
      <div className="profile">

        {/* INFOR */}
        <div className="container">
          <div className="row reverse-in-mobile">
            {/* infor content */}
            <div className="col-xl-6 col-lg-6 col-md-6 profile-flex-end">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="profile-infor centering gradient-box">
                      {/* Avt */}
                      <div className="profile-infor-avt">
                        <img src="" alt="" />
                      </div>

                      {/* Content */}
                      <div className="profile-infor-content">

                        <div className="profile-infor-content-title">
                          PROFILE
                          <div className="ref-btn">
                            <i className="fa-solid fa-copy"></i>
                          </div>

                        </div>

                        <div className="profile-infor-content-ul">
                          <div className="profile-infor-content-li">
                            .STEVE ROGER
                          </div>
                          <div className="profile-infor-content-li">
                            .AMERICAN
                          </div>
                          <div className="profile-infor-content-li">
                            
                            <span className="value">
                              .WARRIOR
                            </span>
                          </div>
                        </div>

                        <div className="profile-infor-content-quote">
                          “do what i love. love what i do”
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="col-xl-6">
                    <div className="ref primary-btn-bg">
                      <div className="ref-title">
                        Contract:
                      </div>
                      <div className="ref-value text-overflow">
                        0x8B8617f9BE6b9946e9a6fFd65Ba6f6906B62a423
                      </div>
                      <div className="ref-btn">
                        <i className="fa-solid fa-copy"></i>
                      </div>
                    </div>
                  </div>

                  {/* Reflink */}
                  <div className="col-xl-6">
                    <div className="ref primary-btn-bg">
                      <div className="ref-title">
                        Reflink:
                      </div>
                      <div className="ref-value text-overflow">

                      </div>
                      <div className="ref-btn">
                        <i className="fa-solid fa-copy"></i>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/* icon */}
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="profile-icon centering gradient-box">
                  <img className="center-abs" src="./images/icon-intro.png" alt="" />
                </div>
            </div>
          </div>
        </div>

        {/* BONUS */}
        <Bonus />

        {/* TOKEN BALANCE */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="token-balance gradient-box">
                  <table>
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>BALANCE</th>
                      <th>LOCKED</th>
                      <th>AVAILABLE BALANCE</th>
                    </tr>
                    
                    <tr>
                      <td></td>
                      <td></td>
                      <td>BALANCE</td>
                      <td>LOCKED</td>
                      <td>AVAILABLE BALANCE</td>
                    </tr>

                  </tbody>
                </table>

                {/* control */}
                <div className="control-wrapper centering">
                  <div className="control-item primary-btn" onClick={() => {
                      setDeposite(true)
                  }}>
                    DEPOSIT
                  </div>
                  <div className="control-item primary-btn" onClick={() => {
                      setWithdraw(true)
                  }}>
                    WITHDRAW
                  </div>
                  <div className="control-item primary-btn"  onClick={() => {
                      setTranfer(true)
                  }}>
                    TRANSFER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRIMARY TITLE */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="primary-title primary-gradient-text">
                TRANSACTION
              </div>
            </div>
          </div>
        </div>

        {/* TRANSACTION */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="transaction gradient-box">
                <table>
                  <tbody>
                    <tr>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Sender</th>
                      <th>Fee</th>
                      <th>Status</th>
                      <th>Hash</th>
                    </tr>

                    <tr>
                      <td>Time</td>
                      <td>Type</td>
                      <td>Amount</td>
                      <td>Sender</td>
                      <td>Fee</td>
                      <td>Status</td>
                      <td>Hash</td>
                    </tr>
                  </tbody>
                </table>

                {/* control */}
                <div className="control-wrapper centering">
                  <div className="control-item primary-btn view-more">
                    VIEW MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Deposite deposite={deposite} setDeposite={setDeposite} setDepositeQR={setDepositeQR} />
      <Withdraw withdraw={withdraw} setWithdraw={setWithdraw} />
      <Tranfer tranfer={tranfer} setTranfer={setTranfer}/>
      <DepositeQR depositeQR={depositeQR}  setDepositeQR={setDepositeQR} />
    </>
  )
}

import React , {useState,useEffect}  from 'react'
import './ICOPages.scss'

import { ProgressBar } from 'react-bootstrap'

import Commision from '../../components/Commision'
import Countdown from '../../components/Countdown'
import ICOBuy from '../../components/ICOBuy'

import FormatAmount from '../../components/FormatAmount'

export default function ICOPages() {

    return (
        <div className="ico">

            {/* INFOR */}
            <div className="ico-infor">
                <div className="container">
                    <div className="row">
                        {/* Coin balance*/}
                        <div className="col-xl-6">
                            <div className="ico-infor-balance gradient-box">

                                <div className="ico-infor-balance-up d-flex">
                                    <div className="ico-infor-balance-coin centering">
                                        <img src="./images/coin-M.png" alt="" />
                                    </div>
                                    <div className="ico-infor-balance-name centering column">
                                        <h6 className="text-center">BALANCE</h6>
                                        <h3 className="text-center">
                                            <span className="value total-balance">
                                                <FormatAmount amount={10000}/>
                                            </span>
                                        </h3>
                                    </div>
                                </div>

                                <div className="ico-infor-balance-middle d-flex">
                                    <div className="ico-infor-balance-middle-item">
                                        <h6>Locked Tokens</h6>
                                        <h5>
                                            <span className="value">
                                                <FormatAmount amount={10000}/>
                                                
                                            </span>
                                            <span className="value">
                                                AMJ
                                            </span>
                                        </h5>
                                    </div>
                                    <div className="ico-infor-balance-middle-item">
                                        <h6> Available Tokens</h6>
                                        <h5>
                                            <span className="value">
                                                <FormatAmount amount={10000}/>
                                                AMJ
                                            </span>
                                        </h5>
                                    </div>
                                </div>

                                <div className="ico-infor-balance-select d-flex">
                                    <select
                                    >   
                                        <option value="USDT">USDT</option>
                                    </select>
                                    <div className="ico-infor-balance-select-icon">
                                        <i className="fa-solid fa-angles-down"></i>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Coin content */}
                        <div className="col-xl-6">
                            <div className="ico-infor-content gradient-box d-flex">
                                <div className="ico-infor-content-left centering column">
                                    <div className="ico-infor-content-coin centering">
                                        <img src="./images/coin-M.png" alt="" />
                                    </div>
                                    <h6>
                                        1 BNB = 10,000 AMJ 
                                    </h6>
                                </div>
                                <div className="ico-infor-content-right">
                                    <div className="ico-infor-content-right-item name">
                                        Token Name: <span className="name-token">AMJ</span>
                                    </div>
                                    <div className="ico-infor-content-right-item">
                                        Symbol: <span className="value">AMJ</span> 
                                    </div>
                                    <div className="ico-infor-content-right-item">
                                        Decimals: <span className="value">18</span> 
                                    </div>
                                    <div className="ico-infor-content-right-item network">
                                        Network: <span className="value">Binance Smart Chain (Bep-20)</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            {/* CONTENT */}
            <div className="ico-content">
                <div className="container">
                    <div className="row">
                        <div className=" col-xl-7 col-lg-7">
                            <ICOBuy />
                        </div>

                        <div className="col-xl-5 col-lg-5">
                            <div className="ico-content-right gradient-box">
                                <div className="ico-content-title">
                                    Token Sales Progress
                                </div>
                                <div className="ico-content-right-title d-flex space-between">
                                    <div>
                                        Raised
                                    </div>
                                    <div>
                                        Total
                                    </div>
                                </div>

                                <div className="ico-content-right-value d-flex space-between">
                                    <div>
                                        <span className="value">
                                            <FormatAmount amount={500000}/>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="value">
                                            <FormatAmount amount={1000000}/>
                                        </span>
                                    </div>
                                </div>

                                <div className="ico-content-right-process">
                                    <ProgressBar now={50} />
                                </div>

                                <div className="ico-content-title">
                                    <div className="">
                                        SALE END IN 
                                    </div>
                                    <span className="name-token ml-8 text-30">
                                        PHASE 01
                                    </span>
                                </div>

                                <Countdown />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* COMMISION */}
            <Commision />
        </div>
    )
}

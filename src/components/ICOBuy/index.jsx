import React , {useState} from 'react'

import FormatAmount from '../FormatAmount'

import { ProgressBar } from 'react-bootstrap'

export default function ICOBuy() {

    const [icoSlider,setIcoSlider] = useState(0)

    return (
        <div className="ico-content-left gradient-box">
            <div className="ico-content-left-item d-flex">
                <div className="ico-content-left-item-infor">
                    <span className="title">PRICE</span>
                    : 
                    <span className="value">
                        1
                    </span> 
                    AMJ = 
                    <span className="value">
                        {0.08}
                    </span> 
                    USDT
                </div>
                <div className="ico-content-left-item-btn ico-infor-balance-select">
                    <select 
                    >   
                        <option value={0}>Package</option>
                        <option value={100}>Package 100</option>
                        <option value={500}>Package 500</option>
                        <option value={1000}>Package 1,000</option>
                        <option value={5000}>Package 5,000</option>
                        <option value={10000}>Package 10,000</option>
                        <option value={20000}>Package 20,000</option>
                        <option value={50000}>Package 50,000</option>
                    </select>
                    
                    <div className="ico-infor-balance-select-icon">
                        <i className="fa-solid fa-angles-down"></i>
                    </div>
                    USDT
                </div>
            </div>
            
            <div className="ico-content-left-item d-flex">
                <div className="ico-content-left-item-infor">
                    <span className="title">AVAILABLE</span>
                    : 
                    <span className="value">
                        {<FormatAmount amount={1000}/>}
                    </span> 
                    USDT
                </div>
                <div className="ico-content-left-item-btn">
                    <input 
                        type="number"
                        placeholder="0"  
                    />  
                    AMJ
                </div>
            </div>

            <div className="ico-error">
                
            </div>

            <div className="ico-slider">
                <div className="ico-slider-line">
                    <div className="ico-slider-line-process" style={{width: `50%`}}></div>
                </div>
                <div className="ico-slider-wrapper">
                    <div className={`ico-slider-point ${icoSlider ===0 ? "active" : ""}`}>
                        <div className="ico-value">0%</div>
                    </div>
                    <div className={`ico-slider-point ${icoSlider ===25 ? "active" : ""}`}>
                        <div className="ico-value">25%</div>
                    </div>
                    <div className={`ico-slider-point ${icoSlider ===50 ? "active" : ""}`}>
                        <div className="ico-value">50%</div>
                    </div>
                    <div className={`ico-slider-point ${icoSlider ===75 ? "active" : ""}`}>
                        <div className="ico-value">75%</div>
                    </div>
                    <div className={`ico-slider-point ${icoSlider ===100 ? "active" : ""}`}>
                        <div className="ico-value">100%</div>
                    </div>
                </div>
            </div>

            <div className="ico-content-title">
                Bonus
            </div>

            {/* PROCESS */}
            <div className="ico-content-left-bonus">
                <div className="ico-content-left-bonus-process">
                    <ProgressBar now={50} />
                </div>
                <div className="ico-content-left-bonus-desc d-flex">
                    <div className="ico-content-left-bonus-desc-item">
                        0%
                    </div><div className="ico-content-left-bonus-desc-item">
                        5%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                    6%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                        7%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                        10%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                        15%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                        20%
                    </div>
                    <div className="ico-content-left-bonus-desc-item">
                        25%
                    </div>
                </div>
            </div>

            {/* FORM CONTENT */}

            <div className="ico-content-left-buy">
                <div className="row centering">
                    <div className="col-xl-12">
                        <div className="ico-content-left-buy-main d-flex primary-btn-bg">
                            <div className="ico-content-left-buy-main-item">
                                <div className="title">
                                    TOKEN 
                                </div>
                                <div className="value">
                                    <FormatAmount amount={1000}/>
                                </div>
                            </div>
                            <div className="ico-content-left-buy-main-item">
                                <div className="title">
                                    + 5% BONUS
                                </div>
                                <div className="value">
                                    <FormatAmount amount={1000}/>
                                </div>
                            </div>
                            <div className="ico-content-left-buy-main-item">
                                <div className="title">
                                    TOTAL AMJ
                                </div>
                                <div className="value">
                                    <FormatAmount amount={1000}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="primary-btn orange" >
                            BUY
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction */}
            <div className="ico-content-title">
                Transaction
            </div>

            <div className="ico-content-left-table">
                <table>
                    <tbody>
                        <tr>
                            <th>TYPE</th>
                            <th>AMJ TOKENS</th>
                            <th>DATE</th>
                            <th>Status</th>
                        </tr>

                        <tr>
                            <td>TYPE</td>
                            <td>AMJ TOKENS</td>
                            <td>DATE</td>
                            <td>Status</td>
                        </tr>

                    </tbody>
                </table>
            </div>    
        </div>
    )
}

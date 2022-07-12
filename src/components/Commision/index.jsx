import React from 'react'
import './Commision.scss'

import CommisionChart from '../CommisionChart'

export default function Commision() {
  return (
    <div className="commision">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="primary-title primary-gradient-text">
                        COMMISION POLICY 
                    </div>
                </div>

                <div className="col-xl-12">
                    <div className="commision-table-first gradient-box">
                        <table className="primary-table">
                            <tbody>
                                <tr className="primary-btn-bg">
                                    <th>Package</th>
                                    <th>
                                        Cost
                                    </th>
                                    <th>
                                        Bonus
                                    </th>
                                    <th>
                                        Receiving Amount 
                                    </th>
                                    <th>
                                        Monthly receiving AMJ (%)
                                    </th>
                                </tr>

                                <tr>
                                    <td>
                                        1 STAR
                                    </td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        5%
                                    </td>
                                    <td>
                                        <span className="value">
                                            105
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            3%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        2 STAR
                                    </td>
                                    <td>
                                        500
                                    </td>
                                    <td>
                                        6%
                                    </td>
                                    <td>
                                        <span className="value">
                                            530
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            4%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        3 STAR
                                    </td>
                                    <td>
                                        1000
                                    </td>
                                    <td>
                                        7%
                                    </td>
                                    <td>
                                        <span className="value">
                                            1070
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            5%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        4 STAR
                                    </td>
                                    <td>
                                        5000
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        <span className="value">
                                            5500
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            7%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        5 STAR
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        15%
                                    </td>
                                    <td>
                                        <span className="value">
                                            11500
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            10%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        VIP
                                    </td>
                                    <td>
                                        20000
                                    </td>
                                    <td>
                                       20%
                                    </td>
                                    <td>
                                        <span className="value">
                                            24000
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            10%
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        VVIP
                                    </td>
                                    <td>
                                        50000
                                    </td>
                                    <td>
                                       25%
                                    </td>
                                    <td>
                                        <span className="value">
                                            62500
                                        </span>
                                    </td>
                                    <td>
                                        <span className="transaction-status--complete">
                                            10%
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8">
                    <CommisionChart />
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="commision-chart-desc">
                        <div className="commision-chart-desc-item">
                            <div className="commision-chart-desc-item-icon">
                                <div className="package"></div>
                            </div>
                            <div className="commision-chart-desc-item-name">
                                PACKAGE
                            </div>
                        </div>

                        <div className="commision-chart-desc-item">
                            <div className="commision-chart-desc-item-icon">
                                <div className="amount"></div>
                            </div>
                            <div className="commision-chart-desc-item-name">
                                RECEIVING AMOUNT
                            </div>
                        </div>

                        <div className="commision-chart-desc-item">
                            <div className="commision-chart-desc-item-icon">
                                <div className="bonus-percent"></div>
                            </div>
                            <div className="commision-chart-desc-item-name">
                                MONTHLY RECEIVING AMJ (%)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12">
                    <div className="commision-table-first gradient-box">
                        <table className="primary-table">
                            <tbody>
                                <tr className="primary-btn-bg">
                                    <th>PACKAGE</th>
                                    <th>
                                        F1
                                    </th>
                                    <th>
                                        F2
                                    </th>
                                    <th>
                                        F3
                                    </th>
                                    <th>
                                        F4
                                    </th>
                                    <th>
                                        F5
                                    </th>
                                    <th>
                                        F6
                                    </th>
                                    <th>
                                        F7
                                    </th>
                                    <th>
                                        F8
                                    </th>
                                    <th>
                                        F9
                                    </th>
                                    <th>
                                        F10
                                    </th>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            1 STAR
                                        </span>
                                        {/* <br />  */}
                                        ($100)
                                    </td>
                                    <td>
                                        5%
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            2 STAR
                                        </span>
                                        {/* <br />  */}
                                        ($500)
                                    </td>
                                    <td>
                                        6%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            3 STAR
                                        </span>  ($1,000)
                                    </td>
                                    <td>
                                        7%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            4 STAR
                                        </span>  ($5,000)
                                    </td>
                                    <td>
                                        8%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            5 STAR
                                        </span>  ($10,000)
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            VIP 
                                        </span>
                                        {/* <br /> */}
                                        ($20,000)  
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span className="value">
                                            VVIP
                                        </span>  ($50,000)
                                    </td>
                                    <td>
                                        10%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        1.5%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                    <td>
                                        2%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

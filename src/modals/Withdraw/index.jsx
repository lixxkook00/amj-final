import React ,{useState,useEffect} from 'react'
import './Withdraw.scss';

import axios from 'axios'

import { Modal , Button} from 'react-bootstrap'
import swal from '@sweetalert/with-react'

import FormatAmount from '../../components/FormatAmount'

import {getAllWallet} from '../../utils/getAllWallet'

const network = [
    {
        symbol:"BSC",
        name:"BINANCE SMART CHAIN NETWORK"
    },
    {
        symbol:"TRON",
        name:"TRON NETWORK"
    }
]

export default function Withdraw({withdraw,setWithdraw}) {
    const [show, setShow] = useState(withdraw);

    const handleClose = () => setWithdraw(false);
    const handleShow = () => setWithdraw(true);

    return (
        <div className="deposite-modal">
            <Modal show={withdraw} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Withdraw
                        <div className="close" onClick={handleClose}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="deposite-modal-token">
                        <div className="select-custom">
                                <select
                                >
                                    <option value="USDT">USDT</option>
                                    <option value="AMJ">AMJ</option>
                                </select>
                                
                                <div className="select-custom-icon">
                                    <i className="fa-solid fa-angles-down"></i>
                                </div>
                            </div>
                    </div>
                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            {/* <input type="text" placeholder="Amount"/> */}
                            <div className="select-custom">
                                <select>
                                    <option value="">TRON</option>
                                </select>
                                <div className="select-custom-icon">
                                    <i className="fa-solid fa-angles-down"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="text" placeholder="Recipient's wallet address" onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                    </div> */}

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="number" placeholder="Amount"/>
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="text" placeholder="Wallet Address"/>
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="password" placeholder="Security Password"/>
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="text" placeholder="2FA code"/>
                        </div>
                    </div>

                    <div className="withdraw-modal-desc">
                        <div className="withdraw-modal-desc-left">
                            Fee: 1%
                        </div>
                        <div className="withdraw-modal-desc-right">
                            Available: <FormatAmount amount={1000}/> USDT
                        </div>
                    </div>

                    <div className="centering">
                        <div className="deposite-modal-button primary-btn">
                            SUBMIT
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
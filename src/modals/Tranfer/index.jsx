import React ,{useState, useEffect} from 'react'
import './Withdraw.scss';

import { Modal} from 'react-bootstrap'

import FormatAmount from '../../components/FormatAmount'

export default function Tranfer({tranfer,setTranfer}) {

    const handleClose = () => setTranfer(false);

    return (
        <div className="deposite-modal">
            <Modal show={tranfer} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Tranfer
                        <div className="close" onClick={handleClose}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <div className="select-custom">
                                <select
                                >
                                    <option value="">Wallet</option>
                                </select>
                                
                                <div className="select-custom-icon">
                                    <i className="fa-solid fa-angles-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="text" placeholder="User Name" />
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="number" placeholder="Amount" />
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="password" placeholder="Security Password" />
                        </div>
                    </div>

                    <div className="deposite-modal-value">
                        <div className="deposite-modal-amount d-flex">
                            <input type="text" placeholder="2FA code" />
                        </div>
                    </div>

                    <div className="withdraw-modal-desc">
                        {/* <div className="withdraw-modal-desc-left">
                            Fee: 1$
                        </div> */}
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
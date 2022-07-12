import React ,{useState,useEffect} from 'react'
import './Deposite.scss';

import axios from 'axios';

import { Modal} from 'react-bootstrap'
import swal from '@sweetalert/with-react'
import {useNavigate} from 'react-router-dom'

import {getDepositView} from '../../utils/deposit'

const network = [
    {
        symbol:"BSC",
        name:"BINANCE SMART CHAIN NETWORK",
        coin:"AMJ"
    },
    {
        symbol:"TRON",
        name:"TRON NETWORK",
        coin:"USDT"
    }
]

export default function Deposite({deposite,setDeposite,setDepositeQR}) {

    const handleClose = () => setDeposite(false);

    return (
        <div className="deposite-modal">
            <Modal show={deposite} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Deposit
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
                            <input 
                                type="number" 
                                placeholder="Amount"
                            />
                             <div className="select-custom">
                                <select>
                                    <option value="">TRON</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                    <div className="deposite-modal-desc">
                        Minimum deposit: 10$
                    </div>
                    <div className="deposite-modal-line">
                        . Send only <span className="red-text">USDT</span> to this deposit address.
                    </div>
                    <div className="deposite-modal-line">
                        . Ensure the network is 
                            <span className="red-text">TRON
                                
                            </span> 
                    </div>

                    <div className="centering">
                        <div className="deposite-modal-button primary-btn" >
                            SUBMIT
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

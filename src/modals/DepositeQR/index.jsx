import React ,{useState,useEffect} from 'react'
import './DepositeQR.scss';

import axios from 'axios' 

import { Modal , Button} from 'react-bootstrap'
import swal from '@sweetalert/with-react'

export default function DepositeQR({depositeQR,setDepositeQR}) {
    const handleClose = () => setDepositeQR(false);

    return (
        <div className="deposite-modal">
            <Modal show={depositeQR} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="close" onClick={handleClose}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="deposite-modal-line">
                        {/* <span className="red-text">{currentCoin}</span> will be deposited immediately after 1 network confirmation */}
                    </div>

                    <div className="depositeQR-img centering">
                        <img src={`https://chart.googleapis.com/chart?chs=150x150&chld=M%7C0&cht=qr&chl=`} />
                    </div>
                    <div className="deposite-modal-line">
                        Please send 
                            <span className="red-text">
                            </span> 
                        Blockchain network: 
                            <span className="red-text">
                            </span>  
                        to this address:
                    </div>

                    <div className="ref primary-btn-bg">
                      <div className="ref-title">
                        {/* Address: */}
                      </div>
                      <div className="ref-value">
                        {/* {address} */}
                      </div>
                      <div className="ref-btn" >
                        {/* <i className={iconCopy}></i> */}
                      </div>
                    </div>
                    
                    <div className="deposite-modal-desc">
                        Fund transfer processing... 
                        <img src="./images/loading.gif" alt="" />
                    </div>

                    <div className="centering">
                        <div className="depositeQR-cancel">
                            CANCEL
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

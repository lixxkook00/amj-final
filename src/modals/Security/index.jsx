import React ,{useState} from 'react'
import './Security.scss';

import { Modal , Button} from 'react-bootstrap'

export default function Security({security,setSecurity}) {
    const [show, setShow] = useState(security);

    const handleClose = () => setSecurity(false);
    const handleShow = () => setSecurity(true);

    return (
        <div className="deposite-modal">
            <Modal show={security} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security verification
                        <div className="close" onClick={handleClose}>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="security-modal-content">
                        <div className="security-modal-content-line">
                            <span className="strong">Amount:</span> Receive 1,000 USDT
                        </div>
                        <div className="security-modal-content-line">
                            <span className="strong">Address:</span> 0xd3491439251010EB0AA841..
                        </div>
                        <div className="security-modal-content-line">
                            <span className="strong">Network:</span> BNB Smart Chain (BEP20)
                        </div>
                    </div>

                    <div className="security-modal-item">
                        <div className="security-modal-item-title">
                            Email Verification Code
                        </div>
                        <div className="security-modal-item-input d-flex">
                            <input type="text" />
                            <div className="security-modal-item-input-button">
                                Get Code
                            </div>
                        </div>
                        <div className="security-modal-item-desc">
                            Enter the 6-digit code sent to thi***@gmail.com
                        </div>
                    </div>

                    <div className="security-modal-item">
                        <div className="security-modal-item-title">
                            Phone Number Verification Code
                        </div>
                        <div className="security-modal-item-input d-flex">
                            <input type="text" />
                            <div className="security-modal-item-input-button">
                                Get Code
                            </div>
                        </div>
                        <div className="security-modal-item-desc">
                            Enter the 6-digit code sent to 079***1112
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
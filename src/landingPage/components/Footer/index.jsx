import React,{useEffect} from 'react'
import './Footer.scss'

export default function Footer() {

    return (
        <div className="footer">
            {/* container */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 centering">
                        {/* <div className="footer-text">
                            Coming Soon 
                        </div> */}
                    </div>
                </div>
            </div>

            {/* infor */}
            <div className="footer-infor">
                <div className="footer-infor-social">
                    <div className="footer-infor-social-icon centering">
                        <a href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon footer-infor-social-icon-second centering">
                        <a href="">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon centering">
                        <a href="">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon centering">
                        <a href="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-infor-text">
                    © 2022 AMJ
                </div>
            </div>
        </div>
    )
}

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
                        <a href="https://twitter.com/AMJ_glAMJl">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon footer-infor-social-icon-second centering">
                        <a href="https://t.me/AMJofficial">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon centering">
                        <a href="https://t.me/AMJchannel">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                    </div>

                    <div className="footer-infor-social-icon centering">
                        <a href="https://www.youtube.com/channel/UCNttJe0mMSCK_d5I17Gl5ug">
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

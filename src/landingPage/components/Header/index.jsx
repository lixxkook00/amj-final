import React from 'react'

import './Header.scss'

import {Link} from 'react-router-dom'

import Logo from '../../images/logo.png'

export default function Header() {

    return (
    <div className="header centering hidden-m-t">
        <div className="container">
            <div className="row header-wrapper">
                <div className="col-xl-2 col-lg-2 col-md-2">
                    <a href="/" className="header-logo">
                        <img className="img-width " src={Logo} alt="" />
                    </a>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="header-nav">
                        <div className="header-nav-item active">
                            Home
                        </div>
                        {/* <a href={WPP} className="header-nav-item" target='_blank' rel='noopener noreferrer'>
                            Whitepaper
                        </a> */}
                        <div className="header-nav-item">
                            Whitepaper
                        </div>
                        <div className="header-nav-item">
                            Shop
                        </div>
                        <Link to="staking" href="" className="header-nav-item">
                            Staking
                        </Link>
                        <a href="" className="header-nav-item">
                            Explore
                        </a>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2">

                    <a href="/signin" className="header-wallet gradient-box">
                        Sign In
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

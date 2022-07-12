import React , {useState , useEffect} from 'react'
import './Header.scss'

import axios from 'axios';

import {Link , useLocation} from 'react-router-dom'

export default function Header() {

    const [currentActive,setCurrentActive] = useState("signin")

    const [signInStatus,setSignInStatus] = useState(false)

    const [userAvt, setUserAvt] = useState()

    const location = useLocation();

    useEffect(() => {
        setCurrentActive(location.pathname.substring(1) !== "" ? location.pathname.substring(1) : "signin")
    },[location.pathname])

    return (
    <div className="header-home hidden-m-t">
        <div className="container">
            <div className="header-home-wrapper">
                <Link to="/" className="header-home-logo">
                    <img src="./images/logo.png" alt="" />
                </Link>
                <div className="header-home-nav">
                    <Link to="/dashboard" onClick={() => setCurrentActive("dashboard")} className={`header-home-nav-item ${currentActive==="dashboard" ? "active" : ""}`}>
                        Dashboard
                    </Link>

                    <Link to="/ico" onClick={() => setCurrentActive("ico")} className={`header-home-nav-item ${currentActive==="ico" ? "active" : ""}`}>
                        ICO
                    </Link>

                    <Link to="myteam" onClick={() => setCurrentActive("myteam")} className={`header-home-nav-item ${currentActive==="myteam" ? "active" : ""}`}>
                        My Team
                    </Link>

                    <Link to="/staking" onClick={() => setCurrentActive("staking")} className={`header-home-nav-item ${currentActive==="staking" ? "active" : ""}`}>
                        Staking
                    </Link>

                    <Link to="shop" onClick={() => setCurrentActive("shop")} className={`header-home-nav-item ${currentActive==="shop" ? "active" : ""}`}>
                        Shop
                    </Link>

                    <Link to="explore" onClick={() => setCurrentActive("explore")} className={`header-home-nav-item ${currentActive==="explore" ? "active" : ""}`}>
                        Explore
                    </Link>

                    <Link to="tournaments" onClick={() => setCurrentActive("tournaments")} className={`header-home-nav-item ${currentActive==="tournaments" ? "active" : ""}`}>
                        Tournaments
                    </Link>

                    {
                        !signInStatus
                        ?
                        <Link to="/signin" onClick={() => setCurrentActive("signin")} className={`header-home-nav-item ${currentActive==="signin" ? "active" : ""}`}>
                            Sign In
                        </Link>
                        :
                        <Link to="/user" onClick={() => setCurrentActive("user")} className={`header-home-nav-item ${currentActive==="user" ? "active" : ""}`}>
                            <img src={`./images/${userAvt}`} alt="" />
                        </Link>
                    }
                    
                </div>
            </div>
        </div>
    </div>
    )
}

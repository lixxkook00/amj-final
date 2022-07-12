import React , { useState , useEffect } from 'react'
import './UserInfor.scss'

import Acount from '../../components/Acount'
import SecurityPassword from '../../components/SecurityPassword'
import ChangePassword from '../../components/ChangePassword'
import Setting2FA from '../../components/Setting2FA'
import ResetSecurityPassword from '../../components/ResetSecurityPassword'

import {useNavigate} from 'react-router-dom'

import {checkStatusSecuirtyPass} from '../../utils/setSecurityPass'


export default function UserInfor() {

    const [userStatus,setUserStatus] = useState("Acount")

    const [securityPasswordStatus,setSecurityPasswordStatus] = useState(false)

    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.setItem("token", "");
        sessionStorage.setItem("wallet", "");
        sessionStorage.setItem("userId", "");

        // Redirect    
        navigate("/signin");
    }

    const handleCheckStatusSecu = async () => {
        const result = await checkStatusSecuirtyPass()

        await setSecurityPasswordStatus(result.data.status)
    }

    useEffect(() => {
        handleCheckStatusSecu()
    },[])

    return (
        <div className="userinfor">
            {/* control */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                        <div onClick={() => setUserStatus("Acount")} className={`userinfor-item ${userStatus==="Acount" ? "active" : ""}`}>
                            <i className="fa-solid fa-user"></i> Account
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div onClick={() => setUserStatus("SecurityPassword")} className={`userinfor-item ${userStatus==="SecurityPassword" ? "active" : ""}`}>
                            <i className="fa-solid fa-house-lock"></i>
                            {
                                securityPasswordStatus
                                ?
                                    "Change security password"
                                :
                                    "Setup security password"
                            }
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                        <div onClick={() => setUserStatus("ChangePassword")} className={`userinfor-item ${userStatus==="ChangePassword" ? "active" : ""}`}>
                            <i className="fa-solid fa-lock"></i>
                            Change Password
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                        <div onClick={() => setUserStatus("Setting2FA")} className={`userinfor-item ${userStatus==="Setting2FA" ? "active" : ""}`}>
                            <i className="fa-solid fa-shield-halved"></i>
                            2FA Setting
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6 col-12">
                        <a href="/signin" onClick={() => handleLogout()} className="userinfor-item userinfor-item--logout">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Log Out
                        </a>
                    </div>
                </div>
            </div>

            {/* content */}

            {
                userStatus === "Acount"
                &&
                <Acount />
            }

            {
                userStatus === "SecurityPassword"
                &&
                <SecurityPassword setUserStatus={setUserStatus}/>
            }

            {
                userStatus === "ChangePassword"
                &&
                <ChangePassword />
            }

            {
                userStatus === "Setting2FA"
                &&
                <Setting2FA />
            }

            {
                userStatus === "ResetSecurityPassword"
                &&
                <ResetSecurityPassword />
            }
        </div>
    )
}

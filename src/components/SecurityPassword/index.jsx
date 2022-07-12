import React , { useState,useEffect } from 'react'

import {
    handleSetSecuirtyPass,
    checkStatusSecuirtyPass,
    handleChangeSecuirtyPass
} 
from '../../utils/setSecurityPass'

import {useNavigate} from 'react-router-dom'

import swal from '@sweetalert/with-react'

export default function SecurityPassword({setUserStatus}) {

    const [status,setStatus] = useState(false)

    let navigate = useNavigate();

    const getStatus = async () => {
        const status = await checkStatusSecuirtyPass()
        await setStatus(status.data.status)
    }

    useEffect(() => {
        getStatus()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(status){
            const result = await handleChangeSecuirtyPass(e)
            if(result.data.status){
                await swal(`${result.data.message}`, '', 'success', 1000, false);
                setTimeout(() => {
                    navigate("/dashboard");
                },1200)
            }else{
                await swal(`${result.data.message}`, '', 'error', 1000, false);
            }
        }else{
            const result = await handleSetSecuirtyPass(e)
            if(result.data.status){
                await swal(`${result.data.message}`, '', 'success', 1000, false);
                setTimeout(() => {
                    navigate("/dashboard");
                },1200)
            }else{
                await swal(`${result.data.message}`, '', 'error', 1000, false);
            }
        }
    }

    return (
    <div className="security-password">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="userinfor-title">
                        Security Password
                    </div>
                </div>
                
                <div className="col-xl-12 centering">
                    <form className="form user-form" id="signUpForm" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <div className="user-form-item d-flex">
                                <div className="user-form-item-title">
                                    Your password:
                                </div>
                                <input 
                                    placeholder="Your password" 
                                    type="password" 
                                    id="yourPassword" 
                                    className="form-control" 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="user-form-item d-flex">
                                <div className="user-form-item-title">
                                    Security password:
                                </div>
                                <input 
                                    placeholder="Security password" 
                                    type="password" 
                                    id="securityPassword" 
                                    className="form-control" 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="user-form-item d-flex">
                                <div className="user-form-item-title">
                                    Security password confirm:
                                </div>
                                <input 
                                    placeholder="Security password confirm" 
                                    type="password" 
                                    id="reSecurityPassword" 
                                    className="form-control" 
                                />
                            </div>
                        </div>

                        <div className="form-group-inline form-group">
                            <div className="link">
                                <span className="red-text">
                                    
                                </span>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">
                                <div className="text">SUBMIT</div>
                            </button>
                        </div>
                    </form>

                </div>
                
                <div className="security-password-reset centering">
                     <div className="user-form-item-title" onClick={() => setUserStatus("ResetSecurityPassword")}>
                        Forgot your security password?
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

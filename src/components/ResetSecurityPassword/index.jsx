import React from 'react'

import swal from '@sweetalert/with-react'

import {handleResetSecurityPassword} from '../../utils/resetSecurityPass'

import {useNavigate} from 'react-router-dom'

export default function ResetSecurityPassword() {

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        const result = await handleResetSecurityPassword(e)

        if(result.data.status){
            await swal(`${result.data.message}`, '', 'success', 1000, false);
            setTimeout(() => {
                navigate("/dashboard")
            },1200)
        }else{
            await swal(`${result.data.message}`, '', 'error', 1000, false);
        }
    }

    return (
        <div className="change-password">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="userinfor-title">
                            Reset Security Password
                        </div>
                    </div>
                    
                    <div className="col-xl-12 centering">
                        <form className="form user-form" id="signUpForm" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        New Security Password
                                    </div>
                                    <input 
                                        placeholder="New Security Password" 
                                        type="password" 
                                        id="newSecurity" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        New Security Password Confirm
                                    </div>
                                    <input 
                                        placeholder="New Security Password Confirm" 
                                        type="password" 
                                        id="reNewSecurity" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        2FA
                                    </div>
                                    <input 
                                        placeholder="2FA Code" 
                                        type="text" 
                                        id="code" 
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
                </div>
            </div>
        </div>
    )
}

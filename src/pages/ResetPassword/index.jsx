import React , {useState} from 'react'
import './SignIn.scss'

import {useSearchParams} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

import swal from '@sweetalert/with-react'

import {resetPassword} from '../../utils/resetPassword'

export default function ResetPassword() {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');

        let navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault()

        const result = await resetPassword(e,token)

        // console.log("handleResetPassword",result)

        if(result.data.status==200){ 
            swal(result.data.message, '', 'success', 1000, false);
            setTimeout(() => {
                navigate("/signin");
            },1300)
        }else{ 
            swal(result.data.message, '', 'error', 1000, false);
        }
    }

    return (
        <div className="sign-up">
             
            <div className="container centering">
                <div className="body col-lg-5 col-md-6 offset-lg-7 offset-md-3">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sign-up-title">
                                Reset Password
                            </div>
                        </div>
                        <div className="form-group-container col-xl-12">
                            <form className="form" id="signUpForm" onSubmit={(e) => handleResetPassword(e)}>
                                <div className="form-group">
                                    <div>
                                        <input 
                                            placeholder="New password" 
                                            type="password" 
                                            id="newPass" 
                                            className="form-control" 
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <input 
                                            placeholder="Confirm new password" 
                                            type="password" 
                                            id="reNewPass" 
                                            className="form-control" 
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <input 
                                            placeholder="Code" 
                                            type="code" 
                                            id="code" 
                                            className="form-control" 
                                        />
                                    </div>
                                </div>
                                <div className="form-group-inline form-group">
                                    <div className="link">
                                        <span className="red-text">
                                            {/* {error} */}
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
        </div>
    )
}

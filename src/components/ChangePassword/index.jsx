import React from 'react'

import swal from '@sweetalert/with-react'

import {handleChangePassword} from '../../utils/changePassword'

export default function ChangePassword() {

    const handleSubmit = async (e) => {
        const result = await handleChangePassword(e)
        // await console.log(result)

        if(result.data.status){
            await swal(`${result.data.message}`, '', 'success', 1000, false);
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
                            Change Password
                        </div>
                    </div>
                    
                    <div className="col-xl-12 centering">
                        <form className="form user-form" id="signUpForm" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Old password:
                                    </div>
                                    <input 
                                        placeholder="Old password" 
                                        type="password" 
                                        id="oldPassword" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        New password:
                                    </div>
                                    <input 
                                        placeholder="New password" 
                                        type="password" 
                                        id="newPassword" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Password confirm:
                                    </div>
                                    <input 
                                        placeholder="Password confirm" 
                                        type="password" 
                                        id="confirmPassword" 
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

import React , {useState} from 'react'
import './SignIn.scss'

import {Link , useNavigate} from 'react-router-dom'

import {handleSignUp} from '../../utils/signUp.js'

export default function SignIn() {
    const [typePass,setTypePass] = useState("password")

    const toggleTypePass = () => {
        if(typePass==="password"){
            setTypePass("text")
        }else if(typePass==="text"){
            setTypePass("password")
        }
    }

    let navigate = useNavigate();

  return (
    <div className="sign-up">
        <div className="container centering">
            <div className="body col-lg-5 col-md-6 offset-lg-7 offset-md-3">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sign-up-title">
                            Sign In
                        </div>
                    </div>
                    <div className="form-group-container col-xl-12">
                        <form className="form" id="signUpForm">
                            <div className="form-group">
                                <div>
                                    <input 
                                        placeholder="Username" 
                                        type="text" 
                                        id="username" 
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="password-block">
                                    <input 
                                        name="password" 
                                        placeholder="Password" 
                                        type={typePass}
                                        id="password" 
                                        className="form-control" 
                                    />
                                    <div className="password-block-icon" onClick={() => toggleTypePass()}>
                                        <i className="fa-solid fa-eye"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group-inline form-group">
                                <Link className="link" to="/forgotpassword">
                                    Forgot Password?
                                </Link>
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
                                    <div className="text">PROCEED</div>
                                </button>
                            </div>
                            <div className="tac form-group">
                                No Account?&nbsp;
                                <Link className="link" to="/signup">
                                    Sign up here &gt;
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

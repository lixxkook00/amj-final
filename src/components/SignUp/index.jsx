import React , {useState} from 'react'

import swal from '@sweetalert/with-react'

import './SignUp.scss'

import axios from 'axios'

import LoadingScreen from '../../pages/LoadingScreen'
// import {handleSignUp} from '../../utils/signUp'

import {Link,useLocation} from 'react-router-dom'

export default function SignUp() {

    const search = useLocation().search;
    const ref = new URLSearchParams(search).get('ref');

    const [loading,setLoading] = useState(false)

    // console.log("ref",ref)

    const [error,setError] = useState("")

  return (
    <div className="sign-up">
        <div className="container centering">
            <div className="body col-lg-5 col-md-6 offset-lg-7 offset-md-3">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sign-up-title">
                            Sign Up
                        </div>
                    </div>
                    <div className="form-group-container col-xl-12">
                        <form className="form" id="signUpForm">
                            <div className="form-group">
                                <div>
                                    <input placeholder="Username" type="text" id="username" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input placeholder="Name" type="text" id="name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input placeholder="Email" type="text" id="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input name="password" placeholder="Password" type="password" id="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input name="passwordAgain" placeholder="Password (Again)" type="password" id="passwordAgain" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div>
                                    <input name="reflink" value={ref} placeholder="Sponsor Username" type="reflink" id="reflink" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group-inline form-group">
                                <div className="link">
                                    <span className="purple-text">
                                        Note: Please enter a sponsor username. If you do not have a sponsor, please skip this.
                                    </span>
                                </div>
                            </div>
                            
                            <div className="form-group-inline form-group">
                                <div className="link">
                                    <span className="red-text">
                                        {error}
                                    </span>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    <div className="text">PROCEED</div>
                                </button>
                            </div>
                            <div className="tac form-group">
                                Already Registered?&nbsp;
                                <Link className="link" to="/signIn">
                                    Sign in here &gt;
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <LoadingScreen state={loading}/>                    
    </div>
  )
}

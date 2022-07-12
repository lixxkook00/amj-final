import React ,{useState , useEffect} from 'react'

import axios from 'axios';

import swal from '@sweetalert/with-react'

import {handleUpdateInforUser} from '../../utils/updateInforUser'

export default function Acount() {
    // GET INFOR 
    const [userData,setUserData] = useState()

    const getInforUser = async (tokenSession) => {
        const body = new FormData();
        body.append("token", tokenSession)
        const res = await axios.post('/api/user/info',body);

        if(res && res.data && res.data.status) { 
            if(res.data.status === 200) {
                setUserData(res.data.result)
            }
            else { 
                // console.log(res.data.message);
            }
        }
        else { 
            alert("Error while connect to server !");
        }
    }

    useEffect(() => {
        var tokenSession = sessionStorage.getItem("token");

        getInforUser(tokenSession)

    },[sessionStorage.getItem("token")])


    // UPDATE INFOR

    const handleUpdate = async (e) => {
        const result = await handleUpdateInforUser(e)
        // await console.log(result)

        await swal(`${result.data.message}`, '', 'success', 1000, false);
    }

    return (
        <div className="acount">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="userinfor-title">
                            Acount
                        </div>
                    </div>
                    <div className="col-xl-12 centering">
                        <form className="form user-form" id="signUpForm" onSubmit={(e) => handleUpdate(e)}>
                            {/* <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Reflink:
                                    </div>
                                    <input 
                                        placeholder="Ref Link" 
                                        type="text" 
                                        id="reflink" 
                                        className="form-control"
                                        defaultValue={userData?.username} 
                                    />
                                </div>
                            </div> */}

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        First Name:
                                    </div>
                                    <input 
                                        placeholder="First Name" 
                                        type="text" 
                                        id="firstname" 
                                        className="form-control"
                                        defaultValue={userData?.first_name}  
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Last Name:
                                    </div>
                                    <input 
                                        placeholder="Last Name" 
                                        type="text" 
                                        id="lastname" 
                                        className="form-control"
                                        defaultValue={userData?.last_name}   
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Phone:
                                    </div>
                                    <input 
                                        placeholder="Phone" 
                                        type="text" 
                                        id="phone" 
                                        className="form-control" 
                                        defaultValue={userData?.phone}   
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="user-form-item d-flex">
                                    <div className="user-form-item-title">
                                        Email:
                                    </div>
                                    <input 
                                        placeholder="Email" 
                                        type="text" 
                                        id="email" 
                                        className="form-control"
                                        defaultValue={userData?.email}
                                        value={userData?.email}    
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

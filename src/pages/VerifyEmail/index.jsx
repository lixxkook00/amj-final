import React , {useState,useEffect} from 'react'

import './VerifyEmail.scss'

import axios from 'axios'

// import swal from '@sweetalert/with-react'

import {Link,useSearchParams} from 'react-router-dom'

export default function VerifyEmail() {
  
  // get token from url
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [statusString,setStatusString] = useState("")

  // get status verify
  const getStatusEmail = async (token) => {
    const body = new FormData();
    body.append("token", token)

    const res = await axios.post('/api/user/verify/email',body);
    setStatusString(res.data.message)
  }

  useEffect(() => {
    getStatusEmail(token)
  },[])

  return (
    <div className="notfound">
        <div className="notfound-img centering">
            <img src="./images/icon-intro.png" alt="" />
        </div>
        <div className="notfound-title">
            {statusString}
        </div>
        <Link to="/signin" className="notfound-back">
            Back to Sign in
        </Link>
    </div>
  )
}

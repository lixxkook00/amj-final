import React from 'react'

import './NotFound404.scss'

import {Link} from 'react-router-dom'

export default function NotFound404() {
  return (
    <div className="notfound">
        <div className="notfound-img centering">
            <img src="./images/icon-intro.png" alt="" />
        </div>
        <div className="notfound-title">
            404
        </div>
        <Link to="/dashboard" className="notfound-back">
            BACK TO HOME
        </Link>
    </div>
  )
}

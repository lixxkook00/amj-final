import React from 'react'
import './LoadingScreen.scss'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
        <div className="loading-screen-wrap">
            <img src="./images/logo.png" alt="" className="img-height logo" />          
            <img src="./images/loading.gif" className="img-height loading" alt="" />
        </div>
    </div>
  )
}

import React from 'react'
import './LoadingScreen.scss'

export default function LoadingScreen({state}) {
  return (
    <>
        {
            state
            &&
            <div className="loading">
                <img src="./images/loading.gif" alt="" />
            </div>
        }
    </>
  )
}

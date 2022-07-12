import React from 'react'
import './ComingSoon.scss'

export default function ComingSoon({status}) {
  return (
    <>
        {
            status
            &&
            <div>ComingSoon</div>
        }
    </>
    
  )
}

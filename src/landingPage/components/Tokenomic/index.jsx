import React , {useState} from 'react'
import './Tokenomic.scss'

import coinImg from '../../images/coin.png'


export default function Tokenomic() {

    const [iconCopy,setIconCopy] = useState("fa-solid fa-copy")

    const handleCopy = (url) => {
        navigator?.clipboard?.writeText(url)

        setIconCopy("fa-solid fa-circle-check icon-active")
        setTimeout(() => {
            setIconCopy("fa-solid fa-copy")
        },3000)
    }

  return (
    <div className="tokenomic">
        <div className="container">
            <div className="row col-xl-12">
                <div className="tokenomic-title centering">
                    <div className="primary-title primary-gradient-text">
                        Tokenomic
                        <div className="primary-title__line"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-xl-6 col-12">
                    <div className="tokenomic-content">
                        <div className="tokenomic-content-name">
                            ​<img className="img-width" src="./images/logo.png" alt="" />
                        </div>

                        <div className="tokenomic-content-code primary-gradient-text">
                            ​​AMJ
                        </div>

                        <div className="tokenomic-content-supply">
                            Total Supply​​ : 81,000,000
                        </div>

                        <div className="tokenomic-content-network">
                            Contract-Network (​BEP-20)
                        </div>

                        <div className="tokenomic-content-price">
                            Initial Price : $0.08
                        </div>

                        <div className="tokenomic-content-contract">
                            <div className="ref primary-btn-bg">
                                <div className="ref-title">
                                    Contract:
                                </div>
                                <div className="ref-value text-overflow">
                                    0x8B8617f9BE6b9946e9a6fFd65Ba6f6906B62a423
                                </div>
                                <div className="ref-btn" onClick={() => handleCopy("0x8B8617f9BE6b9946e9a6fFd65Ba6f6906B62a423")}>
                                    <i className={iconCopy}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <img src={coinImg} alt="" className="img-width tokenomic-logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

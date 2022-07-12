import React from 'react'
import './Partners.scss'

import imgCOINGECKO from '../../images/COINGECKO.png'
import imgPOOCOIN from '../../images/POOCOIN.png'
import imgDEXTOOLS from '../../images/DEXTOOLS.png'
import imgBSCSCAN from '../../images/BSCSCAN.png'
import imgPINKSALE from '../../images/PINKSALE.png'
import imgPANCAKE from '../../images/PANCAKE.png'
import imgBINANCE from '../../images/BINANCE.png'
import imgCOINMARKET from '../../images/COINMARKET.png'
import imgUNI from '../../images/uniswap.png'

export default function Partners() {
  return (
    <div className="partner">
        <div className="container">
            <div className="row">
                {/* TITLE */}
                <div className="col-xl-5 centering">
                    <div className="title">
                        <div className="primary-title primary-gradient-text">
                            Partners
                            <span> & </span>
                            Investors
                        </div>
                    </div>
                </div>

                {/* LOGO LIST */}
                <div className="col-xl-7">
                    <div className="row">
                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgCOINGECKO} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgPOOCOIN} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgDEXTOOLS} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgBSCSCAN} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgPINKSALE} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgPANCAKE} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgBINANCE} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgCOINMARKET} alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src={imgUNI} alt="" className="img-width" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
